// Hollow renderer — true 2:1 diamond tiles, low slab edges, no blocking walls.
import { TAU, clamp, wrap, hash } from '../engine/math';
import { $, poly } from '../engine/dom';
import { animFps } from '../engine/moves';
import { VFX } from '../engine/fx';
import {
  setCamMatrix as setCamMatrixBase, proj as projBase,
  depthOf as depthOfBase, rowOf as rowOfBase,
} from '../engine/projection';
import { tileXY } from '../sim/iso';
import { FLOOR, isFloor, REST } from '../sim/map';
import { HollowApi, P_HP } from '../sim/hollow';
import { ARENAS } from './duel';

const CELL = 96, AX = 48, AY = 74;
const T = ARENAS.hollow;

export interface HollowGfx {
  sg: CanvasRenderingContext2D; cg: CanvasRenderingContext2D; S: HTMLCanvasElement;
  VW: number; VH: number; baseZoom: number;
}

export interface HollowRenderDeps {
  IMG: Record<string, any>;
  UI: any;
  opt: any;
  getView: () => { VW: number; VH: number; baseZoom: number };
  gfx: () => HollowGfx;
}

export function createHollowRenderer(deps: HollowRenderDeps) {
  const { IMG } = deps;
  let S!: HollowApi;
  let P: any, cam: any;
  let parts: any[], rings: any[], nums: any[], flashes: any[], embers: any[];
  let sg: CanvasRenderingContext2D, cg: CanvasRenderingContext2D, S_: HTMLCanvasElement;
  let VW = 0, VH = 0;
  let hpfill: HTMLElement | null, hpghost: HTMLElement | null, hpn: HTMLElement | null, hpl: HTMLElement | null;
  let comboEl: HTMLElement | null, cn: HTMLElement | null, cl: HTMLElement | null, cs: HTMLElement | null, mvEl: HTMLElement | null, zoneEl: HTMLElement | null;
  let lastHpW = '', lastHpn = '', lastCombo = '', lastMv = '', lastZone = 0;

  function bind(s: HollowApi) {
    S = s; P = s.P; cam = s.cam;
    parts = s.parts; rings = s.rings; nums = s.nums; flashes = s.flashes; embers = s.embers;
    const g = deps.gfx();
    sg = g.sg; cg = g.cg; S_ = g.S; VW = g.VW; VH = g.VH;
  }
  function proj(x: number, y: number, z: number) { return projBase(cam, VW, VH, x, y, z); }
  function setCamMatrix() { setCamMatrixBase(cam); }
  const depthOf = (x: number, y: number) => depthOfBase(cam, x, y);
  const rowOf = (face: number) => rowOfBase(cam, face);
  function flick(b: any) { return .82 + .18 * Math.sin(S.tick * .21 + b.ph) * Math.sin(S.tick * .093 + b.ph * 2.3) + .06 * Math.sin(S.tick * .57 + b.ph); }

  function drawBackdrop() {
    const g = sg;
    const gr = g.createLinearGradient(0, 0, 0, VH);
    for (let i = 0; i < 4; i++) gr.addColorStop(T.skyStops[i], T.sky[i]);
    g.fillStyle = gr; g.fillRect(0, 0, VW, VH);
    const sx = VW * T.sunXY[0], sy = VH * T.sunXY[1], R = Math.max(VW, VH) * .32;
    const sun = g.createRadialGradient(sx, sy, 0, sx, sy, R);
    sun.addColorStop(0, T.sun[0]); sun.addColorStop(.25, T.sun[1]); sun.addColorStop(1, T.sun[2]);
    g.fillStyle = sun; g.fillRect(0, 0, VW, VH);
    const cx = VW * .5;
    g.fillStyle = '#020306';
    g.beginPath(); g.moveTo(cx - 14, 0);
    for (let y = 0; y <= VH * .62; y += VH * .062) g.lineTo(cx + (hash(y | 0, 7) - .5) * 56, y);
    for (let y = VH * .62; y >= 0; y -= VH * .062) g.lineTo(cx + (hash(y | 0, 13) - .5) * 56 + 18, y);
    g.closePath(); g.fill();
    g.strokeStyle = 'rgba(255,122,42,.55)'; g.lineWidth = 2; g.beginPath();
    for (let y = 0; y <= VH * .62; y += VH * .062) { const x = cx + (hash(y | 0, 7) - .5) * 56; y ? g.lineTo(x, y) : g.moveTo(x, y); }
    g.stroke();
  }

  function cellPts(u: number, v: number) {
    return [[u, v], [u + 1, v], [u + 1, v + 1], [u, v + 1]].map(([a, b]) => {
      const [x, y] = tileXY(a, b); return proj(x, y, 0);
    });
  }

  function drawFloor() {
    const g = sg;
    const cs = proj(cam.fx, cam.fy, 0)[1];
    const th = 10 * cam.Z;
    for (const c of FLOOR) {
      const pts = cellPts(c.u, c.v);
      if (pts.every((p) => p[0] < -80) || pts.every((p) => p[0] > VW + 80) || pts.every((p) => p[1] < -80) || pts.every((p) => p[1] > VH + 80)) continue;
      const hs = hash(c.u, c.v), chk = (c.u + c.v) & 1;
      const l = (chk ? T.mat.l0 : T.mat.l1) + hs * T.mat.hs;
      g.fillStyle = `rgb(${(l + T.mat.t[0]) | 0},${(l + T.mat.t[1]) | 0},${(l + T.mat.t[2]) | 0})`;
      poly(g, pts); g.fill();
      g.strokeStyle = T.mat.stroke; g.lineWidth = 1; g.stroke();
      // slab thickness only on the screen-front edge — never a tall occluder
      for (let i = 0; i < 4; i++) {
        const nu = c.u + [1, 0, -1, 0][i], nv = c.v + [0, 1, 0, -1][i];
        if (isFloor(nu, nv)) continue;
        const a = pts[i], b = pts[(i + 1) % 4];
        if ((a[1] + b[1]) / 2 > cs + 2) {
          g.fillStyle = i % 2 ? T.slab[0] : T.slab[1];
          poly(g, [a, b, [b[0], b[1] + th], [a[0], a[1] + th]]); g.fill();
          g.strokeStyle = T.slabEdge; g.beginPath(); g.moveTo(a[0], a[1] + .5); g.lineTo(b[0], b[1] + .5); g.stroke();
        }
      }
    }
    const rp: number[][] = [];
    const [rx, ry] = tileXY(REST.u, REST.v);
    for (let k = 0; k <= 36; k++) {
      const a = k / 36 * TAU;
      rp.push(proj(rx + Math.cos(a) * 44, ry + Math.sin(a) * 44, 0));
    }
    poly(g, rp); g.strokeStyle = 'rgba(216,208,188,.85)'; g.lineWidth = Math.max(1, 1.6 * cam.Z); g.stroke();
  }

  function drawRingsFloor() {
    const g = sg;
    for (const r of rings) {
      const u = r.t / r.dur, R = r.maxR * (1 - (1 - u) * (1 - u)), [x, y] = proj(r.x, r.y, 0);
      g.strokeStyle = r.col; g.globalAlpha = (1 - u) * .8; g.lineWidth = Math.max(1, Math.round(r.w * (1 - u) * cam.Z));
      g.beginPath(); g.ellipse(x, y, R * cam.Z, R * cam.Z * cam.py, 0, 0, TAU); g.stroke();
    }
    g.globalAlpha = 1;
  }

  function drawShadow(e: any) {
    const [x, y] = proj(e.x, e.y, 0), s = 1 / (1 + Math.max(0, e.z) / 80), Z = cam.Z * s;
    const img = IMG.shadow; if (!img) return;
    sg.globalAlpha = clamp(.35 + .65 * s, 0, 1);
    sg.drawImage(img, Math.round(x - AX * Z), Math.round(y - AY * Z * cam.py / .5), CELL * Z, CELL * Z * cam.py / .5);
    sg.globalAlpha = 1;
  }

  function drawEnt(e: any, pre: string, shk = false) {
    const anim = e.anim, key = pre + '/' + anim;
    const img = IMG[pre + '/' + cam.pv + anim] || IMG[key] || IMG[pre + '/idle']; if (!img) return;
    let f = e.frame;
    if (f === null || f === undefined) {
      const loop = (anim === 'idle' || anim === 'walk' || anim === 'tumble');
      f = loop ? Math.floor(e.t * animFps(anim)) % 6 : Math.min(5, Math.floor(e.t * animFps(anim)));
    }
    const [x, y] = proj(e.x, e.y, e.z), Z = cam.Z * (e.boss ? 1.28 : 1);
    let ox = 0, pop = 1;
    if (shk && S.hitstop > 0 && e.shk > 0) { ox = (S.tick & 1 ? 1 : -1) * 2 * Z; pop = 1 + .1 * Math.min(1, S.hitstop / 8); }
    if (e === P && P.inv > 0 && Math.floor(S.tick / 2) % 2) sg.globalAlpha = .55;
    const C = img.width / 6, k = C >= 190 ? 2 : 1, c = C / k, ax = c / 2, ay = c > 100 ? 100 : 74;
    sg.imageSmoothingEnabled = k > 1;
    sg.drawImage(img, f * C, rowOf(e.face) * C, C, C, Math.round(x - ax * Z * pop + ox), Math.round(y - ay * Z * pop), c * Z * pop, c * Z * pop);
    sg.imageSmoothingEnabled = false; sg.globalAlpha = 1;
  }

  function drawBrazier(b: any) {
    const g = sg, [x, y] = proj(b.x, b.y, 0), Z = cam.Z, X = Math.round(x), Y = Math.round(y);
    const r = (a: number, bb: number, w: number, h: number, c: string) => { g.fillStyle = c; g.fillRect(Math.round(X + a * Z), Math.round(Y + bb * Z), Math.max(1, Math.round(w * Z)), Math.max(1, Math.round(h * Z))); };
    r(-6, -3, 12, 3, '#232733'); r(-4, -18, 8, 15, '#3a4050'); r(-3, -18, 2, 15, '#4a5164');
    r(-9, -24, 18, 3, '#2c313f'); r(-8, -27, 16, 3, '#434a5c'); r(-6, -26, 12, 2, '#14161d');
    const fl = flick(b), F = T.flame;
    r(-4, -32 * fl, 8, 6 * fl, F[0]); r(-3, -37 * fl, 6, 8 * fl, F[1]); r(-1.5, -41 * fl, 3, 6 * fl, F[2]);
  }

  function drawChest(ch: any) {
    if (ch.hid) return;
    const g = sg, [x, y] = proj(ch.x, ch.y, 0), Z = cam.Z;
    g.globalAlpha = ch.o ? .5 : 1;
    g.fillStyle = '#3a2a1c'; g.fillRect(Math.round(x - 10 * Z), Math.round(y - 14 * Z), Math.round(20 * Z), Math.round(14 * Z));
    g.fillStyle = ch.fin ? '#e08a50' : '#8a6a45'; g.fillRect(Math.round(x - 10 * Z), Math.round(y - 16 * Z), Math.round(20 * Z), Math.round(4 * Z));
    g.fillStyle = '#f3c58f'; g.fillRect(Math.round(x - 2 * Z), Math.round(y - 12 * Z), Math.round(4 * Z), Math.round(4 * Z));
    g.globalAlpha = 1;
  }

  function drawGlow() {
    const g = sg;
    g.globalCompositeOperation = 'lighter';
    for (const b of S.BRZ) {
      const [x, y] = proj(b.x, b.y, 34), R = 44 * cam.Z, fl = flick(b);
      const gr = g.createRadialGradient(x, y, 0, x, y, R);
      gr.addColorStop(0, `rgba(${T.brazGlow[0]},${.34 * fl})`); gr.addColorStop(1, `rgba(${T.brazGlow[1]},0)`);
      g.fillStyle = gr; g.fillRect(x - R, y - R, R * 2, R * 2);
    }
    const [rx, ry] = proj(S.RESTW.x, S.RESTW.y, 8), Rr = 70 * cam.Z;
    const rg = g.createRadialGradient(rx, ry, 2, rx, ry, Rr);
    rg.addColorStop(0, 'rgba(217,119,43,.2)'); rg.addColorStop(1, 'rgba(217,119,43,0)');
    g.fillStyle = rg; g.fillRect(rx - Rr, ry - Rr, Rr * 2, Rr * 2);
    for (const f of flashes) {
      const [x, y] = proj(f.x, f.y, f.z), u = f.t / f.dur, R = f.r * .8 * cam.Z;
      const gr = g.createRadialGradient(x, y, 0, x, y, R);
      gr.addColorStop(0, `rgba(255,235,200,${.55 * f.I * (1 - u)})`); gr.addColorStop(1, 'rgba(255,170,90,0)');
      g.fillStyle = gr; g.fillRect(x - R, y - R, R * 2, R * 2);
    }
    for (const p of parts) {
      if (p.type !== 'strip') continue;
      const img = S.vfxTint(p), V = VFX[p.key]; if (!img) continue;
      const f = Math.min(V.frames - 1, Math.floor(p.life * p.fps)), u = p.life / p.max;
      const [x, y] = proj(p.x, p.y, p.z), s = p.scale * cam.Z;
      g.save(); g.globalAlpha = clamp(1 - u, 0, 1); g.translate(Math.round(x), Math.round(y)); g.rotate(p.ang); g.scale(s, s * (p.squash || 1));
      g.drawImage(img, (f % V.cols) * V.fw, ((f / V.cols) | 0) * V.fh, V.fw, V.fh, -V.fw / 2, -V.fh / 2, V.fw, V.fh); g.restore();
    }
    g.globalAlpha = 1;
    for (const e of embers) {
      const [x, y] = proj(e.x, e.y, e.z), a = Math.sin(e.z / 170 * Math.PI) * .7;
      g.fillStyle = `rgba(${T.ember},${a})`; g.fillRect(Math.round(x), Math.round(y), 1, 1);
    }
    for (const p of parts) {
      if (p.type === 'dust' || p.type === 'strip') continue;
      const [x, y] = proj(p.x, p.y, p.z), u = p.life / p.max;
      if (p.type === 'spark') {
        g.fillStyle = p.col; g.globalAlpha = 1 - u * .8;
        const [x2, y2] = proj(p.x - p.vx * .025, p.y - p.vy * .025, p.z - p.vz * .025);
        g.strokeStyle = p.col; g.lineWidth = Math.max(1, Math.round(p.size * cam.Z));
        g.beginPath(); g.moveTo(Math.round(x2), Math.round(y2)); g.lineTo(Math.round(x), Math.round(y)); g.stroke();
        g.globalAlpha = 1;
      } else if (p.type === 'flare') {
        const R = p.size * (1 - u * .4) * cam.Z; g.fillStyle = `rgba(255,248,225,${1 - u})`;
        g.fillRect(Math.round(x - R), Math.round(y - 1), Math.round(R * 2), 2);
      }
    }
    g.globalCompositeOperation = 'source-over';
    g.font = 'bold ' + Math.round(10 * Math.max(1, cam.Z)) + 'px ui-monospace,Menlo,monospace'; g.textAlign = 'center';
    for (const n of nums) {
      const [x, y] = proj(n.x, n.y, n.z + n.t * 26), a = n.t < .6 ? 1 : 1 - (n.t - .6) / .3;
      g.globalAlpha = a; g.lineWidth = 3; g.strokeStyle = '#14161d'; g.strokeText(n.text, Math.round(x), Math.round(y));
      g.fillStyle = n.col; g.fillText(n.text, Math.round(x), Math.round(y));
    }
    g.globalAlpha = 1;
    const texts = S.texts;
    g.font = 'italic ' + Math.round(12 * Math.max(1, cam.Z)) + 'px Georgia,serif'; g.fillStyle = '#d8d0bc'; g.textAlign = 'center';
    texts.forEach((x: any) => {
      const [sx, sy] = proj(x.x, x.y, 0);
      g.globalAlpha = Math.min(1, x.t / x.m * 2);
      g.fillText(x.s, sx, sy - 58 - (x.m - x.t) * 10);
      g.globalAlpha = 1;
    });
    g.textAlign = 'left';
  }

  function drawFxWorld() {
    const g = sg;
    for (const p of parts) {
      if (p.type !== 'dust') continue;
      const [x, y] = proj(p.x, p.y, p.z), u = p.life / p.max;
      g.globalAlpha = (1 - u) * .5; g.fillStyle = '#aab2c4';
      const r = p.size * (1 + u * .8) * cam.Z; g.fillRect(Math.round(x - r / 2), Math.round(y - r / 2), Math.max(1, Math.round(r)), Math.max(1, Math.round(r)));
    }
    g.globalAlpha = 1;
  }

  function render(st: HollowApi) {
    bind(st); setCamMatrix();
    sg.globalCompositeOperation = 'source-over'; sg.globalAlpha = 1; sg.imageSmoothingEnabled = false;
    drawBackdrop(); drawFloor(); drawRingsFloor();
    const list: Array<{ d: number; f: () => void }> = [];
    list.push({ d: depthOf(P.x, P.y), f: () => { drawShadow(P); drawEnt(P, S.pa, false); } });
    for (const h of S.H) list.push({ d: depthOf(h.x, h.y), f: () => { drawShadow(h); drawEnt(h, h.skin, true); } });
    for (const b of S.BRZ) list.push({ d: depthOf(b.x, b.y), f: () => drawBrazier(b) });
    for (const ch of S.CHESTS) list.push({ d: depthOf(ch.x, ch.y), f: () => drawChest(ch) });
    list.sort((a, b) => a.d - b.d); list.forEach((o) => o.f());
    drawFxWorld(); drawGlow();
    cg.imageSmoothingEnabled = false; cg.globalCompositeOperation = 'source-over';
    cg.drawImage(S_, 0, 0);
    const vg = cg.createRadialGradient(VW / 2, VH / 2, VH * .35, VW / 2, VH / 2, Math.max(VW, VH) * .72);
    vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(0,0,0,.5)');
    cg.fillStyle = vg; cg.fillRect(0, 0, VW, VH);
    sg.textAlign = 'center'; sg.fillStyle = '#d8d0bc'; sg.font = 'italic 12px Georgia,serif';
    // prompt drawn on composite
    const g = cg;
    g.font = 'italic ' + Math.round(13) + 'px Georgia,serif'; g.fillStyle = '#d8d0bc'; g.textAlign = 'center';
    if (!S.dead && !S.won && Math.hypot(P.x - S.RESTW.x, P.y - S.RESTW.y) < 48) g.fillText('F · rest at the seal', VW / 2, 88);
    for (const ch of S.CHESTS) {
      if (!ch.o && !ch.hid && Math.hypot(P.x - ch.x, P.y - ch.y) < 42) g.fillText('F · take ' + ch.s, VW / 2, 88);
    }
    g.textAlign = 'left';
    g.fillStyle = 'rgba(180,184,196,.75)'; g.font = '11px Georgia,serif';
    g.fillText('WASD move   J strike   K launch / plunge   Space jump   Shift dash   L guard   F use   Q/E camera', 10, VH - 10);
  }

  function hud(st: HollowApi) {
    bind(st);
    if (!hpfill) {
      hpfill = $('hpfill'); hpghost = $('hpghost'); hpn = $('hpn'); hpl = $('hpl');
      comboEl = $('combo'); cn = $('cn'); cl = $('cl'); cs = $('cs'); mvEl = $('mv'); zoneEl = $('zone');
    }
    const n = S.H.find((h) => !h.dead && Math.hypot(h.x - P.x, h.y - P.y) < 160) || S.H.find((h) => !h.dead);
    const hpSrc = n && !n.dead ? n : P;
    const max = n && !n.dead ? (n.hpMax || HOST_FALLBACK(n)) : P_HP;
    const hpW = ((hpSrc.hp / max) * 100).toFixed(1) + '%';
    if (hpfill && hpW !== lastHpW) { hpfill.style.width = hpW; if (hpghost) hpghost.style.width = ((hpSrc.hpShown / max) * 100).toFixed(1) + '%'; lastHpW = hpW; }
    const name = n && !n.dead ? n.n : 'You';
    if (hpl) hpl.textContent = name;
    const hpnT = String(Math.round(hpSrc.hp));
    if (hpn && hpnT !== lastHpn) { hpn.textContent = hpnT; lastHpn = hpnT; }
    const on = S.combo.hits > 1;
    comboEl?.classList.toggle('on', on);
    const comboT = S.combo.hits + '|' + S.combo.dmg + '|' + S.combo.air;
    if (comboT !== lastCombo && cn && cl && cs) {
      lastCombo = comboT; cn.textContent = String(S.combo.hits); cl.textContent = S.combo.hits === 1 ? 'HIT' : 'HITS';
      cs.textContent = S.combo.dmg + ' damage' + (S.combo.air ? '  ·  air ' + S.combo.air : '');
    }
    const txt = S.combo.chain.length ? S.combo.chain.map((c, i) => i === S.combo.chain.length - 1 ? '<b>' + c + '</b>' : c).join(' › ') : (S.zone || 'Cinder Hall');
    if (mvEl && txt !== lastMv) { mvEl.innerHTML = txt; lastMv = txt; }
    if (zoneEl) {
      if (S.zt > 0 && lastZone <= 0) zoneEl.classList.add('on');
      if (S.zt <= 0 && lastZone > 0) zoneEl.classList.remove('on');
      lastZone = S.zt; if (S.zt > 0) zoneEl.textContent = S.zone;
    }
  }

  return { render, hud };
}

function HOST_FALLBACK(n: any) { return n.boss ? 1600 : 520; }

export type HollowRenderer = ReturnType<typeof createHollowRenderer>;
