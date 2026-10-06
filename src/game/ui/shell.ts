// Shared overlay + control wiring.
import { $ } from '../engine/dom';
import { snd, toggleMute } from '../engine/audio';

export interface OverlayState {
  open: string | null;
}

export interface OverlayOpts {
  focus?: Record<string, string>;
  onResume?: () => void;
}

/** Overlay stack: only one panel is 'on' at a time and gameplay input is muted. */
export function createOverlay(UI: OverlayState, keys: Set<string>, opts: OverlayOpts = {}) {
  const show = (id: string) => {
    if (UI.open) {
      const prev = $(UI.open);
      if (prev) prev.classList.remove('on');
    }
    UI.open = id;
    keys.clear();
    const el = $(id);
    if (el) el.classList.add('on');
    document.body.style.overflow = 'hidden';
    const f = opts.focus && opts.focus[id] && $(opts.focus[id]);
    if (f) { try { f.focus({ preventScroll: true }); } catch { /* empty */ } }
  };
  const hide = () => {
    if (!UI.open) return;
    const el = $(UI.open);
    if (el) el.classList.remove('on');
    UI.open = null;
    document.body.style.overflow = '';
    if (opts.onResume) opts.onResume();
  };
  return { show, hide, go: (id: string) => { hide(); show(id); }, get open() { return UI.open; } };
}

export interface StickOpts {
  touchMove: { x: number; y: number };
  onDown?: () => void;
  onShow?: () => void;
}

function on(el: EventTarget | null, type: string, fn: EventListenerOrEventListenerObject, opts?: AddEventListenerOptions) {
  if (!el) return () => {};
  el.addEventListener(type, fn, opts);
  return () => el.removeEventListener(type, fn, opts);
}

/** Virtual stick plus coarse-pointer detection; reveals the touch bar. */
export function bindStick(o: StickOpts): () => void {
  const bar = $('touch');
  const show = () => {
    if (bar) bar.classList.add('show');
    document.body.classList.add('gb');
    if (o.onShow) o.onShow();
  };
  const offs: Array<() => void> = [];
  try {
    if (matchMedia('(pointer:coarse)').matches) show();
  } catch { /* empty */ }
  offs.push(on(window, 'touchstart', show, { once: true, passive: true }));

  const stick = $('stick'), knob = $('knob');
  let stickId: number | null = null;
  const move = (e: any) => {
    if (!stick || !knob) return;
    const r = stick.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    let dx = (e.clientX - cx) / (r.width / 2), dy = (e.clientY - cy) / (r.height / 2);
    const m = Math.hypot(dx, dy);
    if (m > 1) { dx /= m; dy /= m; }
    o.touchMove.x = Math.abs(dx) < .15 ? 0 : dx;
    o.touchMove.y = Math.abs(dy) < .15 ? 0 : dy;
    knob.style.transform = `translate(${dx * 36}px,${dy * 36}px)`;
  };
  offs.push(on(stick, 'pointerdown', (e: any) => {
    stickId = e.pointerId; stick.setPointerCapture(e.pointerId); if (o.onDown) o.onDown(); move(e);
  }));
  offs.push(on(stick, 'pointermove', (e: any) => { if (e.pointerId === stickId) move(e); }));
  const end = (e: any) => {
    if (e.pointerId !== stickId) return;
    stickId = null;
    o.touchMove.x = 0; o.touchMove.y = 0;
    if (knob) knob.style.transform = '';
  };
  offs.push(on(stick, 'pointerup', end));
  offs.push(on(stick, 'pointercancel', end));
  return () => offs.forEach((f) => f());
}

export function bindActionButtons(o: {
  UI: OverlayState;
  keys: Set<string>;
  press: (a: string) => void;
  onPause: () => void;
  onPress?: () => void;
}): () => void {
  const offs: Array<() => void> = [];
  document.querySelectorAll('#btns button[data-a]').forEach((b: any) => {
    const a = b.dataset.a;
    offs.push(on(b, 'pointerdown', (e: any) => {
      e.preventDefault();
      if (o.UI.open) return;
      if (a === 'guard') o.keys.add('l');
      if (o.onPress) o.onPress();
      o.press(a);
      b.classList.add('dn');
    }));
    const up = () => {
      b.classList.remove('dn');
      if (a === 'guard') o.keys.delete('l');
    };
    offs.push(on(b, 'pointerup', up));
    offs.push(on(b, 'pointercancel', up));
    offs.push(on(b, 'pointerleave', up));
  });
  const bPause = $('bPause');
  offs.push(on(bPause, 'pointerdown', (e: any) => { e.preventDefault(); if (!o.UI.open) o.onPause(); }));
  return () => offs.forEach((f) => f());
}

export function bindCamButtons(rotate: (d: number) => void): () => void {
  const offs: Array<() => void> = [];
  offs.push(on($('camL'), 'click', (e: any) => { rotate(-1); e.currentTarget.blur(); }));
  offs.push(on($('camR'), 'click', (e: any) => { rotate(1); e.currentTarget.blur(); }));
  return () => offs.forEach((f) => f());
}

export function bindCanvasButtons(o: { UI: OverlayState; press: (a: string) => void; blurFocus?: boolean }): () => void {
  const offs: Array<() => void> = [];
  offs.push(on($('c'), 'mousedown', (e: any) => {
    if (o.UI.open) return;
    if (e.button === 0) { e.preventDefault(); o.press('light'); }
    else if (e.button === 2) { e.preventDefault(); o.press('special'); }
    const active = document.activeElement as any;
    if (o.blurFocus && active && active.blur) active.blur();
  }));
  offs.push(on($('stage'), 'contextmenu', (e: any) => e.preventDefault()));
  return () => offs.forEach((f) => f());
}

export function bindMuteButtons(): () => void {
  const m = () => { toggleMute(); snd(660, .05); };
  const offs: Array<() => void> = [];
  offs.push(on($('mMute'), 'click', m));
  offs.push(on($('pMute'), 'click', m));
  return () => offs.forEach((f) => f());
}

export function bindKeyRelease(keys: Set<string>): () => void {
  const up = (e: KeyboardEvent) => {
    const k = e.key.toLowerCase();
    keys.delete(k);
    if (k === 'h') keys.delete('l');
    if (k === ' ') e.preventDefault();
  };
  const blur = () => keys.clear();
  addEventListener('keyup', up);
  addEventListener('blur', blur);
  return () => {
    removeEventListener('keyup', up);
    removeEventListener('blur', blur);
  };
}
