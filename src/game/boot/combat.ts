import { DATA } from '../assets/art';
import { TICK } from '../engine/math';
import { $ } from '../engine/dom';
import { snd, toggleMute, paintMute, resumeAudio } from '../engine/audio';
import { setCamMatrix as setCamMatrixBase, proj as projBase } from '../engine/projection';
import { CHR, setP1 as setP1Moves } from '../engine/moves';
import { REDUCED_MOTION as RM } from '../engine/env';
import { createDuel, ARENA_A } from '../sim/duel';
import { createDuelRenderer, setArena } from '../render/duel';
import { createSpriteLoader } from '../engine/sprites';
import {
  createOverlay, bindStick, bindActionButtons, bindCamButtons, bindCanvasButtons, bindKeyRelease, bindMuteButtons,
} from '../ui/shell';
import { fitStage, makeOffscreen, codeToKey } from './shared';
import './controlsProbe';

const ROLE: Record<string, string> = {
  Breaker: '#d9894f', Shade: '#9b8bdc', Lance: '#6fbfa8', Beacon: '#dcc66e', Weaver: '#7fb2ea', Warden: '#a9c07a',
};
const QUOTES: Record<string, string[]> = {
  ren_calder: ['The weakest licensed body in the city.', 'The Ledger writes to him. It bargains.'],
  sera_quill: ['Polite in cities. Absolute inside a rift.', 'The air holds still for no one else.'],
  kade_morr: ['He works the edges of other parties.', 'Red Vein collects.'],
  bram_holt: ['He walks in first because someone has to.', 'The Bastion holds.'],
  nyx_lumen: ['She sees the true layout of the Floor.', 'The lantern keeps them honest.'],
  orin_vale: ['A spear longer than he is honest.', 'The corridor is closed.'],
  mairen_solas: ['She keeps the branded from becoming Ash.', 'Mend refuses the wipe.'],
  irix_venn: ['A national-level closer.', 'The Chair is adjourned.'],
  juno_rake: ['She burns Hollows down to a usable path.', 'Emberwake takes its cut.'],
  cinder: ['A fallen Ashwalker, pressed into service.', 'The Host is filed again.'],
  the_carapace: ['A Hollow that learned to stand.', 'The floor reclaims its own.'],
  floor_voice: ['It sets the test. It is not allied.', 'The test is met. The Hollow opens.'],
};

export function mountCombat(): () => void {
  const offs: Array<() => void> = [];
  const IMG: Record<string, HTMLImageElement> = {};
  const cv = $('c') as HTMLCanvasElement;
  const cg = cv.getContext('2d')!;
  let VW = 640, VH = 360, baseZoom = 1;
  let S = makeOffscreen(640, 360);
  let Lc = makeOffscreen(320, 180);
  let Q2 = makeOffscreen(320, 180);
  let Q4 = makeOffscreen(160, 90);
  let Q8 = makeOffscreen(80, 45);
  let B1 = makeOffscreen(640, 360);
  let B2 = makeOffscreen(640, 360);

  function setSize(w: number, h: number) {
    VW = w; VH = h; cv.width = w; cv.height = h;
    S = makeOffscreen(w, h);
    Lc = makeOffscreen(w >> 1, h >> 1);
    Q2 = makeOffscreen(w >> 1, h >> 1);
    Q4 = makeOffscreen(w >> 2, h >> 2);
    Q8 = makeOffscreen(w >> 3, h >> 3);
    B1 = makeOffscreen(w, h);
    B2 = makeOffscreen(w, h);
    baseZoom = Math.min(1.14, (w - 26) / (2 * ARENA_A));
  }
  function fit() {
    const { VW: w, VH: h } = fitStage({ canvas: cv, narrowH: 430, wideH: 360 });
    if (w !== VW || h !== VH || !S.c) setSize(w, h);
  }

  const opt: any = { dof: true, light: true, shake: true, push: true, debug: false, speed: 1, autocam: true, immersive: true, dguard: false, fx: true };
  const DEBUG = new URLSearchParams(location.search).get('debug') === '1';
  try {
    const sv = localStorage.getItem('vs_autocam');
    if (sv !== null) opt.autocam = sv === '1';
    else if (RM) opt.autocam = false;
  } catch { if (RM) opt.autocam = false; }
  const SPEEDS = [1, .5, .25];
  const UI: any = { open: null, slot: 1, p1: 'bram_holt', p2: 'cinder', arena: 'day', s1: 'pixel', s2: 'pixel' };
  let PA = 'bram_holt', PB = 'cinder';
  function setP1(id: string) { PA = id; setP1Moves(id); }
  setP1(PA);

  const DS = createDuel({
    IMG, opt, getPA: () => PA,
    getView: () => ({ baseZoom, vw: VW }),
    project: (x, y, z) => projBase(cam, VW, VH, x, y, z),
    onResult: () => showResult(),
  });
  const { P, E, combo, cam, dir, bot, input } = DS;
  const keys = input.keys;
  const SKINS: any = { pixel: { label: 'Pixel' }, toon: { label: 'Toon' } };
  const SKIN_ORDER = ['pixel', 'toon'];
  let SKP1 = 'pixel', SKP2 = 'pixel';
  function setSkin(n: number, id: string) {
    if (SKINS[id]) { UI['s' + n] = id; try { localStorage.setItem('vs_skin' + n, id); } catch { /* empty */ } }
  }
  function cycleSkin(n: number, d: number) {
    const o = SKIN_ORDER; setSkin(n, o[(o.indexOf(UI['s' + n]) + d + o.length) % o.length]);
  }
  function cycleP1Skin() {
    cycleSkin(1, 1); SKP1 = UI.s1;
    if (SKP1 === 'toon') {
      const need: string[] = [];
      ANIM_P1.forEach((a) => ['', 'p16/', 'p38/'].forEach((p) => need.push('toon/' + PA + '/' + p + a)));
      need.push('toon/shadow');
      loadToons(need, () => {}, true);
    }
    paintSkin();
  }
  function paintSkin() {
    document.querySelectorAll('.slot.s1 .skinname').forEach((lab) => { lab.textContent = SKINS[UI.s1].label; });
  }

  let last = performance.now(), acc = 0, ready = false, raf = 0, alive = true;
  function frame(now: number) {
    if (!alive) return;
    raf = requestAnimationFrame(frame);
    if (!ready) return;
    if (UI.open) { last = now; DR.render(DS); return; }
    const dt = Math.min(.1, (now - last) / 1000); last = now;
    acc += dt * opt.speed;
    let n = 0;
    while (acc >= TICK && n < 8) { DS.simTick(); acc -= TICK; n++; }
    if (n === 8) acc = 0;
    cam.Z = baseZoom * cam.zoom;
    setCamMatrixBase(cam);
    DR.render(DS); DR.hud(DS);
  }

  const ACT: Record<string, string> = { j: 'light', z: 'light', k: 'special', x: 'special', ' ': 'jump', shift: 'dash', v: 'dash' };
  const onKey = (e: KeyboardEvent) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key.toLowerCase();
    if (UI.open) {
      if (UI.open === 'title') { if (k === 'enter') { e.preventDefault(); enterRing(); } return; }
      if (UI.open === 'sel') { if (k === 'enter') { e.preventDefault(); closePick(); } else if (k === 'escape') cancelPick(); return; }
      if (UI.open === 'result') { if (k === 'r') rematch(); else if (k === 'escape') openPick('result'); return; }
      if (k === 'escape') {
        if (UI.open === 'set' || UI.open === 'pause') hideOv();
        else if (UI.open === 'how' || UI.open === 'credits') goOv('title');
      }
      return;
    }
    if (k === 'l' || k === 'h') { e.preventDefault(); if (!e.repeat) { DS.userTouched(); keys.add('l'); DS.press('guard'); } return; }
    if (ACT[k]) { e.preventDefault(); if (!e.repeat) { DS.userTouched(); DS.press(ACT[k]); } return; }
    if (('wasd'.includes(k) && k.length === 1) || k.startsWith('arrow')) { e.preventDefault(); DS.userTouched(); keys.add(k); return; }
    if (e.repeat) return;
    if (k === 'q') DS.rotate(-1);
    else if (k === 'e') DS.rotate(1);
    else if (k === 'c') toggle('autocam');
    else if (k === 'r' && DEBUG) DS.resetAll();
    else if (k === 'f' && DEBUG) toggle('debug');
    else if (k === 't') cycleSpeed();
    else if (k === 'b') cycleP1Skin();
    else if (k === 'm') toggleMute();
    else if (k === 'escape') { e.preventDefault(); showOv('pause'); }
  };
  addEventListener('keydown', onKey);
  offs.push(() => removeEventListener('keydown', onKey));
  offs.push(bindKeyRelease(keys));
  offs.push(bindCamButtons((d) => DS.rotate(d)));
  offs.push(bindCanvasButtons({ UI, press: (a) => { DS.userTouched(); DS.press(a); }, blurFocus: true }));

  function cycleSpeed() {
    const i = (SPEEDS.indexOf(opt.speed) + 1) % SPEEDS.length;
    opt.speed = SPEEDS[i];
    const el = document.querySelector('[data-o=speed]');
    if (el) el.textContent = 'Speed ' + (opt.speed === 1 ? '1×' : opt.speed + '×');
  }
  function toggle(name: string) {
    opt[name] = !opt[name];
    if (name === 'autocam') {
      dir.pause = dir.grace = 0;
      try { localStorage.setItem('vs_autocam', opt.autocam ? '1' : '0'); } catch { /* empty */ }
    }
    const el = document.querySelector(`[data-o=${name}]`);
    if (el) el.setAttribute('aria-pressed', String(opt[name]));
  }
  document.querySelectorAll('#opts [data-o]').forEach((b: any) => {
    const fn = () => {
      const o = b.dataset.o;
      if (o === 'demo') DS.setBot(!bot.on);
      else if (o === 'reset') DS.resetAll();
      else if (o === 'speed') cycleSpeed();
      else toggle(o);
      b.blur();
    };
    b.addEventListener('click', fn);
    offs.push(() => b.removeEventListener('click', fn));
  });
  offs.push(bindStick({ touchMove: input.touchMove, onDown: () => DS.userTouched(), onShow: () => fit() }));
  offs.push(bindActionButtons({ UI, keys, press: (a) => DS.press(a), onPress: () => DS.userTouched(), onPause: () => showOv('pause') }));

  const specIv = window.setInterval(() => {
    const ab = document.querySelector('[data-o=autocam]');
    if (ab) ab.textContent = opt.autocam && dir.pause > 0 ? 'Auto paused ' + Math.ceil(dir.pause / 60) + 's' : 'Auto camera (C)';
    const spec = $('bSpec');
    if (spec && spec.lastChild) spec.lastChild.textContent = (P.state === 'air' || P.state === 'airatk') ? 'Plunge' : 'Launch';
  }, 150);
  offs.push(() => clearInterval(specIv));
  const onResize = () => fit();
  addEventListener('resize', onResize);
  offs.push(() => removeEventListener('resize', onResize));
  const onPtr = () => resumeAudio();
  addEventListener('pointerdown', onPtr);
  offs.push(() => removeEventListener('pointerdown', onPtr));

  const ANIM_P1 = ['idle', 'walk', 'attack1', 'attack2', 'attack3', 'launcher', 'air1', 'plunge', 'jump', 'dash', 'guard', 'victory'];
  const ANIM_P2 = ['idle', 'hit', 'hit_heavy', 'hit_back', 'block_hit', 'guard', 'launch', 'tumble', 'knockdown', 'getup', 'death'];
  const BASEIDLE = /^[a-z_]+\/idle$/;
  const SL = createSpriteLoader(IMG, DATA, {
    toonBase: '/toons',
    busyOn: () => $('busy')?.classList.add('on'),
    busyOff: () => $('busy')?.classList.remove('on'),
    onImgError: (k) => { const el = $('load'); if (el) el.textContent = 'Could not load ' + k; },
  });
  function loadImgs(need: string[], done: () => void) { return SL.loadImgs(need, done); }
  function loadToons(need: string[], done: () => void, quiet?: boolean) { return SL.loadToons(need, done, quiet); }
  function loadFighters(p1: string, s1: string, p2: string, s2: string, done: () => void, quiet?: boolean) {
    const needPx = new Set<string>(), needTx: string[] = [];
    ([[p1, s1, ANIM_P1], [p2, s2, ANIM_P2]] as const).forEach(([id, sk, an]) =>
      an.forEach((a) => ['', 'p16/', 'p38/'].forEach((p) => {
        if (sk === 'toon') needTx.push('toon/' + id + '/' + p + a); else needPx.add(`${id}/${p}${a}`);
      })));
    Object.keys(IMG).forEach((k) => {
      if (k !== 'shadow' && !k.startsWith('arena/') && !k.startsWith('vfx/') && !k.startsWith('toon/') && !BASEIDLE.test(k) && !needPx.has(k)) delete IMG[k];
    });
    if (!quiet) $('busy')?.classList.add('on');
    loadImgs([...needPx], () => {
      if (s1 === 'toon' || s2 === 'toon') {
        Object.values(CHR).forEach((c: any) => needTx.push('toon/' + c.id + '/idle'));
        needTx.push('toon/shadow');
      }
      loadToons(needTx, () => { if (!quiet) $('busy')?.classList.remove('on'); paintCards(); done(); }, quiet);
    });
  }

  const DR = createDuelRenderer({
    IMG, UI, opt, getPA: () => PA, getPB: () => PB, getSKP: () => [SKP1, SKP2],
    gfx: () => ({
      sg: S.g, cg, S: S.c, Lc: Lc.c, lg: Lc.g, Q2: Q2.c, q2g: Q2.g, Q4: Q4.c, q4g: Q4.g,
      Q8: Q8.c, q8g: Q8.g, B1: B1.c, b1g: B1.g, B2: B2.c, b2g: B2.g, VW, VH, baseZoom,
    }),
  });

  let pickReturn = 'title';
  const OVF = createOverlay(UI, keys, {
    focus: { title: 'mFight', sel: 'fight', how: 'howBack', credits: 'credBack', result: 'resGo', pause: 'pResume', set: 'setX' },
    onResume: () => { last = performance.now(); },
  });
  const showOv = OVF.show, hideOv = OVF.hide, goOv = OVF.go;

  function paintSlot() {
    const c = CHR[UI.p1], el = document.querySelector('.slot.s1');
    if (!el || !c) return;
    const sn = el.querySelector('.sn'), st = el.querySelector('.st');
    if (sn) sn.textContent = c.name;
    if (st) st.textContent = `${c.title || ''} · ${c.role}, ${c.weapon}`.replace(/^ · /, '');
    document.querySelectorAll('.card').forEach((k: any) => {
      k.classList.toggle('p1', k.dataset.id === UI.p1); k.classList.remove('p2');
    });
  }
  function sprite(g: CanvasRenderingContext2D, id: string, row: number, f: number, size: number, skin: string) {
    const sk = skin === 'toon' ? 'toon/' : '';
    const im = IMG[sk + id + '/idle'] || IMG[id + '/idle']; if (!im) return;
    const C = im.width / 6, k = C / 96;
    g.imageSmoothingEnabled = C >= 190; g.clearRect(0, 0, size, size);
    g.drawImage(im, f * C + 12 * k, row * C + 6 * k, 72 * k, 72 * k, 0, 0, size, size);
  }
  function paintCards() {
    const sk = UI['s' + UI.slot];
    document.querySelectorAll('#roster .card').forEach((k: any) => {
      const c = k.querySelector('canvas');
      if (c) sprite(c.getContext('2d'), k.dataset.id, 2, 0, 72, sk);
    });
  }
  function applyPick(done?: () => void) {
    loadFighters(UI.p1, UI.s1, UI.p2, UI.s2, () => {
      setP1(UI.p1); PB = 'cinder'; setArena('day'); SKP1 = UI.s1; SKP2 = UI.s2;
      const hpl = $('hpl'); if (hpl) hpl.textContent = CHR[PB].name;
      DS.resetAll(); if (done) done();
    });
  }
  function openPick(returnTo?: string) { pickReturn = returnTo || 'title'; paintSlot(); paintSkin(); goOv('sel'); }
  function closePick() {
    const b = $('fight'); if (b) b.disabled = true; snd(440, .08);
    applyPick(() => { if (b) b.disabled = false; hideOv(); });
  }
  function cancelPick() { if (pickReturn === 'run') hideOv(); else goOv(pickReturn || 'title'); }
  function enterRing() { snd(440, .08); applyPick(() => hideOv()); }
  function showResult() {
    const A = CHR[PA], Q = QUOTES[PA] || ['', ''];
    const rt = $('resTitle'), rl = $('resLine'), rs = $('resStats');
    if (rt) rt.textContent = `${A.name} takes the Hollow.`;
    if (rl) rl.textContent = Q[1] || '';
    const secs = Math.max(.1, (DS.tick - DS.fightStart) / 60).toFixed(1);
    if (rs) rs.innerHTML = `<div><b>${DS.fsHits}</b>hits</div><div><b>${DS.fsDmg}</b>damage</div><div><b>${secs}s</b>bout</div>`;
    goOv('result'); snd(180, .25, 'sawtooth'); setTimeout(() => snd(520, .2, 'triangle'), 180);
  }
  function rematch() { hideOv(); DS.resetAll(); snd(440, .08); }

  let hov: string | null = null;
  let cardRaf = 0;
  function initUI() {
    const ros = $('roster');
    if (ros) {
      ros.innerHTML = Object.values(CHR).map((c: any) =>
        `<button class="card" data-id="${c.id}" style="--rc:${ROLE[c.role] || '#999'}" aria-label="${c.name}, ${c.role}, ${c.weapon}"><canvas width="72" height="72"></canvas><span class="nm">${c.name}</span><span class="rl">${c.role}</span></button>`
      ).join('');
      paintCards();
      ros.querySelectorAll('.card').forEach((k: any) => {
        k.onmouseenter = () => { hov = k.dataset.id; };
        k.onmouseleave = () => { if (hov === k.dataset.id) hov = null; };
        k.onclick = () => { UI.p1 = k.dataset.id; hov = null; paintSlot(); snd(440, .05); };
      });
    }
    const click = (id: string, fn: () => void) => {
      const el = $(id); if (!el) return;
      const h = () => fn();
      el.addEventListener('click', h);
      offs.push(() => el.removeEventListener('click', h));
    };
    click('rndBtn', () => { const ids = Object.keys(CHR); UI.p1 = ids[(Math.random() * ids.length) | 0]; hov = null; paintSlot(); });
    click('fight', () => closePick());
    click('openSel', () => openPick('run'));
    click('mFight', () => enterRing());
    click('mPick', () => { snd(440, .06); openPick('title'); });
    click('mHow', () => { snd(660, .05); goOv('how'); });
    click('mCred', () => { snd(660, .05); goOv('credits'); });
    offs.push(bindMuteButtons());
    click('howBack', () => { snd(440, .05); goOv('title'); });
    click('credBack', () => { snd(440, .05); goOv('title'); });
    click('pResume', () => { snd(440, .05); hideOv(); });
    click('pQuit', () => { snd(330, .1); DS.resetAll(); goOv('title'); });
    click('resGo', () => rematch());
    click('resSel', () => { snd(440, .05); openPick('result'); });
    click('openPause', () => { if (!UI.open) showOv('pause'); });
    click('openSet', () => showOv('set'));
    click('setX', () => hideOv());
    paintMute();
    const cs0 = document.querySelector('.slot.s1 canvas') as HTMLCanvasElement | null;
    const loop = (t: number) => {
      if (!alive) return;
      cardRaf = requestAnimationFrame(loop);
      if (UI.open !== 'sel' || !cs0) return;
      const f = Math.floor(t / 1000 * 6) % 6;
      sprite(cs0.getContext('2d')!, hov || UI.p1, 1, f, 256, UI.s1);
    };
    cardRaf = requestAnimationFrame(loop);
    const q = new URLSearchParams(location.search);
    if (CHR[q.get('p1') || '']) UI.p1 = q.get('p1');
    document.querySelectorAll('.slot.s1 [data-sk]').forEach((b: any) => {
      const fn = (e: Event) => {
        e.stopPropagation(); cycleSkin(1, +b.dataset.sk); paintSkin(); paintSlot();
        loadFighters(UI.p1, UI.s1, UI.p2, UI.s2, () => {}, true);
      };
      b.addEventListener('click', fn);
      offs.push(() => b.removeEventListener('click', fn));
    });
    paintSkin();
    try {
      const a = localStorage.getItem('vs_skin1');
      if (!q.get('s1') && !q.get('skin') && a && SKINS[a]) UI.s1 = a;
    } catch { /* empty */ }
    paintSlot();
    if (q.get('demo') === '1') applyPick();
    else showOv('title');
  }

  function boot() {
    initUI();
    if (!DEBUG) {
      const dp = document.querySelector('#devplay') as HTMLElement | null;
      if (dp) dp.style.display = 'none';
      const db = document.querySelector('[data-o=debug]') as HTMLElement | null;
      if (db) db.style.display = 'none';
    }
    fit(); DS.resetAll();
    const ac = document.querySelector('[data-o=autocam]');
    if (ac) ac.setAttribute('aria-pressed', String(opt.autocam));
    $('load')?.remove();
    ready = true;
    const q = new URLSearchParams(location.search);
    if (q.get('demo') === '1') DS.setBot(true);
    if (q.get('debug') === '1') toggle('debug');
    setArena('day');
    SKP1 = UI.s1; SKP2 = UI.s2;
  }

  window.__vs = {
    P, E, combo, cam, dir, bot, opt,
    press: (a: string) => DS.press(a),
    resetAll: () => DS.resetAll(),
    setBot: (on: boolean) => DS.setBot(on),
    rotate: (d: number) => DS.rotate(d),
    simTick: () => DS.simTick(),
    get tick() { return DS.tick; },
  };
  window.__controlsTest = {
    getYaw: () => {
      const r = DS.input;
      const keys = r.keys, tm = r.touchMove;
      let x = ((keys.has('d') || keys.has('arrowright')) ? 1 : 0) - ((keys.has('a') || keys.has('arrowleft')) ? 1 : 0) + tm.x;
      let y = ((keys.has('s') || keys.has('arrowdown')) ? 1 : 0) - ((keys.has('w') || keys.has('arrowup')) ? 1 : 0) + tm.y;
      if (Math.hypot(x, y) < .1) {
        const a = -cam.ang * Math.PI / 180;
        const fx = Math.cos(P.face * Math.PI / 180), fy = Math.sin(P.face * Math.PI / 180);
        const sx = fx * Math.cos(a) + fy * Math.sin(a);
        const sy = -fx * Math.sin(a) + fy * Math.cos(a);
        return Math.atan2(-sx, -sy);
      }
      return Math.atan2(-x, -y);
    },
    getSpeed: () => Math.hypot(P.vx, P.vy),
    setKeys: (codes: string[]) => {
      keys.clear();
      for (const c of codes) keys.add(codeToKey(c));
    },
    getFace: () => P.face,
  };

  loadImgs(Object.keys(DATA.img).filter((k) => k === 'shadow' || k.startsWith('arena/') || k.startsWith('vfx/') || BASEIDLE.test(k)), boot);
  raf = requestAnimationFrame(frame);

  return () => {
    alive = false;
    cancelAnimationFrame(raf);
    cancelAnimationFrame(cardRaf);
    offs.forEach((f) => f());
    document.body.style.overflow = '';
    document.body.classList.remove('gb');
    delete window.__vs;
    delete window.__controlsTest;
  };
}
