import { DATA } from '../assets/art';
import { TICK } from '../engine/math';
import { $ } from '../engine/dom';
import { snd, toggleMute, paintMute, resumeAudio } from '../engine/audio';
import { setCamMatrix as setCamMatrixBase, proj as projBase } from '../engine/projection';
import { CHR, setP1 as setP1Moves } from '../engine/moves';
import { createHollow } from '../sim/hollow';
import { createHollowRenderer } from '../render/hollow';
import { createSpriteLoader } from '../engine/sprites';
import {
  createOverlay, bindStick, bindActionButtons, bindCamButtons, bindCanvasButtons, bindKeyRelease, bindMuteButtons,
} from '../ui/shell';
import { fitStage, makeOffscreen, codeToKey } from './shared';
import './controlsProbe';

const ROLE: Record<string, string> = {
  Breaker: '#d9894f', Shade: '#9b8bdc', Lance: '#6fbfa8', Beacon: '#dcc66e', Weaver: '#7fb2ea', Warden: '#a9c07a',
};

export function mountHollow(): () => void {
  const offs: Array<() => void> = [];
  const IMG: Record<string, HTMLImageElement> = {};
  const cv = $('c') as HTMLCanvasElement;
  const cg = cv.getContext('2d')!;
  let VW = 640, VH = 360, baseZoom = 1;
  let S = makeOffscreen(640, 360);

  function setSize(w: number, h: number) {
    VW = w; VH = h; cv.width = w; cv.height = h;
    S = makeOffscreen(w, h);
    baseZoom = Math.min(1.05, w / 640);
  }
  function fit() {
    const { VW: w, VH: h } = fitStage({ canvas: cv, narrowH: 430, wideH: 360 });
    if (w !== VW || h !== VH || !S.c) setSize(w, h);
  }

  const opt: any = { dof: false, light: true, shake: true, push: true, debug: false, speed: 1, fx: true };
  const UI: any = { open: null, slot: 1, p1: 'ren_calder', s1: 'pixel' };
  setP1Moves(UI.p1);

  const HS = createHollow({
    IMG, opt, UI,
    project: (x, y, z) => projBase(HS.cam, VW, VH, x, y, z),
  });
  const { P, cam, input } = HS;
  const keys = input.keys;
  const SKINS: any = { pixel: { label: 'Pixel' }, toon: { label: 'Toon' } };
  const SKIN_ORDER = ['pixel', 'toon'];
  function setSkin(id: string) {
    if (SKINS[id]) { UI.s1 = id; try { localStorage.setItem('vs_skin1', id); } catch { /* empty */ } }
  }
  function cycleSkin(d: number) {
    const o = SKIN_ORDER; setSkin(o[(o.indexOf(UI.s1) + d + o.length) % o.length]);
  }
  function paintSkin() {
    document.querySelectorAll('.slot.s1 .skinname').forEach((lab) => { lab.textContent = SKINS[UI.s1].label; });
  }

  let last = performance.now(), acc = 0, ready = false, raf = 0, alive = true;
  let shownDead = false, shownWin = false;
  function frame(now: number) {
    if (!alive) return;
    raf = requestAnimationFrame(frame);
    if (!ready) return;
    if (UI.open) { last = now; DR.render(HS); return; }
    const dt = Math.min(.1, (now - last) / 1000); last = now;
    acc += dt;
    let n = 0;
    while (acc >= TICK && n < 8) { HS.simTick(); acc -= TICK; n++; }
    if (n === 8) acc = 0;
    cam.Z = baseZoom * (cam.zoom || 1);
    setCamMatrixBase(cam);
    DR.render(HS); DR.hud(HS);
    if (HS.dead && !shownDead) { shownDead = true; goOv('dead'); }
    if (HS.won && !shownWin) { shownWin = true; goOv('end'); }
  }

  const ACT: Record<string, string> = { j: 'light', z: 'light', k: 'special', x: 'special', ' ': 'jump', shift: 'dash', v: 'dash' };
  const onKey = (e: KeyboardEvent) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key.toLowerCase();
    if (UI.open) {
      if (UI.open === 'title') { if (k === 'enter') { e.preventDefault(); openCreate(); } return; }
      if (UI.open === 'create') { if (k === 'enter') { e.preventDefault(); descend(); } else if (k === 'escape') goOv('title'); return; }
      if (UI.open === 'dead') { if (k === 'r') walkIn(); else if (k === 'escape') goOv('title'); return; }
      if (UI.open === 'end') { if (k === 'r') walkIn(); else if (k === 'escape') goOv('title'); return; }
      if (k === 'escape') {
        if (UI.open === 'pause') hideOv();
        else if (UI.open === 'how' || UI.open === 'credits') goOv('title');
      }
      return;
    }
    if (k === 'l' || k === 'h') { e.preventDefault(); if (!e.repeat) { keys.add('l'); HS.press('guard'); } return; }
    if (k === 'f') { e.preventDefault(); if (!e.repeat) HS.press('use'); return; }
    if (ACT[k]) { e.preventDefault(); if (!e.repeat) HS.press(ACT[k]); return; }
    if (('wasd'.includes(k) && k.length === 1) || k.startsWith('arrow')) { e.preventDefault(); keys.add(k); return; }
    if (e.repeat) return;
    if (k === 'q') HS.rotate(-1);
    else if (k === 'e') HS.rotate(1);
    else if (k === 'm') toggleMute();
    else if (k === 'escape') { e.preventDefault(); showOv('pause'); }
  };
  addEventListener('keydown', onKey);
  offs.push(() => removeEventListener('keydown', onKey));
  offs.push(bindKeyRelease(keys));
  offs.push(bindCamButtons((d) => HS.rotate(d)));
  offs.push(bindCanvasButtons({ UI, press: (a) => HS.press(a), blurFocus: true }));
  offs.push(bindStick({ touchMove: input.touchMove, onShow: () => fit() }));
  offs.push(bindActionButtons({
    UI, keys,
    press: (a) => HS.press(a === 'use' ? 'use' : a),
    onPause: () => showOv('pause'),
  }));

  const onResize = () => fit();
  addEventListener('resize', onResize);
  offs.push(() => removeEventListener('resize', onResize));
  const onPtr = () => resumeAudio();
  addEventListener('pointerdown', onPtr);
  offs.push(() => removeEventListener('pointerdown', onPtr));

  const ANIM_P1 = ['idle', 'walk', 'attack1', 'attack2', 'attack3', 'launcher', 'air1', 'plunge', 'jump', 'dash', 'guard', 'victory', 'death', 'hit'];
  const ANIM_HOST = ['idle', 'walk', 'attack1', 'attack2', 'attack3', 'hit', 'hit_heavy', 'hit_back', 'block_hit', 'guard', 'launch', 'tumble', 'knockdown', 'getup', 'death'];
  const BASEIDLE = /^[a-z_]+\/idle$/;
  const SL = createSpriteLoader(IMG, DATA, {
    toonBase: '/toons',
    busyOn: () => $('busy')?.classList.add('on'),
    busyOff: () => $('busy')?.classList.remove('on'),
    onImgError: (k) => { const el = $('load'); if (el) el.textContent = 'Could not load ' + k; },
  });
  function loadImgs(need: string[], done: () => void) { return SL.loadImgs(need, done); }
  function loadToons(need: string[], done: () => void, quiet?: boolean) { return SL.loadToons(need, done, quiet); }
  function loadFighters(p1: string, s1: string, done: () => void, quiet?: boolean) {
    const needPx = new Set<string>(), needTx: string[] = [];
    const pack = (id: string, an: string[]) => an.forEach((a) => ['', 'p16/', 'p38/'].forEach((p) => {
      if (s1 === 'toon') needTx.push('toon/' + id + '/' + p + a); else needPx.add(`${id}/${p}${a}`);
    }));
    pack(p1, ANIM_P1);
    pack('cinder', ANIM_HOST);
    pack('the_carapace', ANIM_HOST);
    if (!quiet) $('busy')?.classList.add('on');
    loadImgs([...needPx], () => {
      loadToons(needTx, () => { if (!quiet) $('busy')?.classList.remove('on'); paintCards(); done(); }, quiet);
    });
  }

  const DR = createHollowRenderer({
    IMG, UI, opt,
    getView: () => ({ VW, VH, baseZoom }),
    gfx: () => ({ sg: S.g, cg, S: S.c, VW, VH, baseZoom }),
  });

  const OVF = createOverlay(UI, keys, {
    focus: { title: 'mCreate', create: 'descend', how: 'howBack', credits: 'credBack', pause: 'pResume', dead: 'deadGo', end: 'endGo' },
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
      k.classList.toggle('p1', k.dataset.id === UI.p1);
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
    document.querySelectorAll('#roster .card').forEach((k: any) => {
      const c = k.querySelector('canvas');
      if (c) sprite(c.getContext('2d'), k.dataset.id, 2, 0, 72, UI.s1);
    });
  }
  function applyPick(done?: () => void) {
    loadFighters(UI.p1, UI.s1, () => {
      HS.setPa(UI.p1);
      shownDead = shownWin = false;
      HS.reset();
      const hpl = $('hpl'); if (hpl) hpl.textContent = CHR[UI.p1]?.name || 'You';
      if (done) done();
    });
  }
  function openCreate() { paintSlot(); paintSkin(); goOv('create'); }
  function descend() {
    const b = $('descend'); if (b) b.disabled = true; snd(440, .08);
    applyPick(() => { if (b) b.disabled = false; hideOv(); });
  }
  function walkIn() {
    shownDead = shownWin = false;
    hideOv(); HS.reset(); snd(440, .08);
  }

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
    click('mCreate', () => { snd(440, .06); openCreate(); });
    click('openCreate', () => openCreate());
    click('descend', () => descend());
    click('mHow', () => { snd(660, .05); goOv('how'); });
    click('openHow', () => goOv('how'));
    click('mCred', () => { snd(660, .05); goOv('credits'); });
    offs.push(bindMuteButtons());
    click('howBack', () => { snd(440, .05); goOv('title'); });
    click('credBack', () => { snd(440, .05); goOv('title'); });
    click('pResume', () => { snd(440, .05); hideOv(); });
    click('pQuit', () => { snd(330, .1); HS.reset(); shownDead = shownWin = false; goOv('title'); });
    click('openPause', () => { if (!UI.open) showOv('pause'); });
    click('deadGo', () => walkIn());
    click('deadTitle', () => goOv('title'));
    click('endGo', () => walkIn());
    click('endTitle', () => goOv('title'));
    paintMute();
    const cs0 = document.querySelector('.slot.s1 canvas') as HTMLCanvasElement | null;
    const loop = (t: number) => {
      if (!alive) return;
      cardRaf = requestAnimationFrame(loop);
      if (UI.open !== 'create' || !cs0) return;
      const f = Math.floor(t / 1000 * 6) % 6;
      sprite(cs0.getContext('2d')!, hov || UI.p1, 1, f, 256, UI.s1);
    };
    cardRaf = requestAnimationFrame(loop);
    document.querySelectorAll('.slot.s1 [data-sk]').forEach((b: any) => {
      const fn = (e: Event) => {
        e.stopPropagation(); cycleSkin(+b.dataset.sk); paintSkin(); paintSlot();
        loadFighters(UI.p1, UI.s1, () => {}, true);
      };
      b.addEventListener('click', fn);
      offs.push(() => b.removeEventListener('click', fn));
    });
    paintSkin();
    paintSlot();
    showOv('title');
  }

  function boot() {
    initUI();
    fit(); HS.reset();
    $('load')?.remove();
    ready = true;
  }

  window.__hollow = HS;
  window.__controlsTest = {
    getYaw: () => {
      const r = HS.input;
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

  loadImgs(Object.keys(DATA.img).filter((k) => k === 'shadow' || k.startsWith('vfx/') || BASEIDLE.test(k)), boot);
  raf = requestAnimationFrame(frame);

  return () => {
    alive = false;
    cancelAnimationFrame(raf);
    cancelAnimationFrame(cardRaf);
    offs.forEach((f) => f());
    document.body.style.overflow = '';
    document.body.classList.remove('gb');
    delete window.__hollow;
    delete window.__controlsTest;
  };
}
