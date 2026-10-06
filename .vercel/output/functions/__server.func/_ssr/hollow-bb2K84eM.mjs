import { A as depthOf, B as rnd, C as codeToKey, D as createOverlay, E as createFx, F as paintMute, G as snap8, I as poly, J as wrap, K as snd, L as proj, M as hash, N as lerp, O as createSpriteLoader, P as makeOffscreen, R as rad, S as clamp, U as setCamMatrix, V as rowOf, W as setP1, _ as bindCamButtons, a as DATA, b as bindMuteButtons, c as MOVE, d as TAU, f as TICK, g as bindActionButtons, h as animFps, i as CHR, j as fitStage, k as deg, m as angDiff, n as ARENAS, o as EL, p as VFX, q as toggleMute, r as CHAIN_NEXT, s as META, t as $, u as STYLE, v as bindCanvasButtons, x as bindStick, y as bindKeyRelease, z as resumeAudio } from "./shared-BOBe5Bkb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hollow-bb2K84eM.js
function tileXY(u, v) {
	return [(u - v) * 32, (u + v) * 32];
}
function w2uv(x, y) {
	return [(y + x) / 64, (y - x) / 64];
}
/** Open halls sized like the practice ring (7×7) plus two larger pits. */
var ROOMS = [
	{
		id: "ash",
		name: "Depth I · The Ash Hall",
		u0: 1,
		v0: 1,
		u1: 8,
		v1: 8
	},
	{
		id: "quiet",
		name: "The Quiet Seal",
		u0: 14,
		v0: 1,
		u1: 21,
		v1: 8
	},
	{
		id: "press",
		name: "Depth II · The Pressing Floor",
		u0: 12,
		v0: 14,
		u1: 23,
		v1: 25
	},
	{
		id: "last",
		name: "Depth III · The Last Carrier",
		u0: 12,
		v0: 30,
		u1: 23,
		v1: 41
	}
];
var CORRIDORS = [
	[
		8,
		4,
		14,
		6
	],
	[
		16,
		8,
		18,
		14
	],
	[
		16,
		25,
		18,
		30
	]
];
var SPAWN = {
	u: 2.5,
	v: 2.5
};
var REST = {
	u: 17.5,
	v: 4.5
};
var CHEST_BONE = {
	u: 6.5,
	v: 6.5
};
var CHEST_EMBER = {
	u: 17.5,
	v: 38.5
};
var HOST_SPAWNS = [
	{
		u: 6.2,
		v: 3.2,
		name: "Tam Orrel"
	},
	{
		u: 4.4,
		v: 6.4,
		name: "Edda Voss"
	},
	{
		u: 14.5,
		v: 16.5,
		name: "Wick"
	},
	{
		u: 20.5,
		v: 18.5,
		name: "Marra Dunn"
	},
	{
		u: 17.5,
		v: 22.5,
		name: "Corrin"
	},
	{
		u: 17.5,
		v: 35.5,
		name: "Pell, the last carrier",
		boss: true
	}
];
var walk = /* @__PURE__ */ new Set();
function paint(u0, v0, u1, v1) {
	for (let v = v0; v < v1; v++) for (let u = u0; u < u1; u++) walk.add(u + "," + v);
}
for (const r of ROOMS) paint(r.u0, r.v0, r.u1, r.v1);
for (const [a, b, c, d] of CORRIDORS) paint(a, b, c, d);
var FLOOR = [...walk].map((k) => {
	const [u, v] = k.split(",").map(Number);
	return {
		u,
		v
	};
});
function isFloor(u, v) {
	return walk.has((u | 0) + "," + (v | 0));
}
function roomAt(u, v) {
	return ROOMS.find((r) => u >= r.u0 && u < r.u1 && v >= r.v0 && v < r.v1);
}
/** Four corner braziers per room — short, like the practice ring. */
function brazierCells() {
	const out = [];
	for (const r of ROOMS) {
		const inset = .85;
		out.push({
			u: r.u0 + inset,
			v: r.v0 + inset
		}, {
			u: r.u1 - inset,
			v: r.v0 + inset
		}, {
			u: r.u0 + inset,
			v: r.v1 - inset
		}, {
			u: r.u1 - inset,
			v: r.v1 - inset
		});
	}
	return out;
}
var P_HP = 1200;
var BOSS_HP = 1600;
var G_PLAYER = 1500;
var E_JUGGLE_SCALE = .12;
var E_BOUNCE_G = 1100;
var HOST_ATK = {
	hit_frames: [2],
	cancel_from: 4,
	name: "Cut"
};
var mkEnt = () => ({
	x: 0,
	y: 0,
	z: 0,
	vx: 0,
	vy: 0,
	vz: 0,
	face: 0,
	anim: "idle",
	t: 0,
	state: "idle",
	frame: null
});
function setAnim(e, a) {
	if (e.anim !== a) {
		e.anim = a;
		e.t = 0;
	}
}
function frameIdx(e) {
	return Math.min(5, Math.floor(e.t * animFps(e.anim)));
}
function createHollow(deps) {
	const { IMG, opt, UI } = deps;
	const { parts, rings, nums, flashes, spark, dust, flare, ring, flash, num, updateFx, vfxTint, stripFx } = createFx(opt, IMG);
	let tick = 0, hitstop = 0;
	const input = {
		keys: /* @__PURE__ */ new Set(),
		buf: [],
		touchMove: {
			x: 0,
			y: 0
		}
	};
	const { keys, buf } = input;
	const P = Object.assign(mkEnt(), {
		state: "ground",
		airCount: 0,
		plunged: false,
		hitDone: /* @__PURE__ */ new Set(),
		slot: null,
		move: null,
		cur: null,
		hp: P_HP,
		hpShown: P_HP,
		hpMax: P_HP,
		inv: 0
	});
	let H = [];
	const combo = {
		hits: 0,
		dmg: 0,
		air: 0,
		max: 0,
		active: false,
		endT: 0,
		show: 0,
		lastName: "",
		chain: []
	};
	const cam = {
		pv: "",
		py: .5,
		pt: .5,
		pk: 0,
		pkt: 0,
		ch: 0,
		fz: 0,
		ang: 0,
		target: 0,
		zoom: 1,
		zv: 0,
		fx: 0,
		fy: 0,
		fk: 0,
		shake: 0,
		shx: 0,
		shy: 0,
		c: 1,
		s: 0,
		frx: 0,
		fry: 0,
		Z: 1,
		latch: null
	};
	const embers = [];
	const texts = [];
	let CHESTS = [];
	const BRZ = brazierCells().map((c, i) => {
		const [x, y] = tileXY(c.u, c.v);
		return {
			x,
			y,
			ph: i * 1.7
		};
	});
	const RESTW = (() => {
		const [x, y] = tileXY(REST.u, REST.v);
		return {
			x,
			y
		};
	})();
	let dead = false, won = false, zone = "", zt = 0, pa = "ren_calder";
	let ash = 0;
	const dir = {
		latch: null,
		pause: 0,
		tw: null
	};
	function spawnWorld() {
		const [px, py] = tileXY(SPAWN.u, SPAWN.v);
		Object.assign(P, mkEnt(), {
			x: px,
			y: py,
			face: 0,
			state: "ground",
			airCount: 0,
			plunged: false,
			slot: null,
			move: null,
			hp: P_HP,
			hpShown: P_HP,
			hpMax: P_HP,
			inv: 0
		});
		P.hitDone = /* @__PURE__ */ new Set();
		H = HOST_SPAWNS.map((s) => {
			const [x, y] = tileXY(s.u, s.v);
			const boss = !!s.boss;
			return Object.assign(mkEnt(), {
				x,
				y,
				face: 180,
				hp: boss ? BOSS_HP : 520,
				hpShown: boss ? BOSS_HP : 520,
				hpMax: boss ? BOSS_HP : 520,
				juggle: 0,
				stunT: 0,
				spiked: false,
				launchT: 0,
				kd: null,
				shk: 0,
				n: s.name,
				boss,
				skin: boss ? "the_carapace" : "cinder",
				st: boss ? "wait" : "sleep",
				tm: 0,
				cd: 40,
				dead: false,
				deadT: 0
			});
		});
		const [ax, ay] = tileXY(CHEST_BONE.u, CHEST_BONE.v);
		const [bx, by] = tileXY(CHEST_EMBER.u, CHEST_EMBER.v);
		CHESTS = [{
			x: ax,
			y: ay,
			s: "a bone fragment",
			ash: 3,
			o: 0,
			hid: 0,
			fin: 0
		}, {
			x: bx,
			y: by,
			s: "the Ember Shard",
			ash: 5,
			o: 0,
			hid: 1,
			fin: 1
		}];
		texts.length = 0;
		dead = false;
		won = false;
		zone = "";
		zt = 0;
		ash = 0;
		tick = 0;
		hitstop = 0;
		parts.length = rings.length = nums.length = flashes.length = 0;
		buf.length = 0;
		combo.hits = combo.dmg = combo.air = 0;
		combo.active = false;
		combo.chain = [];
		cam.fx = P.x;
		cam.fy = P.y;
		cam.ang = cam.target = 0;
		cam.py = .5;
		cam.pt = .5;
		dir.latch = null;
		pa = UI.p1 || "ren_calder";
		setP1(pa);
		embers.length = 0;
		for (let i = 0; i < 40; i++) {
			const [x, y] = tileXY(SPAWN.u + rnd(-2, 8), SPAWN.v + rnd(-2, 8));
			embers.push({
				x,
				y,
				z: rnd(0, 150),
				s: rnd(6, 16),
				ph: rnd(TAU)
			});
		}
		say(P.x, P.y, "The Ash Hall waits.", 2.2);
	}
	function reset() {
		spawnWorld();
	}
	function say(x, y, s, d = 1.6) {
		texts.push({
			x,
			y,
			s,
			t: d,
			m: d
		});
		snd(110, .07);
	}
	const dirVec = (a) => ({
		x: Math.cos(rad(a)),
		y: Math.sin(rad(a))
	});
	function faceToward(e, o) {
		e.face = snap8(deg(Math.atan2(o.y - e.y, o.x - e.x)));
	}
	function nearestHost(max = 220) {
		let b = null, bd = max;
		for (const h of H) {
			if (h.dead) continue;
			const d = Math.hypot(h.x - P.x, h.y - P.y);
			if (d < bd) {
				bd = d;
				b = h;
			}
		}
		return b;
	}
	function floorOk(x, y, r = 10) {
		return [
			[x, y],
			[x + r, y],
			[x - r, y],
			[x, y + r],
			[x, y - r]
		].every(([a, b]) => {
			const [u, v] = w2uv(a, b);
			return isFloor(u, v);
		});
	}
	function tryMove(e, dx, dy, r = 10) {
		const nx = e.x + dx, ny = e.y + dy;
		if (floorOk(nx, ny, r)) {
			e.x = nx;
			e.y = ny;
			return;
		}
		if (floorOk(nx, e.y, r)) {
			e.x = nx;
			return;
		}
		if (floorOk(e.x, ny, r)) e.y = ny;
	}
	function shakeCam(a) {
		cam.shake = Math.min(1, Math.max(cam.shake, a));
	}
	function hittable(E) {
		if (E.dead) return false;
		if (E.state === "getup" || E.state === "down" && !(E.kd && E.kd.phase === "bounce")) return false;
		if (E.state === "down" && E.kd && E.kd.phase === "bounce" && E.z < 8) return false;
		return true;
	}
	function vertOK(E, az, reachUp = 46, reachDown = 46) {
		const dz = E.z - az;
		return dz < reachUp + 6 && dz > -reachDown;
	}
	function inCone(att, E, reach, arc) {
		const dx = E.x - att.x, dy = E.y - att.y, d = Math.hypot(dx, dy);
		if (d > reach + 12) return false;
		if (d < 20) return true;
		return angDiff(deg(Math.atan2(dy, dx)), att.face) <= arc;
	}
	function comboName(n) {
		combo.lastName = n;
		if (combo.chain[combo.chain.length - 1] !== n) combo.chain.push(n);
		if (combo.chain.length > 6) combo.chain.shift();
	}
	function hurt(E, slot, idx, att) {
		const mv = MOVE[slot] || STYLE.slash;
		const meta = META[slot] || HOST_ATK;
		const wasAir = E.z > 6 || E.state === "air" || E.state === "down" && E.kd && E.kd.phase === "bounce";
		const dv = dirVec(att.face);
		if (E.state === "guard" || E.state === "block") {
			if (mv.kind === "light" || mv.kind === "air") {
				const chip = Math.round(mv.dmg[Math.min(idx, mv.dmg.length - 1)] * .12);
				E.hp = Math.max(1, E.hp - chip);
				E.state = "block";
				E.t = 0;
				E.stunT = .3;
				E.vx = dv.x * (mv.kb || 60) * .45;
				E.vy = dv.y * (mv.kb || 60) * .45;
				E.anim = "block_hit";
				E.frame = null;
				faceToward(E, att);
				num(E.x, E.y, E.z + 48, "Blocked", "#9fc4ff");
				hitstop = Math.max(hitstop, 3);
				shakeCam(.08);
				combo.endT = tick;
				return;
			}
			num(E.x, E.y, E.z + 60, "Guard broken", "#ffcf8a");
			E.state = "idle";
		}
		if (E.st === "sleep" || E.st === "wait") E.st = "fight";
		if (!combo.active) {
			combo.hits = 0;
			combo.dmg = 0;
			combo.air = 0;
			combo.chain = [];
		}
		combo.active = true;
		combo.hits++;
		const scale = Math.max(.35, 1 - .07 * (combo.hits - 1));
		const dmg = Math.round(mv.dmg[Math.min(idx, mv.dmg.length - 1)] * scale);
		combo.dmg += dmg;
		E.hp = Math.max(0, E.hp - dmg);
		combo.endT = tick;
		comboName(meta.name || slot);
		const hx = lerp(att.x, E.x, .7), hy = lerp(att.y, E.y, .7), hz = E.z + 26;
		num(E.x + rnd(-9, 9), E.y, E.z + 48, String(dmg), idx ? "#ffd9a8" : "#fff");
		const hsArr = (a) => Array.isArray(a) ? a[Math.min(idx, a.length - 1)] : a;
		const hs = hsArr(mv.hs) || 4, sh = hsArr(mv.shake) || .15;
		const kind = mv.kind;
		if (E.state === "down" && E.kd && E.kd.phase === "bounce") {
			E.state = "air";
			E.kd = null;
			E.spiked = false;
		}
		if (kind === "light" && !wasAir) {
			const behind = angDiff(att.face, E.face) < 70;
			E.state = "stun";
			E.anim = behind ? "hit_back" : mv.kb >= 100 ? "hit_heavy" : "hit";
			E.t = 0;
			E.stunT = mv.stun;
			E.vx = dv.x * mv.kb;
			E.vy = dv.y * mv.kb;
			if (!behind) faceToward(E, att);
			E.shk = hs;
		} else if (kind === "heavy") {
			E.state = "air";
			E.vz = mv.vz || 150;
			E.vx = dv.x * mv.kb;
			E.vy = dv.y * mv.kb;
			E.launchT = 0;
			E.juggle = 0;
			E.spiked = false;
			faceToward(E, att);
			E.shk = hs;
			if (E.z < 1) E.z = 1;
		} else if (kind === "launch") {
			if (!wasAir) faceToward(E, att);
			E.state = "air";
			E.vz = Math.max(E.vz, hsArr(mv.vz) || 330);
			E.vx += dv.x * mv.kb;
			E.vy += dv.y * mv.kb;
			E.launchT = 0;
			E.spiked = false;
			E.shk = hs;
			if (E.z < 1) E.z = 1;
			if (!wasAir) E.juggle = 0;
		} else if (kind === "air" || kind === "light" && wasAir) {
			const pop = mv.pop || 130;
			if (!wasAir) {
				faceToward(E, att);
				E.z = Math.max(E.z, 1);
			}
			E.state = "air";
			E.vz = Math.max(E.vz, pop - E.juggle * 14);
			E.vx += dv.x * (mv.kb || 40);
			E.vy += dv.y * (mv.kb || 40);
			E.launchT = 0;
			E.juggle++;
			E.spiked = false;
			E.shk = hs;
			combo.air = Math.max(combo.air, E.juggle);
		} else if (kind === "spike") {
			E.state = "air";
			E.vz = -760;
			E.vx = dv.x * 30;
			E.vy = dv.y * 30;
			E.spiked = true;
			E.launchT = 0;
			E.juggle++;
			E.shk = hs;
			combo.air = Math.max(combo.air, E.juggle);
			if (!wasAir) {
				E.z = Math.max(E.z, 1);
				faceToward(E, att);
			}
		}
		hitstop = Math.max(hitstop, hs);
		shakeCam(sh);
		spark(hx, hy, hz, kind === "heavy" || kind === "spike" ? 16 : 9, 190, "#fff3d8", .6, deg(Math.atan2(dv.y, dv.x)));
		flare(hx, hy, hz, kind === "light" ? 8 : 13);
		const elc = EL[pa] || "#fff";
		const sa = deps.project(att.x, att.y, att.z), sb = deps.project(E.x, E.y, E.z);
		const sang = Math.atan2(sb[1] - sa[1], sb[0] - sa[0]);
		stripFx("hitspark", hx, hy, hz, {
			fps: 30,
			scale: kind === "light" ? .8 : 1,
			tint: elc
		});
		if (kind !== "light") stripFx("slash", hx, hy, hz, {
			fps: 20,
			scale: 1.2,
			ang: sang,
			tint: elc
		});
		else stripFx("slash", hx, hy, hz, {
			fps: 24,
			scale: .75,
			ang: sang,
			tint: elc
		});
		if (kind === "spike") stripFx("fire", E.x, E.y, 2, {
			fps: 20,
			scale: 1.5,
			squash: .5
		});
		flash(hx, hy, hz, kind === "light" ? 70 : 105, [
			255,
			200,
			140
		], .7, .2);
		snd(kind === "launch" ? 300 : kind === "spike" ? 140 : 190, .06);
		if (att === P && P.z > 6 && slot === "air1") P.vz = Math.max(P.vz, 110);
	}
	function playerHit(slot, idx) {
		const mv = MOVE[slot];
		let any = false;
		for (const E of H) {
			if (!hittable(E)) continue;
			if (slot === "plunge") {
				const tip = {
					x: P.x + dirVec(P.face).x * mv.fwd,
					y: P.y + dirVec(P.face).y * mv.fwd
				};
				if (Math.hypot(E.x - tip.x, E.y - tip.y) > mv.radius + 8) continue;
				if (!vertOK(E, P.z, 40, 46)) continue;
			} else {
				if (!inCone(P, E, mv.reach, mv.arc)) continue;
				if (!vertOK(E, P.z)) continue;
			}
			hurt(E, slot, idx, P);
			any = true;
		}
		return any;
	}
	function hurtPlayer(att, dmg) {
		if (P.inv > 0 || dead || P.state === "guard") {
			if (P.state === "guard") {
				num(P.x, P.y, P.z + 40, "Guard", "#9fc4ff");
				return;
			}
			if (P.inv > 0) return;
		}
		P.hp = Math.max(0, P.hp - dmg);
		P.inv = 36;
		const dv = dirVec(att.face);
		P.vx = dv.x * 90;
		P.vy = dv.y * 90;
		num(P.x, P.y, P.z + 48, String(dmg), "#ff8a6a");
		shakeCam(.22);
		hitstop = Math.max(hitstop, 4);
		snd(140, .08);
		if (P.hp <= 0 && !dead) {
			dead = true;
			P.anim = "death";
			P.t = 0;
			P.state = "dead";
		}
	}
	function press(a) {
		if (a === "use") {
			tryUse();
			return;
		}
		buf.push({
			a,
			t: tick
		});
		if (buf.length > 6) buf.shift();
	}
	function rawMove() {
		const tm = input.touchMove;
		let x = (keys.has("d") || keys.has("arrowright") ? 1 : 0) - (keys.has("a") || keys.has("arrowleft") ? 1 : 0);
		let y = (keys.has("s") || keys.has("arrowdown") ? 1 : 0) - (keys.has("w") || keys.has("arrowup") ? 1 : 0);
		x += tm.x;
		y += tm.y;
		const m = Math.hypot(x, y);
		if (m > 1) {
			x /= m;
			y /= m;
		}
		return {
			x,
			y,
			m: Math.min(1, m)
		};
	}
	function latchNow() {
		if (dir.latch) return;
		const r = rawMove();
		if (r.m >= .1) dir.latch = {
			ang: cam.ang,
			dir: deg(Math.atan2(r.y, r.x))
		};
	}
	function worldMove() {
		const r = rawMove(), L = dir.latch;
		if (L && (r.m < .1 || angDiff(wrap(deg(Math.atan2(r.y, r.x))), wrap(L.dir)) >= 20)) dir.latch = null;
		const a = -rad(dir.latch ? dir.latch.ang : cam.ang), c = Math.cos(a), s = Math.sin(a);
		return {
			x: r.x * c - r.y * s,
			y: r.x * s + r.y * c
		};
	}
	function rotate(d) {
		dir.tw = null;
		latchNow();
		cam.target += 45 * d;
		dir.pause = 90;
	}
	function startAttack(slot, air) {
		const meta = META[slot];
		if (!meta || !meta.hit_frames) return false;
		P.state = air ? "airatk" : "atk";
		P.slot = slot;
		P.move = meta;
		P.cur = MOVE[slot] || STYLE.slash;
		setAnim(P, slot);
		P.anim = slot;
		P.t = 0;
		P.hitDone = /* @__PURE__ */ new Set();
		P.frame = null;
		const n = nearestHost(150);
		if (n) faceToward(P, n);
		const dv = dirVec(P.face), l = P.cur.lunge || 0;
		P.vx = dv.x * l;
		P.vy = dv.y * l;
		if (air) {
			P.airCount++;
			P.vz = P.vz * .3 + 55;
		}
		return true;
	}
	function startJump() {
		P.state = "squat";
		P.t = 0;
		P.anim = "jump";
		P.frame = 0;
		P.vx = P.vy = 0;
	}
	function startPlunge() {
		P.state = "plunge";
		P.anim = "plunge";
		P.t = 0;
		P.hitDone = /* @__PURE__ */ new Set();
		P.slot = "plunge";
		P.move = META.plunge;
		P.cur = MOVE.plunge;
		P.plunged = true;
		P.frame = null;
		P.z0 = P.z;
		P.vz = 0;
		const n = nearestHost(160);
		if (n) faceToward(P, n);
		const dv = dirVec(P.face);
		P.vx = dv.x * 70;
		P.vy = dv.y * 70;
	}
	function land(fromPlunge) {
		P.z = 0;
		P.vz = 0;
		P.state = "land";
		P.t = 0;
		P.frame = 5;
		P.anim = "jump";
		P.airCount = 0;
		P.plunged = false;
		dust(P.x, P.y, fromPlunge ? 5 : 7, 40);
	}
	function startDash() {
		const w = worldMove(), m = Math.hypot(w.x, w.y) > .2;
		const d = m ? {
			x: w.x / Math.hypot(w.x, w.y),
			y: w.y / Math.hypot(w.x, w.y)
		} : dirVec(P.face);
		if (m) P.face = snap8(deg(Math.atan2(d.y, d.x)));
		P.state = "dash";
		P.t = 0;
		P.slot = null;
		P.anim = "dash";
		P.frame = null;
		P.vx = d.x * 300;
		P.vy = d.y * 300;
		dust(P.x, P.y, 6, 50);
	}
	function tryDo(a) {
		if (dead || won) return false;
		const s = P.state, f = s === "atk" || s === "airatk" ? frameIdx(P) : 0;
		const neutral = s === "ground" || s === "land" && P.t > .04;
		const cancel = (s === "atk" || s === "airatk") && P.move && f >= P.move.cancel_from;
		const grounded = neutral || s === "atk" && cancel;
		const airish = s === "air" || s === "airatk" && cancel;
		if (a === "jump") {
			if (grounded) {
				startJump();
				return true;
			}
		} else if (a === "dash") {
			if (grounded) {
				startDash();
				return true;
			}
		} else if (a === "guard") {
			if (neutral) {
				P.state = "guard";
				P.t = 0;
				P.vx = P.vy = 0;
				return true;
			}
		} else if (a === "light") {
			if (neutral) return startAttack("attack1");
			if (s === "atk" && cancel) return startAttack(CHAIN_NEXT[P.slot] || "attack1");
			if (airish && P.airCount < 3) return startAttack("air1", true);
		} else if (a === "special") {
			if (grounded) return startAttack("launcher");
			if (airish && !P.plunged) {
				startPlunge();
				return true;
			}
		}
		return false;
	}
	function consumeBuffer() {
		for (let i = 0; i < buf.length; i++) {
			if (tick - buf[i].t > 18) {
				buf.splice(i--, 1);
				continue;
			}
			if (tryDo(buf[i].a)) {
				buf.splice(i, 1);
				return true;
			}
		}
		return false;
	}
	function tryUse() {
		if (dead) return;
		if (Math.hypot(P.x - RESTW.x, P.y - RESTW.y) < 48) {
			P.hp = P.hpMax;
			P.inv = 20;
			say(P.x, P.y, "The Quiet Seal holds.", 1.8);
			snd(420, .1);
			return;
		}
		for (const ch of CHESTS) {
			if (ch.o || ch.hid) continue;
			if (Math.hypot(P.x - ch.x, P.y - ch.y) < 42) {
				ch.o = 1;
				ash += ch.ash;
				say(P.x, P.y, "Took " + ch.s + ".", 1.8);
				snd(520, .12);
				return;
			}
		}
	}
	function updatePlayer() {
		if (dead) {
			P.t += TICK;
			P.vx *= .8;
			P.vy *= .8;
			P.anim = "death";
			P.frame = Math.min(5, Math.floor(P.t * animFps("death")));
			tryMove(P, P.vx * TICK, P.vy * TICK);
			return;
		}
		if (P.inv > 0) P.inv--;
		const p = P;
		p.t += TICK;
		const w = worldMove(), want = Math.hypot(w.x, w.y) > .2;
		const n = nearestHost(160);
		switch (p.state) {
			case "ground": {
				p.anim = want ? "walk" : "idle";
				p.frame = null;
				if (want) p.face = snap8(deg(Math.atan2(w.y, w.x)));
				const k = 1 - Math.exp(-18 * TICK);
				p.vx = lerp(p.vx, want ? w.x * 112 : 0, k);
				p.vy = lerp(p.vy, want ? w.y * 112 : 0, k);
				consumeBuffer();
				break;
			}
			case "dash":
				p.anim = "dash";
				p.frame = null;
				p.vx *= .93;
				p.vy *= .93;
				if (p.t > .2) consumeBuffer();
				if (p.state === "dash" && p.t >= 6 / animFps("dash")) {
					p.state = "ground";
					p.vx *= .3;
					p.vy *= .3;
				}
				break;
			case "guard":
				p.anim = "guard";
				p.vx *= .7;
				p.vy *= .7;
				p.frame = Math.min(3, Math.floor(p.t * animFps("guard")));
				if (!keys.has("l") && p.t > .12) p.state = "ground";
				break;
			case "atk": {
				const f = frameIdx(p), m = p.move;
				p.vx *= .88;
				p.vy *= .88;
				if (n && n.state === "stun") {
					const dx = n.x - p.x, dy = n.y - p.y, d = Math.hypot(dx, dy);
					if (d > 30 && d < 150) {
						p.vx += dx / d * 220 * TICK;
						p.vy += dy / d * 220 * TICK;
					}
				}
				if (m && m.hit_frames.includes(f) && !p.hitDone.has(f)) {
					p.hitDone.add(f);
					playerHit(p.slot, m.hit_frames.indexOf(f));
				}
				consumeBuffer();
				if (p.state === "atk" && p.t >= 6 / animFps(p.anim)) {
					p.state = "ground";
					p.slot = null;
					p.vx *= .5;
					p.vy *= .5;
				}
				break;
			}
			case "squat":
				p.vx *= .8;
				p.vy *= .8;
				if (p.t >= .07) {
					p.state = "air";
					p.vz = 410;
					p.z = .01;
					p.airCount = 0;
					p.plunged = false;
					dust(p.x, p.y, 4, 30);
					if (want) {
						p.vx = w.x * 96;
						p.vy = w.y * 96;
					}
				}
				break;
			case "air":
			case "airatk": {
				const atk = p.state === "airatk", f = atk ? frameIdx(p) : 0;
				if (!atk || p.move && f >= p.move.cancel_from) {
					const k = 1 - Math.exp(-8 * TICK);
					p.vx = lerp(p.vx, want ? w.x * 96 : 0, k);
					p.vy = lerp(p.vy, want ? w.y * 96 : 0, k);
					if (want && !atk) p.face = snap8(deg(Math.atan2(w.y, w.x)));
				} else {
					p.vx *= .96;
					p.vy *= .96;
					if (n && hittable(n)) {
						const dx = n.x - p.x, dy = n.y - p.y, d = Math.hypot(dx, dy);
						if (d > 24 && d < 140) {
							p.vx += dx / d * 320 * TICK;
							p.vy += dy / d * 320 * TICK;
							const sp = Math.hypot(p.vx, p.vy);
							if (sp > 95) {
								p.vx *= 95 / sp;
								p.vy *= 95 / sp;
							}
						}
					}
				}
				const gs = atk && p.move && f < p.move.cancel_from ? .28 : atk ? .6 : 1;
				p.vz -= G_PLAYER * gs * TICK;
				p.z += p.vz * TICK;
				if (atk && p.move && p.move.hit_frames.includes(f) && !p.hitDone.has(f)) {
					p.hitDone.add(f);
					playerHit(p.slot, p.move.hit_frames.indexOf(f));
				}
				if (p.z <= 0 && p.vz < 0) {
					land(false);
					break;
				}
				if (!atk) {
					p.anim = "jump";
					p.frame = p.vz > 150 ? 1 : p.vz > -150 ? 2 : p.z < 16 && p.vz < 0 ? 4 : 3;
					consumeBuffer();
				} else {
					consumeBuffer();
					if (p.state === "airatk" && p.t >= 6 / animFps(p.anim)) {
						p.state = "air";
						p.slot = null;
					}
				}
				break;
			}
			case "plunge": {
				const fps = animFps("plunge"), T2 = 2 / fps, T3 = 3 / fps, T5 = 5 / fps, f = frameIdx(p);
				const tgt = nearestHost(160);
				if (p.t < T2) {
					p.vz = 0;
					p.z = p.z0 + 5 * Math.sin(clamp(p.t / T2, 0, 1) * Math.PI);
					p.vx *= .95;
					p.vy *= .95;
					p.zd = p.z;
				} else if (p.t < T3) {
					const u = (p.t - T2) / (T3 - T2);
					const zt = Math.min(p.zd, Math.max(16, tgt && hittable(tgt) ? tgt.z - 8 : 0));
					p.z = p.zd + (zt - p.zd) * u * u;
					p.vz = 0;
					let dv = dirVec(p.face), sp = 150;
					if (tgt && hittable(tgt)) {
						const tx = tgt.x - p.x, ty = tgt.y - p.y, td = Math.hypot(tx, ty);
						if (td > 6 && td < 150) {
							dv = {
								x: tx / td,
								y: ty / td
							};
							sp = clamp(td * 5, 0, 170);
						}
					}
					p.vx = dv.x * sp;
					p.vy = dv.y * sp;
				} else if (p.t < T5) {
					p.vz = 0;
					p.vx *= .8;
					p.vy *= .8;
				} else {
					p.vx *= .8;
					p.vy *= .8;
					p.vz -= G_PLAYER * TICK;
					p.z += p.vz * TICK;
				}
				if (f >= 3 && !p.hitDone.has(3)) {
					p.hitDone.add(3);
					const connected = playerHit("plunge", 0);
					const tip = {
						x: p.x + dirVec(p.face).x * MOVE.plunge.fwd,
						y: p.y + dirVec(p.face).y * MOVE.plunge.fwd
					};
					if (p.z < 28) {
						ring(tip.x, tip.y, 60, .4, "#f3c58f", 2);
						dust(tip.x, tip.y, connected ? 4 : 8, 60);
						if (!connected) {
							shakeCam(.35);
							hitstop = Math.max(hitstop, 4);
						}
					}
				}
				if (p.z <= 0 && p.t >= T5) {
					p.z = 0;
					p.vz = 0;
				}
				if (p.t >= 6 / fps) {
					if (p.z <= 1) land(true);
					else {
						p.state = "air";
						p.slot = null;
						p.anim = "jump";
					}
				}
				break;
			}
			case "land":
				p.vx *= .8;
				p.vy *= .8;
				if (p.t > .04) consumeBuffer();
				if (p.state === "land" && p.t >= .1) {
					p.state = "ground";
					p.frame = null;
				}
		}
		tryMove(p, p.vx * TICK, p.vy * TICK);
		if (p.z < 0) p.z = 0;
	}
	function hostLand(E) {
		const s = -E.vz, spiked = E.spiked;
		E.z = 0;
		E.spiked = false;
		E.state = "down";
		E.vz = 0;
		E.vx *= .3;
		E.vy *= .3;
		let bv = 0;
		if (spiked) bv = 330;
		else if (s > 260) bv = Math.min(200, s * .33);
		E.kd = {
			phase: spiked ? "slam" : "land",
			t: 0,
			bv,
			spike: spiked
		};
		E.launchT = 0;
		dust(E.x, E.y, spiked ? 14 : 8, spiked ? 90 : 55);
		if (spiked || s > 420) ring(E.x, E.y, spiked ? 78 : 50, .4, spiked ? "#f3c58f" : "#b9c4d6", 3);
		hitstop = Math.max(hitstop, spiked ? 9 : 3);
		E.shk = spiked ? 9 : 3;
		shakeCam(.2 + (spiked ? .5 : 0));
		if (spiked) {
			combo.dmg += 60;
			E.hp = Math.max(0, E.hp - 60);
			num(E.x, E.y, 40, "60", "#ffcf8a");
			combo.hits++;
			comboName("Ground bounce");
		}
	}
	function updateHost(E) {
		E.t += TICK;
		E.tm++;
		if (E.cd > 0) E.cd--;
		const d = Math.hypot(E.x - P.x, E.y - P.y);
		if ((E.st === "sleep" || E.st === "wait") && d < 160 && !dead) {
			E.st = "fight";
			say(E.x, E.y, E.n + " stirs.", 1.4);
		}
		if (E.hp <= 0 && !E.dead) {
			E.dead = true;
			E.deadT = 0;
			E.state = "dead";
			E.vx = E.vy = E.vz = 0;
			E.z = 0;
			stripFx("fire", E.x, E.y, 8, {
				fps: 20,
				scale: E.boss ? 2 : 1.4
			});
			say(E.x, E.y, E.boss ? "The last carrier falls." : E.n + " is ash.", 2);
			if (E.boss) CHESTS[1].hid = 0;
			return;
		}
		if (E.dead) {
			E.deadT += TICK;
			E.anim = "death";
			E.frame = Math.min(5, Math.floor(E.deadT * animFps("death")));
			return;
		}
		E.frame = null;
		switch (E.state) {
			case "idle":
				setAnim(E, "idle");
				if (E.st === "fight" && !dead) faceToward(E, P);
				E.vx *= .8;
				E.vy *= .8;
				if (E.st === "fight" && !dead && d > 42 && d < 240) {
					const dx = P.x - E.x, dy = P.y - E.y;
					E.vx = dx / d * (E.boss ? 78 : 64);
					E.vy = dy / d * (E.boss ? 78 : 64);
					E.anim = "walk";
				} else if (E.st === "fight" && d <= 48 && E.cd <= 0 && P.z < 20) {
					E.state = "atk";
					E.t = 0;
					E.anim = "attack1";
					E.hitDone = /* @__PURE__ */ new Set();
					E.cd = E.boss ? 50 : 70;
					faceToward(E, P);
					const dv = dirVec(E.face);
					E.vx = dv.x * 70;
					E.vy = dv.y * 70;
				}
				break;
			case "atk": {
				const f = frameIdx(E);
				E.vx *= .88;
				E.vy *= .88;
				E.anim = "attack1";
				if (HOST_ATK.hit_frames.includes(f) && !E.hitDone.has(f)) {
					E.hitDone.add(f);
					if (inCone(E, P, 58, 70) && Math.abs(P.z - E.z) < 40) hurtPlayer(E, E.boss ? 90 : 55);
				}
				if (E.t >= 6 / animFps("attack1")) {
					E.state = "idle";
					setAnim(E, "idle");
				}
				break;
			}
			case "block":
				E.stunT -= TICK;
				E.vx *= .9;
				E.vy *= .9;
				if (E.stunT <= 0) {
					E.state = "idle";
					setAnim(E, "idle");
				}
				break;
			case "stun":
				E.stunT -= TICK;
				E.vx *= .92;
				E.vy *= .92;
				if (E.stunT <= 0) {
					E.state = "idle";
					setAnim(E, "idle");
				}
				break;
			case "air": {
				E.launchT += TICK;
				const gs = 1 + E_JUGGLE_SCALE * Math.min(E.juggle, 6);
				const hover = P.state === "plunge" && P.t < 3 / animFps("plunge") && !E.spiked ? .3 : 1;
				E.vz -= (E.spiked ? 3400 : 900 * gs * hover) * TICK;
				E.z += E.vz * TICK;
				if (hover < 1) {
					E.vx *= .9;
					E.vy *= .9;
				} else {
					E.vx *= .965;
					E.vy *= .965;
				}
				if (E.launchT < .36) {
					E.anim = "launch";
					E.frame = Math.min(5, Math.floor(E.launchT * animFps("launch")));
				} else {
					E.anim = "tumble";
					E.frame = Math.floor((E.launchT - .36) * animFps("tumble")) % 6;
				}
				if (E.z <= 0 && E.vz < 0) hostLand(E);
				break;
			}
			case "down": {
				const kd = E.kd;
				kd.t += TICK;
				E.anim = "knockdown";
				E.vx *= .9;
				E.vy *= .9;
				const next = (ph) => {
					kd.phase = ph;
					kd.t = 0;
				};
				switch (kd.phase) {
					case "land":
						E.frame = 0;
						if (kd.t >= .05) next("slam");
						break;
					case "slam":
						E.frame = 1;
						if (kd.t >= .07) {
							if (kd.bv > 0) {
								next("bounce");
								E.vz = kd.bv;
								E.z = .01;
							} else next("settle1");
						}
						break;
					case "bounce":
						E.frame = 2;
						E.vz -= E_BOUNCE_G * TICK;
						E.z += E.vz * TICK;
						if (E.z <= 0 && E.vz < 0) {
							E.z = 0;
							E.vz = 0;
							next("slam2");
							dust(E.x, E.y, 6, 45);
							shakeCam(.3);
						}
						break;
					case "slam2":
						E.frame = 3;
						if (kd.t >= .08) next("settle1");
						break;
					case "settle1":
						E.frame = 4;
						if (kd.t >= .12) next("lie");
						break;
					case "lie":
						E.frame = 5;
						if (kd.t >= .42) {
							E.state = "getup";
							E.t = 0;
							E.kd = null;
						}
				}
				break;
			}
			case "getup":
				setAnim(E, "getup");
				if (E.t >= 6 / animFps("getup")) {
					E.state = "idle";
					setAnim(E, "idle");
					E.juggle = 0;
				}
		}
		tryMove(E, E.vx * TICK, E.vy * TICK, E.boss ? 16 : 12);
		if (E.z < 0) E.z = 0;
		E.hpShown += (E.hp - E.hpShown) * (1 - Math.exp(-14 * TICK));
	}
	function updateCam() {
		if (dir.tw) {
			const w = dir.tw;
			w.t++;
			const u = Math.min(1, w.t / w.T), e = u * u * u * (u * (6 * u - 15) + 10);
			cam.ang = w.from + (w.to - w.from) * e;
			if (u >= 1) {
				cam.ang = w.to;
				dir.tw = null;
			}
		} else {
			cam.ang += (cam.target - cam.ang) * (1 - Math.exp(-9 * TICK));
			if (Math.abs(cam.target - cam.ang) < .05) cam.ang = cam.target;
		}
		cam.py = .5;
		cam.pt = .5;
		cam.pv = "";
		const k = 1 - Math.exp(-4 * TICK);
		cam.fx += (P.x - cam.fx) * k;
		cam.fy += (P.y - cam.fy) * k;
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
			e.z += e.s * TICK;
			e.x += Math.sin(tick * .02 + e.ph) * .15;
			if (e.z > 170) e.z = 0;
		}
		for (let i = texts.length - 1; i >= 0; i--) {
			texts[i].t -= TICK;
			if (texts[i].t <= 0) texts.splice(i, 1);
		}
		if (hitstop > 0) {
			hitstop--;
			if (hitstop === 0) H.forEach((h) => {
				h.shk = 0;
			});
			return;
		}
		updatePlayer();
		for (const h of H) updateHost(h);
		if (!combo.active && combo.hits > 0 && tick - combo.endT > 110) combo.hits = 0;
		if (combo.active && tick - combo.endT > 75) combo.active = false;
		P.hpShown += (P.hp - P.hpShown) * (1 - Math.exp(-14 * TICK));
		updateFx();
		const [u, v] = w2uv(P.x, P.y);
		const rm = roomAt(u, v);
		if (rm && rm.name !== zone) {
			zone = rm.name;
			zt = 120;
		}
		if (zt > 0) zt--;
		const living = H.filter((h) => !h.dead);
		if (!won && H.length && living.length === 0) {
			won = true;
			P.anim = "victory";
			P.t = 0;
			P.state = "ground";
			P.vx = P.vy = 0;
			say(P.x, P.y, "The Hollow opens.", 2.4);
		}
	}
	spawnWorld();
	return {
		P,
		H,
		combo,
		cam,
		dir,
		parts,
		rings,
		nums,
		flashes,
		embers,
		texts,
		input,
		BRZ,
		CHESTS,
		RESTW,
		vfxTint,
		press,
		reset,
		simTick,
		rotate,
		tryUse,
		get tick() {
			return tick;
		},
		get hitstop() {
			return hitstop;
		},
		get dead() {
			return dead;
		},
		get won() {
			return won;
		},
		get zone() {
			return zone;
		},
		get zt() {
			return zt;
		},
		get pa() {
			return pa;
		},
		get ash() {
			return ash;
		},
		setPa(id) {
			pa = id;
			setP1(id);
		}
	};
}
var CELL = 96;
var AX = 48;
var AY = 74;
var T = ARENAS.hollow;
function createHollowRenderer(deps) {
	const { IMG } = deps;
	let S;
	let P, cam;
	let parts, rings, nums, flashes, embers;
	let sg, cg, S_;
	let VW = 0, VH = 0;
	let hpfill, hpghost, hpn, hpl;
	let comboEl, cn, cl, cs, mvEl, zoneEl;
	let lastHpW = "", lastHpn = "", lastCombo = "", lastMv = "", lastZone = 0;
	function bind(s) {
		S = s;
		P = s.P;
		cam = s.cam;
		parts = s.parts;
		rings = s.rings;
		nums = s.nums;
		flashes = s.flashes;
		embers = s.embers;
		const g = deps.gfx();
		sg = g.sg;
		cg = g.cg;
		S_ = g.S;
		VW = g.VW;
		VH = g.VH;
	}
	function proj$1(x, y, z) {
		return proj(cam, VW, VH, x, y, z);
	}
	function setCamMatrix$1() {
		setCamMatrix(cam);
	}
	const depthOf$1 = (x, y) => depthOf(cam, x, y);
	const rowOf$1 = (face) => rowOf(cam, face);
	function flick(b) {
		return .82 + .18 * Math.sin(S.tick * .21 + b.ph) * Math.sin(S.tick * .093 + b.ph * 2.3) + .06 * Math.sin(S.tick * .57 + b.ph);
	}
	function drawBackdrop() {
		const g = sg;
		const gr = g.createLinearGradient(0, 0, 0, VH);
		for (let i = 0; i < 4; i++) gr.addColorStop(T.skyStops[i], T.sky[i]);
		g.fillStyle = gr;
		g.fillRect(0, 0, VW, VH);
		const sx = VW * T.sunXY[0], sy = VH * T.sunXY[1], R = Math.max(VW, VH) * .32;
		const sun = g.createRadialGradient(sx, sy, 0, sx, sy, R);
		sun.addColorStop(0, T.sun[0]);
		sun.addColorStop(.25, T.sun[1]);
		sun.addColorStop(1, T.sun[2]);
		g.fillStyle = sun;
		g.fillRect(0, 0, VW, VH);
		const cx = VW * .5;
		g.fillStyle = "#020306";
		g.beginPath();
		g.moveTo(cx - 14, 0);
		for (let y = 0; y <= VH * .62; y += VH * .062) g.lineTo(cx + (hash(y | 0, 7) - .5) * 56, y);
		for (let y = VH * .62; y >= 0; y -= VH * .062) g.lineTo(cx + (hash(y | 0, 13) - .5) * 56 + 18, y);
		g.closePath();
		g.fill();
		g.strokeStyle = "rgba(255,122,42,.55)";
		g.lineWidth = 2;
		g.beginPath();
		for (let y = 0; y <= VH * .62; y += VH * .062) {
			const x = cx + (hash(y | 0, 7) - .5) * 56;
			y ? g.lineTo(x, y) : g.moveTo(x, y);
		}
		g.stroke();
	}
	function cellPts(u, v) {
		return [
			[u, v],
			[u + 1, v],
			[u + 1, v + 1],
			[u, v + 1]
		].map(([a, b]) => {
			const [x, y] = tileXY(a, b);
			return proj$1(x, y, 0);
		});
	}
	function drawFloor() {
		const g = sg;
		const cs = proj$1(cam.fx, cam.fy, 0)[1];
		const th = 10 * cam.Z;
		for (const c of FLOOR) {
			const pts = cellPts(c.u, c.v);
			if (pts.every((p) => p[0] < -80) || pts.every((p) => p[0] > VW + 80) || pts.every((p) => p[1] < -80) || pts.every((p) => p[1] > VH + 80)) continue;
			const hs = hash(c.u, c.v);
			const l = (c.u + c.v & 1 ? T.mat.l0 : T.mat.l1) + hs * T.mat.hs;
			g.fillStyle = `rgb(${l + T.mat.t[0] | 0},${l + T.mat.t[1] | 0},${l + T.mat.t[2] | 0})`;
			poly(g, pts);
			g.fill();
			g.strokeStyle = T.mat.stroke;
			g.lineWidth = 1;
			g.stroke();
			for (let i = 0; i < 4; i++) {
				if (isFloor(c.u + [
					1,
					0,
					-1,
					0
				][i], c.v + [
					0,
					1,
					0,
					-1
				][i])) continue;
				const a = pts[i], b = pts[(i + 1) % 4];
				if ((a[1] + b[1]) / 2 > cs + 2) {
					g.fillStyle = i % 2 ? T.slab[0] : T.slab[1];
					poly(g, [
						a,
						b,
						[b[0], b[1] + th],
						[a[0], a[1] + th]
					]);
					g.fill();
					g.strokeStyle = T.slabEdge;
					g.beginPath();
					g.moveTo(a[0], a[1] + .5);
					g.lineTo(b[0], b[1] + .5);
					g.stroke();
				}
			}
		}
		const rp = [];
		const [rx, ry] = tileXY(REST.u, REST.v);
		for (let k = 0; k <= 36; k++) {
			const a = k / 36 * TAU;
			rp.push(proj$1(rx + Math.cos(a) * 44, ry + Math.sin(a) * 44, 0));
		}
		poly(g, rp);
		g.strokeStyle = "rgba(216,208,188,.85)";
		g.lineWidth = Math.max(1, 1.6 * cam.Z);
		g.stroke();
	}
	function drawRingsFloor() {
		const g = sg;
		for (const r of rings) {
			const u = r.t / r.dur, R = r.maxR * (1 - (1 - u) * (1 - u)), [x, y] = proj$1(r.x, r.y, 0);
			g.strokeStyle = r.col;
			g.globalAlpha = (1 - u) * .8;
			g.lineWidth = Math.max(1, Math.round(r.w * (1 - u) * cam.Z));
			g.beginPath();
			g.ellipse(x, y, R * cam.Z, R * cam.Z * cam.py, 0, 0, TAU);
			g.stroke();
		}
		g.globalAlpha = 1;
	}
	function drawShadow(e) {
		const [x, y] = proj$1(e.x, e.y, 0), s = 1 / (1 + Math.max(0, e.z) / 80), Z = cam.Z * s;
		const img = IMG.shadow;
		if (!img) return;
		sg.globalAlpha = clamp(.35 + .65 * s, 0, 1);
		sg.drawImage(img, Math.round(x - AX * Z), Math.round(y - AY * Z * cam.py / .5), CELL * Z, CELL * Z * cam.py / .5);
		sg.globalAlpha = 1;
	}
	function drawEnt(e, pre, shk = false) {
		const anim = e.anim, key = pre + "/" + anim;
		const img = IMG[pre + "/" + cam.pv + anim] || IMG[key] || IMG[pre + "/idle"];
		if (!img) return;
		let f = e.frame;
		if (f === null || f === void 0) f = anim === "idle" || anim === "walk" || anim === "tumble" ? Math.floor(e.t * animFps(anim)) % 6 : Math.min(5, Math.floor(e.t * animFps(anim)));
		const [x, y] = proj$1(e.x, e.y, e.z), Z = cam.Z * (e.boss ? 1.28 : 1);
		let ox = 0, pop = 1;
		if (shk && S.hitstop > 0 && e.shk > 0) {
			ox = (S.tick & 1 ? 1 : -1) * 2 * Z;
			pop = 1 + .1 * Math.min(1, S.hitstop / 8);
		}
		if (e === P && P.inv > 0 && Math.floor(S.tick / 2) % 2) sg.globalAlpha = .55;
		const C = img.width / 6, k = C >= 190 ? 2 : 1, c = C / k, ax = c / 2, ay = c > 100 ? 100 : 74;
		sg.imageSmoothingEnabled = k > 1;
		sg.drawImage(img, f * C, rowOf$1(e.face) * C, C, C, Math.round(x - ax * Z * pop + ox), Math.round(y - ay * Z * pop), c * Z * pop, c * Z * pop);
		sg.imageSmoothingEnabled = false;
		sg.globalAlpha = 1;
	}
	function drawBrazier(b) {
		const g = sg, [x, y] = proj$1(b.x, b.y, 0), Z = cam.Z, X = Math.round(x), Y = Math.round(y);
		const r = (a, bb, w, h, c) => {
			g.fillStyle = c;
			g.fillRect(Math.round(X + a * Z), Math.round(Y + bb * Z), Math.max(1, Math.round(w * Z)), Math.max(1, Math.round(h * Z)));
		};
		r(-6, -3, 12, 3, "#232733");
		r(-4, -18, 8, 15, "#3a4050");
		r(-3, -18, 2, 15, "#4a5164");
		r(-9, -24, 18, 3, "#2c313f");
		r(-8, -27, 16, 3, "#434a5c");
		r(-6, -26, 12, 2, "#14161d");
		const fl = flick(b), F = T.flame;
		r(-4, -32 * fl, 8, 6 * fl, F[0]);
		r(-3, -37 * fl, 6, 8 * fl, F[1]);
		r(-1.5, -41 * fl, 3, 6 * fl, F[2]);
	}
	function drawChest(ch) {
		if (ch.hid) return;
		const g = sg, [x, y] = proj$1(ch.x, ch.y, 0), Z = cam.Z;
		g.globalAlpha = ch.o ? .5 : 1;
		g.fillStyle = "#3a2a1c";
		g.fillRect(Math.round(x - 10 * Z), Math.round(y - 14 * Z), Math.round(20 * Z), Math.round(14 * Z));
		g.fillStyle = ch.fin ? "#e08a50" : "#8a6a45";
		g.fillRect(Math.round(x - 10 * Z), Math.round(y - 16 * Z), Math.round(20 * Z), Math.round(4 * Z));
		g.fillStyle = "#f3c58f";
		g.fillRect(Math.round(x - 2 * Z), Math.round(y - 12 * Z), Math.round(4 * Z), Math.round(4 * Z));
		g.globalAlpha = 1;
	}
	function drawGlow() {
		const g = sg;
		g.globalCompositeOperation = "lighter";
		for (const b of S.BRZ) {
			const [x, y] = proj$1(b.x, b.y, 34), R = 44 * cam.Z, fl = flick(b);
			const gr = g.createRadialGradient(x, y, 0, x, y, R);
			gr.addColorStop(0, `rgba(${T.brazGlow[0]},${.34 * fl})`);
			gr.addColorStop(1, `rgba(${T.brazGlow[1]},0)`);
			g.fillStyle = gr;
			g.fillRect(x - R, y - R, R * 2, R * 2);
		}
		const [rx, ry] = proj$1(S.RESTW.x, S.RESTW.y, 8), Rr = 70 * cam.Z;
		const rg = g.createRadialGradient(rx, ry, 2, rx, ry, Rr);
		rg.addColorStop(0, "rgba(217,119,43,.2)");
		rg.addColorStop(1, "rgba(217,119,43,0)");
		g.fillStyle = rg;
		g.fillRect(rx - Rr, ry - Rr, Rr * 2, Rr * 2);
		for (const f of flashes) {
			const [x, y] = proj$1(f.x, f.y, f.z), u = f.t / f.dur, R = f.r * .8 * cam.Z;
			const gr = g.createRadialGradient(x, y, 0, x, y, R);
			gr.addColorStop(0, `rgba(255,235,200,${.55 * f.I * (1 - u)})`);
			gr.addColorStop(1, "rgba(255,170,90,0)");
			g.fillStyle = gr;
			g.fillRect(x - R, y - R, R * 2, R * 2);
		}
		for (const p of parts) {
			if (p.type !== "strip") continue;
			const img = S.vfxTint(p), V = VFX[p.key];
			if (!img) continue;
			const f = Math.min(V.frames - 1, Math.floor(p.life * p.fps)), u = p.life / p.max;
			const [x, y] = proj$1(p.x, p.y, p.z), s = p.scale * cam.Z;
			g.save();
			g.globalAlpha = clamp(1 - u, 0, 1);
			g.translate(Math.round(x), Math.round(y));
			g.rotate(p.ang);
			g.scale(s, s * (p.squash || 1));
			g.drawImage(img, f % V.cols * V.fw, (f / V.cols | 0) * V.fh, V.fw, V.fh, -V.fw / 2, -V.fh / 2, V.fw, V.fh);
			g.restore();
		}
		g.globalAlpha = 1;
		for (const e of embers) {
			const [x, y] = proj$1(e.x, e.y, e.z), a = Math.sin(e.z / 170 * Math.PI) * .7;
			g.fillStyle = `rgba(${T.ember},${a})`;
			g.fillRect(Math.round(x), Math.round(y), 1, 1);
		}
		for (const p of parts) {
			if (p.type === "dust" || p.type === "strip") continue;
			const [x, y] = proj$1(p.x, p.y, p.z), u = p.life / p.max;
			if (p.type === "spark") {
				g.fillStyle = p.col;
				g.globalAlpha = 1 - u * .8;
				const [x2, y2] = proj$1(p.x - p.vx * .025, p.y - p.vy * .025, p.z - p.vz * .025);
				g.strokeStyle = p.col;
				g.lineWidth = Math.max(1, Math.round(p.size * cam.Z));
				g.beginPath();
				g.moveTo(Math.round(x2), Math.round(y2));
				g.lineTo(Math.round(x), Math.round(y));
				g.stroke();
				g.globalAlpha = 1;
			} else if (p.type === "flare") {
				const R = p.size * (1 - u * .4) * cam.Z;
				g.fillStyle = `rgba(255,248,225,${1 - u})`;
				g.fillRect(Math.round(x - R), Math.round(y - 1), Math.round(R * 2), 2);
			}
		}
		g.globalCompositeOperation = "source-over";
		g.font = "bold " + Math.round(10 * Math.max(1, cam.Z)) + "px ui-monospace,Menlo,monospace";
		g.textAlign = "center";
		for (const n of nums) {
			const [x, y] = proj$1(n.x, n.y, n.z + n.t * 26);
			g.globalAlpha = n.t < .6 ? 1 : 1 - (n.t - .6) / .3;
			g.lineWidth = 3;
			g.strokeStyle = "#14161d";
			g.strokeText(n.text, Math.round(x), Math.round(y));
			g.fillStyle = n.col;
			g.fillText(n.text, Math.round(x), Math.round(y));
		}
		g.globalAlpha = 1;
		const texts = S.texts;
		g.font = "italic " + Math.round(12 * Math.max(1, cam.Z)) + "px Georgia,serif";
		g.fillStyle = "#d8d0bc";
		g.textAlign = "center";
		texts.forEach((x) => {
			const [sx, sy] = proj$1(x.x, x.y, 0);
			g.globalAlpha = Math.min(1, x.t / x.m * 2);
			g.fillText(x.s, sx, sy - 58 - (x.m - x.t) * 10);
			g.globalAlpha = 1;
		});
		g.textAlign = "left";
	}
	function drawFxWorld() {
		const g = sg;
		for (const p of parts) {
			if (p.type !== "dust") continue;
			const [x, y] = proj$1(p.x, p.y, p.z), u = p.life / p.max;
			g.globalAlpha = (1 - u) * .5;
			g.fillStyle = "#aab2c4";
			const r = p.size * (1 + u * .8) * cam.Z;
			g.fillRect(Math.round(x - r / 2), Math.round(y - r / 2), Math.max(1, Math.round(r)), Math.max(1, Math.round(r)));
		}
		g.globalAlpha = 1;
	}
	function render(st) {
		bind(st);
		setCamMatrix$1();
		sg.globalCompositeOperation = "source-over";
		sg.globalAlpha = 1;
		sg.imageSmoothingEnabled = false;
		drawBackdrop();
		drawFloor();
		drawRingsFloor();
		const list = [];
		list.push({
			d: depthOf$1(P.x, P.y),
			f: () => {
				drawShadow(P);
				drawEnt(P, S.pa, false);
			}
		});
		for (const h of S.H) list.push({
			d: depthOf$1(h.x, h.y),
			f: () => {
				drawShadow(h);
				drawEnt(h, h.skin, true);
			}
		});
		for (const b of S.BRZ) list.push({
			d: depthOf$1(b.x, b.y),
			f: () => drawBrazier(b)
		});
		for (const ch of S.CHESTS) list.push({
			d: depthOf$1(ch.x, ch.y),
			f: () => drawChest(ch)
		});
		list.sort((a, b) => a.d - b.d);
		list.forEach((o) => o.f());
		drawFxWorld();
		drawGlow();
		cg.imageSmoothingEnabled = false;
		cg.globalCompositeOperation = "source-over";
		cg.drawImage(S_, 0, 0);
		const vg = cg.createRadialGradient(VW / 2, VH / 2, VH * .35, VW / 2, VH / 2, Math.max(VW, VH) * .72);
		vg.addColorStop(0, "rgba(0,0,0,0)");
		vg.addColorStop(1, "rgba(0,0,0,.5)");
		cg.fillStyle = vg;
		cg.fillRect(0, 0, VW, VH);
		sg.textAlign = "center";
		sg.fillStyle = "#d8d0bc";
		sg.font = "italic 12px Georgia,serif";
		const g = cg;
		g.font = "italic " + Math.round(13) + "px Georgia,serif";
		g.fillStyle = "#d8d0bc";
		g.textAlign = "center";
		if (!S.dead && !S.won && Math.hypot(P.x - S.RESTW.x, P.y - S.RESTW.y) < 48) g.fillText("F · rest at the seal", VW / 2, 88);
		for (const ch of S.CHESTS) if (!ch.o && !ch.hid && Math.hypot(P.x - ch.x, P.y - ch.y) < 42) g.fillText("F · take " + ch.s, VW / 2, 88);
		g.textAlign = "left";
		g.fillStyle = "rgba(180,184,196,.75)";
		g.font = "11px Georgia,serif";
		g.fillText("WASD move   J strike   K launch / plunge   Space jump   Shift dash   L guard   F use   Q/E camera", 10, VH - 10);
	}
	function hud(st) {
		bind(st);
		if (!hpfill) {
			hpfill = $("hpfill");
			hpghost = $("hpghost");
			hpn = $("hpn");
			hpl = $("hpl");
			comboEl = $("combo");
			cn = $("cn");
			cl = $("cl");
			cs = $("cs");
			mvEl = $("mv");
			zoneEl = $("zone");
		}
		const n = S.H.find((h) => !h.dead && Math.hypot(h.x - P.x, h.y - P.y) < 160) || S.H.find((h) => !h.dead);
		const hpSrc = n && !n.dead ? n : P;
		const max = n && !n.dead ? n.hpMax || HOST_FALLBACK(n) : P_HP;
		const hpW = (hpSrc.hp / max * 100).toFixed(1) + "%";
		if (hpfill && hpW !== lastHpW) {
			hpfill.style.width = hpW;
			if (hpghost) hpghost.style.width = (hpSrc.hpShown / max * 100).toFixed(1) + "%";
			lastHpW = hpW;
		}
		const name = n && !n.dead ? n.n : "You";
		if (hpl) hpl.textContent = name;
		const hpnT = String(Math.round(hpSrc.hp));
		if (hpn && hpnT !== lastHpn) {
			hpn.textContent = hpnT;
			lastHpn = hpnT;
		}
		const on = S.combo.hits > 1;
		comboEl?.classList.toggle("on", on);
		const comboT = S.combo.hits + "|" + S.combo.dmg + "|" + S.combo.air;
		if (comboT !== lastCombo && cn && cl && cs) {
			lastCombo = comboT;
			cn.textContent = String(S.combo.hits);
			cl.textContent = S.combo.hits === 1 ? "HIT" : "HITS";
			cs.textContent = S.combo.dmg + " damage" + (S.combo.air ? "  ·  air " + S.combo.air : "");
		}
		const txt = S.combo.chain.length ? S.combo.chain.map((c, i) => i === S.combo.chain.length - 1 ? "<b>" + c + "</b>" : c).join(" › ") : S.zone || "Cinder Hall";
		if (mvEl && txt !== lastMv) {
			mvEl.innerHTML = txt;
			lastMv = txt;
		}
		if (zoneEl) {
			if (S.zt > 0 && lastZone <= 0) zoneEl.classList.add("on");
			if (S.zt <= 0 && lastZone > 0) zoneEl.classList.remove("on");
			lastZone = S.zt;
			if (S.zt > 0) zoneEl.textContent = S.zone;
		}
	}
	return {
		render,
		hud
	};
}
function HOST_FALLBACK(n) {
	return n.boss ? 1600 : 520;
}
var ROLE = {
	Breaker: "#d9894f",
	Shade: "#9b8bdc",
	Lance: "#6fbfa8",
	Beacon: "#dcc66e",
	Weaver: "#7fb2ea",
	Warden: "#a9c07a"
};
function mountHollow() {
	const offs = [];
	const IMG = {};
	const cv = $("c");
	const cg = cv.getContext("2d");
	let VW = 640, VH = 360, baseZoom = 1;
	let S = makeOffscreen(640, 360);
	function setSize(w, h) {
		VW = w;
		VH = h;
		cv.width = w;
		cv.height = h;
		S = makeOffscreen(w, h);
		baseZoom = Math.min(1.05, w / 640);
	}
	function fit() {
		const { VW: w, VH: h } = fitStage({
			canvas: cv,
			narrowH: 430,
			wideH: 360
		});
		if (w !== VW || h !== VH || !S.c) setSize(w, h);
	}
	const opt = {
		dof: false,
		light: true,
		shake: true,
		push: true,
		debug: false,
		speed: 1,
		fx: true
	};
	const UI = {
		open: null,
		slot: 1,
		p1: "ren_calder",
		s1: "pixel"
	};
	setP1(UI.p1);
	const HS = createHollow({
		IMG,
		opt,
		UI,
		project: (x, y, z) => proj(HS.cam, VW, VH, x, y, z)
	});
	const { P, cam, input } = HS;
	const keys = input.keys;
	const SKINS = {
		pixel: { label: "Pixel" },
		toon: { label: "Toon" }
	};
	const SKIN_ORDER = ["pixel", "toon"];
	function setSkin(id) {
		if (SKINS[id]) {
			UI.s1 = id;
			try {
				localStorage.setItem("vs_skin1", id);
			} catch {}
		}
	}
	function cycleSkin(d) {
		const o = SKIN_ORDER;
		setSkin(o[(o.indexOf(UI.s1) + d + o.length) % o.length]);
	}
	function paintSkin() {
		document.querySelectorAll(".slot.s1 .skinname").forEach((lab) => {
			lab.textContent = SKINS[UI.s1].label;
		});
	}
	let last = performance.now(), acc = 0, ready = false, raf = 0, alive = true;
	let shownDead = false, shownWin = false;
	function frame(now) {
		if (!alive) return;
		raf = requestAnimationFrame(frame);
		if (!ready) return;
		if (UI.open) {
			last = now;
			DR.render(HS);
			return;
		}
		const dt = Math.min(.1, (now - last) / 1e3);
		last = now;
		acc += dt;
		let n = 0;
		while (acc >= .016666666666666666 && n < 8) {
			HS.simTick();
			acc -= TICK;
			n++;
		}
		if (n === 8) acc = 0;
		cam.Z = baseZoom * (cam.zoom || 1);
		setCamMatrix(cam);
		DR.render(HS);
		DR.hud(HS);
		if (HS.dead && !shownDead) {
			shownDead = true;
			goOv("dead");
		}
		if (HS.won && !shownWin) {
			shownWin = true;
			goOv("end");
		}
	}
	const ACT = {
		j: "light",
		z: "light",
		k: "special",
		x: "special",
		" ": "jump",
		shift: "dash",
		v: "dash"
	};
	const onKey = (e) => {
		if (e.metaKey || e.ctrlKey || e.altKey) return;
		const k = e.key.toLowerCase();
		if (UI.open) {
			if (UI.open === "title") {
				if (k === "enter") {
					e.preventDefault();
					openCreate();
				}
				return;
			}
			if (UI.open === "create") {
				if (k === "enter") {
					e.preventDefault();
					descend();
				} else if (k === "escape") goOv("title");
				return;
			}
			if (UI.open === "dead") {
				if (k === "r") walkIn();
				else if (k === "escape") goOv("title");
				return;
			}
			if (UI.open === "end") {
				if (k === "r") walkIn();
				else if (k === "escape") goOv("title");
				return;
			}
			if (k === "escape") {
				if (UI.open === "pause") hideOv();
				else if (UI.open === "how" || UI.open === "credits") goOv("title");
			}
			return;
		}
		if (k === "l" || k === "h") {
			e.preventDefault();
			if (!e.repeat) {
				keys.add("l");
				HS.press("guard");
			}
			return;
		}
		if (k === "f") {
			e.preventDefault();
			if (!e.repeat) HS.press("use");
			return;
		}
		if (ACT[k]) {
			e.preventDefault();
			if (!e.repeat) HS.press(ACT[k]);
			return;
		}
		if ("wasd".includes(k) && k.length === 1 || k.startsWith("arrow")) {
			e.preventDefault();
			keys.add(k);
			return;
		}
		if (e.repeat) return;
		if (k === "q") HS.rotate(-1);
		else if (k === "e") HS.rotate(1);
		else if (k === "m") toggleMute();
		else if (k === "escape") {
			e.preventDefault();
			showOv("pause");
		}
	};
	addEventListener("keydown", onKey);
	offs.push(() => removeEventListener("keydown", onKey));
	offs.push(bindKeyRelease(keys));
	offs.push(bindCamButtons((d) => HS.rotate(d)));
	offs.push(bindCanvasButtons({
		UI,
		press: (a) => HS.press(a),
		blurFocus: true
	}));
	offs.push(bindStick({
		touchMove: input.touchMove,
		onShow: () => fit()
	}));
	offs.push(bindActionButtons({
		UI,
		keys,
		press: (a) => HS.press(a === "use" ? "use" : a),
		onPause: () => showOv("pause")
	}));
	const onResize = () => fit();
	addEventListener("resize", onResize);
	offs.push(() => removeEventListener("resize", onResize));
	const onPtr = () => resumeAudio();
	addEventListener("pointerdown", onPtr);
	offs.push(() => removeEventListener("pointerdown", onPtr));
	const ANIM_P1 = [
		"idle",
		"walk",
		"attack1",
		"attack2",
		"attack3",
		"launcher",
		"air1",
		"plunge",
		"jump",
		"dash",
		"guard",
		"victory",
		"death",
		"hit"
	];
	const ANIM_HOST = [
		"idle",
		"walk",
		"attack1",
		"attack2",
		"attack3",
		"hit",
		"hit_heavy",
		"hit_back",
		"block_hit",
		"guard",
		"launch",
		"tumble",
		"knockdown",
		"getup",
		"death"
	];
	const BASEIDLE = /^[a-z_]+\/idle$/;
	const SL = createSpriteLoader(IMG, DATA, {
		toonBase: "/toons",
		busyOn: () => $("busy")?.classList.add("on"),
		busyOff: () => $("busy")?.classList.remove("on"),
		onImgError: (k) => {
			const el = $("load");
			if (el) el.textContent = "Could not load " + k;
		}
	});
	function loadImgs(need, done) {
		return SL.loadImgs(need, done);
	}
	function loadToons(need, done, quiet) {
		return SL.loadToons(need, done, quiet);
	}
	function loadFighters(p1, s1, done, quiet) {
		const needPx = /* @__PURE__ */ new Set(), needTx = [];
		const pack = (id, an) => an.forEach((a) => [
			"",
			"p16/",
			"p38/"
		].forEach((p) => {
			if (s1 === "toon") needTx.push("toon/" + id + "/" + p + a);
			else needPx.add(`${id}/${p}${a}`);
		}));
		pack(p1, ANIM_P1);
		pack("cinder", ANIM_HOST);
		pack("the_carapace", ANIM_HOST);
		if (!quiet) $("busy")?.classList.add("on");
		loadImgs([...needPx], () => {
			loadToons(needTx, () => {
				if (!quiet) $("busy")?.classList.remove("on");
				paintCards();
				done();
			}, quiet);
		});
	}
	const DR = createHollowRenderer({
		IMG,
		UI,
		opt,
		getView: () => ({
			VW,
			VH,
			baseZoom
		}),
		gfx: () => ({
			sg: S.g,
			cg,
			S: S.c,
			VW,
			VH,
			baseZoom
		})
	});
	const OVF = createOverlay(UI, keys, {
		focus: {
			title: "mCreate",
			create: "descend",
			how: "howBack",
			credits: "credBack",
			pause: "pResume",
			dead: "deadGo",
			end: "endGo"
		},
		onResume: () => {
			last = performance.now();
		}
	});
	const showOv = OVF.show, hideOv = OVF.hide, goOv = OVF.go;
	function paintSlot() {
		const c = CHR[UI.p1], el = document.querySelector(".slot.s1");
		if (!el || !c) return;
		const sn = el.querySelector(".sn"), st = el.querySelector(".st");
		if (sn) sn.textContent = c.name;
		if (st) st.textContent = `${c.title || ""} · ${c.role}, ${c.weapon}`.replace(/^ · /, "");
		document.querySelectorAll(".card").forEach((k) => {
			k.classList.toggle("p1", k.dataset.id === UI.p1);
		});
	}
	function sprite(g, id, row, f, size, skin) {
		const im = IMG[(skin === "toon" ? "toon/" : "") + id + "/idle"] || IMG[id + "/idle"];
		if (!im) return;
		const C = im.width / 6, k = C / 96;
		g.imageSmoothingEnabled = C >= 190;
		g.clearRect(0, 0, size, size);
		g.drawImage(im, f * C + 12 * k, row * C + 6 * k, 72 * k, 72 * k, 0, 0, size, size);
	}
	function paintCards() {
		document.querySelectorAll("#roster .card").forEach((k) => {
			const c = k.querySelector("canvas");
			if (c) sprite(c.getContext("2d"), k.dataset.id, 2, 0, 72, UI.s1);
		});
	}
	function applyPick(done) {
		loadFighters(UI.p1, UI.s1, () => {
			HS.setPa(UI.p1);
			shownDead = shownWin = false;
			HS.reset();
			const hpl = $("hpl");
			if (hpl) hpl.textContent = CHR[UI.p1]?.name || "You";
			if (done) done();
		});
	}
	function openCreate() {
		paintSlot();
		paintSkin();
		goOv("create");
	}
	function descend() {
		const b = $("descend");
		if (b) b.disabled = true;
		snd(440, .08);
		applyPick(() => {
			if (b) b.disabled = false;
			hideOv();
		});
	}
	function walkIn() {
		shownDead = shownWin = false;
		hideOv();
		HS.reset();
		snd(440, .08);
	}
	let hov = null;
	let cardRaf = 0;
	function initUI() {
		const ros = $("roster");
		if (ros) {
			ros.innerHTML = Object.values(CHR).map((c) => `<button class="card" data-id="${c.id}" style="--rc:${ROLE[c.role] || "#999"}" aria-label="${c.name}, ${c.role}, ${c.weapon}"><canvas width="72" height="72"></canvas><span class="nm">${c.name}</span><span class="rl">${c.role}</span></button>`).join("");
			paintCards();
			ros.querySelectorAll(".card").forEach((k) => {
				k.onmouseenter = () => {
					hov = k.dataset.id;
				};
				k.onmouseleave = () => {
					if (hov === k.dataset.id) hov = null;
				};
				k.onclick = () => {
					UI.p1 = k.dataset.id;
					hov = null;
					paintSlot();
					snd(440, .05);
				};
			});
		}
		const click = (id, fn) => {
			const el = $(id);
			if (!el) return;
			const h = () => fn();
			el.addEventListener("click", h);
			offs.push(() => el.removeEventListener("click", h));
		};
		click("mCreate", () => {
			snd(440, .06);
			openCreate();
		});
		click("openCreate", () => openCreate());
		click("descend", () => descend());
		click("mHow", () => {
			snd(660, .05);
			goOv("how");
		});
		click("openHow", () => goOv("how"));
		click("mCred", () => {
			snd(660, .05);
			goOv("credits");
		});
		offs.push(bindMuteButtons());
		click("howBack", () => {
			snd(440, .05);
			goOv("title");
		});
		click("credBack", () => {
			snd(440, .05);
			goOv("title");
		});
		click("pResume", () => {
			snd(440, .05);
			hideOv();
		});
		click("pQuit", () => {
			snd(330, .1);
			HS.reset();
			shownDead = shownWin = false;
			goOv("title");
		});
		click("openPause", () => {
			if (!UI.open) showOv("pause");
		});
		click("deadGo", () => walkIn());
		click("deadTitle", () => goOv("title"));
		click("endGo", () => walkIn());
		click("endTitle", () => goOv("title"));
		paintMute();
		const cs0 = document.querySelector(".slot.s1 canvas");
		const loop = (t) => {
			if (!alive) return;
			cardRaf = requestAnimationFrame(loop);
			if (UI.open !== "create" || !cs0) return;
			const f = Math.floor(t / 1e3 * 6) % 6;
			sprite(cs0.getContext("2d"), hov || UI.p1, 1, f, 256, UI.s1);
		};
		cardRaf = requestAnimationFrame(loop);
		document.querySelectorAll(".slot.s1 [data-sk]").forEach((b) => {
			const fn = (e) => {
				e.stopPropagation();
				cycleSkin(+b.dataset.sk);
				paintSkin();
				paintSlot();
				loadFighters(UI.p1, UI.s1, () => {}, true);
			};
			b.addEventListener("click", fn);
			offs.push(() => b.removeEventListener("click", fn));
		});
		paintSkin();
		paintSlot();
		showOv("title");
	}
	function boot() {
		initUI();
		fit();
		HS.reset();
		$("load")?.remove();
		ready = true;
	}
	window.__hollow = HS;
	window.__controlsTest = {
		getYaw: () => {
			const r = HS.input;
			const keys = r.keys, tm = r.touchMove;
			let x = (keys.has("d") || keys.has("arrowright") ? 1 : 0) - (keys.has("a") || keys.has("arrowleft") ? 1 : 0) + tm.x;
			let y = (keys.has("s") || keys.has("arrowdown") ? 1 : 0) - (keys.has("w") || keys.has("arrowup") ? 1 : 0) + tm.y;
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
		setKeys: (codes) => {
			keys.clear();
			for (const c of codes) keys.add(codeToKey(c));
		},
		getFace: () => P.face
	};
	loadImgs(Object.keys(DATA.img).filter((k) => k === "shadow" || k.startsWith("vfx/") || BASEIDLE.test(k)), boot);
	raf = requestAnimationFrame(frame);
	return () => {
		alive = false;
		cancelAnimationFrame(raf);
		cancelAnimationFrame(cardRaf);
		offs.forEach((f) => f());
		document.body.style.overflow = "";
		document.body.classList.remove("gb");
		delete window.__hollow;
		delete window.__controlsTest;
	};
}
//#endregion
export { mountHollow };
