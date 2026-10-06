import { clamp } from '../engine/math';
import { $ } from '../engine/dom';
import { DATA } from '../assets/art';
import { createSpriteLoader } from '../engine/sprites';

export function fitStage(opts: {
  canvas: HTMLCanvasElement;
  narrowH?: number;
  wideH?: number;
}): { VW: number; VH: number } {
  const st = $('stage');
  const narrow = innerWidth < 700;
  const w = narrow ? 480 : 640;
  const h = narrow ? (opts.narrowH ?? 430) : (opts.wideH ?? 360);
  if (opts.canvas.width !== w || opts.canvas.height !== h) {
    opts.canvas.width = w;
    opts.canvas.height = h;
  }
  if (st) st.style.setProperty('--s', clamp((st.clientWidth || w) / (narrow ? 480 : 640), 1, 2.2).toFixed(3));
  return { VW: w, VH: h };
}

export function makeOffscreen(w: number, h: number) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return { c, g: c.getContext('2d')! };
}

export function loader(IMG: Record<string, HTMLImageElement>, busyOn: () => void, busyOff: () => void) {
  return createSpriteLoader(IMG, DATA, { toonBase: '/toons', busyOn, busyOff });
}

export function codeToKey(code: string): string {
  const map: Record<string, string> = {
    KeyW: 'w', KeyA: 'a', KeyS: 's', KeyD: 'd',
    ArrowUp: 'arrowup', ArrowDown: 'arrowdown', ArrowLeft: 'arrowleft', ArrowRight: 'arrowright',
    Space: ' ', ShiftLeft: 'shift', ShiftRight: 'shift',
    KeyJ: 'j', KeyK: 'k', KeyL: 'l', KeyQ: 'q', KeyE: 'e', KeyF: 'f', KeyZ: 'z', KeyX: 'x', KeyV: 'v', KeyC: 'c',
  };
  return map[code] ?? code.toLowerCase();
}
