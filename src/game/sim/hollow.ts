// Hollow I — same fighter kit as the practice ring, open diamond rooms.
// Hosts are real fighters (launch / juggle / plunge). py stays 0.5.
import { TAU, TICK, rad, deg, wrap, snap8, angDiff, clamp, lerp, rnd } from '../engine/math';
import { META, MOVE, STYLE, setP1, animFps, CHAIN_NEXT } from '../engine/moves';
import { createFx, EL } from '../engine/fx';
import { snd } from '../engine/audio';
import { tileXY, w2uv } from './iso';
import {
  SPAWN, REST, CHEST_BONE, CHEST_EMBER, HOST_SPAWNS, isFloor, roomAt, brazierCells,
} from './map';

export const P_HP = 1200;
export const HOST_HP = 520;
export const BOSS_HP = 1600;

export const G_PLAYER = 1500, JUMP_VZ = 410, SPEED = 112, AIR_SPEED = 96, AIR_MAX = 3, BUF_TICKS = 18;
export const E_GRAV = 900, E_JUGGLE_SCALE = 0.12, E_BOUNCE_G = 1100;

const HOST_ATK = { hit_frames: [2], cancel_from: 4, name: 'Cut' };

export interface HollowDeps {
  IMG: Record<string, any>;
  opt: { fx: boolean; [k: string]: any };
  UI: { open: string | null; p1: string; s1: string };
  project: (x: number, y: number, z: number) => [number, number];
}

const mkEnt = () => ({
  x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, face: 0, anim: 'idle', t: 0, state: 'idle', frame: null as any,
});

export function setAnim(e: any, a: string) { if (e.anim !== a) { e.anim = a; e.t = 0; } }
export function frameIdx(e: any): number { return Math.min(5, Math.floor(e.t * animFps(e.anim))); }

export function createHollow(deps: HollowDeps) {
  const { IMG, opt, UI } = deps;
  const fx = createFx(opt, IMG);
  const { parts, rings, nums, flashes, spark, dust, flare, ring, flash, num, updateFx, vfxTint, stripFx } = fx;
  let tick = 0, hitstop = 0;
  const input = { keys: new Set<string>(), buf: [] as Array<{ a: string; t: number }>, touchMove: { x: 0, y: 0 } };
  const { keys, buf } = input;
  const P: any = Object.assign(mkEnt(), {
    state: 'ground', airCount: 0, plunged: false, hitDone: new Set(), slot: null, move: null, cur: null,
    hp: P_HP, hpShown: P_HP, hpMax: P_HP, inv: 0,
  });
  let H: any[] = [];
  const combo = { hits: 0, dmg: 0, air: 0, max: 0, active: false, endT: 0, show: 0, lastName: '', chain: [] as string[] };
  const cam: any = {
    pv: '', py: .5, pt: .5, pk: 0, pkt: 0, ch: 0, fz: 0, ang: 0, target: 0, zoom: 1, zv: 0,
    fx: 0, fy: 0, fk: 0, shake: 0, shx: 0, shy: 0, c: 1, s: 0, frx: 0, fry: 0, Z: 1, latch: null as any,
  };
  const embers: any[] = [];
  const texts: any[] = [];
  let CHESTS: any[] = [];
  const BRZ = brazierCells().map((c, i) => {
    const [x, y] = tileXY(c.u, c.v);
    return { x, y, ph: i * 1.7 };
  });
  const RESTW = (() => { const [x, y] = tileXY(REST.u, REST.v); return { x, y }; })();
  let dead = false, won = false, zone = '', zt = 0, pa = 'ren_calder';
  let ash = 0;
  const dir: any = { latch: null, pause: 0, tw: null };

  function spawnWorld() {
    const [px, py] = tileXY(SPAWN.u, SPAWN.v);
    Object.assign(P, mkEnt(), {
      x: px, y: py, face: 0, state: 'ground', airCount: 0, plunged: false, slot: null, move: null,
      hp: P_HP, hpShown: P_HP, hpMax: P_HP, inv: 0,
    });
    P.hitDone = new Set();
    H = HOST_SPAWNS.map((s) => {
      const [x, y] = tileXY(s.u, s.v);
      const boss = !!s.boss;
      return Object.assign(mkEnt(), {
        x, y, face: 180, hp: boss ? BOSS_HP : HOST_HP, hpShown: boss ? BOSS_HP : HOST_HP,
        hpMax: boss ? BOSS_HP : HOST_HP, juggle: 0, stunT: 0, spiked: false, launchT: 0, kd: null, shk: 0,
        n: s.name, boss, skin: boss ? 'the_carapace' : 'cinder',
        st: boss ? 'wait' : 'sleep', tm: 0, cd: 40, dead: false, deadT: 0,
      });
    });
    const [ax, ay] = tileXY(CHEST_BONE.u, CHEST_BONE.v);
    const [bx, by] = tileXY(CHEST_EMBER.u, CHEST_EMBER.v);
    CHESTS = [
      { x: ax, y: ay, s: 'a bone fragment', ash: 3, o: 0, hid: 0, fin: 0 },
      { x: bx, y: by, s: 'the Ember Shard', ash: 5, o: 0, hid: 1, fin: 1 },
    ];
    texts.length = 0; dead = false; won = false; zone = ''; zt = 0; ash = 0; tick = 0; hitstop = 0;
    parts.length = rings.length = nums.length = flashes.length = 0; buf.length = 0;
    combo.hits = combo.dmg = combo.air = 0; combo.active = false; combo.chain = [];
    cam.fx = P.x; cam.fy = P.y; cam.ang = cam.target = 0; cam.py = .5; cam.pt = .5; dir.latch = null;
    pa = UI.p1 || 'ren_calder'; setP1(pa);
    embers.length = 0;
    for (let i = 0; i < 40; i++) {
      const [x, y] = tileXY(SPAWN.u + rnd(-2, 8), SPAWN.v + rnd(-2, 8));
      embers.push({ x, y, z: rnd(0, 150), s: rnd(6, 16), ph: rnd(TAU) });
    }
    say(P.x, P.y, 'The Ash Hall waits.', 2.2);
  }

  function reset() { spawnWorld(); }
  function say(x: number, y: number, s: string, d = 1.6) { texts.push({ x, y, s, t: d, m: d }); snd(110, .07); }

  const dirVec = (a: number) => ({ x: Math.cos(rad(a)), y: Math.sin(rad(a)) });
  function faceToward(e: any, o: any) { e.face = snap8(deg(Math.atan2(o.y - e.y, o.x - e.x))); }
  function nearestHost(max = 220) {
    let b: any = null, bd = max;
    for (const h of H) {
      if (h.dead) continue;
      const d = Math.hypot(h.x - P.x, h.y - P.y);
      if (d < bd) { bd = d; b = h; }
    }
    return b;
  }
  function floorOk(x: number, y: number, r = 10) {
    const pts: Array<[number, number]> = [[x, y], [x + r, y], [x - r, y], [x, y + r], [x, y - r]];
    return pts.every(([a, b]) => { const [u, v] = w2uv(a, b); return isFloor(u, v); });
  }
  function tryMove(e: any, dx: number, dy: number, r = 10) {
    const nx = e.x + dx, ny = e.y + dy;
    if (floorOk(nx, ny, r)) { e.x = nx; e.y = ny; return; }
    if (floorOk(nx, e.y, r)) { e.x = nx; return; }
    if (floorOk(e.x, ny, r)) { e.y = ny; }
  }

  function shakeCam(a: number) { cam.shake = Math.min(1, Math.max(cam.shake, a)); }
  function hittable(E: any) {
    if (E.dead) return false;
    if (E.state === 'getup' || (E.state === 'down' && !(E.kd && E.kd.phase === 'bounce'))) return false;
    if (E.state === 'down' && E.kd && E.kd.phase === 'bounce' && E.z < 8) return false;
    return true;
  }
  function vertOK(E: any, az: number, reachUp = 46, reachDown = 46) { const dz = E.z - az; return dz < reachUp + 6 && dz > -reachDown; }
  function inCone(att: any, E: any, reach: number, arc: number) {
    const dx = E.x - att.x, dy = E.y - att.y, d = Math.hypot(dx, dy);
    if (d > reach + 12) return false;
    if (d < 20) return true;
    return angDiff(deg(Math.atan2(dy, dx)), att.face) <= arc;
  }
  function comboName(n: string) { combo.lastName = n; if (combo.chain[combo.chain.length - 1] !== n) combo.chain.push(n); if (combo.chain.length > 6) combo.chain.shift(); }

  function hurt(E: any, slot: string, idx: number, att: any) {
    const mv = MOVE[slot] || STYLE.slash;
    const meta = META[slot] || HOST_ATK;
    const wasAir = E.z > 6 || E.state === 'air' || (E.state === 'down' && E.kd && E.kd.phase === 'bounce');
    const dv = dirVec(att.face);
    if (E.state === 'guard' || E.state === 'block') {
      if (mv.kind === 'light' || mv.kind === 'air') {
        const chip = Math.round(mv.dmg[Math.min(idx, mv.dmg.length - 1)] * .12);
        E.hp = Math.max(1, E.hp - chip);
        E.state = 'block'; E.t = 0; E.stunT = .3; E.vx = dv.x * (mv.kb || 60) * .45; E.vy = dv.y * (mv.kb || 60) * .45;
        E.anim = 'block_hit'; E.frame = null; faceToward(E, att);
        num(E.x, E.y, E.z + 48, 'Blocked', '#9fc4ff');
        hitstop = Math.max(hitstop, 3); shakeCam(.08); combo.endT = tick; return;
      }
      num(E.x, E.y, E.z + 60, 'Guard broken', '#ffcf8a'); E.state = 'idle';
    }
    if (E.st === 'sleep' || E.st === 'wait') E.st = 'fight';
    if (!combo.active) { combo.hits = 0; combo.dmg = 0; combo.air = 0; combo.chain = []; }
    combo.active = true; combo.hits++;
    const scale = Math.max(.35, 1 - .07 * (combo.hits - 1));
    const dmg = Math.round(mv.dmg[Math.min(idx, mv.dmg.length - 1)] * scale);
    combo.dmg += dmg;
    E.hp = Math.max(0, E.hp - dmg);
    combo.endT = tick;
    comboName((meta as any).name || slot);
    const hx = lerp(att.x, E.x, .7), hy = lerp(att.y, E.y, .7), hz = E.z + 26;
    num(E.x + rnd(-9, 9), E.y, E.z + 48, String(dmg), idx ? '#ffd9a8' : '#fff');
    const hsArr = (a: any) => Array.isArray(a) ? a[Math.min(idx, a.length - 1)] : a;
    const hs = hsArr(mv.hs) || 4, sh = hsArr(mv.shake) || .15;
    const kind = mv.kind;
    if (E.state === 'down' && E.kd && E.kd.phase === 'bounce') { E.state = 'air'; E.kd = null; E.spiked = false; }
    if (kind === 'light' && !wasAir) {
      const behind = angDiff(att.face, E.face) < 70;
      E.state = 'stun'; E.anim = behind ? 'hit_back' : (mv.kb >= 100 ? 'hit_heavy' : 'hit');
      E.t = 0; E.stunT = mv.stun; E.vx = dv.x * mv.kb; E.vy = dv.y * mv.kb;
      if (!behind) faceToward(E, att); E.shk = hs;
    } else if (kind === 'heavy') {
      E.state = 'air'; E.vz = (mv.vz as number) || 150; E.vx = dv.x * mv.kb; E.vy = dv.y * mv.kb;
      E.launchT = 0; E.juggle = 0; E.spiked = false; faceToward(E, att); E.shk = hs;
      if (E.z < 1) E.z = 1;
    } else if (kind === 'launch') {
      if (!wasAir) faceToward(E, att);
      E.state = 'air'; E.vz = Math.max(E.vz, hsArr(mv.vz) || 330); E.vx += dv.x * mv.kb; E.vy += dv.y * mv.kb;
      E.launchT = 0; E.spiked = false; E.shk = hs; if (E.z < 1) E.z = 1; if (!wasAir) E.juggle = 0;
    } else if (kind === 'air' || (kind === 'light' && wasAir)) {
      const pop = mv.pop || 130;
      if (!wasAir) { faceToward(E, att); E.z = Math.max(E.z, 1); }
      E.state = 'air'; E.vz = Math.max(E.vz, pop - E.juggle * 14); E.vx += dv.x * (mv.kb || 40); E.vy += dv.y * (mv.kb || 40);
      E.launchT = 0; E.juggle++; E.spiked = false; E.shk = hs; combo.air = Math.max(combo.air, E.juggle);
    } else if (kind === 'spike') {
      E.state = 'air'; E.vz = -760; E.vx = dv.x * 30; E.vy = dv.y * 30; E.spiked = true; E.launchT = 0; E.juggle++; E.shk = hs;
      combo.air = Math.max(combo.air, E.juggle);
      if (!wasAir) { E.z = Math.max(E.z, 1); faceToward(E, att); }
    }
    hitstop = Math.max(hitstop, hs); shakeCam(sh);
    spark(hx, hy, hz, kind === 'heavy' || kind === 'spike' ? 16 : 9, 190, '#fff3d8', .6, deg(Math.atan2(dv.y, dv.x)));
    flare(hx, hy, hz, kind === 'light' ? 8 : 13);
    const elc = EL[pa] || '#fff';
    const sa = deps.project(att.x, att.y, att.z), sb = deps.project(E.x, E.y, E.z);
    const sang = Math.atan2(sb[1] - sa[1], sb[0] - sa[0]);
    stripFx('hitspark', hx, hy, hz, { fps: 30, scale: kind === 'light' ? .8 : 1, tint: elc });
    if (kind !== 'light') stripFx('slash', hx, hy, hz, { fps: 20, scale: 1.2, ang: sang, tint: elc });
    else stripFx('slash', hx, hy, hz, { fps: 24, scale: .75, ang: sang, tint: elc });
    if (kind === 'spike') stripFx('fire', E.x, E.y, 2, { fps: 20, scale: 1.5, squash: .5 });
    flash(hx, hy, hz, kind === 'light' ? 70 : 105, [255, 200, 140], .7, .2);
    snd(kind === 'launch' ? 300 : kind === 'spike' ? 140 : 190, .06);
    if (att === P && P.z > 6 && slot === 'air1') P.vz = Math.max(P.vz, 110);
  }

  function playerHit(slot: string, idx: number) {
    const mv = MOVE[slot];
    let any = false;
    for (const E of H) {
      if (!hittable(E)) continue;
      if (slot === 'plunge') {
        const tip = { x: P.x + dirVec(P.face).x * (mv.fwd ?? 16), y: P.y + dirVec(P.face).y * (mv.fwd ?? 16) };
        if (Math.hypot(E.x - tip.x, E.y - tip.y) > (mv.radius ?? 52) + 8) continue;
        if (!vertOK(E, P.z, 40, 46)) continue;
      } else {
        if (!inCone(P, E, mv.reach, mv.arc)) continue;
        if (!vertOK(E, P.z)) continue;
      }
      hurt(E, slot, idx, P); any = true;
    }
    return any;
  }

  function hurtPlayer(att: any, dmg: number) {
    if (P.inv > 0 || dead || P.state === 'guard') {
      if (P.state === 'guard') { num(P.x, P.y, P.z + 40, 'Guard', '#9fc4ff'); return; }
      if (P.inv > 0) return;
    }
    P.hp = Math.max(0, P.hp - dmg);
    P.inv = 36;
    const dv = dirVec(att.face);
    P.vx = dv.x * 90; P.vy = dv.y * 90;
    num(P.x, P.y, P.z + 48, String(dmg), '#ff8a6a');
    shakeCam(.22); hitstop = Math.max(hitstop, 4);
    snd(140, .08);
    if (P.hp <= 0 && !dead) { dead = true; P.anim = 'death'; P.t = 0; P.state = 'dead'; }
  }

  function press(a: string) {
    if (a === 'use') { tryUse(); return; }
    buf.push({ a, t: tick }); if (buf.length > 6) buf.shift();
  }
  function rawMove() {
    const tm = input.touchMove;
    let x = ((keys.has('d') || keys.has('arrowright')) ? 1 : 0) - ((keys.has('a') || keys.has('arrowleft')) ? 1 : 0);
    let y = ((keys.has('s') || keys.has('arrowdown')) ? 1 : 0) - ((keys.has('w') || keys.has('arrowup')) ? 1 : 0);
    x += tm.x; y += tm.y;
    const m = Math.hypot(x, y); if (m > 1) { x /= m; y /= m; }
    return { x, y, m: Math.min(1, m) };
  }
  function latchNow() {
    if (dir.latch) return;
    const r = rawMove();
    if (r.m >= .1) dir.latch = { ang: cam.ang, dir: deg(Math.atan2(r.y, r.x)) };
  }
  function worldMove() {
    const r = rawMove(), L = dir.latch;
    if (L && (r.m < .1 || angDiff(wrap(deg(Math.atan2(r.y, r.x))), wrap(L.dir)) >= 20)) dir.latch = null;
    const a = -rad(dir.latch ? dir.latch.ang : cam.ang), c = Math.cos(a), s = Math.sin(a);
    return { x: r.x * c - r.y * s, y: r.x * s + r.y * c };
  }
  function rotate(d: number) { dir.tw = null; latchNow(); cam.target += 45 * d; dir.pause = 90; }

  function startAttack(slot: string, air?: boolean) {
    const meta = META[slot]; if (!meta || !meta.hit_frames) return false;
    P.state = air ? 'airatk' : 'atk'; P.slot = slot; P.move = meta; P.cur = MOVE[slot] || STYLE.slash;
    setAnim(P, slot); P.anim = slot; P.t = 0; P.hitDone = new Set(); P.frame = null;
    const n = nearestHost(150);
    if (n) faceToward(P, n);
    const dv = dirVec(P.face), l = P.cur.lunge || 0;
    P.vx = dv.x * l; P.vy = dv.y * l;
    if (air) { P.airCount++; P.vz = P.vz * .3 + 55; }
    return true;
  }
  function startJump() { P.state = 'squat'; P.t = 0; P.anim = 'jump'; P.frame = 0; P.vx = P.vy = 0; }
  function startPlunge() {
    P.state = 'plunge'; P.anim = 'plunge'; P.t = 0; P.hitDone = new Set(); P.slot = 'plunge';
    P.move = META.plunge; P.cur = MOVE.plunge; P.plunged = true; P.frame = null; P.z0 = P.z; P.vz = 0;
    const n = nearestHost(160); if (n) faceToward(P, n);
    const dv = dirVec(P.face); P.vx = dv.x * 70; P.vy = dv.y * 70;
  }
  function land(fromPlunge: boolean) {
    P.z = 0; P.vz = 0; P.state = 'land'; P.t = 0; P.frame = 5; P.anim = 'jump'; P.airCount = 0; P.plunged = false;
    dust(P.x, P.y, fromPlunge ? 5 : 7, 40);
  }
  function startDash() {
    const w = worldMove(), m = Math.hypot(w.x, w.y) > .2;
    const d = m ? { x: w.x / Math.hypot(w.x, w.y), y: w.y / Math.hypot(w.x, w.y) } : dirVec(P.face);
    if (m) P.face = snap8(deg(Math.atan2(d.y, d.x)));
    P.state = 'dash'; P.t = 0; P.slot = null; P.anim = 'dash'; P.frame = null; P.vx = d.x * 300; P.vy = d.y * 300;
    dust(P.x, P.y, 6, 50);
  }
  function tryDo(a: string) {
    if (dead || won) return false;
    const s = P.state, f = (s === 'atk' || s === 'airatk') ? frameIdx(P) : 0;
    const neutral = s === 'ground' || (s === 'land' && P.t > .04);
    const cancel = (s === 'atk' || s === 'airatk') && P.move && f >= P.move.cancel_from;
    const grounded = neutral || (s === 'atk' && cancel);
    const airish = s === 'air' || (s === 'airatk' && cancel);
    if (a === 'jump') { if (grounded) { startJump(); return true; } }
    else if (a === 'dash') { if (grounded) { startDash(); return true; } }
    else if (a === 'guard') { if (neutral) { P.state = 'guard'; P.t = 0; P.vx = P.vy = 0; return true; } }
    else if (a === 'light') {
      if (neutral) return startAttack('attack1');
      if (s === 'atk' && cancel) { const nx = CHAIN_NEXT[P.slot] || 'attack1'; return startAttack(nx); }
      if (airish && P.airCount < AIR_MAX) return startAttack('air1', true);
    } else if (a === 'special') {
      if (grounded) return startAttack('launcher');
      if (airish && !P.plunged) { startPlunge(); return true; }
    }
    return false;
  }
  function consumeBuffer() {
    for (let i = 0; i < buf.length; i++) {
      if (tick - buf[i].t > BUF_TICKS) { buf.splice(i--, 1); continue; }
      if (tryDo(buf[i].a)) { buf.splice(i, 1); return true; }
    }
    return false;
  }
  function tryUse() {
    if (dead) return;
    if (Math.hypot(P.x - RESTW.x, P.y - RESTW.y) < 48) {
      P.hp = P.hpMax; P.inv = 20;
      say(P.x, P.y, 'The Quiet Seal holds.', 1.8);
      snd(420, .1); return;
    }
    for (const ch of CHESTS) {
      if (ch.o || ch.hid) continue;
      if (Math.hypot(P.x - ch.x, P.y - ch.y) < 42) {
        ch.o = 1; ash += ch.ash;
        say(P.x, P.y, 'Took ' + ch.s + '.', 1.8);
        snd(520, .12); return;
      }
    }
  }

  function updatePlayer() {
    if (dead) {
      P.t += TICK; P.vx *= .8; P.vy *= .8; P.anim = 'death';
      P.frame = Math.min(5, Math.floor(P.t * animFps('death')));
      tryMove(P, P.vx * TICK, P.vy * TICK);
      return;
    }
    if (P.inv > 0) P.inv--;
    const p = P; p.t += TICK;
    const w = worldMove(), mag = Math.hypot(w.x, w.y), want = mag > .2;
    const n = nearestHost(160);
    switch (p.state) {
      case 'ground': {
        p.anim = want ? 'walk' : 'idle'; p.frame = null;
        if (want) p.face = snap8(deg(Math.atan2(w.y, w.x)));
        const k = 1 - Math.exp(-18 * TICK);
        p.vx = lerp(p.vx, want ? w.x * SPEED : 0, k); p.vy = lerp(p.vy, want ? w.y * SPEED : 0, k);
        consumeBuffer(); break;
      }
      case 'dash': {
        p.anim = 'dash'; p.frame = null; p.vx *= .93; p.vy *= .93;
        if (p.t > .2) consumeBuffer();
        if (p.state === 'dash' && p.t >= 6 / animFps('dash')) { p.state = 'ground'; p.vx *= .3; p.vy *= .3; }
        break;
      }
      case 'guard': {
        p.anim = 'guard'; p.vx *= .7; p.vy *= .7; p.frame = Math.min(3, Math.floor(p.t * animFps('guard')));
        if (!keys.has('l') && p.t > .12) p.state = 'ground';
        break;
      }
      case 'atk': {
        const f = frameIdx(p), m = p.move;
        p.vx *= .88; p.vy *= .88;
        if (n && n.state === 'stun') {
          const dx = n.x - p.x, dy = n.y - p.y, d = Math.hypot(dx, dy);
          if (d > 30 && d < 150) { p.vx += dx / d * 220 * TICK; p.vy += dy / d * 220 * TICK; }
        }
        if (m && m.hit_frames.includes(f) && !p.hitDone.has(f)) { p.hitDone.add(f); playerHit(p.slot, m.hit_frames.indexOf(f)); }
        consumeBuffer();
        if (p.state === 'atk' && p.t >= 6 / animFps(p.anim)) { p.state = 'ground'; p.slot = null; p.vx *= .5; p.vy *= .5; }
        break;
      }
      case 'squat': {
        p.vx *= .8; p.vy *= .8;
        if (p.t >= .07) {
          p.state = 'air'; p.vz = JUMP_VZ; p.z = .01; p.airCount = 0; p.plunged = false; dust(p.x, p.y, 4, 30);
          if (want) { p.vx = w.x * AIR_SPEED; p.vy = w.y * AIR_SPEED; }
        }
        break;
      }
      case 'air': case 'airatk': {
        const atk = p.state === 'airatk', f = atk ? frameIdx(p) : 0;
        if (!atk || (p.move && f >= p.move.cancel_from)) {
          const k = 1 - Math.exp(-8 * TICK);
          p.vx = lerp(p.vx, want ? w.x * AIR_SPEED : 0, k); p.vy = lerp(p.vy, want ? w.y * AIR_SPEED : 0, k);
          if (want && !atk) p.face = snap8(deg(Math.atan2(w.y, w.x)));
        } else {
          p.vx *= .96; p.vy *= .96;
          if (n && hittable(n)) {
            const dx = n.x - p.x, dy = n.y - p.y, d = Math.hypot(dx, dy);
            if (d > 24 && d < 140) {
              p.vx += dx / d * 320 * TICK; p.vy += dy / d * 320 * TICK;
              const sp = Math.hypot(p.vx, p.vy); if (sp > 95) { p.vx *= 95 / sp; p.vy *= 95 / sp; }
            }
          }
        }
        const gs = atk && p.move && f < p.move.cancel_from ? .28 : (atk ? .6 : 1);
        p.vz -= G_PLAYER * gs * TICK; p.z += p.vz * TICK;
        if (atk && p.move && p.move.hit_frames.includes(f) && !p.hitDone.has(f)) {
          p.hitDone.add(f); playerHit(p.slot, p.move.hit_frames.indexOf(f));
        }
        if (p.z <= 0 && p.vz < 0) { land(false); break; }
        if (!atk) {
          p.anim = 'jump';
          p.frame = p.vz > 150 ? 1 : p.vz > -150 ? 2 : (p.z < 16 && p.vz < 0 ? 4 : 3);
          consumeBuffer();
        } else {
          consumeBuffer();
          if (p.state === 'airatk' && p.t >= 6 / animFps(p.anim)) { p.state = 'air'; p.slot = null; }
        }
        break;
      }
      case 'plunge': {
        const fps = animFps('plunge'), T2 = 2 / fps, T3 = 3 / fps, T5 = 5 / fps, f = frameIdx(p);
        const tgt = nearestHost(160);
        if (p.t < T2) { p.vz = 0; p.z = p.z0 + 5 * Math.sin(clamp(p.t / T2, 0, 1) * Math.PI); p.vx *= .95; p.vy *= .95; p.zd = p.z; }
        else if (p.t < T3) {
          const u = (p.t - T2) / (T3 - T2);
          const zt = Math.min(p.zd, Math.max(16, (tgt && hittable(tgt) ? tgt.z - 8 : 0)));
          p.z = p.zd + (zt - p.zd) * u * u; p.vz = 0;
          let dv = dirVec(p.face), sp = 150;
          if (tgt && hittable(tgt)) {
            const tx = tgt.x - p.x, ty = tgt.y - p.y, td = Math.hypot(tx, ty);
            if (td > 6 && td < 150) { dv = { x: tx / td, y: ty / td }; sp = clamp(td * 5, 0, 170); }
          }
          p.vx = dv.x * sp; p.vy = dv.y * sp;
        } else if (p.t < T5) { p.vz = 0; p.vx *= .8; p.vy *= .8; }
        else { p.vx *= .8; p.vy *= .8; p.vz -= G_PLAYER * TICK; p.z += p.vz * TICK; }
        if (f >= 3 && !p.hitDone.has(3)) {
          p.hitDone.add(3);
          const connected = playerHit('plunge', 0);
          const tip = { x: p.x + dirVec(p.face).x * (MOVE.plunge.fwd ?? 16), y: p.y + dirVec(p.face).y * (MOVE.plunge.fwd ?? 16) };
          if (p.z < 28) {
            ring(tip.x, tip.y, 60, .4, '#f3c58f', 2); dust(tip.x, tip.y, connected ? 4 : 8, 60);
            if (!connected) { shakeCam(.35); hitstop = Math.max(hitstop, 4); }
          }
        }
        if (p.z <= 0 && p.t >= T5) { p.z = 0; p.vz = 0; }
        if (p.t >= 6 / fps) { if (p.z <= 1) land(true); else { p.state = 'air'; p.slot = null; p.anim = 'jump'; } }
        break;
      }
      case 'land': {
        p.vx *= .8; p.vy *= .8;
        if (p.t > .04) consumeBuffer();
        if (p.state === 'land' && p.t >= .1) { p.state = 'ground'; p.frame = null; }
        break;
      }
    }
    tryMove(p, p.vx * TICK, p.vy * TICK);
    if (p.z < 0) p.z = 0;
  }

  function hostLand(E: any) {
    const s = -E.vz, spiked = E.spiked;
    E.z = 0; E.spiked = false; E.state = 'down'; E.vz = 0; E.vx *= .3; E.vy *= .3;
    let bv = 0;
    if (spiked) bv = 330; else if (s > 260) bv = Math.min(200, s * .33);
    E.kd = { phase: spiked ? 'slam' : 'land', t: 0, bv, spike: spiked };
    E.launchT = 0;
    dust(E.x, E.y, spiked ? 14 : 8, spiked ? 90 : 55);
    if (spiked || s > 420) ring(E.x, E.y, spiked ? 78 : 50, .4, spiked ? '#f3c58f' : '#b9c4d6', 3);
    hitstop = Math.max(hitstop, spiked ? 9 : 3); E.shk = spiked ? 9 : 3; shakeCam(.2 + (spiked ? .5 : 0));
    if (spiked) {
      combo.dmg += 60; E.hp = Math.max(0, E.hp - 60); num(E.x, E.y, 40, '60', '#ffcf8a');
      combo.hits++; comboName('Ground bounce');
    }
  }

  function updateHost(E: any) {
    E.t += TICK; E.tm++;
    if (E.cd > 0) E.cd--;
    const d = Math.hypot(E.x - P.x, E.y - P.y);
    if ((E.st === 'sleep' || E.st === 'wait') && d < 160 && !dead) {
      E.st = 'fight'; say(E.x, E.y, E.n + ' stirs.', 1.4);
    }
    if (E.hp <= 0 && !E.dead) {
      E.dead = true; E.deadT = 0; E.state = 'dead'; E.vx = E.vy = E.vz = 0; E.z = 0;
      stripFx('fire', E.x, E.y, 8, { fps: 20, scale: E.boss ? 2 : 1.4 });
      say(E.x, E.y, E.boss ? 'The last carrier falls.' : (E.n + ' is ash.'), 2);
      if (E.boss) { CHESTS[1].hid = 0; }
      return;
    }
    if (E.dead) {
      E.deadT += TICK; E.anim = 'death'; E.frame = Math.min(5, Math.floor(E.deadT * animFps('death')));
      return;
    }
    E.frame = null;
    switch (E.state) {
      case 'idle':
        setAnim(E, 'idle');
        if (E.st === 'fight' && !dead) faceToward(E, P);
        E.vx *= .8; E.vy *= .8;
        if (E.st === 'fight' && !dead && d > 42 && d < 240) {
          const dx = P.x - E.x, dy = P.y - E.y;
          E.vx = (dx / d) * (E.boss ? 78 : 64); E.vy = (dy / d) * (E.boss ? 78 : 64);
          E.anim = 'walk';
        } else if (E.st === 'fight' && d <= 48 && E.cd <= 0 && P.z < 20) {
          E.state = 'atk'; E.t = 0; E.anim = 'attack1'; E.hitDone = new Set(); E.cd = E.boss ? 50 : 70;
          faceToward(E, P);
          const dv = dirVec(E.face); E.vx = dv.x * 70; E.vy = dv.y * 70;
        }
        break;
      case 'atk': {
        const f = frameIdx(E);
        E.vx *= .88; E.vy *= .88; E.anim = 'attack1';
        if (HOST_ATK.hit_frames.includes(f) && !E.hitDone.has(f)) {
          E.hitDone.add(f);
          if (inCone(E, P, 58, 70) && Math.abs(P.z - E.z) < 40) hurtPlayer(E, E.boss ? 90 : 55);
        }
        if (E.t >= 6 / animFps('attack1')) { E.state = 'idle'; setAnim(E, 'idle'); }
        break;
      }
      case 'block':
        E.stunT -= TICK; E.vx *= .9; E.vy *= .9;
        if (E.stunT <= 0) { E.state = 'idle'; setAnim(E, 'idle'); }
        break;
      case 'stun':
        E.stunT -= TICK; E.vx *= .92; E.vy *= .92;
        if (E.stunT <= 0) { E.state = 'idle'; setAnim(E, 'idle'); }
        break;
      case 'air': {
        E.launchT += TICK;
        const gs = 1 + E_JUGGLE_SCALE * Math.min(E.juggle, 6);
        const hover = (P.state === 'plunge' && P.t < 3 / animFps('plunge') && !E.spiked) ? .3 : 1;
        E.vz -= (E.spiked ? 3400 : E_GRAV * gs * hover) * TICK; E.z += E.vz * TICK;
        if (hover < 1) { E.vx *= .9; E.vy *= .9; } else { E.vx *= .965; E.vy *= .965; }
        if (E.launchT < .36) { E.anim = 'launch'; E.frame = Math.min(5, Math.floor(E.launchT * animFps('launch'))); }
        else { E.anim = 'tumble'; E.frame = Math.floor((E.launchT - .36) * animFps('tumble')) % 6; }
        if (E.z <= 0 && E.vz < 0) hostLand(E);
        break;
      }
      case 'down': {
        const kd = E.kd; kd.t += TICK; E.anim = 'knockdown'; E.vx *= .9; E.vy *= .9;
        const next = (ph: string) => { kd.phase = ph; kd.t = 0; };
        switch (kd.phase) {
          case 'land': E.frame = 0; if (kd.t >= .05) next('slam'); break;
          case 'slam': E.frame = 1;
            if (kd.t >= .07) { if (kd.bv > 0) { next('bounce'); E.vz = kd.bv; E.z = .01; } else next('settle1'); }
            break;
          case 'bounce':
            E.frame = 2; E.vz -= E_BOUNCE_G * TICK; E.z += E.vz * TICK;
            if (E.z <= 0 && E.vz < 0) { E.z = 0; E.vz = 0; next('slam2'); dust(E.x, E.y, 6, 45); shakeCam(.3); }
            break;
          case 'slam2': E.frame = 3; if (kd.t >= .08) next('settle1'); break;
          case 'settle1': E.frame = 4; if (kd.t >= .12) next('lie'); break;
          case 'lie': E.frame = 5; if (kd.t >= .42) { E.state = 'getup'; E.t = 0; E.kd = null; } break;
        }
        break;
      }
      case 'getup':
        setAnim(E, 'getup');
        if (E.t >= 6 / animFps('getup')) { E.state = 'idle'; setAnim(E, 'idle'); E.juggle = 0; }
        break;
    }
    tryMove(E, E.vx * TICK, E.vy * TICK, E.boss ? 16 : 12);
    if (E.z < 0) E.z = 0;
    E.hpShown += (E.hp - E.hpShown) * (1 - Math.exp(-14 * TICK));
  }

  function updateCam() {
    if (dir.tw) {
      const w = dir.tw; w.t++; const u = Math.min(1, w.t / w.T), e = u * u * u * (u * (6 * u - 15) + 10);
      cam.ang = w.from + (w.to - w.from) * e; if (u >= 1) { cam.ang = w.to; dir.tw = null; }
    } else {
      cam.ang += (cam.target - cam.ang) * (1 - Math.exp(-9 * TICK));
      if (Math.abs(cam.target - cam.ang) < .05) cam.ang = cam.target;
    }
    cam.py = .5; cam.pt = .5; cam.pv = '';
    const k = 1 - Math.exp(-4 * TICK);
    cam.fx += (P.x - cam.fx) * k; cam.fy += (P.y - cam.fy) * k;
    cam.shake = Math.max(0, cam.shake - TICK * 1.7);
    const m = cam.shake * cam.shake * 9;
    cam.shx = opt.shake && m > .05 ? Math.round(m * .6 * Math.sin(tick * 1.1)) : 0;
    cam.shy = opt.shake && m > .05 ? Math.round(m * .6 * Math.sin(tick * 1.3 + 2.1)) : 0;
    cam.Z = cam.Z || 1;
  }

  function simTick() {
    tick++;
    updateCam();
    for (const e of embers) {
      e.z += e.s * TICK; e.x += Math.sin(tick * .02 + e.ph) * .15;
      if (e.z > 170) e.z = 0;
    }
    for (let i = texts.length - 1; i >= 0; i--) { texts[i].t -= TICK; if (texts[i].t <= 0) texts.splice(i, 1); }
    if (hitstop > 0) { hitstop--; if (hitstop === 0) H.forEach((h) => { h.shk = 0; }); return; }
    updatePlayer();
    for (const h of H) updateHost(h);
    if (!combo.active && combo.hits > 0 && tick - combo.endT > 110) combo.hits = 0;
    if (combo.active && tick - combo.endT > 75) combo.active = false;
    P.hpShown += (P.hp - P.hpShown) * (1 - Math.exp(-14 * TICK));
    updateFx();
    const [u, v] = w2uv(P.x, P.y);
    const rm = roomAt(u, v);
    if (rm && rm.name !== zone) { zone = rm.name; zt = 120; }
    if (zt > 0) zt--;
    const living = H.filter((h) => !h.dead);
    if (!won && H.length && living.length === 0) {
      won = true; P.anim = 'victory'; P.t = 0; P.state = 'ground'; P.vx = P.vy = 0;
      say(P.x, P.y, 'The Hollow opens.', 2.4);
    }
  }

  spawnWorld();

  return {
    P, H, combo, cam, dir, parts, rings, nums, flashes, embers, texts, input,
    BRZ, CHESTS, RESTW, vfxTint,
    press, reset, simTick, rotate, tryUse,
    get tick() { return tick; },
    get hitstop() { return hitstop; },
    get dead() { return dead; },
    get won() { return won; },
    get zone() { return zone; },
    get zt() { return zt; },
    get pa() { return pa; },
    get ash() { return ash; },
    setPa(id: string) { pa = id; setP1(id); },
  };
}

export type HollowApi = ReturnType<typeof createHollow>;
