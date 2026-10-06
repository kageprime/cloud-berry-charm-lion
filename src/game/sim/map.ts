// True 2:1 isometric hollow map — diamond tiles in the same world as the
// practice ring (tileXY), open rooms, no tall walls. Void is unwalkable abyss.
import { TILE as T } from './iso';

export const TILE = T;

export type Cell = { u: number; v: number };

export interface Room {
  id: string;
  name: string;
  u0: number; v0: number; u1: number; v1: number;
}

/** Open halls sized like the practice ring (7×7) plus two larger pits. */
export const ROOMS: Room[] = [
  { id: 'ash', name: 'Depth I · The Ash Hall', u0: 1, v0: 1, u1: 8, v1: 8 },
  { id: 'quiet', name: 'The Quiet Seal', u0: 14, v0: 1, u1: 21, v1: 8 },
  { id: 'press', name: 'Depth II · The Pressing Floor', u0: 12, v0: 14, u1: 23, v1: 25 },
  { id: 'last', name: 'Depth III · The Last Carrier', u0: 12, v0: 30, u1: 23, v1: 41 },
];

const CORRIDORS: Array<[number, number, number, number]> = [
  [8, 4, 14, 6],     // ash → quiet
  [16, 8, 18, 14],   // quiet → press
  [16, 25, 18, 30],  // press → last
];

export const SPAWN: Cell = { u: 2.5, v: 2.5 };
export const REST: Cell = { u: 17.5, v: 4.5 };
export const CHEST_BONE: Cell = { u: 6.5, v: 6.5 };
export const CHEST_EMBER: Cell = { u: 17.5, v: 38.5 };

export const HOST_SPAWNS: Array<{ u: number; v: number; name: string; boss?: boolean }> = [
  { u: 6.2, v: 3.2, name: 'Tam Orrel' },
  { u: 4.4, v: 6.4, name: 'Edda Voss' },
  { u: 14.5, v: 16.5, name: 'Wick' },
  { u: 20.5, v: 18.5, name: 'Marra Dunn' },
  { u: 17.5, v: 22.5, name: 'Corrin' },
  { u: 17.5, v: 35.5, name: 'Pell, the last carrier', boss: true },
];

const walk = new Set<string>();
function paint(u0: number, v0: number, u1: number, v1: number) {
  for (let v = v0; v < v1; v++) for (let u = u0; u < u1; u++) walk.add(u + ',' + v);
}
for (const r of ROOMS) paint(r.u0, r.v0, r.u1, r.v1);
for (const [a, b, c, d] of CORRIDORS) paint(a, b, c, d);

export const FLOOR: Cell[] = [...walk].map((k) => {
  const [u, v] = k.split(',').map(Number);
  return { u, v };
});

export function isFloor(u: number, v: number): boolean {
  return walk.has((u | 0) + ',' + (v | 0));
}

export function roomAt(u: number, v: number): Room | undefined {
  return ROOMS.find((r) => u >= r.u0 && u < r.u1 && v >= r.v0 && v < r.v1);
}

/** Four corner braziers per room — short, like the practice ring. */
export function brazierCells(): Cell[] {
  const out: Cell[] = [];
  for (const r of ROOMS) {
    const inset = 0.85;
    out.push(
      { u: r.u0 + inset, v: r.v0 + inset },
      { u: r.u1 - inset, v: r.v0 + inset },
      { u: r.u0 + inset, v: r.v1 - inset },
      { u: r.u1 - inset, v: r.v1 - inset },
    );
  }
  return out;
}
