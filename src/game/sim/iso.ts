/** 2:1 isometric diamond world — same basis as the practice ring. */
export const TILE = 32;

export function tileXY(u: number, v: number): [number, number] {
  return [(u - v) * TILE, (u + v) * TILE];
}

export function w2uv(x: number, y: number): [number, number] {
  return [(y + x) / (2 * TILE), (y - x) / (2 * TILE)];
}
