//#region node_modules/.nitro/vite/services/ssr/assets/shared-BOBe5Bkb.js
var M = {
	"animations": {
		"idle": {
			"frames": 6,
			"fps": 6,
			"loop": true
		},
		"walk": {
			"frames": 6,
			"fps": 10,
			"loop": true
		},
		"jump": {
			"frames": 6,
			"fps": 12,
			"loop": false,
			"frame_roles": [
				"crouch",
				"rise",
				"apex",
				"fall",
				"pre_land",
				"land"
			]
		},
		"hit": {
			"frames": 6,
			"fps": 12,
			"loop": false
		},
		"launch": {
			"frames": 6,
			"fps": 14,
			"loop": false
		},
		"tumble": {
			"frames": 6,
			"fps": 12,
			"loop": true,
			"note": "rows are facings, but the body also spins; any row works for an airborne enemy"
		},
		"knockdown": {
			"frames": 6,
			"fps": 10,
			"loop": false,
			"frame_roles": [
				"land",
				"slam",
				"bounce",
				"slam",
				"settle",
				"settle"
			]
		},
		"getup": {
			"frames": 6,
			"fps": 8,
			"loop": false
		},
		"guard": {
			"frames": 6,
			"fps": 12,
			"loop": false
		},
		"dash": {
			"frames": 6,
			"fps": 16,
			"loop": false
		},
		"death": {
			"frames": 6,
			"fps": 8,
			"loop": false
		},
		"victory": {
			"frames": 6,
			"fps": 8,
			"loop": false
		},
		"hit_heavy": {
			"frames": 6,
			"fps": 12,
			"loop": false
		},
		"hit_back": {
			"frames": 6,
			"fps": 12,
			"loop": false
		},
		"block_hit": {
			"frames": 6,
			"fps": 14,
			"loop": false
		},
		"attack": {
			"frames": 6,
			"fps": 14,
			"loop": false,
			"note": "slots attack1..attack3 are ground skills; launcher, air1 and plunge are the juggle toolkit"
		},
		"launcher": {
			"frames": 6,
			"fps": 14,
			"loop": false
		},
		"air1": {
			"frames": 6,
			"fps": 14,
			"loop": false
		},
		"plunge": {
			"frames": 6,
			"fps": 14,
			"loop": false
		}
	},
	"characters": [
		{
			"id": "ren_calder",
			"name": "Ren Calder",
			"weapon": "twinblades",
			"role": "Shade",
			"title": "The Unsealed",
			"attacks": [
				{
					"slot": "attack1",
					"style": "slash",
					"name": "Slash",
					"hit_frames": [2],
					"startup": 2,
					"cancel_from": 4,
					"tags": [],
					"air": false
				},
				{
					"slot": "attack2",
					"style": "flurry",
					"name": "Flurry",
					"hit_frames": [
						1,
						2,
						3,
						4
					],
					"startup": 1,
					"cancel_from": 4,
					"tags": ["multi_hit"],
					"air": false
				},
				{
					"slot": "attack3",
					"style": "whirl",
					"name": "Whirlwind",
					"hit_frames": [
						2,
						3,
						4
					],
					"startup": 2,
					"cancel_from": 5,
					"tags": ["multi_hit"],
					"air": false
				},
				{
					"slot": "launcher",
					"style": "launcher",
					"name": "Rising strike",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["launcher"],
					"air": false
				},
				{
					"slot": "air1",
					"style": "air",
					"name": "Aerial slash",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["air_only"],
					"air": true
				},
				{
					"slot": "plunge",
					"style": "plunge",
					"name": "Plunge",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": ["air_only", "spike"],
					"air": true
				}
			]
		},
		{
			"id": "sera_quill",
			"name": "Sera Quill",
			"weapon": "staff",
			"role": "Weaver",
			"title": "Stillair",
			"attacks": [
				{
					"slot": "attack1",
					"style": "cast",
					"name": "Cast",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": [],
					"air": false
				},
				{
					"slot": "attack2",
					"style": "pulse",
					"name": "Ground pulse",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": [],
					"air": false
				},
				{
					"slot": "attack3",
					"style": "sweep",
					"name": "Wide sweep",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": [],
					"air": false
				},
				{
					"slot": "launcher",
					"style": "launcher",
					"name": "Rising strike",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["launcher"],
					"air": false
				},
				{
					"slot": "air1",
					"style": "air",
					"name": "Aerial slash",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["air_only"],
					"air": true
				},
				{
					"slot": "plunge",
					"style": "plunge",
					"name": "Plunge",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": ["air_only", "spike"],
					"air": true
				}
			]
		},
		{
			"id": "kade_morr",
			"name": "Kade Morr",
			"weapon": "dagger",
			"role": "Shade",
			"title": "Red Vein",
			"attacks": [
				{
					"slot": "attack1",
					"style": "flurry",
					"name": "Flurry",
					"hit_frames": [
						1,
						2,
						3,
						4
					],
					"startup": 1,
					"cancel_from": 4,
					"tags": ["multi_hit"],
					"air": false
				},
				{
					"slot": "attack2",
					"style": "slash",
					"name": "Slash",
					"hit_frames": [2],
					"startup": 2,
					"cancel_from": 4,
					"tags": [],
					"air": false
				},
				{
					"slot": "attack3",
					"style": "thrust",
					"name": "Thrust",
					"hit_frames": [2],
					"startup": 2,
					"cancel_from": 4,
					"tags": [],
					"air": false
				},
				{
					"slot": "launcher",
					"style": "launcher",
					"name": "Rising strike",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["launcher"],
					"air": false
				},
				{
					"slot": "air1",
					"style": "air",
					"name": "Aerial slash",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["air_only"],
					"air": true
				},
				{
					"slot": "plunge",
					"style": "plunge",
					"name": "Plunge",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": ["air_only", "spike"],
					"air": true
				}
			]
		},
		{
			"id": "bram_holt",
			"name": "Bram Holt",
			"weapon": "maul",
			"role": "Breaker",
			"title": "Bastion",
			"attacks": [
				{
					"slot": "attack1",
					"style": "slam",
					"name": "Overhead slam",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": [],
					"air": false
				},
				{
					"slot": "attack2",
					"style": "sweep",
					"name": "Wide sweep",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": [],
					"air": false
				},
				{
					"slot": "attack3",
					"style": "bash",
					"name": "Shield bash",
					"hit_frames": [2],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["guard_break"],
					"air": false
				},
				{
					"slot": "launcher",
					"style": "launcher",
					"name": "Rising strike",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["launcher"],
					"air": false
				},
				{
					"slot": "air1",
					"style": "air",
					"name": "Aerial slash",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["air_only"],
					"air": true
				},
				{
					"slot": "plunge",
					"style": "plunge",
					"name": "Plunge",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": ["air_only", "spike"],
					"air": true
				}
			]
		},
		{
			"id": "nyx_lumen",
			"name": "Nyx Lumen",
			"weapon": "lantern",
			"role": "Beacon",
			"title": "Lantern",
			"attacks": [
				{
					"slot": "attack1",
					"style": "cast",
					"name": "Cast",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": [],
					"air": false
				},
				{
					"slot": "attack2",
					"style": "pulse",
					"name": "Ground pulse",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": [],
					"air": false
				},
				{
					"slot": "attack3",
					"style": "sweep",
					"name": "Wide sweep",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": [],
					"air": false
				},
				{
					"slot": "launcher",
					"style": "launcher",
					"name": "Rising strike",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["launcher"],
					"air": false
				},
				{
					"slot": "air1",
					"style": "air",
					"name": "Aerial slash",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["air_only"],
					"air": true
				},
				{
					"slot": "plunge",
					"style": "plunge",
					"name": "Plunge",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": ["air_only", "spike"],
					"air": true
				}
			]
		},
		{
			"id": "orin_vale",
			"name": "Orin Vale",
			"weapon": "spear",
			"role": "Lance",
			"title": "Longreach",
			"attacks": [
				{
					"slot": "attack1",
					"style": "thrust",
					"name": "Thrust",
					"hit_frames": [2],
					"startup": 2,
					"cancel_from": 4,
					"tags": [],
					"air": false
				},
				{
					"slot": "attack2",
					"style": "sweep",
					"name": "Wide sweep",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": [],
					"air": false
				},
				{
					"slot": "attack3",
					"style": "whirl",
					"name": "Whirlwind",
					"hit_frames": [
						2,
						3,
						4
					],
					"startup": 2,
					"cancel_from": 5,
					"tags": ["multi_hit"],
					"air": false
				},
				{
					"slot": "launcher",
					"style": "launcher",
					"name": "Rising strike",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["launcher"],
					"air": false
				},
				{
					"slot": "air1",
					"style": "air",
					"name": "Aerial slash",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["air_only"],
					"air": true
				},
				{
					"slot": "plunge",
					"style": "plunge",
					"name": "Plunge",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": ["air_only", "spike"],
					"air": true
				}
			]
		},
		{
			"id": "mairen_solas",
			"name": "Mairen Solas",
			"weapon": "staff",
			"role": "Warden",
			"title": "Mend",
			"attacks": [
				{
					"slot": "attack1",
					"style": "cast",
					"name": "Cast",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": [],
					"air": false
				},
				{
					"slot": "attack2",
					"style": "pulse",
					"name": "Ground pulse",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": [],
					"air": false
				},
				{
					"slot": "attack3",
					"style": "sweep",
					"name": "Wide sweep",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": [],
					"air": false
				},
				{
					"slot": "launcher",
					"style": "launcher",
					"name": "Rising strike",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["launcher"],
					"air": false
				},
				{
					"slot": "air1",
					"style": "air",
					"name": "Aerial slash",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["air_only"],
					"air": true
				},
				{
					"slot": "plunge",
					"style": "plunge",
					"name": "Plunge",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": ["air_only", "spike"],
					"air": true
				}
			]
		},
		{
			"id": "irix_venn",
			"name": "Irix Venn",
			"weapon": "saber",
			"role": "Lance",
			"title": "Chair of Glass",
			"attacks": [
				{
					"slot": "attack1",
					"style": "thrust",
					"name": "Thrust",
					"hit_frames": [2],
					"startup": 2,
					"cancel_from": 4,
					"tags": [],
					"air": false
				},
				{
					"slot": "attack2",
					"style": "slash",
					"name": "Slash",
					"hit_frames": [2],
					"startup": 2,
					"cancel_from": 4,
					"tags": [],
					"air": false
				},
				{
					"slot": "attack3",
					"style": "flurry",
					"name": "Flurry",
					"hit_frames": [
						1,
						2,
						3,
						4
					],
					"startup": 1,
					"cancel_from": 4,
					"tags": ["multi_hit"],
					"air": false
				},
				{
					"slot": "launcher",
					"style": "launcher",
					"name": "Rising strike",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["launcher"],
					"air": false
				},
				{
					"slot": "air1",
					"style": "air",
					"name": "Aerial slash",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["air_only"],
					"air": true
				},
				{
					"slot": "plunge",
					"style": "plunge",
					"name": "Plunge",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": ["air_only", "spike"],
					"air": true
				}
			]
		},
		{
			"id": "juno_rake",
			"name": "Juno Rake",
			"weapon": "staff",
			"role": "Weaver",
			"title": "Emberwake",
			"attacks": [
				{
					"slot": "attack1",
					"style": "cast",
					"name": "Cast",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": [],
					"air": false
				},
				{
					"slot": "attack2",
					"style": "pulse",
					"name": "Ground pulse",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": [],
					"air": false
				},
				{
					"slot": "attack3",
					"style": "sweep",
					"name": "Wide sweep",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": [],
					"air": false
				},
				{
					"slot": "launcher",
					"style": "launcher",
					"name": "Rising strike",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["launcher"],
					"air": false
				},
				{
					"slot": "air1",
					"style": "air",
					"name": "Aerial slash",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["air_only"],
					"air": true
				},
				{
					"slot": "plunge",
					"style": "plunge",
					"name": "Plunge",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": ["air_only", "spike"],
					"air": true
				}
			]
		},
		{
			"id": "cinder",
			"name": "Cinder",
			"weapon": "longsword",
			"role": "Shade",
			"title": "Host unit",
			"attacks": [
				{
					"slot": "attack1",
					"style": "slash",
					"name": "Slash",
					"hit_frames": [2],
					"startup": 2,
					"cancel_from": 4,
					"tags": [],
					"air": false
				},
				{
					"slot": "attack2",
					"style": "thrust",
					"name": "Thrust",
					"hit_frames": [2],
					"startup": 2,
					"cancel_from": 4,
					"tags": [],
					"air": false
				},
				{
					"slot": "attack3",
					"style": "whirl",
					"name": "Whirlwind",
					"hit_frames": [
						2,
						3,
						4
					],
					"startup": 2,
					"cancel_from": 5,
					"tags": ["multi_hit"],
					"air": false
				},
				{
					"slot": "launcher",
					"style": "launcher",
					"name": "Rising strike",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["launcher"],
					"air": false
				},
				{
					"slot": "air1",
					"style": "air",
					"name": "Aerial slash",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["air_only"],
					"air": true
				},
				{
					"slot": "plunge",
					"style": "plunge",
					"name": "Plunge",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": ["air_only", "spike"],
					"air": true
				}
			]
		},
		{
			"id": "the_carapace",
			"name": "The Carapace",
			"weapon": "gauntlets",
			"role": "Breaker",
			"title": "Floor horror",
			"attacks": [
				{
					"slot": "attack1",
					"style": "flurry",
					"name": "Flurry",
					"hit_frames": [
						1,
						2,
						3,
						4
					],
					"startup": 1,
					"cancel_from": 4,
					"tags": ["multi_hit"],
					"air": false
				},
				{
					"slot": "attack2",
					"style": "slam",
					"name": "Overhead slam",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": [],
					"air": false
				},
				{
					"slot": "attack3",
					"style": "sweep",
					"name": "Wide sweep",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": [],
					"air": false
				},
				{
					"slot": "launcher",
					"style": "launcher",
					"name": "Rising strike",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["launcher"],
					"air": false
				},
				{
					"slot": "air1",
					"style": "air",
					"name": "Aerial slash",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["air_only"],
					"air": true
				},
				{
					"slot": "plunge",
					"style": "plunge",
					"name": "Plunge",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": ["air_only", "spike"],
					"air": true
				}
			]
		},
		{
			"id": "floor_voice",
			"name": "Floor Voice",
			"weapon": "tablet",
			"role": "Beacon",
			"title": "The test",
			"attacks": [
				{
					"slot": "attack1",
					"style": "cast",
					"name": "Cast",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": [],
					"air": false
				},
				{
					"slot": "attack2",
					"style": "pulse",
					"name": "Ground pulse",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": [],
					"air": false
				},
				{
					"slot": "launcher",
					"style": "launcher",
					"name": "Rising strike",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["launcher"],
					"air": false
				},
				{
					"slot": "air1",
					"style": "air",
					"name": "Aerial slash",
					"hit_frames": [2, 3],
					"startup": 2,
					"cancel_from": 4,
					"tags": ["air_only"],
					"air": true
				},
				{
					"slot": "plunge",
					"style": "plunge",
					"name": "Plunge",
					"hit_frames": [3],
					"startup": 3,
					"cancel_from": 5,
					"tags": ["air_only", "spike"],
					"air": true
				}
			]
		}
	]
};
var DATA = {
	M,
	img: {
		"shadow": "/art/shadow_standard.png",
		"ren_calder/idle": "/art/ren_calder/idle.png",
		"ren_calder/p16/idle": "/art/ren_calder/p16/idle.png",
		"ren_calder/p38/idle": "/art/ren_calder/p38/idle.png",
		"ren_calder/walk": "/art/ren_calder/walk.png",
		"ren_calder/p16/walk": "/art/ren_calder/p16/walk.png",
		"ren_calder/p38/walk": "/art/ren_calder/p38/walk.png",
		"ren_calder/attack1": "/art/ren_calder/attack1.png",
		"ren_calder/p16/attack1": "/art/ren_calder/p16/attack1.png",
		"ren_calder/p38/attack1": "/art/ren_calder/p38/attack1.png",
		"ren_calder/attack2": "/art/ren_calder/attack2.png",
		"ren_calder/p16/attack2": "/art/ren_calder/p16/attack2.png",
		"ren_calder/p38/attack2": "/art/ren_calder/p38/attack2.png",
		"ren_calder/attack3": "/art/ren_calder/attack3.png",
		"ren_calder/p16/attack3": "/art/ren_calder/p16/attack3.png",
		"ren_calder/p38/attack3": "/art/ren_calder/p38/attack3.png",
		"ren_calder/launcher": "/art/ren_calder/launcher.png",
		"ren_calder/p16/launcher": "/art/ren_calder/p16/launcher.png",
		"ren_calder/p38/launcher": "/art/ren_calder/p38/launcher.png",
		"ren_calder/air1": "/art/ren_calder/air1.png",
		"ren_calder/p16/air1": "/art/ren_calder/p16/air1.png",
		"ren_calder/p38/air1": "/art/ren_calder/p38/air1.png",
		"ren_calder/plunge": "/art/ren_calder/plunge.png",
		"ren_calder/p16/plunge": "/art/ren_calder/p16/plunge.png",
		"ren_calder/p38/plunge": "/art/ren_calder/p38/plunge.png",
		"ren_calder/jump": "/art/ren_calder/jump.png",
		"ren_calder/p16/jump": "/art/ren_calder/p16/jump.png",
		"ren_calder/p38/jump": "/art/ren_calder/p38/jump.png",
		"ren_calder/launch": "/art/ren_calder/launch.png",
		"ren_calder/p16/launch": "/art/ren_calder/p16/launch.png",
		"ren_calder/p38/launch": "/art/ren_calder/p38/launch.png",
		"ren_calder/tumble": "/art/ren_calder/tumble.png",
		"ren_calder/p16/tumble": "/art/ren_calder/p16/tumble.png",
		"ren_calder/p38/tumble": "/art/ren_calder/p38/tumble.png",
		"ren_calder/knockdown": "/art/ren_calder/knockdown.png",
		"ren_calder/p16/knockdown": "/art/ren_calder/p16/knockdown.png",
		"ren_calder/p38/knockdown": "/art/ren_calder/p38/knockdown.png",
		"ren_calder/getup": "/art/ren_calder/getup.png",
		"ren_calder/p16/getup": "/art/ren_calder/p16/getup.png",
		"ren_calder/p38/getup": "/art/ren_calder/p38/getup.png",
		"ren_calder/guard": "/art/ren_calder/guard.png",
		"ren_calder/p16/guard": "/art/ren_calder/p16/guard.png",
		"ren_calder/p38/guard": "/art/ren_calder/p38/guard.png",
		"ren_calder/dash": "/art/ren_calder/dash.png",
		"ren_calder/p16/dash": "/art/ren_calder/p16/dash.png",
		"ren_calder/p38/dash": "/art/ren_calder/p38/dash.png",
		"ren_calder/death": "/art/ren_calder/death.png",
		"ren_calder/p16/death": "/art/ren_calder/p16/death.png",
		"ren_calder/p38/death": "/art/ren_calder/p38/death.png",
		"ren_calder/victory": "/art/ren_calder/victory.png",
		"ren_calder/p16/victory": "/art/ren_calder/p16/victory.png",
		"ren_calder/p38/victory": "/art/ren_calder/p38/victory.png",
		"ren_calder/hit_heavy": "/art/ren_calder/hit_heavy.png",
		"ren_calder/p16/hit_heavy": "/art/ren_calder/p16/hit_heavy.png",
		"ren_calder/p38/hit_heavy": "/art/ren_calder/p38/hit_heavy.png",
		"ren_calder/hit_back": "/art/ren_calder/hit_back.png",
		"ren_calder/p16/hit_back": "/art/ren_calder/p16/hit_back.png",
		"ren_calder/p38/hit_back": "/art/ren_calder/p38/hit_back.png",
		"ren_calder/block_hit": "/art/ren_calder/block_hit.png",
		"ren_calder/p16/block_hit": "/art/ren_calder/p16/block_hit.png",
		"ren_calder/p38/block_hit": "/art/ren_calder/p38/block_hit.png",
		"ren_calder/hit": "/art/ren_calder/hit.png",
		"ren_calder/p16/hit": "/art/ren_calder/p16/hit.png",
		"ren_calder/p38/hit": "/art/ren_calder/p38/hit.png",
		"sera_quill/idle": "/art/sera_quill/idle.png",
		"sera_quill/p16/idle": "/art/sera_quill/p16/idle.png",
		"sera_quill/p38/idle": "/art/sera_quill/p38/idle.png",
		"sera_quill/walk": "/art/sera_quill/walk.png",
		"sera_quill/p16/walk": "/art/sera_quill/p16/walk.png",
		"sera_quill/p38/walk": "/art/sera_quill/p38/walk.png",
		"sera_quill/attack1": "/art/sera_quill/attack1.png",
		"sera_quill/p16/attack1": "/art/sera_quill/p16/attack1.png",
		"sera_quill/p38/attack1": "/art/sera_quill/p38/attack1.png",
		"sera_quill/attack2": "/art/sera_quill/attack2.png",
		"sera_quill/p16/attack2": "/art/sera_quill/p16/attack2.png",
		"sera_quill/p38/attack2": "/art/sera_quill/p38/attack2.png",
		"sera_quill/attack3": "/art/sera_quill/attack3.png",
		"sera_quill/p16/attack3": "/art/sera_quill/p16/attack3.png",
		"sera_quill/p38/attack3": "/art/sera_quill/p38/attack3.png",
		"sera_quill/launcher": "/art/sera_quill/launcher.png",
		"sera_quill/p16/launcher": "/art/sera_quill/p16/launcher.png",
		"sera_quill/p38/launcher": "/art/sera_quill/p38/launcher.png",
		"sera_quill/air1": "/art/sera_quill/air1.png",
		"sera_quill/p16/air1": "/art/sera_quill/p16/air1.png",
		"sera_quill/p38/air1": "/art/sera_quill/p38/air1.png",
		"sera_quill/plunge": "/art/sera_quill/plunge.png",
		"sera_quill/p16/plunge": "/art/sera_quill/p16/plunge.png",
		"sera_quill/p38/plunge": "/art/sera_quill/p38/plunge.png",
		"sera_quill/jump": "/art/sera_quill/jump.png",
		"sera_quill/p16/jump": "/art/sera_quill/p16/jump.png",
		"sera_quill/p38/jump": "/art/sera_quill/p38/jump.png",
		"sera_quill/launch": "/art/sera_quill/launch.png",
		"sera_quill/p16/launch": "/art/sera_quill/p16/launch.png",
		"sera_quill/p38/launch": "/art/sera_quill/p38/launch.png",
		"sera_quill/tumble": "/art/sera_quill/tumble.png",
		"sera_quill/p16/tumble": "/art/sera_quill/p16/tumble.png",
		"sera_quill/p38/tumble": "/art/sera_quill/p38/tumble.png",
		"sera_quill/knockdown": "/art/sera_quill/knockdown.png",
		"sera_quill/p16/knockdown": "/art/sera_quill/p16/knockdown.png",
		"sera_quill/p38/knockdown": "/art/sera_quill/p38/knockdown.png",
		"sera_quill/getup": "/art/sera_quill/getup.png",
		"sera_quill/p16/getup": "/art/sera_quill/p16/getup.png",
		"sera_quill/p38/getup": "/art/sera_quill/p38/getup.png",
		"sera_quill/guard": "/art/sera_quill/guard.png",
		"sera_quill/p16/guard": "/art/sera_quill/p16/guard.png",
		"sera_quill/p38/guard": "/art/sera_quill/p38/guard.png",
		"sera_quill/dash": "/art/sera_quill/dash.png",
		"sera_quill/p16/dash": "/art/sera_quill/p16/dash.png",
		"sera_quill/p38/dash": "/art/sera_quill/p38/dash.png",
		"sera_quill/death": "/art/sera_quill/death.png",
		"sera_quill/p16/death": "/art/sera_quill/p16/death.png",
		"sera_quill/p38/death": "/art/sera_quill/p38/death.png",
		"sera_quill/victory": "/art/sera_quill/victory.png",
		"sera_quill/p16/victory": "/art/sera_quill/p16/victory.png",
		"sera_quill/p38/victory": "/art/sera_quill/p38/victory.png",
		"sera_quill/hit_heavy": "/art/sera_quill/hit_heavy.png",
		"sera_quill/p16/hit_heavy": "/art/sera_quill/p16/hit_heavy.png",
		"sera_quill/p38/hit_heavy": "/art/sera_quill/p38/hit_heavy.png",
		"sera_quill/hit_back": "/art/sera_quill/hit_back.png",
		"sera_quill/p16/hit_back": "/art/sera_quill/p16/hit_back.png",
		"sera_quill/p38/hit_back": "/art/sera_quill/p38/hit_back.png",
		"sera_quill/block_hit": "/art/sera_quill/block_hit.png",
		"sera_quill/p16/block_hit": "/art/sera_quill/p16/block_hit.png",
		"sera_quill/p38/block_hit": "/art/sera_quill/p38/block_hit.png",
		"sera_quill/hit": "/art/sera_quill/hit.png",
		"sera_quill/p16/hit": "/art/sera_quill/p16/hit.png",
		"sera_quill/p38/hit": "/art/sera_quill/p38/hit.png",
		"kade_morr/idle": "/art/kade_morr/idle.png",
		"kade_morr/p16/idle": "/art/kade_morr/p16/idle.png",
		"kade_morr/p38/idle": "/art/kade_morr/p38/idle.png",
		"kade_morr/walk": "/art/kade_morr/walk.png",
		"kade_morr/p16/walk": "/art/kade_morr/p16/walk.png",
		"kade_morr/p38/walk": "/art/kade_morr/p38/walk.png",
		"kade_morr/attack1": "/art/kade_morr/attack1.png",
		"kade_morr/p16/attack1": "/art/kade_morr/p16/attack1.png",
		"kade_morr/p38/attack1": "/art/kade_morr/p38/attack1.png",
		"kade_morr/attack2": "/art/kade_morr/attack2.png",
		"kade_morr/p16/attack2": "/art/kade_morr/p16/attack2.png",
		"kade_morr/p38/attack2": "/art/kade_morr/p38/attack2.png",
		"kade_morr/attack3": "/art/kade_morr/attack3.png",
		"kade_morr/p16/attack3": "/art/kade_morr/p16/attack3.png",
		"kade_morr/p38/attack3": "/art/kade_morr/p38/attack3.png",
		"kade_morr/launcher": "/art/kade_morr/launcher.png",
		"kade_morr/p16/launcher": "/art/kade_morr/p16/launcher.png",
		"kade_morr/p38/launcher": "/art/kade_morr/p38/launcher.png",
		"kade_morr/air1": "/art/kade_morr/air1.png",
		"kade_morr/p16/air1": "/art/kade_morr/p16/air1.png",
		"kade_morr/p38/air1": "/art/kade_morr/p38/air1.png",
		"kade_morr/plunge": "/art/kade_morr/plunge.png",
		"kade_morr/p16/plunge": "/art/kade_morr/p16/plunge.png",
		"kade_morr/p38/plunge": "/art/kade_morr/p38/plunge.png",
		"kade_morr/jump": "/art/kade_morr/jump.png",
		"kade_morr/p16/jump": "/art/kade_morr/p16/jump.png",
		"kade_morr/p38/jump": "/art/kade_morr/p38/jump.png",
		"kade_morr/launch": "/art/kade_morr/launch.png",
		"kade_morr/p16/launch": "/art/kade_morr/p16/launch.png",
		"kade_morr/p38/launch": "/art/kade_morr/p38/launch.png",
		"kade_morr/tumble": "/art/kade_morr/tumble.png",
		"kade_morr/p16/tumble": "/art/kade_morr/p16/tumble.png",
		"kade_morr/p38/tumble": "/art/kade_morr/p38/tumble.png",
		"kade_morr/knockdown": "/art/kade_morr/knockdown.png",
		"kade_morr/p16/knockdown": "/art/kade_morr/p16/knockdown.png",
		"kade_morr/p38/knockdown": "/art/kade_morr/p38/knockdown.png",
		"kade_morr/getup": "/art/kade_morr/getup.png",
		"kade_morr/p16/getup": "/art/kade_morr/p16/getup.png",
		"kade_morr/p38/getup": "/art/kade_morr/p38/getup.png",
		"kade_morr/guard": "/art/kade_morr/guard.png",
		"kade_morr/p16/guard": "/art/kade_morr/p16/guard.png",
		"kade_morr/p38/guard": "/art/kade_morr/p38/guard.png",
		"kade_morr/dash": "/art/kade_morr/dash.png",
		"kade_morr/p16/dash": "/art/kade_morr/p16/dash.png",
		"kade_morr/p38/dash": "/art/kade_morr/p38/dash.png",
		"kade_morr/death": "/art/kade_morr/death.png",
		"kade_morr/p16/death": "/art/kade_morr/p16/death.png",
		"kade_morr/p38/death": "/art/kade_morr/p38/death.png",
		"kade_morr/victory": "/art/kade_morr/victory.png",
		"kade_morr/p16/victory": "/art/kade_morr/p16/victory.png",
		"kade_morr/p38/victory": "/art/kade_morr/p38/victory.png",
		"kade_morr/hit_heavy": "/art/kade_morr/hit_heavy.png",
		"kade_morr/p16/hit_heavy": "/art/kade_morr/p16/hit_heavy.png",
		"kade_morr/p38/hit_heavy": "/art/kade_morr/p38/hit_heavy.png",
		"kade_morr/hit_back": "/art/kade_morr/hit_back.png",
		"kade_morr/p16/hit_back": "/art/kade_morr/p16/hit_back.png",
		"kade_morr/p38/hit_back": "/art/kade_morr/p38/hit_back.png",
		"kade_morr/block_hit": "/art/kade_morr/block_hit.png",
		"kade_morr/p16/block_hit": "/art/kade_morr/p16/block_hit.png",
		"kade_morr/p38/block_hit": "/art/kade_morr/p38/block_hit.png",
		"kade_morr/hit": "/art/kade_morr/hit.png",
		"kade_morr/p16/hit": "/art/kade_morr/p16/hit.png",
		"kade_morr/p38/hit": "/art/kade_morr/p38/hit.png",
		"bram_holt/idle": "/art/bram_holt/idle.png",
		"bram_holt/p16/idle": "/art/bram_holt/p16/idle.png",
		"bram_holt/p38/idle": "/art/bram_holt/p38/idle.png",
		"bram_holt/walk": "/art/bram_holt/walk.png",
		"bram_holt/p16/walk": "/art/bram_holt/p16/walk.png",
		"bram_holt/p38/walk": "/art/bram_holt/p38/walk.png",
		"bram_holt/attack1": "/art/bram_holt/attack1.png",
		"bram_holt/p16/attack1": "/art/bram_holt/p16/attack1.png",
		"bram_holt/p38/attack1": "/art/bram_holt/p38/attack1.png",
		"bram_holt/attack2": "/art/bram_holt/attack2.png",
		"bram_holt/p16/attack2": "/art/bram_holt/p16/attack2.png",
		"bram_holt/p38/attack2": "/art/bram_holt/p38/attack2.png",
		"bram_holt/attack3": "/art/bram_holt/attack3.png",
		"bram_holt/p16/attack3": "/art/bram_holt/p16/attack3.png",
		"bram_holt/p38/attack3": "/art/bram_holt/p38/attack3.png",
		"bram_holt/launcher": "/art/bram_holt/launcher.png",
		"bram_holt/p16/launcher": "/art/bram_holt/p16/launcher.png",
		"bram_holt/p38/launcher": "/art/bram_holt/p38/launcher.png",
		"bram_holt/air1": "/art/bram_holt/air1.png",
		"bram_holt/p16/air1": "/art/bram_holt/p16/air1.png",
		"bram_holt/p38/air1": "/art/bram_holt/p38/air1.png",
		"bram_holt/plunge": "/art/bram_holt/plunge.png",
		"bram_holt/p16/plunge": "/art/bram_holt/p16/plunge.png",
		"bram_holt/p38/plunge": "/art/bram_holt/p38/plunge.png",
		"bram_holt/jump": "/art/bram_holt/jump.png",
		"bram_holt/p16/jump": "/art/bram_holt/p16/jump.png",
		"bram_holt/p38/jump": "/art/bram_holt/p38/jump.png",
		"bram_holt/launch": "/art/bram_holt/launch.png",
		"bram_holt/p16/launch": "/art/bram_holt/p16/launch.png",
		"bram_holt/p38/launch": "/art/bram_holt/p38/launch.png",
		"bram_holt/tumble": "/art/bram_holt/tumble.png",
		"bram_holt/p16/tumble": "/art/bram_holt/p16/tumble.png",
		"bram_holt/p38/tumble": "/art/bram_holt/p38/tumble.png",
		"bram_holt/knockdown": "/art/bram_holt/knockdown.png",
		"bram_holt/p16/knockdown": "/art/bram_holt/p16/knockdown.png",
		"bram_holt/p38/knockdown": "/art/bram_holt/p38/knockdown.png",
		"bram_holt/getup": "/art/bram_holt/getup.png",
		"bram_holt/p16/getup": "/art/bram_holt/p16/getup.png",
		"bram_holt/p38/getup": "/art/bram_holt/p38/getup.png",
		"bram_holt/guard": "/art/bram_holt/guard.png",
		"bram_holt/p16/guard": "/art/bram_holt/p16/guard.png",
		"bram_holt/p38/guard": "/art/bram_holt/p38/guard.png",
		"bram_holt/dash": "/art/bram_holt/dash.png",
		"bram_holt/p16/dash": "/art/bram_holt/p16/dash.png",
		"bram_holt/p38/dash": "/art/bram_holt/p38/dash.png",
		"bram_holt/death": "/art/bram_holt/death.png",
		"bram_holt/p16/death": "/art/bram_holt/p16/death.png",
		"bram_holt/p38/death": "/art/bram_holt/p38/death.png",
		"bram_holt/victory": "/art/bram_holt/victory.png",
		"bram_holt/p16/victory": "/art/bram_holt/p16/victory.png",
		"bram_holt/p38/victory": "/art/bram_holt/p38/victory.png",
		"bram_holt/hit_heavy": "/art/bram_holt/hit_heavy.png",
		"bram_holt/p16/hit_heavy": "/art/bram_holt/p16/hit_heavy.png",
		"bram_holt/p38/hit_heavy": "/art/bram_holt/p38/hit_heavy.png",
		"bram_holt/hit_back": "/art/bram_holt/hit_back.png",
		"bram_holt/p16/hit_back": "/art/bram_holt/p16/hit_back.png",
		"bram_holt/p38/hit_back": "/art/bram_holt/p38/hit_back.png",
		"bram_holt/block_hit": "/art/bram_holt/block_hit.png",
		"bram_holt/p16/block_hit": "/art/bram_holt/p16/block_hit.png",
		"bram_holt/p38/block_hit": "/art/bram_holt/p38/block_hit.png",
		"bram_holt/hit": "/art/bram_holt/hit.png",
		"bram_holt/p16/hit": "/art/bram_holt/p16/hit.png",
		"bram_holt/p38/hit": "/art/bram_holt/p38/hit.png",
		"nyx_lumen/idle": "/art/nyx_lumen/idle.png",
		"nyx_lumen/p16/idle": "/art/nyx_lumen/p16/idle.png",
		"nyx_lumen/p38/idle": "/art/nyx_lumen/p38/idle.png",
		"nyx_lumen/walk": "/art/nyx_lumen/walk.png",
		"nyx_lumen/p16/walk": "/art/nyx_lumen/p16/walk.png",
		"nyx_lumen/p38/walk": "/art/nyx_lumen/p38/walk.png",
		"nyx_lumen/attack1": "/art/nyx_lumen/attack1.png",
		"nyx_lumen/p16/attack1": "/art/nyx_lumen/p16/attack1.png",
		"nyx_lumen/p38/attack1": "/art/nyx_lumen/p38/attack1.png",
		"nyx_lumen/attack2": "/art/nyx_lumen/attack2.png",
		"nyx_lumen/p16/attack2": "/art/nyx_lumen/p16/attack2.png",
		"nyx_lumen/p38/attack2": "/art/nyx_lumen/p38/attack2.png",
		"nyx_lumen/attack3": "/art/nyx_lumen/attack3.png",
		"nyx_lumen/p16/attack3": "/art/nyx_lumen/p16/attack3.png",
		"nyx_lumen/p38/attack3": "/art/nyx_lumen/p38/attack3.png",
		"nyx_lumen/launcher": "/art/nyx_lumen/launcher.png",
		"nyx_lumen/p16/launcher": "/art/nyx_lumen/p16/launcher.png",
		"nyx_lumen/p38/launcher": "/art/nyx_lumen/p38/launcher.png",
		"nyx_lumen/air1": "/art/nyx_lumen/air1.png",
		"nyx_lumen/p16/air1": "/art/nyx_lumen/p16/air1.png",
		"nyx_lumen/p38/air1": "/art/nyx_lumen/p38/air1.png",
		"nyx_lumen/plunge": "/art/nyx_lumen/plunge.png",
		"nyx_lumen/p16/plunge": "/art/nyx_lumen/p16/plunge.png",
		"nyx_lumen/p38/plunge": "/art/nyx_lumen/p38/plunge.png",
		"nyx_lumen/jump": "/art/nyx_lumen/jump.png",
		"nyx_lumen/p16/jump": "/art/nyx_lumen/p16/jump.png",
		"nyx_lumen/p38/jump": "/art/nyx_lumen/p38/jump.png",
		"nyx_lumen/launch": "/art/nyx_lumen/launch.png",
		"nyx_lumen/p16/launch": "/art/nyx_lumen/p16/launch.png",
		"nyx_lumen/p38/launch": "/art/nyx_lumen/p38/launch.png",
		"nyx_lumen/tumble": "/art/nyx_lumen/tumble.png",
		"nyx_lumen/p16/tumble": "/art/nyx_lumen/p16/tumble.png",
		"nyx_lumen/p38/tumble": "/art/nyx_lumen/p38/tumble.png",
		"nyx_lumen/knockdown": "/art/nyx_lumen/knockdown.png",
		"nyx_lumen/p16/knockdown": "/art/nyx_lumen/p16/knockdown.png",
		"nyx_lumen/p38/knockdown": "/art/nyx_lumen/p38/knockdown.png",
		"nyx_lumen/getup": "/art/nyx_lumen/getup.png",
		"nyx_lumen/p16/getup": "/art/nyx_lumen/p16/getup.png",
		"nyx_lumen/p38/getup": "/art/nyx_lumen/p38/getup.png",
		"nyx_lumen/guard": "/art/nyx_lumen/guard.png",
		"nyx_lumen/p16/guard": "/art/nyx_lumen/p16/guard.png",
		"nyx_lumen/p38/guard": "/art/nyx_lumen/p38/guard.png",
		"nyx_lumen/dash": "/art/nyx_lumen/dash.png",
		"nyx_lumen/p16/dash": "/art/nyx_lumen/p16/dash.png",
		"nyx_lumen/p38/dash": "/art/nyx_lumen/p38/dash.png",
		"nyx_lumen/death": "/art/nyx_lumen/death.png",
		"nyx_lumen/p16/death": "/art/nyx_lumen/p16/death.png",
		"nyx_lumen/p38/death": "/art/nyx_lumen/p38/death.png",
		"nyx_lumen/victory": "/art/nyx_lumen/victory.png",
		"nyx_lumen/p16/victory": "/art/nyx_lumen/p16/victory.png",
		"nyx_lumen/p38/victory": "/art/nyx_lumen/p38/victory.png",
		"nyx_lumen/hit_heavy": "/art/nyx_lumen/hit_heavy.png",
		"nyx_lumen/p16/hit_heavy": "/art/nyx_lumen/p16/hit_heavy.png",
		"nyx_lumen/p38/hit_heavy": "/art/nyx_lumen/p38/hit_heavy.png",
		"nyx_lumen/hit_back": "/art/nyx_lumen/hit_back.png",
		"nyx_lumen/p16/hit_back": "/art/nyx_lumen/p16/hit_back.png",
		"nyx_lumen/p38/hit_back": "/art/nyx_lumen/p38/hit_back.png",
		"nyx_lumen/block_hit": "/art/nyx_lumen/block_hit.png",
		"nyx_lumen/p16/block_hit": "/art/nyx_lumen/p16/block_hit.png",
		"nyx_lumen/p38/block_hit": "/art/nyx_lumen/p38/block_hit.png",
		"nyx_lumen/hit": "/art/nyx_lumen/hit.png",
		"nyx_lumen/p16/hit": "/art/nyx_lumen/p16/hit.png",
		"nyx_lumen/p38/hit": "/art/nyx_lumen/p38/hit.png",
		"orin_vale/idle": "/art/orin_vale/idle.png",
		"orin_vale/p16/idle": "/art/orin_vale/p16/idle.png",
		"orin_vale/p38/idle": "/art/orin_vale/p38/idle.png",
		"orin_vale/walk": "/art/orin_vale/walk.png",
		"orin_vale/p16/walk": "/art/orin_vale/p16/walk.png",
		"orin_vale/p38/walk": "/art/orin_vale/p38/walk.png",
		"orin_vale/attack1": "/art/orin_vale/attack1.png",
		"orin_vale/p16/attack1": "/art/orin_vale/p16/attack1.png",
		"orin_vale/p38/attack1": "/art/orin_vale/p38/attack1.png",
		"orin_vale/attack2": "/art/orin_vale/attack2.png",
		"orin_vale/p16/attack2": "/art/orin_vale/p16/attack2.png",
		"orin_vale/p38/attack2": "/art/orin_vale/p38/attack2.png",
		"orin_vale/attack3": "/art/orin_vale/attack3.png",
		"orin_vale/p16/attack3": "/art/orin_vale/p16/attack3.png",
		"orin_vale/p38/attack3": "/art/orin_vale/p38/attack3.png",
		"orin_vale/launcher": "/art/orin_vale/launcher.png",
		"orin_vale/p16/launcher": "/art/orin_vale/p16/launcher.png",
		"orin_vale/p38/launcher": "/art/orin_vale/p38/launcher.png",
		"orin_vale/air1": "/art/orin_vale/air1.png",
		"orin_vale/p16/air1": "/art/orin_vale/p16/air1.png",
		"orin_vale/p38/air1": "/art/orin_vale/p38/air1.png",
		"orin_vale/plunge": "/art/orin_vale/plunge.png",
		"orin_vale/p16/plunge": "/art/orin_vale/p16/plunge.png",
		"orin_vale/p38/plunge": "/art/orin_vale/p38/plunge.png",
		"orin_vale/jump": "/art/orin_vale/jump.png",
		"orin_vale/p16/jump": "/art/orin_vale/p16/jump.png",
		"orin_vale/p38/jump": "/art/orin_vale/p38/jump.png",
		"orin_vale/launch": "/art/orin_vale/launch.png",
		"orin_vale/p16/launch": "/art/orin_vale/p16/launch.png",
		"orin_vale/p38/launch": "/art/orin_vale/p38/launch.png",
		"orin_vale/tumble": "/art/orin_vale/tumble.png",
		"orin_vale/p16/tumble": "/art/orin_vale/p16/tumble.png",
		"orin_vale/p38/tumble": "/art/orin_vale/p38/tumble.png",
		"orin_vale/knockdown": "/art/orin_vale/knockdown.png",
		"orin_vale/p16/knockdown": "/art/orin_vale/p16/knockdown.png",
		"orin_vale/p38/knockdown": "/art/orin_vale/p38/knockdown.png",
		"orin_vale/getup": "/art/orin_vale/getup.png",
		"orin_vale/p16/getup": "/art/orin_vale/p16/getup.png",
		"orin_vale/p38/getup": "/art/orin_vale/p38/getup.png",
		"orin_vale/guard": "/art/orin_vale/guard.png",
		"orin_vale/p16/guard": "/art/orin_vale/p16/guard.png",
		"orin_vale/p38/guard": "/art/orin_vale/p38/guard.png",
		"orin_vale/dash": "/art/orin_vale/dash.png",
		"orin_vale/p16/dash": "/art/orin_vale/p16/dash.png",
		"orin_vale/p38/dash": "/art/orin_vale/p38/dash.png",
		"orin_vale/death": "/art/orin_vale/death.png",
		"orin_vale/p16/death": "/art/orin_vale/p16/death.png",
		"orin_vale/p38/death": "/art/orin_vale/p38/death.png",
		"orin_vale/victory": "/art/orin_vale/victory.png",
		"orin_vale/p16/victory": "/art/orin_vale/p16/victory.png",
		"orin_vale/p38/victory": "/art/orin_vale/p38/victory.png",
		"orin_vale/hit_heavy": "/art/orin_vale/hit_heavy.png",
		"orin_vale/p16/hit_heavy": "/art/orin_vale/p16/hit_heavy.png",
		"orin_vale/p38/hit_heavy": "/art/orin_vale/p38/hit_heavy.png",
		"orin_vale/hit_back": "/art/orin_vale/hit_back.png",
		"orin_vale/p16/hit_back": "/art/orin_vale/p16/hit_back.png",
		"orin_vale/p38/hit_back": "/art/orin_vale/p38/hit_back.png",
		"orin_vale/block_hit": "/art/orin_vale/block_hit.png",
		"orin_vale/p16/block_hit": "/art/orin_vale/p16/block_hit.png",
		"orin_vale/p38/block_hit": "/art/orin_vale/p38/block_hit.png",
		"orin_vale/hit": "/art/orin_vale/hit.png",
		"orin_vale/p16/hit": "/art/orin_vale/p16/hit.png",
		"orin_vale/p38/hit": "/art/orin_vale/p38/hit.png",
		"mairen_solas/idle": "/art/mairen_solas/idle.png",
		"mairen_solas/p16/idle": "/art/mairen_solas/p16/idle.png",
		"mairen_solas/p38/idle": "/art/mairen_solas/p38/idle.png",
		"mairen_solas/walk": "/art/mairen_solas/walk.png",
		"mairen_solas/p16/walk": "/art/mairen_solas/p16/walk.png",
		"mairen_solas/p38/walk": "/art/mairen_solas/p38/walk.png",
		"mairen_solas/attack1": "/art/mairen_solas/attack1.png",
		"mairen_solas/p16/attack1": "/art/mairen_solas/p16/attack1.png",
		"mairen_solas/p38/attack1": "/art/mairen_solas/p38/attack1.png",
		"mairen_solas/attack2": "/art/mairen_solas/attack2.png",
		"mairen_solas/p16/attack2": "/art/mairen_solas/p16/attack2.png",
		"mairen_solas/p38/attack2": "/art/mairen_solas/p38/attack2.png",
		"mairen_solas/attack3": "/art/mairen_solas/attack3.png",
		"mairen_solas/p16/attack3": "/art/mairen_solas/p16/attack3.png",
		"mairen_solas/p38/attack3": "/art/mairen_solas/p38/attack3.png",
		"mairen_solas/launcher": "/art/mairen_solas/launcher.png",
		"mairen_solas/p16/launcher": "/art/mairen_solas/p16/launcher.png",
		"mairen_solas/p38/launcher": "/art/mairen_solas/p38/launcher.png",
		"mairen_solas/air1": "/art/mairen_solas/air1.png",
		"mairen_solas/p16/air1": "/art/mairen_solas/p16/air1.png",
		"mairen_solas/p38/air1": "/art/mairen_solas/p38/air1.png",
		"mairen_solas/plunge": "/art/mairen_solas/plunge.png",
		"mairen_solas/p16/plunge": "/art/mairen_solas/p16/plunge.png",
		"mairen_solas/p38/plunge": "/art/mairen_solas/p38/plunge.png",
		"mairen_solas/jump": "/art/mairen_solas/jump.png",
		"mairen_solas/p16/jump": "/art/mairen_solas/p16/jump.png",
		"mairen_solas/p38/jump": "/art/mairen_solas/p38/jump.png",
		"mairen_solas/launch": "/art/mairen_solas/launch.png",
		"mairen_solas/p16/launch": "/art/mairen_solas/p16/launch.png",
		"mairen_solas/p38/launch": "/art/mairen_solas/p38/launch.png",
		"mairen_solas/tumble": "/art/mairen_solas/tumble.png",
		"mairen_solas/p16/tumble": "/art/mairen_solas/p16/tumble.png",
		"mairen_solas/p38/tumble": "/art/mairen_solas/p38/tumble.png",
		"mairen_solas/knockdown": "/art/mairen_solas/knockdown.png",
		"mairen_solas/p16/knockdown": "/art/mairen_solas/p16/knockdown.png",
		"mairen_solas/p38/knockdown": "/art/mairen_solas/p38/knockdown.png",
		"mairen_solas/getup": "/art/mairen_solas/getup.png",
		"mairen_solas/p16/getup": "/art/mairen_solas/p16/getup.png",
		"mairen_solas/p38/getup": "/art/mairen_solas/p38/getup.png",
		"mairen_solas/guard": "/art/mairen_solas/guard.png",
		"mairen_solas/p16/guard": "/art/mairen_solas/p16/guard.png",
		"mairen_solas/p38/guard": "/art/mairen_solas/p38/guard.png",
		"mairen_solas/dash": "/art/mairen_solas/dash.png",
		"mairen_solas/p16/dash": "/art/mairen_solas/p16/dash.png",
		"mairen_solas/p38/dash": "/art/mairen_solas/p38/dash.png",
		"mairen_solas/death": "/art/mairen_solas/death.png",
		"mairen_solas/p16/death": "/art/mairen_solas/p16/death.png",
		"mairen_solas/p38/death": "/art/mairen_solas/p38/death.png",
		"mairen_solas/victory": "/art/mairen_solas/victory.png",
		"mairen_solas/p16/victory": "/art/mairen_solas/p16/victory.png",
		"mairen_solas/p38/victory": "/art/mairen_solas/p38/victory.png",
		"mairen_solas/hit_heavy": "/art/mairen_solas/hit_heavy.png",
		"mairen_solas/p16/hit_heavy": "/art/mairen_solas/p16/hit_heavy.png",
		"mairen_solas/p38/hit_heavy": "/art/mairen_solas/p38/hit_heavy.png",
		"mairen_solas/hit_back": "/art/mairen_solas/hit_back.png",
		"mairen_solas/p16/hit_back": "/art/mairen_solas/p16/hit_back.png",
		"mairen_solas/p38/hit_back": "/art/mairen_solas/p38/hit_back.png",
		"mairen_solas/block_hit": "/art/mairen_solas/block_hit.png",
		"mairen_solas/p16/block_hit": "/art/mairen_solas/p16/block_hit.png",
		"mairen_solas/p38/block_hit": "/art/mairen_solas/p38/block_hit.png",
		"mairen_solas/hit": "/art/mairen_solas/hit.png",
		"mairen_solas/p16/hit": "/art/mairen_solas/p16/hit.png",
		"mairen_solas/p38/hit": "/art/mairen_solas/p38/hit.png",
		"irix_venn/idle": "/art/irix_venn/idle.png",
		"irix_venn/p16/idle": "/art/irix_venn/p16/idle.png",
		"irix_venn/p38/idle": "/art/irix_venn/p38/idle.png",
		"irix_venn/walk": "/art/irix_venn/walk.png",
		"irix_venn/p16/walk": "/art/irix_venn/p16/walk.png",
		"irix_venn/p38/walk": "/art/irix_venn/p38/walk.png",
		"irix_venn/attack1": "/art/irix_venn/attack1.png",
		"irix_venn/p16/attack1": "/art/irix_venn/p16/attack1.png",
		"irix_venn/p38/attack1": "/art/irix_venn/p38/attack1.png",
		"irix_venn/attack2": "/art/irix_venn/attack2.png",
		"irix_venn/p16/attack2": "/art/irix_venn/p16/attack2.png",
		"irix_venn/p38/attack2": "/art/irix_venn/p38/attack2.png",
		"irix_venn/attack3": "/art/irix_venn/attack3.png",
		"irix_venn/p16/attack3": "/art/irix_venn/p16/attack3.png",
		"irix_venn/p38/attack3": "/art/irix_venn/p38/attack3.png",
		"irix_venn/launcher": "/art/irix_venn/launcher.png",
		"irix_venn/p16/launcher": "/art/irix_venn/p16/launcher.png",
		"irix_venn/p38/launcher": "/art/irix_venn/p38/launcher.png",
		"irix_venn/air1": "/art/irix_venn/air1.png",
		"irix_venn/p16/air1": "/art/irix_venn/p16/air1.png",
		"irix_venn/p38/air1": "/art/irix_venn/p38/air1.png",
		"irix_venn/plunge": "/art/irix_venn/plunge.png",
		"irix_venn/p16/plunge": "/art/irix_venn/p16/plunge.png",
		"irix_venn/p38/plunge": "/art/irix_venn/p38/plunge.png",
		"irix_venn/jump": "/art/irix_venn/jump.png",
		"irix_venn/p16/jump": "/art/irix_venn/p16/jump.png",
		"irix_venn/p38/jump": "/art/irix_venn/p38/jump.png",
		"irix_venn/launch": "/art/irix_venn/launch.png",
		"irix_venn/p16/launch": "/art/irix_venn/p16/launch.png",
		"irix_venn/p38/launch": "/art/irix_venn/p38/launch.png",
		"irix_venn/tumble": "/art/irix_venn/tumble.png",
		"irix_venn/p16/tumble": "/art/irix_venn/p16/tumble.png",
		"irix_venn/p38/tumble": "/art/irix_venn/p38/tumble.png",
		"irix_venn/knockdown": "/art/irix_venn/knockdown.png",
		"irix_venn/p16/knockdown": "/art/irix_venn/p16/knockdown.png",
		"irix_venn/p38/knockdown": "/art/irix_venn/p38/knockdown.png",
		"irix_venn/getup": "/art/irix_venn/getup.png",
		"irix_venn/p16/getup": "/art/irix_venn/p16/getup.png",
		"irix_venn/p38/getup": "/art/irix_venn/p38/getup.png",
		"irix_venn/guard": "/art/irix_venn/guard.png",
		"irix_venn/p16/guard": "/art/irix_venn/p16/guard.png",
		"irix_venn/p38/guard": "/art/irix_venn/p38/guard.png",
		"irix_venn/dash": "/art/irix_venn/dash.png",
		"irix_venn/p16/dash": "/art/irix_venn/p16/dash.png",
		"irix_venn/p38/dash": "/art/irix_venn/p38/dash.png",
		"irix_venn/death": "/art/irix_venn/death.png",
		"irix_venn/p16/death": "/art/irix_venn/p16/death.png",
		"irix_venn/p38/death": "/art/irix_venn/p38/death.png",
		"irix_venn/victory": "/art/irix_venn/victory.png",
		"irix_venn/p16/victory": "/art/irix_venn/p16/victory.png",
		"irix_venn/p38/victory": "/art/irix_venn/p38/victory.png",
		"irix_venn/hit_heavy": "/art/irix_venn/hit_heavy.png",
		"irix_venn/p16/hit_heavy": "/art/irix_venn/p16/hit_heavy.png",
		"irix_venn/p38/hit_heavy": "/art/irix_venn/p38/hit_heavy.png",
		"irix_venn/hit_back": "/art/irix_venn/hit_back.png",
		"irix_venn/p16/hit_back": "/art/irix_venn/p16/hit_back.png",
		"irix_venn/p38/hit_back": "/art/irix_venn/p38/hit_back.png",
		"irix_venn/block_hit": "/art/irix_venn/block_hit.png",
		"irix_venn/p16/block_hit": "/art/irix_venn/p16/block_hit.png",
		"irix_venn/p38/block_hit": "/art/irix_venn/p38/block_hit.png",
		"irix_venn/hit": "/art/irix_venn/hit.png",
		"irix_venn/p16/hit": "/art/irix_venn/p16/hit.png",
		"irix_venn/p38/hit": "/art/irix_venn/p38/hit.png",
		"juno_rake/idle": "/art/juno_rake/idle.png",
		"juno_rake/p16/idle": "/art/juno_rake/p16/idle.png",
		"juno_rake/p38/idle": "/art/juno_rake/p38/idle.png",
		"juno_rake/walk": "/art/juno_rake/walk.png",
		"juno_rake/p16/walk": "/art/juno_rake/p16/walk.png",
		"juno_rake/p38/walk": "/art/juno_rake/p38/walk.png",
		"juno_rake/attack1": "/art/juno_rake/attack1.png",
		"juno_rake/p16/attack1": "/art/juno_rake/p16/attack1.png",
		"juno_rake/p38/attack1": "/art/juno_rake/p38/attack1.png",
		"juno_rake/attack2": "/art/juno_rake/attack2.png",
		"juno_rake/p16/attack2": "/art/juno_rake/p16/attack2.png",
		"juno_rake/p38/attack2": "/art/juno_rake/p38/attack2.png",
		"juno_rake/attack3": "/art/juno_rake/attack3.png",
		"juno_rake/p16/attack3": "/art/juno_rake/p16/attack3.png",
		"juno_rake/p38/attack3": "/art/juno_rake/p38/attack3.png",
		"juno_rake/launcher": "/art/juno_rake/launcher.png",
		"juno_rake/p16/launcher": "/art/juno_rake/p16/launcher.png",
		"juno_rake/p38/launcher": "/art/juno_rake/p38/launcher.png",
		"juno_rake/air1": "/art/juno_rake/air1.png",
		"juno_rake/p16/air1": "/art/juno_rake/p16/air1.png",
		"juno_rake/p38/air1": "/art/juno_rake/p38/air1.png",
		"juno_rake/plunge": "/art/juno_rake/plunge.png",
		"juno_rake/p16/plunge": "/art/juno_rake/p16/plunge.png",
		"juno_rake/p38/plunge": "/art/juno_rake/p38/plunge.png",
		"juno_rake/jump": "/art/juno_rake/jump.png",
		"juno_rake/p16/jump": "/art/juno_rake/p16/jump.png",
		"juno_rake/p38/jump": "/art/juno_rake/p38/jump.png",
		"juno_rake/launch": "/art/juno_rake/launch.png",
		"juno_rake/p16/launch": "/art/juno_rake/p16/launch.png",
		"juno_rake/p38/launch": "/art/juno_rake/p38/launch.png",
		"juno_rake/tumble": "/art/juno_rake/tumble.png",
		"juno_rake/p16/tumble": "/art/juno_rake/p16/tumble.png",
		"juno_rake/p38/tumble": "/art/juno_rake/p38/tumble.png",
		"juno_rake/knockdown": "/art/juno_rake/knockdown.png",
		"juno_rake/p16/knockdown": "/art/juno_rake/p16/knockdown.png",
		"juno_rake/p38/knockdown": "/art/juno_rake/p38/knockdown.png",
		"juno_rake/getup": "/art/juno_rake/getup.png",
		"juno_rake/p16/getup": "/art/juno_rake/p16/getup.png",
		"juno_rake/p38/getup": "/art/juno_rake/p38/getup.png",
		"juno_rake/guard": "/art/juno_rake/guard.png",
		"juno_rake/p16/guard": "/art/juno_rake/p16/guard.png",
		"juno_rake/p38/guard": "/art/juno_rake/p38/guard.png",
		"juno_rake/dash": "/art/juno_rake/dash.png",
		"juno_rake/p16/dash": "/art/juno_rake/p16/dash.png",
		"juno_rake/p38/dash": "/art/juno_rake/p38/dash.png",
		"juno_rake/death": "/art/juno_rake/death.png",
		"juno_rake/p16/death": "/art/juno_rake/p16/death.png",
		"juno_rake/p38/death": "/art/juno_rake/p38/death.png",
		"juno_rake/victory": "/art/juno_rake/victory.png",
		"juno_rake/p16/victory": "/art/juno_rake/p16/victory.png",
		"juno_rake/p38/victory": "/art/juno_rake/p38/victory.png",
		"juno_rake/hit_heavy": "/art/juno_rake/hit_heavy.png",
		"juno_rake/p16/hit_heavy": "/art/juno_rake/p16/hit_heavy.png",
		"juno_rake/p38/hit_heavy": "/art/juno_rake/p38/hit_heavy.png",
		"juno_rake/hit_back": "/art/juno_rake/hit_back.png",
		"juno_rake/p16/hit_back": "/art/juno_rake/p16/hit_back.png",
		"juno_rake/p38/hit_back": "/art/juno_rake/p38/hit_back.png",
		"juno_rake/block_hit": "/art/juno_rake/block_hit.png",
		"juno_rake/p16/block_hit": "/art/juno_rake/p16/block_hit.png",
		"juno_rake/p38/block_hit": "/art/juno_rake/p38/block_hit.png",
		"juno_rake/hit": "/art/juno_rake/hit.png",
		"juno_rake/p16/hit": "/art/juno_rake/p16/hit.png",
		"juno_rake/p38/hit": "/art/juno_rake/p38/hit.png",
		"cinder/idle": "/art/cinder/idle.png",
		"cinder/p16/idle": "/art/cinder/p16/idle.png",
		"cinder/p38/idle": "/art/cinder/p38/idle.png",
		"cinder/walk": "/art/cinder/walk.png",
		"cinder/p16/walk": "/art/cinder/p16/walk.png",
		"cinder/p38/walk": "/art/cinder/p38/walk.png",
		"cinder/attack1": "/art/cinder/attack1.png",
		"cinder/p16/attack1": "/art/cinder/p16/attack1.png",
		"cinder/p38/attack1": "/art/cinder/p38/attack1.png",
		"cinder/attack2": "/art/cinder/attack2.png",
		"cinder/p16/attack2": "/art/cinder/p16/attack2.png",
		"cinder/p38/attack2": "/art/cinder/p38/attack2.png",
		"cinder/attack3": "/art/cinder/attack3.png",
		"cinder/p16/attack3": "/art/cinder/p16/attack3.png",
		"cinder/p38/attack3": "/art/cinder/p38/attack3.png",
		"cinder/launcher": "/art/cinder/launcher.png",
		"cinder/p16/launcher": "/art/cinder/p16/launcher.png",
		"cinder/p38/launcher": "/art/cinder/p38/launcher.png",
		"cinder/air1": "/art/cinder/air1.png",
		"cinder/p16/air1": "/art/cinder/p16/air1.png",
		"cinder/p38/air1": "/art/cinder/p38/air1.png",
		"cinder/plunge": "/art/cinder/plunge.png",
		"cinder/p16/plunge": "/art/cinder/p16/plunge.png",
		"cinder/p38/plunge": "/art/cinder/p38/plunge.png",
		"cinder/jump": "/art/cinder/jump.png",
		"cinder/p16/jump": "/art/cinder/p16/jump.png",
		"cinder/p38/jump": "/art/cinder/p38/jump.png",
		"cinder/launch": "/art/cinder/launch.png",
		"cinder/p16/launch": "/art/cinder/p16/launch.png",
		"cinder/p38/launch": "/art/cinder/p38/launch.png",
		"cinder/tumble": "/art/cinder/tumble.png",
		"cinder/p16/tumble": "/art/cinder/p16/tumble.png",
		"cinder/p38/tumble": "/art/cinder/p38/tumble.png",
		"cinder/knockdown": "/art/cinder/knockdown.png",
		"cinder/p16/knockdown": "/art/cinder/p16/knockdown.png",
		"cinder/p38/knockdown": "/art/cinder/p38/knockdown.png",
		"cinder/getup": "/art/cinder/getup.png",
		"cinder/p16/getup": "/art/cinder/p16/getup.png",
		"cinder/p38/getup": "/art/cinder/p38/getup.png",
		"cinder/guard": "/art/cinder/guard.png",
		"cinder/p16/guard": "/art/cinder/p16/guard.png",
		"cinder/p38/guard": "/art/cinder/p38/guard.png",
		"cinder/dash": "/art/cinder/dash.png",
		"cinder/p16/dash": "/art/cinder/p16/dash.png",
		"cinder/p38/dash": "/art/cinder/p38/dash.png",
		"cinder/death": "/art/cinder/death.png",
		"cinder/p16/death": "/art/cinder/p16/death.png",
		"cinder/p38/death": "/art/cinder/p38/death.png",
		"cinder/victory": "/art/cinder/victory.png",
		"cinder/p16/victory": "/art/cinder/p16/victory.png",
		"cinder/p38/victory": "/art/cinder/p38/victory.png",
		"cinder/hit_heavy": "/art/cinder/hit_heavy.png",
		"cinder/p16/hit_heavy": "/art/cinder/p16/hit_heavy.png",
		"cinder/p38/hit_heavy": "/art/cinder/p38/hit_heavy.png",
		"cinder/hit_back": "/art/cinder/hit_back.png",
		"cinder/p16/hit_back": "/art/cinder/p16/hit_back.png",
		"cinder/p38/hit_back": "/art/cinder/p38/hit_back.png",
		"cinder/block_hit": "/art/cinder/block_hit.png",
		"cinder/p16/block_hit": "/art/cinder/p16/block_hit.png",
		"cinder/p38/block_hit": "/art/cinder/p38/block_hit.png",
		"cinder/hit": "/art/cinder/hit.png",
		"cinder/p16/hit": "/art/cinder/p16/hit.png",
		"cinder/p38/hit": "/art/cinder/p38/hit.png",
		"the_carapace/idle": "/art/the_carapace/idle.png",
		"the_carapace/p16/idle": "/art/the_carapace/p16/idle.png",
		"the_carapace/p38/idle": "/art/the_carapace/p38/idle.png",
		"the_carapace/walk": "/art/the_carapace/walk.png",
		"the_carapace/p16/walk": "/art/the_carapace/p16/walk.png",
		"the_carapace/p38/walk": "/art/the_carapace/p38/walk.png",
		"the_carapace/attack1": "/art/the_carapace/attack1.png",
		"the_carapace/p16/attack1": "/art/the_carapace/p16/attack1.png",
		"the_carapace/p38/attack1": "/art/the_carapace/p38/attack1.png",
		"the_carapace/attack2": "/art/the_carapace/attack2.png",
		"the_carapace/p16/attack2": "/art/the_carapace/p16/attack2.png",
		"the_carapace/p38/attack2": "/art/the_carapace/p38/attack2.png",
		"the_carapace/attack3": "/art/the_carapace/attack3.png",
		"the_carapace/p16/attack3": "/art/the_carapace/p16/attack3.png",
		"the_carapace/p38/attack3": "/art/the_carapace/p38/attack3.png",
		"the_carapace/launcher": "/art/the_carapace/launcher.png",
		"the_carapace/p16/launcher": "/art/the_carapace/p16/launcher.png",
		"the_carapace/p38/launcher": "/art/the_carapace/p38/launcher.png",
		"the_carapace/air1": "/art/the_carapace/air1.png",
		"the_carapace/p16/air1": "/art/the_carapace/p16/air1.png",
		"the_carapace/p38/air1": "/art/the_carapace/p38/air1.png",
		"the_carapace/plunge": "/art/the_carapace/plunge.png",
		"the_carapace/p16/plunge": "/art/the_carapace/p16/plunge.png",
		"the_carapace/p38/plunge": "/art/the_carapace/p38/plunge.png",
		"the_carapace/jump": "/art/the_carapace/jump.png",
		"the_carapace/p16/jump": "/art/the_carapace/p16/jump.png",
		"the_carapace/p38/jump": "/art/the_carapace/p38/jump.png",
		"the_carapace/launch": "/art/the_carapace/launch.png",
		"the_carapace/p16/launch": "/art/the_carapace/p16/launch.png",
		"the_carapace/p38/launch": "/art/the_carapace/p38/launch.png",
		"the_carapace/tumble": "/art/the_carapace/tumble.png",
		"the_carapace/p16/tumble": "/art/the_carapace/p16/tumble.png",
		"the_carapace/p38/tumble": "/art/the_carapace/p38/tumble.png",
		"the_carapace/knockdown": "/art/the_carapace/knockdown.png",
		"the_carapace/p16/knockdown": "/art/the_carapace/p16/knockdown.png",
		"the_carapace/p38/knockdown": "/art/the_carapace/p38/knockdown.png",
		"the_carapace/getup": "/art/the_carapace/getup.png",
		"the_carapace/p16/getup": "/art/the_carapace/p16/getup.png",
		"the_carapace/p38/getup": "/art/the_carapace/p38/getup.png",
		"the_carapace/guard": "/art/the_carapace/guard.png",
		"the_carapace/p16/guard": "/art/the_carapace/p16/guard.png",
		"the_carapace/p38/guard": "/art/the_carapace/p38/guard.png",
		"the_carapace/dash": "/art/the_carapace/dash.png",
		"the_carapace/p16/dash": "/art/the_carapace/p16/dash.png",
		"the_carapace/p38/dash": "/art/the_carapace/p38/dash.png",
		"the_carapace/death": "/art/the_carapace/death.png",
		"the_carapace/p16/death": "/art/the_carapace/p16/death.png",
		"the_carapace/p38/death": "/art/the_carapace/p38/death.png",
		"the_carapace/victory": "/art/the_carapace/victory.png",
		"the_carapace/p16/victory": "/art/the_carapace/p16/victory.png",
		"the_carapace/p38/victory": "/art/the_carapace/p38/victory.png",
		"the_carapace/hit_heavy": "/art/the_carapace/hit_heavy.png",
		"the_carapace/p16/hit_heavy": "/art/the_carapace/p16/hit_heavy.png",
		"the_carapace/p38/hit_heavy": "/art/the_carapace/p38/hit_heavy.png",
		"the_carapace/hit_back": "/art/the_carapace/hit_back.png",
		"the_carapace/p16/hit_back": "/art/the_carapace/p16/hit_back.png",
		"the_carapace/p38/hit_back": "/art/the_carapace/p38/hit_back.png",
		"the_carapace/block_hit": "/art/the_carapace/block_hit.png",
		"the_carapace/p16/block_hit": "/art/the_carapace/p16/block_hit.png",
		"the_carapace/p38/block_hit": "/art/the_carapace/p38/block_hit.png",
		"the_carapace/hit": "/art/the_carapace/hit.png",
		"the_carapace/p16/hit": "/art/the_carapace/p16/hit.png",
		"the_carapace/p38/hit": "/art/the_carapace/p38/hit.png",
		"floor_voice/idle": "/art/floor_voice/idle.png",
		"floor_voice/p16/idle": "/art/floor_voice/p16/idle.png",
		"floor_voice/p38/idle": "/art/floor_voice/p38/idle.png",
		"floor_voice/walk": "/art/floor_voice/walk.png",
		"floor_voice/p16/walk": "/art/floor_voice/p16/walk.png",
		"floor_voice/p38/walk": "/art/floor_voice/p38/walk.png",
		"floor_voice/attack1": "/art/floor_voice/attack1.png",
		"floor_voice/p16/attack1": "/art/floor_voice/p16/attack1.png",
		"floor_voice/p38/attack1": "/art/floor_voice/p38/attack1.png",
		"floor_voice/attack2": "/art/floor_voice/attack2.png",
		"floor_voice/p16/attack2": "/art/floor_voice/p16/attack2.png",
		"floor_voice/p38/attack2": "/art/floor_voice/p38/attack2.png",
		"floor_voice/launcher": "/art/floor_voice/launcher.png",
		"floor_voice/p16/launcher": "/art/floor_voice/p16/launcher.png",
		"floor_voice/p38/launcher": "/art/floor_voice/p38/launcher.png",
		"floor_voice/air1": "/art/floor_voice/air1.png",
		"floor_voice/p16/air1": "/art/floor_voice/p16/air1.png",
		"floor_voice/p38/air1": "/art/floor_voice/p38/air1.png",
		"floor_voice/plunge": "/art/floor_voice/plunge.png",
		"floor_voice/p16/plunge": "/art/floor_voice/p16/plunge.png",
		"floor_voice/p38/plunge": "/art/floor_voice/p38/plunge.png",
		"floor_voice/jump": "/art/floor_voice/jump.png",
		"floor_voice/p16/jump": "/art/floor_voice/p16/jump.png",
		"floor_voice/p38/jump": "/art/floor_voice/p38/jump.png",
		"floor_voice/launch": "/art/floor_voice/launch.png",
		"floor_voice/p16/launch": "/art/floor_voice/p16/launch.png",
		"floor_voice/p38/launch": "/art/floor_voice/p38/launch.png",
		"floor_voice/tumble": "/art/floor_voice/tumble.png",
		"floor_voice/p16/tumble": "/art/floor_voice/p16/tumble.png",
		"floor_voice/p38/tumble": "/art/floor_voice/p38/tumble.png",
		"floor_voice/knockdown": "/art/floor_voice/knockdown.png",
		"floor_voice/p16/knockdown": "/art/floor_voice/p16/knockdown.png",
		"floor_voice/p38/knockdown": "/art/floor_voice/p38/knockdown.png",
		"floor_voice/getup": "/art/floor_voice/getup.png",
		"floor_voice/p16/getup": "/art/floor_voice/p16/getup.png",
		"floor_voice/p38/getup": "/art/floor_voice/p38/getup.png",
		"floor_voice/guard": "/art/floor_voice/guard.png",
		"floor_voice/p16/guard": "/art/floor_voice/p16/guard.png",
		"floor_voice/p38/guard": "/art/floor_voice/p38/guard.png",
		"floor_voice/dash": "/art/floor_voice/dash.png",
		"floor_voice/p16/dash": "/art/floor_voice/p16/dash.png",
		"floor_voice/p38/dash": "/art/floor_voice/p38/dash.png",
		"floor_voice/death": "/art/floor_voice/death.png",
		"floor_voice/p16/death": "/art/floor_voice/p16/death.png",
		"floor_voice/p38/death": "/art/floor_voice/p38/death.png",
		"floor_voice/victory": "/art/floor_voice/victory.png",
		"floor_voice/p16/victory": "/art/floor_voice/p16/victory.png",
		"floor_voice/p38/victory": "/art/floor_voice/p38/victory.png",
		"floor_voice/hit_heavy": "/art/floor_voice/hit_heavy.png",
		"floor_voice/p16/hit_heavy": "/art/floor_voice/p16/hit_heavy.png",
		"floor_voice/p38/hit_heavy": "/art/floor_voice/p38/hit_heavy.png",
		"floor_voice/hit_back": "/art/floor_voice/hit_back.png",
		"floor_voice/p16/hit_back": "/art/floor_voice/p16/hit_back.png",
		"floor_voice/p38/hit_back": "/art/floor_voice/p38/hit_back.png",
		"floor_voice/block_hit": "/art/floor_voice/block_hit.png",
		"floor_voice/p16/block_hit": "/art/floor_voice/p16/block_hit.png",
		"floor_voice/p38/block_hit": "/art/floor_voice/p38/block_hit.png",
		"floor_voice/hit": "/art/floor_voice/hit.png",
		"floor_voice/p16/hit": "/art/floor_voice/p16/hit.png",
		"floor_voice/p38/hit": "/art/floor_voice/p38/hit.png",
		"arena/aud01_a": "/art/arena/aud01_a.png",
		"arena/aud01_b": "/art/arena/aud01_b.png",
		"arena/aud03_a": "/art/arena/aud03_a.png",
		"arena/aud03_b": "/art/arena/aud03_b.png",
		"arena/aud09_a": "/art/arena/aud09_a.png",
		"arena/aud09_b": "/art/arena/aud09_b.png",
		"arena/aud12_a": "/art/arena/aud12_a.png",
		"arena/aud12_b": "/art/arena/aud12_b.png",
		"arena/aud14_a": "/art/arena/aud14_a.png",
		"arena/aud14_b": "/art/arena/aud14_b.png",
		"arena/aud17_a": "/art/arena/aud17_a.png",
		"arena/aud17_b": "/art/arena/aud17_b.png",
		"arena/aud18_a": "/art/arena/aud18_a.png",
		"arena/aud18_b": "/art/arena/aud18_b.png",
		"arena/aud22_a": "/art/arena/aud22_a.png",
		"arena/aud22_b": "/art/arena/aud22_b.png",
		"arena/banner0": "/art/arena/banner0.png",
		"arena/banner1": "/art/arena/banner1.png",
		"arena/banner2": "/art/arena/banner2.png",
		"arena/banner3": "/art/arena/banner3.png",
		"vfx/fire": "/art/vfx/fire.png",
		"vfx/hitspark": "/art/vfx/hitspark.png",
		"vfx/slash": "/art/vfx/slash.png",
		"tile/cursed_ground": "/art/tiles/cursed_ground.png",
		"prop/campfire1": "/art/props/campfire1.png",
		"prop/chest1": "/art/props/chest1.png",
		"prop/column1": "/art/props/column1.png",
		"prop/lamp1": "/art/props/lamp1.png",
		"prop/u_bones1": "/art/props/u_bones1.png",
		"prop/u_bones2": "/art/props/u_bones2.png",
		"prop/u_bones3": "/art/props/u_bones3.png",
		"prop/u_deadtree1": "/art/props/u_deadtree1.png",
		"prop/u_deadtree2": "/art/props/u_deadtree2.png",
		"prop/u_deadtree3": "/art/props/u_deadtree3.png",
		"prop/u_grave1": "/art/props/u_grave1.png",
		"prop/u_grave2": "/art/props/u_grave2.png",
		"prop/u_grave3": "/art/props/u_grave3.png",
		"prop/u_rock1": "/art/props/u_rock1.png",
		"prop/u_rock2": "/art/props/u_rock2.png",
		"prop/u_rock3": "/art/props/u_rock3.png",
		"prop/u_ruin1": "/art/props/u_ruin1.png",
		"prop/u_ruin2": "/art/props/u_ruin2.png",
		"prop/u_ruin3": "/art/props/u_ruin3.png",
		"prop/u_skulls1": "/art/props/u_skulls1.png",
		"prop/u_skulls2": "/art/props/u_skulls2.png",
		"prop/u_skulls3": "/art/props/u_skulls3.png",
		"prop/u_thorn1": "/art/props/u_thorn1.png",
		"prop/u_thorn2": "/art/props/u_thorn2.png",
		"prop/u_thorn3": "/art/props/u_thorn3.png",
		"foe/sw_attack": "/art/foes/sw_attack.png",
		"foe/sw_death": "/art/foes/sw_death.png",
		"foe/sw_hit": "/art/foes/sw_hit.png",
		"foe/sw_idle": "/art/foes/sw_idle.png",
		"foe/sw_run": "/art/foes/sw_run.png"
	}
};
var TAU = Math.PI * 2;
var TICK = 1 / 60;
var rad = (d) => d * Math.PI / 180;
var deg = (r) => r * 180 / Math.PI;
var wrap = (a) => (a % 360 + 360) % 360;
var snap8 = (a) => wrap(Math.round(a / 45) * 45);
var angDiff = (a, b) => Math.abs((a - b + 540) % 360 - 180);
var clamp = (v, a, b) => Math.max(a, Math.min(b, v));
var lerp = (a, b, t) => a + (b - a) * t;
var rnd = (a = 1, b) => b === void 0 ? Math.random() * a : a + Math.random() * (b - a);
var hash = (i, j) => {
	const s = Math.sin(i * 127.1 + j * 311.7) * 43758.5453;
	return s - Math.floor(s);
};
var $ = (id) => document.getElementById(id);
function mk(w, h) {
	const c = document.createElement("canvas");
	c.width = w;
	c.height = h;
	return c;
}
function poly(g, pts) {
	g.beginPath();
	pts.forEach((p, i) => i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]));
	g.closePath();
}
var AC = null;
var muted = false;
try {
	muted = localStorage.getItem("vs_mute") === "1";
} catch (e) {}
function ac() {
	try {
		if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)();
		if (AC.state === "suspended") AC.resume();
	} catch (e) {}
	return AC;
}
function snd(f, d, ty) {
	if (muted) return;
	try {
		const a = ac();
		if (!a) return;
		const o = a.createOscillator(), v = a.createGain();
		o.type = ty || "square";
		o.frequency.value = f;
		v.gain.value = .05;
		o.connect(v);
		v.connect(a.destination);
		o.start();
		v.gain.exponentialRampToValueAtTime(.001, a.currentTime + d);
		o.stop(a.currentTime + d);
	} catch (e) {}
}
function toggleMute() {
	muted = !muted;
	try {
		localStorage.setItem("vs_mute", muted ? "1" : "0");
	} catch (e) {}
	paintMute();
}
function paintMute() {
	const t = "Sound: " + (muted ? "off" : "on");
	["mMute", "pMute"].forEach((id) => {
		const b = $(id);
		if (b) b.textContent = t;
	});
}
function resumeAudio() {
	try {
		if (AC && AC.state === "suspended") AC.resume();
	} catch (e) {}
}
/** Basis vectors + focus point from angle/focus. Z (zoom scale) is owned by the caller. */
function setCamMatrix(cam) {
	const a = cam.ang * Math.PI / 180;
	cam.c = Math.cos(a);
	cam.s = Math.sin(a);
	cam.frx = cam.fx * cam.c - cam.fy * cam.s;
	cam.fry = (cam.fx * cam.s + cam.fy * cam.c) * cam.py - (cam.fz || 0);
}
function proj(cam, vw, vh, x, y, z) {
	const rx = x * cam.c - y * cam.s;
	const ry = x * cam.s + y * cam.c;
	return [vw / 2 + cam.Z * (rx - cam.frx) + cam.shx, vh / 2 + vh * .035 + cam.Z * (ry * cam.py - z - cam.fry) + cam.shy];
}
var depthOf = (cam, x, y) => x * cam.s + y * cam.c;
var rowOf = (cam, face) => Math.round(wrap(face + cam.ang) / 45) % 8;
var CHR = {};
M.characters.forEach((c) => {
	CHR[c.id] = c;
});
var META = {};
var MOVE = {
	launcher: {
		lunge: 45,
		reach: 56,
		arc: 60,
		kb: 18,
		stun: .5,
		vz: [330, 345],
		hs: [6, 4],
		shake: [.3, .15],
		push: [.08, 0],
		kind: "launch",
		dmg: [55, 55]
	},
	air1: {
		lunge: 50,
		reach: 64,
		arc: 72,
		kb: 30,
		stun: .5,
		pop: 150,
		hs: 4,
		shake: .14,
		push: 0,
		kind: "air",
		dmg: [45, 45]
	},
	plunge: {
		lunge: 0,
		reach: 0,
		arc: 360,
		kb: 30,
		stun: .5,
		radius: 52,
		fwd: 16,
		hs: 11,
		shake: .7,
		push: .13,
		kind: "spike",
		dmg: [130]
	}
};
var L = (o) => Object.assign({
	kb: 80,
	stun: .5,
	hs: 5,
	shake: .16,
	push: 0,
	kind: "light",
	dmg: [70]
}, o);
var STYLE = {
	slam: L({
		lunge: 95,
		reach: 58,
		arc: 62
	}),
	sweep: L({
		lunge: 70,
		reach: 68,
		arc: 85,
		kb: 100,
		shake: .2
	}),
	bash: L({
		lunge: 140,
		reach: 56,
		arc: 50,
		kb: 150,
		vz: 150,
		hs: 9,
		shake: .5,
		push: .1,
		kind: "heavy",
		dmg: [110]
	}),
	slash: L({
		lunge: 90,
		reach: 62,
		arc: 70
	}),
	thrust: L({
		lunge: 110,
		reach: 78,
		arc: 34,
		kb: 90
	}),
	whirl: L({
		lunge: 50,
		reach: 62,
		arc: 140,
		kb: 120,
		shake: .2
	}),
	flurry: L({
		lunge: 80,
		reach: 56,
		arc: 60,
		kb: 60,
		hs: 3,
		shake: .1,
		dmg: [
			28,
			28,
			28
		]
	}),
	cast: L({
		lunge: 0,
		reach: 92,
		arc: 80,
		kb: 100,
		shake: .2,
		dmg: [65]
	}),
	pulse: L({
		lunge: 0,
		reach: 84,
		arc: 120,
		kb: 130,
		shake: .25,
		dmg: [65]
	})
};
var FALLBACK_CUT = {
	slot: "attack1",
	style: "slash",
	name: "Fallback cut",
	hit_frames: [2],
	startup: 2,
	cancel_from: 4,
	tags: [],
	air: false
};
/** Rebuild META/MOVE for a fighter (e.g. fighters missing attack3 get a safe fallback). */
function setP1(id) {
	for (const k in META) delete META[k];
	CHR[id].attacks.forEach((a) => {
		META[a.slot] = a;
	});
	[
		"attack1",
		"attack2",
		"attack3"
	].forEach((s) => {
		if (!META[s]) META[s] = {
			...FALLBACK_CUT,
			slot: s
		};
		MOVE[s] = STYLE[META[s].style] || STYLE.slash;
	});
}
var animFps = (a) => a.startsWith("attack") ? M.animations.attack.fps : M.animations[a] ? M.animations[a].fps : 12;
/** Ground light-chain order (cancel a move into the next). */
var CHAIN_NEXT = {
	attack1: "attack2",
	attack2: "attack3",
	attack3: "attack1",
	launcher: "attack1"
};
var REDUCED_MOTION = (() => {
	try {
		return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	} catch (e) {
		return false;
	}
})();
var VFX = {
	slash: {
		fw: 64,
		fh: 47,
		cols: 3,
		frames: 9
	},
	hitspark: {
		fw: 100,
		fh: 100,
		cols: 6,
		frames: 30
	},
	fire: {
		fw: 100,
		fh: 100,
		cols: 8,
		frames: 16
	}
};
var EL = {
	bram_holt: "#ff7a3c",
	cinder: "#ffc46a",
	ren_calder: "#b07ae0",
	sera_quill: "#ffe9a8",
	kade_morr: "#9fe06a",
	nyx_lumen: "#8fc4ff",
	orin_vale: "#bfe8d8",
	mairen_solas: "#ffe9a8",
	irix_venn: "#a8dcff",
	juno_rake: "#ff9a4c",
	the_carapace: "#c07ae8",
	floor_voice: "#d8b8ff"
};
function createFx(opt, IMG) {
	const parts = [];
	const rings = [];
	const nums = [];
	const flashes = [];
	const tintCache = {};
	function spark(x, y, z, n, spd, col, up = .5, dirA = null) {
		for (let i = 0; i < n; i++) {
			const a = dirA === null ? rnd(TAU) : rad(dirA + rnd(-70, 70));
			const s = spd * rnd(.35, 1.1);
			parts.push({
				type: "spark",
				x,
				y,
				z,
				vx: Math.cos(a) * s,
				vy: Math.sin(a) * s,
				vz: spd * rnd(.1, .9) * up + rnd(20, 60),
				life: 0,
				max: rnd(.18, .4),
				col,
				size: Math.random() < .3 ? 2 : 1,
				g: 620
			});
		}
	}
	function dust(x, y, n, spd, z = 2) {
		for (let i = 0; i < n; i++) {
			const a = rnd(TAU), s = spd * rnd(.3, 1);
			parts.push({
				type: "dust",
				x: x + Math.cos(a) * 6,
				y: y + Math.sin(a) * 6,
				z,
				vx: Math.cos(a) * s,
				vy: Math.sin(a) * s,
				vz: rnd(14, 40),
				life: 0,
				max: rnd(.35, .7),
				size: rnd(2, 5),
				g: -25
			});
		}
	}
	const flare = (x, y, z, size) => parts.push({
		type: "flare",
		x,
		y,
		z,
		vx: 0,
		vy: 0,
		vz: 0,
		life: 0,
		max: .13,
		size,
		g: 0
	});
	const ring = (x, y, maxR, dur, col, w = 2) => rings.push({
		x,
		y,
		maxR,
		dur,
		t: 0,
		col,
		w
	});
	const flash = (x, y, z, r, col, I, dur = .18) => flashes.push({
		x,
		y,
		z,
		r,
		col,
		I,
		t: 0,
		dur
	});
	const num = (x, y, z, text, col) => nums.push({
		x,
		y,
		z,
		text,
		col,
		t: 0
	});
	function updateFx(dt = TICK) {
		for (let i = parts.length - 1; i >= 0; i--) {
			const p = parts[i];
			p.life += dt;
			p.x += p.vx * dt;
			p.y += p.vy * dt;
			p.z += p.vz * dt;
			p.vz -= p.g * dt;
			if (p.type === "dust") {
				p.vx *= .94;
				p.vy *= .94;
			}
			if (p.life >= p.max || p.type === "spark" && p.z < 0) parts.splice(i, 1);
		}
		for (let i = rings.length - 1; i >= 0; i--) {
			rings[i].t += dt;
			if (rings[i].t >= rings[i].dur) rings.splice(i, 1);
		}
		for (let i = nums.length - 1; i >= 0; i--) {
			const n = nums[i];
			n.t += dt;
			if (n.t > .9) nums.splice(i, 1);
		}
		for (let i = flashes.length - 1; i >= 0; i--) {
			flashes[i].t += dt;
			if (flashes[i].t >= flashes[i].dur) flashes.splice(i, 1);
		}
	}
	function vfxTint(p) {
		const img = IMG["vfx/" + p.key];
		if (!img || !img.complete || !img.naturalWidth) return null;
		if (!p.tint) return img;
		const ck = p.key + p.tint;
		let c = tintCache[ck];
		if (!c) {
			c = mk(img.width, img.height);
			const g2 = c.getContext("2d");
			g2.drawImage(img, 0, 0);
			g2.globalCompositeOperation = "source-in";
			g2.fillStyle = p.tint;
			g2.fillRect(0, 0, c.width, c.height);
			tintCache[ck] = c;
		}
		return c;
	}
	function stripFx(key, x, y, z, o) {
		if (!opt.fx) return;
		o = Object.assign({
			fps: 24,
			scale: 1,
			ang: 0,
			squash: 1,
			tint: null
		}, o || {});
		const V = VFX[key];
		if (!V) return;
		parts.push({
			type: "strip",
			key,
			x,
			y,
			z,
			vx: 0,
			vy: 0,
			vz: 0,
			g: 0,
			life: 0,
			max: V.frames / o.fps,
			fps: o.fps,
			scale: o.scale,
			ang: o.ang,
			squash: o.squash,
			tint: o.tint
		});
	}
	return {
		parts,
		rings,
		nums,
		flashes,
		spark,
		dust,
		flare,
		ring,
		flash,
		num,
		updateFx,
		vfxTint,
		stripFx
	};
}
var G_PLAYER = 1500;
var E_JUGGLE_SCALE = .12;
var E_BOUNCE_G = 1100;
var HP_MAX = 2e3;
var BRAZ = [
	[4.05, 4.05],
	[-4.05, -4.05],
	[4.05, -4.05],
	[-4.05, 4.05]
].map(([u, v], i) => {
	return {
		x: (u - v) * 32,
		y: (u + v) * 32,
		ph: i * 1.7
	};
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
function createDuel(deps) {
	const { IMG, opt } = deps;
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
	const P = mkEnt(), E = mkEnt();
	P.state = "ground";
	P.airCount = 0;
	P.plunged = false;
	P.hitDone = /* @__PURE__ */ new Set();
	P.slot = null;
	P.move = null;
	P.cur = null;
	E.hp = HP_MAX;
	E.hpShown = HP_MAX;
	E.juggle = 0;
	E.stunT = 0;
	E.spiked = false;
	E.launchT = 0;
	E.kd = null;
	E.shk = 0;
	E.bounceSlam = false;
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
		Z: 1
	};
	const { parts, rings, nums, flashes, spark, dust, flare, ring, flash, num, updateFx, vfxTint, stripFx } = createFx(opt, IMG);
	const embers = [];
	const dbg = {
		cone: null,
		t: 0
	};
	const bot = {
		on: false,
		st: "wait",
		timer: 0,
		cool: 0,
		mv: {
			x: 0,
			y: 0
		}
	};
	const dir = {
		shot: 0,
		chT: 0,
		chBest: 0,
		tw: null,
		tH: 12,
		tL: 16,
		q: null,
		qT: 0,
		last: -1e9,
		lastPri: 0,
		pause: 0,
		grace: 0,
		latch: null,
		bad: 0,
		bar: 0,
		flash: 0,
		cur: 1,
		why: "-",
		sc: new Array(8).fill(0),
		log: [],
		beats: {
			plunge: 1,
			launcher: 1,
			heavy: 1,
			knock: 1,
			neutral: 1
		}
	};
	let fsHits = 0, fsDmg = 0, fightStart = 0;
	const PRI = {
		plunge: 3,
		launcher: 3,
		heavy: 2,
		knock: 2,
		neutral: 1,
		chase: 1
	};
	function resetAll() {
		E.dead = false;
		fightStart = tick;
		fsHits = 0;
		fsDmg = 0;
		Object.assign(P, mkEnt(), {
			x: -64,
			y: -6,
			face: 0,
			state: "ground",
			airCount: 0,
			plunged: false,
			slot: null,
			move: null
		});
		P.hitDone = /* @__PURE__ */ new Set();
		Object.assign(E, mkEnt(), {
			x: 44,
			y: 14,
			face: 180,
			hp: HP_MAX,
			hpShown: HP_MAX,
			juggle: 0,
			stunT: 0,
			spiked: false,
			launchT: 0,
			kd: null,
			shk: 0
		});
		combo.hits = combo.dmg = combo.air = 0;
		combo.active = false;
		combo.show = 0;
		combo.chain = [];
		parts.length = rings.length = nums.length = flashes.length = 0;
		buf.length = 0;
		hitstop = 0;
		dir.q = null;
		dir.tw = null;
		dir.shot = 0;
		dir.latch = null;
		dir.last = -1e9;
		dir.pause = dir.grace = dir.bar = dir.flash = 0;
	}
	for (let i = 0; i < 34; i++) embers.push({
		x: rnd(-201.6, 201.6),
		y: rnd(-201.6, 201.6),
		z: rnd(0, 150),
		s: rnd(6, 16),
		ph: rnd(TAU)
	});
	function arenaClamp(e, r) {
		const lim = 224 - r * 1.5;
		let hit = false;
		const u = e.x + e.y, v = e.y - e.x;
		if (u > lim) {
			const d = u - lim;
			e.x -= d / 2;
			e.y -= d / 2;
			hit = true;
		} else if (u < -lim) {
			const d = u + lim;
			e.x -= d / 2;
			e.y -= d / 2;
			hit = true;
		}
		if (v > lim) {
			const d = v - lim;
			e.y -= d / 2;
			e.x += d / 2;
			hit = true;
		} else if (v < -lim) {
			const d = v + lim;
			e.y -= d / 2;
			e.x += d / 2;
			hit = true;
		}
		if (hit) {
			e.vx *= .4;
			e.vy *= .4;
		}
		return hit;
	}
	const dirVec = (a) => ({
		x: Math.cos(rad(a)),
		y: Math.sin(rad(a))
	});
	function faceToward(e, o) {
		e.face = snap8(deg(Math.atan2(o.y - e.y, o.x - e.x)));
	}
	const distPE = () => Math.hypot(E.x - P.x, E.y - P.y);
	function shakeCam(a) {
		cam.shake = Math.min(1, Math.max(cam.shake, a));
	}
	function pushIn(a) {
		if (opt.push && a > 0) cam.zv += a * 40;
	}
	function focusKick(a) {
		cam.fk = Math.max(cam.fk, a);
	}
	function directorBeat(n) {
		if (dir.beats[n] && (!dir.q || PRI[n] >= PRI[dir.q])) {
			dir.q = n;
			dir.qT = tick;
		}
	}
	function quality(th) {
		const a = rad(th), c = Math.cos(a), s = Math.sin(a), dx = E.x - P.x, dy = E.y - P.y, d = Math.hypot(dx, dy) || 1;
		const rx = dx * c - dy * s, ry = (dx * s + dy * c) * .5 - (E.z - P.z);
		const side = Math.abs(rx) / d;
		const ov = clamp((44 - Math.abs(rx)) / 16, 0, 1) * clamp((60 - Math.abs(ry)) / 16, 0, 1);
		let br = 0;
		for (const b of BRAZ) {
			const db = b.x * s + b.y * c;
			for (const f of [P, E]) if (db > f.x * s + f.y * c) {
				const bx = (b.x - f.x) * c - (b.y - f.y) * s, by = ((b.x - f.x) * s + (b.y - f.y) * c) * .5;
				br = Math.max(br, 1 - Math.hypot(bx, by) / 40);
			}
		}
		const { baseZoom, vw } = deps.getView();
		const edge = clamp((Math.abs(rx) * .5 * baseZoom - (vw / 2 - 70)) / 30, 0, 1);
		return .55 * side + .25 * (1 - ov) + .1 * (1 - clamp(br, 0, 1)) + .1 * (1 - edge) - .05 * angDiff(wrap(th), wrap(cam.target)) / 45;
	}
	function cutTo(ang, why) {
		latchNow();
		const from = wrap(cam.target), d = (ang - from + 540) % 360 - 180, hero = PRI[why] === 3, h = REDUCED_MOTION ? .5 : 1;
		let a0 = cam.ang, to = cam.target + d;
		if (Math.abs(to) >= 360) {
			const k = Math.floor(to / 360) * 360;
			to -= k;
			a0 -= k;
		}
		cam.target = to;
		cam.ang = a0;
		const T = hero ? dir.tH : dir.tL;
		dir.tw = T > 0 ? {
			from: a0,
			to,
			t: 0,
			T
		} : (cam.ang = to, null);
		if (hero) dir.shot = 70;
		dir.last = tick;
		dir.lastPri = PRI[why];
		dir.q = null;
		dir.why = why + " " + from + "→" + wrap(ang);
		dir.log.push(tick + " " + dir.why + " q" + dir.sc[wrap(ang) / 45].toFixed(2));
		if (dir.log.length > 8) dir.log.shift();
		if (opt.push) cam.zv += (hero ? 3 : 1.8) * h;
		if (!REDUCED_MOTION) {
			dir.flash = hero ? 8 : 0;
			if (why === "plunge") dir.bar = 54;
		}
	}
	function directorTick() {
		if (dir.pause > 0) dir.pause--;
		else if (dir.grace > 0) dir.grace--;
		if (dir.flash > 0) dir.flash--;
		if (dir.bar > 0) dir.bar--;
		for (let i = 0; i < 8; i++) dir.sc[i] = quality(i * 45);
		const cur = wrap(cam.target);
		dir.cur = dir.sc[cur / 45];
		const imm = opt.immersive;
		if (dir.shot > 0) dir.shot--;
		cam.pt = dir.shot > 0 ? .33 : imm ? .46 : .5;
		{
			const el = deg(Math.atan(cam.pt));
			cam.pv = el < 21.3 ? "p16/" : el > 32.3 ? "p38/" : "";
		}
		cam.pkt = imm ? dir.shot > 0 ? .26 : .18 : 0;
		const calm0 = P.state === "ground" && (E.state === "idle" || E.state === "stun" || E.state === "getup");
		cam.ch += ((imm && opt.autocam && dir.pause <= 0 && calm0 ? 1 : 0) - cam.ch) * .04;
		if (dir.q && tick - dir.qT > 6) dir.q = null;
		if (!opt.autocam || dir.pause > 0 || dir.grace > 0 || opt.speed < 1) {
			dir.q = null;
			dir.bad = 0;
			return;
		}
		const calm = P.state === "ground" && (E.state === "idle" || E.state === "stun" || E.state === "getup");
		dir.bad = calm && !imm && dir.cur < .4 ? dir.bad + 1 : 0;
		let beat = dir.q;
		if (!beat && dir.bad >= 30 && dir.beats.neutral) beat = "neutral";
		if (!beat && imm && calm && Math.hypot(E.x - P.x, E.y - P.y) > 50) {
			const adv = (th) => {
				const a = rad(th);
				return (P.x - E.x) * Math.sin(a) + (P.y - E.y) * Math.cos(a);
			};
			let bi = -1, ba = adv(cur) + 35;
			for (const k of [
				-2,
				-1,
				1,
				2
			]) {
				const i = (cur / 45 + k + 8) % 8, v = adv(i * 45);
				if (v > ba) {
					ba = v;
					bi = i;
				}
			}
			dir.chT = bi >= 0 ? dir.chT + 1 : 0;
			if (dir.chT >= 24) {
				beat = "chase";
				dir.chBest = bi;
			}
		} else if (!beat) dir.chT = 0;
		if (!beat) return;
		const pri = PRI[beat], hero = pri === 3, since = tick - dir.last;
		if (since < 36 || since < 90 && pri <= dir.lastPri) return;
		if (E.state === "air" && !E.spiked && beat !== "launcher" && beat !== "heavy") return;
		if (beat === "chase") {
			dir.chT = 0;
			cutTo(dir.chBest * 45, "chase");
			return;
		}
		if (pri === 2 && dir.cur >= .4) {
			dir.q = null;
			return;
		}
		const need = hero ? .6 : dir.cur + .25, maxk = beat === "neutral" ? 1 : 2, ci = cur / 45;
		let best = -1, bq = -9;
		for (const k of [
			-2,
			-1,
			1,
			2
		]) {
			if (Math.abs(k) > maxk) continue;
			const i = (ci + k + 8) % 8, q = dir.sc[i];
			if (q >= need && q > bq) {
				bq = q;
				best = i;
			}
		}
		if (best < 0) {
			dir.q = null;
			return;
		}
		cutTo(best * 45, beat);
	}
	function hittable() {
		if (E.state === "getup" || E.state === "down" && !(E.kd && E.kd.phase === "bounce")) return false;
		if (E.state === "down" && E.kd && E.kd.phase === "bounce" && E.z < 8) return false;
		return true;
	}
	function vertOK(az, reachUp = 46, reachDown = 46) {
		const dz = E.z - az;
		return dz < reachUp + 6 && dz > -reachDown;
	}
	function inCone(att, reach, arc) {
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
	function hurt(slot, idx, att) {
		const mv = MOVE[slot], meta = META[slot];
		const wasAir = E.z > 6 || E.state === "air" || E.state === "down" && E.kd && E.kd.phase === "bounce";
		const dv = dirVec(att.face);
		if (E.state === "guard" || E.state === "block") {
			if (mv.kind === "light" || mv.kind === "air") {
				const chip = Math.round(mv.dmg[Math.min(idx, mv.dmg.length - 1)] * .12);
				E.hp = Math.max(1, E.hp - chip);
				E.hpHit = tick;
				E.state = "block";
				E.t = 0;
				E.stunT = .3;
				E.vx = dv.x * (mv.kb || 60) * .45;
				E.vy = dv.y * (mv.kb || 60) * .45;
				E.anim = "block_hit";
				E.frame = null;
				faceToward(E, att);
				num(E.x, E.y, E.z + 48, "Blocked", "#9fc4ff");
				spark(lerp(att.x, E.x, .7), lerp(att.y, E.y, .7), E.z + 26, 6, 150, "#bcd6ff", .4, deg(Math.atan2(dv.y, dv.x)));
				stripFx("hitspark", lerp(att.x, E.x, .7), lerp(att.y, E.y, .7), E.z + 26, {
					fps: 30,
					scale: .45,
					tint: "#bcd6ff"
				});
				hitstop = Math.max(hitstop, 3);
				shakeCam(.08);
				combo.endT = tick;
				return;
			}
			num(E.x, E.y, E.z + 60, "Guard broken", "#ffcf8a");
			E.state = "idle";
		}
		if (!combo.active) {
			combo.hits = 0;
			combo.dmg = 0;
			combo.air = 0;
			combo.chain = [];
		}
		combo.active = true;
		combo.hits++;
		const scale = Math.max(.35, 1 - .07 * (combo.hits - 1));
		const base = mv.dmg[Math.min(idx, mv.dmg.length - 1)];
		const dmg = Math.round(base * scale);
		combo.dmg += dmg;
		combo.max = Math.max(combo.max, combo.hits);
		E.hp = Math.max(0, E.hp - dmg);
		E.hpHit = tick;
		combo.endT = tick;
		comboName(meta.name);
		const hx = lerp(att.x, E.x, .7), hy = lerp(att.y, E.y, .7), hz = E.z + 26;
		num(E.x + rnd(-9, 9), E.y, E.z + 48 + rnd(-4, 8), String(dmg), idx ? "#ffd9a8" : "#fff");
		const hsArr = (a) => Array.isArray(a) ? a[Math.min(idx, a.length - 1)] : a;
		let hs = hsArr(mv.hs) || 4, sh = hsArr(mv.shake) || .15, pu = hsArr(mv.push) || 0;
		const kind = mv.kind;
		if (E.state === "down" && E.kd && E.kd.phase === "bounce") {
			E.state = "air";
			E.kd = null;
			E.spiked = false;
		}
		if (kind === "light" && !wasAir) {
			const behind = angDiff(att.face, E.face) < 70;
			E.state = "stun";
			E.anim = behind ? "hit_back" : mv.kb >= 100 || (mv.shake || 0) >= .2 ? "hit_heavy" : "hit";
			E.t = 0;
			E.stunT = mv.stun;
			E.vx = dv.x * mv.kb;
			E.vy = dv.y * mv.kb;
			if (!behind) faceToward(E, att);
			E.shk = hs;
		} else if (kind === "heavy") {
			E.state = "air";
			E.vz = mv.vz;
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
			E.vz = Math.max(E.vz, hsArr(mv.vz));
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
		pushIn(pu);
		if (pu > .09) focusKick(.7);
		if (kind === "launch" && !wasAir) directorBeat("launcher");
		else if (kind === "heavy") directorBeat("heavy");
		spark(hx, hy, hz, kind === "heavy" || kind === "spike" ? 16 : 9, kind === "heavy" ? 240 : 190, kind === "light" ? "#ffe2b0" : "#fff3d8", .6, deg(Math.atan2(dv.y, dv.x)));
		flare(hx, hy, hz, kind === "light" ? 8 : 13);
		const elc = EL[deps.getPA()] || "#fff";
		const sa = deps.project(att.x, att.y, att.z), sb = deps.project(E.x, E.y, E.z), sang = Math.atan2(sb[1] - sa[1], sb[0] - sa[0]);
		stripFx("hitspark", hx, hy, hz, {
			fps: 30,
			scale: kind === "light" ? .8 : 1,
			tint: elc
		});
		if (kind === "heavy" || kind === "launch" || kind === "air") stripFx("slash", hx, hy, hz, {
			fps: 20,
			scale: 1.2,
			ang: sang,
			tint: elc
		});
		else if (kind === "light") stripFx("slash", hx, hy, hz, {
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
		], kind === "light" ? .6 : .95, .2);
		dbg.cone = {
			x: att.x,
			y: att.y,
			face: att.face,
			reach: mv.reach || mv.radius,
			arc: mv.arc || 360,
			t: 14
		};
		snd(kind === "launch" ? 300 : kind === "spike" ? 140 : 190, .06);
		if (att === P && P.z > 6 && slot === "air1") P.vz = Math.max(P.vz, 110);
	}
	function playerHit(slot, idx) {
		const mv = MOVE[slot];
		if (!hittable()) return false;
		if (slot === "plunge") {
			const tip = {
				x: P.x + dirVec(P.face).x * mv.fwd,
				y: P.y + dirVec(P.face).y * mv.fwd
			};
			if (Math.hypot(E.x - tip.x, E.y - tip.y) > mv.radius + 8) return false;
			if (!vertOK(P.z, 40, 46)) return false;
		} else {
			if (!inCone(P, mv.reach, mv.arc)) return false;
			if (!vertOK(P.z)) return false;
		}
		hurt(slot, idx, P);
		return true;
	}
	function press(a) {
		buf.push({
			a,
			t: tick
		});
		if (buf.length > 6) buf.shift();
	}
	function rawMove() {
		const keys = input.keys, tm = input.touchMove;
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
		if (dir.latch || bot.on) return;
		const r = rawMove();
		if (r.m >= .1) dir.latch = {
			ang: cam.ang,
			dir: deg(Math.atan2(r.y, r.x))
		};
	}
	function worldMove() {
		if (bot.on) return bot.mv;
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
		dir.pause = 240;
		dir.grace = 60;
		dir.q = null;
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
		if (distPE() < 130 && hittable() || distPE() < 130 && E.state !== "down") faceToward(P, E);
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
		if (distPE() < 150) faceToward(P, E);
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
		const w = worldMove(), m = Math.hypot(w.x, w.y) > .2, d = m ? {
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
		const s = P.state, f = s === "atk" || s === "airatk" ? frameIdx(P) : 0;
		const neutral = s === "ground" || s === "land" && P.t > .04;
		const cancel = (s === "atk" || s === "airatk") && f >= P.move.cancel_from;
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
	function updatePlayer() {
		const p = P;
		p.t += TICK;
		const w = worldMove(), want = Math.hypot(w.x, w.y) > .2;
		switch (p.state) {
			case "ground": {
				p.anim = want ? "walk" : "idle";
				p.frame = null;
				if (want) p.face = snap8(deg(Math.atan2(w.y, w.x)));
				const k = 1 - Math.exp(-18 * TICK);
				p.vx = lerp(p.vx, want ? w.x * 112 : 0, k);
				p.vy = lerp(p.vy, want ? w.y * 112 : 0, k);
				if (p.anim === "idle" && Math.hypot(p.vx, p.vy) > 10) p.anim = "walk";
				consumeBuffer();
				break;
			}
			case "dash":
				p.anim = "dash";
				p.frame = null;
				p.vx *= .93;
				p.vy *= .93;
				if (p.t > .2) consumeBuffer();
				if (P.state === "dash" && p.t >= 6 / animFps("dash")) {
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
				if (E.state === "stun") {
					const dx = E.x - p.x, dy = E.y - p.y, d = Math.hypot(dx, dy);
					if (d > 30 && d < 150) {
						p.vx += dx / d * 220 * TICK;
						p.vy += dy / d * 220 * TICK;
					}
				}
				if (m.hit_frames.includes(f) && !p.hitDone.has(f)) {
					p.hitDone.add(f);
					playerHit(p.slot, m.hit_frames.indexOf(f));
				}
				consumeBuffer();
				if (P.state === "atk" && p.t >= 6 / animFps(p.anim)) {
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
				if (!atk || f >= p.move.cancel_from) {
					const k = 1 - Math.exp(-8 * TICK);
					p.vx = lerp(p.vx, want ? w.x * 96 : 0, k);
					p.vy = lerp(p.vy, want ? w.y * 96 : 0, k);
					if (want && !atk) p.face = snap8(deg(Math.atan2(w.y, w.x)));
				} else {
					p.vx *= .96;
					p.vy *= .96;
					if (hittable()) {
						const dx = E.x - p.x, dy = E.y - p.y, d = Math.hypot(dx, dy);
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
				const gs = atk ? f < p.move.cancel_from ? .28 : .6 : 1;
				p.vz -= G_PLAYER * gs * TICK;
				p.z += p.vz * TICK;
				if (atk && m_hit(p, f)) {}
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
					if (P.state === "airatk" && p.t >= 6 / animFps(p.anim)) {
						p.state = "air";
						p.slot = null;
					}
				}
				break;
			}
			case "plunge": {
				const fps = animFps("plunge"), T2 = 2 / fps, T3 = 3 / fps, T5 = 5 / fps, f = frameIdx(p);
				if (p.t < T2) {
					p.vz = 0;
					p.z = p.z0 + 5 * Math.sin(clamp(p.t / T2, 0, 1) * Math.PI);
					p.vx *= .95;
					p.vy *= .95;
					p.zd = p.z;
				} else if (p.t < T3) {
					const u = (p.t - T2) / (T3 - T2);
					const zt = Math.min(p.zd, Math.max(16, hittable() ? E.z - 8 : 0));
					p.z = p.zd + (zt - p.zd) * u * u;
					p.vz = 0;
					let dv = dirVec(p.face), sp = 150;
					if (hittable()) {
						const tx = E.x - p.x, ty = E.y - p.y, td = Math.hypot(tx, ty);
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
							flash(tip.x, tip.y, 4, 90, [
								255,
								190,
								120
							], .7, .2);
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
				if (P.state === "land" && p.t >= .1) {
					p.state = "ground";
					p.frame = null;
				}
		}
		p.x += p.vx * TICK;
		p.y += p.vy * TICK;
		if (p.z < 0) p.z = 0;
		arenaClamp(p, 14);
		if (E.state === "idle" || E.state === "stun") {
			const dx = p.x - E.x, dy = p.y - E.y, d = Math.hypot(dx, dy);
			if (d < 26 && Math.abs(p.z - E.z) < 34 && d > .01) {
				const k = (26 - d) / d;
				p.x += dx * k;
				p.y += dy * k;
			}
		}
	}
	function m_hit(p, f) {
		const m = p.move;
		if (m.hit_frames.includes(f) && !p.hitDone.has(f)) {
			p.hitDone.add(f);
			playerHit(p.slot, m.hit_frames.indexOf(f));
		}
		return true;
	}
	function enemyLand() {
		const s = -E.vz;
		E.z = 0;
		const spiked = E.spiked;
		let bv = 0;
		if (spiked) bv = 330;
		else if (s > 260) bv = Math.min(200, s * .33);
		E.spiked = false;
		E.state = "down";
		E.vz = 0;
		E.vx *= .3;
		E.vy *= .3;
		E.kd = {
			phase: spiked ? "slam" : "land",
			t: 0,
			bv,
			spike: spiked
		};
		E.launchT = 0;
		const big = spiked ? 1 : clamp((s - 200) / 500, 0, .6);
		dust(E.x, E.y, spiked ? 14 : 8, spiked ? 90 : 55);
		if (spiked || s > 420) ring(E.x, E.y, spiked ? 78 : 50, spiked ? .5 : .35, spiked ? "#f3c58f" : "#b9c4d6", spiked ? 3 : 2);
		flash(E.x, E.y, 6, spiked ? 150 : 90, [
			255,
			190,
			120
		], spiked ? 1 : .6, .25);
		hitstop = Math.max(hitstop, spiked ? 9 : 3);
		E.shk = spiked ? 9 : 3;
		shakeCam(.2 + big * .6);
		pushIn(spiked ? .12 : big * .07);
		if (spiked) focusKick(1);
		if (spiked) directorBeat("plunge");
		else if (s > 420) directorBeat("knock");
		const sd = spiked ? 60 : 0;
		if (sd) {
			combo.dmg += sd;
			E.hp = Math.max(0, E.hp - sd);
			num(E.x, E.y, 40, String(sd), "#ffcf8a");
			combo.hits++;
			combo.max = Math.max(combo.max, combo.hits);
			comboName("Ground bounce");
		}
	}
	function updateEnemy() {
		const e = E;
		e.t += TICK;
		e.frame = null;
		switch (e.state) {
			case "idle":
				setAnim(e, "idle");
				faceToward(e, P);
				e.vx *= .8;
				e.vy *= .8;
				if (opt.dguard) {
					e.state = "guard";
					e.t = 0;
				}
				break;
			case "guard":
				setAnim(e, "guard");
				e.frame = 3;
				faceToward(e, P);
				e.vx *= .8;
				e.vy *= .8;
				if (!opt.dguard) {
					e.state = "idle";
					setAnim(e, "idle");
				}
				break;
			case "block":
				e.stunT -= TICK;
				e.vx *= .9;
				e.vy *= .9;
				if (e.stunT <= 0) {
					e.state = opt.dguard ? "guard" : "idle";
					e.t = 0;
					setAnim(e, e.state === "guard" ? "guard" : "idle");
				}
				break;
			case "stun":
				e.stunT -= TICK;
				e.vx *= .92;
				e.vy *= .92;
				if (e.stunT <= 0) {
					e.state = "idle";
					setAnim(e, "idle");
				}
				break;
			case "air": {
				e.launchT += TICK;
				const gs = 1 + E_JUGGLE_SCALE * Math.min(e.juggle, 6);
				const hover = P.state === "plunge" && P.t < 3 / animFps("plunge") && !e.spiked ? .3 : 1;
				e.vz -= (e.spiked ? 3400 : 900 * gs * hover) * TICK;
				e.z += e.vz * TICK;
				if (hover < 1) {
					e.vx *= .9;
					e.vy *= .9;
				} else {
					e.vx *= .965;
					e.vy *= .965;
				}
				if (e.launchT < .36) {
					e.anim = "launch";
					e.frame = Math.min(5, Math.floor(e.launchT * animFps("launch")));
				} else {
					e.anim = "tumble";
					e.frame = Math.floor((e.launchT - .36) * animFps("tumble")) % 6;
				}
				if (e.z <= 0 && e.vz < 0) enemyLand();
				break;
			}
			case "down": {
				const kd = e.kd;
				kd.t += TICK;
				e.anim = "knockdown";
				e.vx *= .9;
				e.vy *= .9;
				const next = (ph) => {
					kd.phase = ph;
					kd.t = 0;
				};
				switch (kd.phase) {
					case "land":
						e.frame = 0;
						if (kd.t >= .05) next("slam");
						break;
					case "slam":
						e.frame = 1;
						if (kd.t >= .07) {
							if (kd.bv > 0) {
								next("bounce");
								e.vz = kd.bv;
								e.z = .01;
							} else next("settle1");
						}
						break;
					case "bounce":
						e.frame = 2;
						e.vz -= E_BOUNCE_G * TICK;
						e.z += e.vz * TICK;
						if (e.z <= 0 && e.vz < 0) {
							-e.vz;
							e.z = 0;
							e.vz = 0;
							next("slam2");
							dust(e.x, e.y, 6, 45);
							ring(e.x, e.y, 38, .3, "#b9c4d6", 2);
							shakeCam(.3);
							hitstop = Math.max(hitstop, 3);
							e.shk = 3;
							flash(e.x, e.y, 4, 80, [
								255,
								190,
								120
							], .7, .2);
						}
						break;
					case "slam2":
						e.frame = 3;
						if (kd.t >= .08) next("settle1");
						break;
					case "settle1":
						e.frame = 4;
						if (kd.t >= .12) next("lie");
						break;
					case "lie":
						e.frame = 5;
						if (kd.t >= .42) {
							e.state = "getup";
							e.t = 0;
							e.kd = null;
						}
				}
				break;
			}
			case "getup":
				setAnim(e, "getup");
				if (e.t >= 6 / animFps("getup")) {
					e.state = "idle";
					setAnim(e, "idle");
					e.juggle = 0;
				}
		}
		e.x += e.vx * TICK;
		e.y += e.vy * TICK;
		arenaClamp(e, 14);
		if (e.state === "idle" && combo.active) {
			if (tick - combo.endT > 75) {
				combo.active = false;
				combo.endT = tick;
			}
		}
		if (e.state === "stun" || e.state === "idle" || e.state === "getup") {}
	}
	function setBot(on) {
		bot.on = on;
		bot.st = "wait";
		bot.timer = 0;
		bot.cool = 20;
		bot.mv = {
			x: 0,
			y: 0
		};
		const el = document.querySelector("[data-o=demo]");
		if (el) el.setAttribute("aria-pressed", String(on));
	}
	function userTouched() {
		if (bot.on) setBot(false);
	}
	function botTick() {
		const b = bot;
		b.mv = {
			x: 0,
			y: 0
		};
		b.timer++;
		if (b.cool > 0) b.cool--;
		const dx = E.x - P.x, dy = E.y - P.y, d = Math.max(.01, Math.hypot(dx, dy));
		const toward = () => {
			b.mv = {
				x: dx / d,
				y: dy / d
			};
		};
		const f = P.state === "atk" || P.state === "airatk" || P.state === "plunge" ? frameIdx(P) : 0;
		const go = (s) => {
			b.st = s;
			b.timer = 0;
		};
		switch (b.st) {
			case "wait":
				if (E.state === "idle" && P.state === "ground" && b.cool <= 0) go("approach");
				break;
			case "approach":
				if (d > 40) toward();
				else {
					press("light");
					go("l1");
				}
				if (b.timer > 300) go("wait");
				break;
			case "l1":
				if (P.state === "atk" && P.slot === "attack1" && f >= 3) {
					press("light");
					go("l2");
				} else if (b.timer > 90) go("wait");
				break;
			case "l2":
				if (P.state === "atk" && P.slot === "attack2" && f >= 3) {
					press("special");
					go("lau");
				} else if (b.timer > 90) go("wait");
				break;
			case "lau":
				if (P.state === "atk" && P.slot === "launcher" && f >= 3) {
					press("jump");
					go("jmp");
				} else if (b.timer > 90) go("wait");
				break;
			case "jmp":
				if (P.state === "air" || P.state === "airatk") {
					if (d > 30) toward();
					if (E.z - P.z < 34 || P.vz < 0) {
						press("light");
						go("a1");
					}
				} else if (b.timer > 90) go("wait");
				break;
			case "a1":
				if (d > 34 && (P.state === "air" || f >= 4)) toward();
				if (P.state === "airatk" && P.slot === "air1" && f >= 3) {
					press("light");
					go("a2");
				} else if (b.timer > 120) go("wait");
				break;
			case "a2":
				if (d > 34 && (P.state === "air" || f >= 4)) toward();
				if (P.state === "airatk" && P.airCount >= 2 && f >= 3) {
					press("special");
					go("pl");
				} else if (b.timer > 120) go("wait");
				break;
			case "pl":
				if (P.state === "plunge") go("fin");
				else if (b.timer > 60) go("wait");
				break;
			case "fin": if (P.state === "ground" && (E.state === "getup" || E.state === "idle")) {
				b.cool = 70;
				go("wait");
			} else if (b.timer > 420) go("wait");
		}
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
		cam.zv += (230 * (1 - cam.zoom) - 26 * cam.zv) * TICK;
		cam.zoom += cam.zv * TICK;
		const wp = .5 - .2 * cam.ch, we = .5 + .2 * cam.ch, tx = (P.x * wp + E.x * we) * .45, ty = (P.y * wp + E.y * we) * .45, k = 1 - Math.exp(-4 * TICK);
		const k2 = 1 - Math.exp(-5 * TICK);
		cam.py += (cam.pt + (REDUCED_MOTION ? 0 : Math.sin(tick * .012) * .012) - cam.py) * k2;
		cam.pk += (cam.pkt - cam.pk) * k2;
		cam.fx += (tx - cam.fx) * k;
		cam.fy += (ty - cam.fy) * k;
		cam.fz += ((E.state === "air" ? Math.max(0, E.z) * .3 : 0) - cam.fz) * k;
		cam.shake = Math.max(0, cam.shake - TICK * 1.7);
		cam.fk = Math.max(0, cam.fk - TICK * 2.2);
		const m = cam.shake * cam.shake * 9;
		cam.shx = opt.shake && m > .05 ? Math.round(m * .6 * Math.sin(tick * 1.1) + m * .4 * Math.sin(tick * 2.7 + 1.3)) : 0;
		cam.shy = opt.shake && m > .05 ? Math.round(m * .6 * Math.sin(tick * 1.3 + 2.1) + m * .4 * Math.sin(tick * 3.1)) : 0;
	}
	function stepEmbers() {
		for (const e of embers) {
			e.z += e.s * TICK;
			e.x += Math.sin(tick * .02 + e.ph) * .15;
			if (e.z > 170) {
				e.z = 0;
				e.x = rnd(-201.6, 201.6);
				e.y = rnd(-201.6, 201.6);
			}
		}
	}
	function simTick() {
		tick++;
		updateCam();
		directorTick();
		stepEmbers();
		if (hitstop > 0) {
			hitstop--;
			if (hitstop === 0) E.shk = 0;
			return;
		}
		if (bot.on) botTick();
		updatePlayer();
		updateEnemy();
		if (E.hp <= 0 && !E.dead) {
			E.dead = true;
			E.deadT = 0;
			E.state = "dead";
			E.vx = E.vy = E.vz = 0;
			E.z = 0;
			combo.endT = tick;
			fsHits = combo.hits;
			fsDmg = combo.dmg;
			stripFx("fire", E.x, E.y, 8, {
				fps: 20,
				scale: 1.6
			});
		}
		if (E.dead) {
			E.deadT += TICK;
			E.anim = "death";
			E.frame = Math.min(5, Math.floor(E.deadT * animFps("death")));
			if (P.state === "ground" && E.deadT > .7) {
				P.vx = P.vy = 0;
				P.anim = "victory";
				P.frame = Math.min(5, Math.floor((E.deadT - .7) * animFps("victory")));
			}
			if (E.deadT > 3.6) {
				deps.onResult();
				return;
			}
		}
		updateFx();
		if (!combo.active && combo.hits > 0) {
			if (tick - combo.endT > 110) combo.hits = 0;
		}
		E.hpShown += (E.hp - E.hpShown) * (1 - Math.exp(-14 * TICK));
		if (!E.dead && !combo.active && E.hp < 2e3 && tick - combo.endT > 75) E.hp = Math.min(HP_MAX, E.hp + HP_MAX * TICK * .7);
		if (dbg.t > 0) dbg.t--;
		if (dbg.cone) {
			dbg.cone.t--;
			if (dbg.cone.t <= 0) dbg.cone = null;
		}
	}
	return {
		P,
		E,
		combo,
		cam,
		dir,
		bot,
		dbg,
		parts,
		rings,
		nums,
		flashes,
		embers,
		input,
		vfxTint,
		press,
		userTouched,
		resetAll,
		simTick,
		rotate,
		setBot,
		setAnim,
		frameIdx,
		get tick() {
			return tick;
		},
		get hitstop() {
			return hitstop;
		},
		get fsHits() {
			return fsHits;
		},
		get fsDmg() {
			return fsDmg;
		},
		get fightStart() {
			return fightStart;
		}
	};
}
var N = 7;
var A = 224;
var CELL = 96;
var AX = 48;
var AY = 74;
var POSTC = 4.35;
var tileXY = (u, v) => [(u - v) * 32, (u + v) * 32];
var POSTS = [
	[POSTC, POSTC],
	[-4.35, -4.35],
	[POSTC, -4.35],
	[-4.35, POSTC]
].map(([u, v]) => {
	const [x, y] = tileXY(u, v);
	return {
		x,
		y
	};
});
var ROPES = [
	[0, 2],
	[0, 3],
	[1, 2],
	[1, 3]
];
var AUDV = [
	1,
	3,
	9,
	12,
	14,
	17,
	18,
	22
];
var CROWD = [];
for (let k = 0; k < 16; k++) {
	const a = k / 16 * TAU;
	CROWD.push({
		x: Math.cos(a) * 295,
		y: Math.sin(a) * 295,
		v: k % AUDV.length,
		ph: k * 2.39 % TAU
	});
}
for (let k = 0; k < 20; k++) {
	const a = (k + .5) / 20 * TAU;
	CROWD.push({
		x: Math.cos(a) * 365,
		y: Math.sin(a) * 365,
		v: (k * 3 + 1) % AUDV.length,
		ph: k * 1.71 % TAU
	});
}
var BANP = [
	[198, 198],
	[-198, -198],
	[198, -198],
	[-198, 198]
];
function createDuelRenderer(deps) {
	const { IMG } = deps;
	const UI = deps.UI;
	const opt = deps.opt;
	let S, P, E, combo, cam, dir, dbg;
	let parts, rings, nums, flashes, embers;
	let sg, cg, S_;
	let Lc, lg, Q2, q2g, Q4, q4g, Q8, q8g;
	let B1, b1g, B2, b2g, VW = 0, VH = 0;
	const skinEnt = (e) => (e === P ? UI.s1 : UI.s2) === "toon" ? "toon/" : "";
	function flick(b) {
		return .82 + .18 * Math.sin(S.tick * .21 + b.ph) * Math.sin(S.tick * .093 + b.ph * 2.3) + .06 * Math.sin(S.tick * .57 + b.ph);
	}
	let hpfill, hpghost, hpn, comboEl, cn, cl, cs, mvEl;
	let lastHud = "";
	let lastHpW = "", lastGhW = "", lastHpn = "", lastCombo = "";
	function bind(s) {
		S = s;
		P = s.P;
		E = s.E;
		combo = s.combo;
		cam = s.cam;
		dir = s.dir;
		dbg = s.dbg;
		parts = s.parts;
		rings = s.rings;
		nums = s.nums;
		flashes = s.flashes;
		embers = s.embers;
		const g = deps.gfx();
		sg = g.sg;
		cg = g.cg;
		S_ = g.S;
		Lc = g.Lc;
		lg = g.lg;
		Q2 = g.Q2;
		q2g = g.q2g;
		Q4 = g.Q4;
		q4g = g.q4g;
		Q8 = g.Q8;
		q8g = g.q8g;
		B1 = g.B1;
		b1g = g.b1g;
		B2 = g.B2;
		b2g = g.b2g;
		VW = g.VW;
		VH = g.VH;
		g.baseZoom;
		const sk = deps.getSKP();
		sk[0];
		sk[1];
	}
	function proj$1(x, y, z) {
		return proj(cam, VW, VH, x, y, z);
	}
	function setCamMatrix$1() {
		setCamMatrix(cam);
	}
	const depthOf$1 = (x, y) => depthOf(cam, x, y);
	const rowOf$1 = (face) => rowOf(cam, face);
	function drawBackdrop() {
		const g = sg, T = AR();
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
		g.fillStyle = T.stands[0];
		g.fillRect(0, VH * .6, VW, VH * .09);
		g.fillStyle = T.stands[1];
		g.fillRect(0, VH * .69, VW, VH * .07);
		g.fillStyle = T.stands[2];
		g.fillRect(0, VH * .76, VW, VH * .24);
		if (T.windows) {
			const cols = 26, rows = 3;
			for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
				const h = hash(c * 3 + r * 17, arenaId.length);
				if (h < .28) continue;
				g.fillStyle = h > .62 ? "rgba(190,215,255,.75)" : "rgba(12,16,28,.8)";
				const w = VW / cols;
				g.fillRect(c * w + w * .22, VH * (.615 + r * .045), w * .56, VH * .028);
			}
		}
		if (T.rift) {
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
			g.fillStyle = "rgba(216,224,236,.10)";
			g.font = "11px ui-monospace,Menlo,monospace";
			g.textAlign = "center";
			const GL = "§I II III IV V VI Ø 0123456789";
			for (let r = 0; r < 4; r++) for (let c = 0; c < 30; c++) {
				const h = hash(c * 7 + r * 31, arenaId.length);
				if (h < .55) continue;
				g.fillText(GL[h * 30 | 0], c * VW / 30 + VW / 60, VH * (.12 + r * .05));
			}
		}
	}
	function drawFloor() {
		const g = sg, h = N / 2, T = AR();
		const corners = [
			[-h, -h],
			[h, -h],
			[h, h],
			[-h, h]
		].map(([u, v]) => {
			const [x, y] = tileXY(u, v);
			return [x, y];
		});
		const cs = proj$1(0, 0, 0)[1];
		const th = 12 * cam.Z;
		for (let i = 0; i < 4; i++) {
			const a = corners[i], b = corners[(i + 1) % 4];
			const pa = proj$1(a[0], a[1], 0), pb = proj$1(b[0], b[1], 0);
			if ((pa[1] + pb[1]) / 2 > cs + 3) {
				g.fillStyle = i % 2 ? T.slab[0] : T.slab[1];
				poly(g, [
					pa,
					pb,
					[pb[0], pb[1] + th],
					[pa[0], pa[1] + th]
				]);
				g.fill();
				g.strokeStyle = T.slabEdge;
				g.lineWidth = 1;
				g.beginPath();
				g.moveTo(pa[0], pa[1] + .5);
				g.lineTo(pb[0], pb[1] + .5);
				g.stroke();
			}
		}
		for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
			const u0 = i - h, v0 = j - h;
			const pts = [
				[u0, v0],
				[u0 + 1, v0],
				[u0 + 1, v0 + 1],
				[u0, v0 + 1]
			].map(([u, v]) => {
				const [x, y] = tileXY(u, v);
				return proj$1(x, y, 0);
			});
			const hs = hash(i, j), chk = i + j & 1;
			const am = Math.max(Math.abs(u0 + .5), Math.abs(v0 + .5));
			let fill, stroke;
			if (am <= 1) {
				const worn = Math.abs(v0 + .5) <= .5 ? T.mat.worn : 0;
				const l = (chk ? T.mat.l0 : T.mat.l1) - worn + hs * T.mat.hs;
				fill = `rgb(${l + T.mat.t[0] | 0},${l + T.mat.t[1] | 0},${l + T.mat.t[2] | 0})`;
				stroke = T.mat.stroke;
			} else if (am <= 2) {
				const l = (chk ? T.ring.l0 : T.ring.l1) + hs * T.ring.hs;
				fill = `rgb(${l * T.ring.m[0] | 0},${l * T.ring.m[1] | 0},${l * T.ring.m[2] | 0})`;
				stroke = T.ring.stroke;
			} else {
				const l = (chk ? T.apron.l0 : T.apron.l1) + hs * T.apron.hs;
				fill = `rgb(${l + 2 | 0},${l + 2 | 0},${l - 12 | 0})`;
				stroke = T.apron.stroke;
			}
			poly(g, pts);
			g.fillStyle = fill;
			g.fill();
			g.strokeStyle = stroke;
			g.lineWidth = 1;
			g.stroke();
			if (am > 2 && hs > .55) {
				const cx = (pts[0][0] + pts[2][0]) / 2, cy = (pts[0][1] + pts[2][1]) / 2;
				const e = hs * 4 | 0, ex = (pts[e][0] + pts[(e + 1) % 4][0]) / 2, ey = (pts[e][1] + pts[(e + 1) % 4][1]) / 2;
				g.strokeStyle = T.apron.crack;
				g.beginPath();
				g.moveTo(ex, ey);
				g.lineTo(cx, cy);
				g.stroke();
			}
		}
		const ringPts = (r, n = 72) => {
			const o = [];
			for (let k = 0; k < n; k++) {
				const a = k / n * TAU;
				o.push(proj$1(Math.cos(a) * r, Math.sin(a) * r, 0));
			}
			return o;
		};
		g.strokeStyle = T.emblem[0];
		g.lineWidth = 2;
		poly(g, ringPts(96));
		g.stroke();
		g.strokeStyle = T.emblem[1];
		g.lineWidth = 1;
		poly(g, ringPts(70));
		g.stroke();
		for (let k = 0; k < 8; k++) {
			const a = k / 8 * TAU + Math.PI / 8;
			const p1 = proj$1(Math.cos(a) * 70, Math.sin(a) * 70, 0), p2 = proj$1(Math.cos(a) * 96, Math.sin(a) * 96, 0);
			g.beginPath();
			g.moveTo(p1[0], p1[1]);
			g.lineTo(p2[0], p2[1]);
			g.stroke();
		}
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
		const [x, y] = proj$1(e.x, e.y, 0), s = 1 / (1 + Math.max(0, e.z) / 80), Z = cam.Z * s * (1 + cam.pk * clamp(depthOf$1(e.x, e.y) / A, -1, 1)), V = cam.py / .5;
		sg.globalAlpha = clamp(.35 + .65 * s, 0, 1);
		sg.drawImage(IMG[skinEnt(e) + "shadow"] || IMG.shadow, Math.round(x - AX * Z), Math.round(y - AY * Z * V), CELL * Z, CELL * Z * V);
		sg.globalAlpha = 1;
	}
	function drawEnt(e, pre, shk) {
		const anim = e.anim, key = pre + "/" + anim, sk = skinEnt(e);
		const img = IMG[sk + pre + "/" + cam.pv + anim] || IMG[sk + key] || IMG[pre + "/" + cam.pv + anim] || IMG[key];
		if (!img) return;
		let f = e.frame;
		if (f === null || f === void 0) f = anim === "idle" || anim === "walk" || anim === "tumble" ? Math.floor(e.t * animFps(anim)) % 6 : Math.min(5, Math.floor(e.t * animFps(anim)));
		const [x, y] = proj$1(e.x, e.y, e.z), Z = cam.Z * (1 + cam.pk * clamp(depthOf$1(e.x, e.y) / A, -1, 1));
		if (e === P && cam.ch > .2 && Math.abs(x - proj$1(E.x, E.y, E.z)[0]) < 34 && depthOf$1(P.x, P.y) > depthOf$1(E.x, E.y)) sg.globalAlpha = 1 - .3 * cam.ch;
		let ox = 0, oy = 0, pop = 1;
		if (shk && S.hitstop > 0 && E.shk > 0) {
			ox = (S.tick & 1 ? 1 : -1) * 2 * Z;
			oy = 0;
			pop = 1 + .12 * Math.min(1, S.hitstop / 8);
		}
		const C = img.width / 6, k = C >= 190 ? 2 : 1, c = C / k, ax = c / 2, ay = c > 100 ? 100 : 74;
		sg.imageSmoothingEnabled = k > 1;
		sg.drawImage(img, f * C, rowOf$1(e.face) * C, C, C, Math.round(x - ax * Z * pop + ox), Math.round(y - ay * Z * pop + oy), c * Z * pop, c * Z * pop);
		sg.imageSmoothingEnabled = false;
		sg.globalAlpha = 1;
	}
	function drawBrazier(b) {
		const g = sg, [x, y] = proj$1(b.x, b.y, 0), Z = cam.Z, X = Math.round(x), Y = Math.round(y);
		const r = (a, bb, w, h, c) => {
			g.fillStyle = c;
			g.fillRect(Math.round(X + a * Z), Math.round(Y + bb * Z), Math.max(1, Math.round(w * Z)), Math.max(1, Math.round(h * Z)));
		};
		const D = AR().dress;
		if (D && D.braz === "vent") {
			const fl = flick(b), F = AR().flame;
			r(-11, -4, 22, 4, "#1c1c22");
			r(-8, -7, 16, 3, "#2a2a32");
			r(-5, -9, 10, 2, "#3a2a20");
			r(-3, -44 * fl, 6, 38 * fl, F[0]);
			r(-2, -52 * fl, 4, 46 * fl, F[1]);
			r(-1, -58 * fl, 2, 52 * fl, F[2]);
			return;
		}
		r(-6, -3, 12, 3, "#232733");
		r(-4, -18, 8, 15, "#3a4050");
		r(-3, -18, 2, 15, "#4a5164");
		r(-9, -24, 18, 3, "#2c313f");
		r(-8, -27, 16, 3, "#434a5c");
		r(-7, -28, 14, 1, "#5a6277");
		r(-6, -26, 12, 2, "#14161d");
		const fl = flick(b), F = AR().flame;
		r(-4, -32 * fl - 0, 8, 6 * fl, F[0]);
		r(-3, -37 * fl, 6, 8 * fl, F[1]);
		r(-1.5, -41 * fl, 3, 6 * fl, F[2]);
	}
	function drawPost(p, i) {
		const g = sg, [x, y] = proj$1(p.x, p.y, 0), Z = cam.Z, X = Math.round(x), Y = Math.round(y);
		const D = AR().dress;
		if (D && D.post === "pillar") {
			const H = Math.round((96 + i * 53 % 56) * Z), Wd = Math.max(2, Math.round(14 * Z));
			g.fillStyle = "#33333b";
			g.fillRect(Math.round(X - Wd / 2), Math.round(Y - H), Wd, H);
			g.fillStyle = "#43434e";
			g.fillRect(Math.round(X - Wd / 2), Math.round(Y - H), Math.max(1, Math.round(Wd * .35)), H);
			g.fillStyle = "#33333b";
			g.fillRect(Math.round(X - Wd / 2), Math.round(Y - H - 7 * Z), Math.round(Wd * .6), Math.round(7 * Z));
			g.fillRect(Math.round(X + Wd * .1), Math.round(Y - H - 11 * Z), Math.round(Wd * .4), Math.round(11 * Z));
			g.fillStyle = AR().postCap;
			g.fillRect(Math.round(X - Wd / 2), Math.round(Y - H - 11 * Z), Wd, Math.max(1, Math.round(2 * Z)));
			g.fillStyle = "rgba(220,228,240,.75)";
			g.fillRect(Math.round(X - 1 * Z), Math.round(Y - H * .55), Math.max(1, Math.round(2 * Z)), Math.round(14 * Z));
			return;
		}
		const H = Math.round(86 * Z), Wd = Math.max(2, Math.round(11 * Z));
		g.fillStyle = "#4a3220";
		g.fillRect(Math.round(X - Wd / 2), Math.round(Y - H), Wd, H);
		g.fillStyle = "#6b4a2e";
		g.fillRect(Math.round(X - Wd / 2), Math.round(Y - H), Math.max(1, Math.round(Wd * .4)), H);
		g.fillStyle = AR().postCap;
		g.fillRect(Math.round(X - Wd / 2 - 2 * Z), Math.round(Y - H - 8 * Z), Math.round(Wd + 4 * Z), Math.round(8 * Z));
	}
	function drawRope(a, b, z, col) {
		const g = sg;
		g.strokeStyle = col;
		g.lineWidth = Math.max(1, Math.round(3 * cam.Z));
		g.beginPath();
		for (let k = 0; k <= 10; k++) {
			const t = k / 10, sag = Math.sin(t * Math.PI) * -5;
			const [x, y] = proj$1(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t, z + sag);
			k ? g.lineTo(x, y) : g.moveTo(x, y);
		}
		g.stroke();
	}
	function drawCrowd(c) {
		const D = AR().dress;
		if (D && D.crowd === "host") {
			const g = sg, Z = cam.Z * (1 + cam.pk * clamp(depthOf$1(c.x, c.y) / A, -1, 1));
			const br = REDUCED_MOTION ? 0 : Math.sin(S.tick * .03 + c.ph) * .015 + .015;
			const [x, y] = proj$1(c.x, c.y, 0), w = 44 * Z * (1 + br), h = 64 * Z * (1 + br);
			g.fillStyle = "#0b0b0e";
			g.fillRect(Math.round(x - w / 2), Math.round(y - h), Math.round(w), Math.round(h));
			g.beginPath();
			g.arc(Math.round(x), Math.round(y - h), Math.round(w * .28), 0, TAU);
			g.fill();
			g.fillStyle = "rgba(255,220,170,.9)";
			g.fillRect(Math.round(x - w * .12), Math.round(y - h - w * .3), Math.max(1, Math.round(2 * Z)), Math.max(1, Math.round(2 * Z)));
			g.fillRect(Math.round(x + w * .12) - Math.max(1, Math.round(2 * Z)), Math.round(y - h - w * .3), Math.max(1, Math.round(2 * Z)), Math.max(1, Math.round(2 * Z)));
			return;
		}
		const fr = Math.floor(S.tick / 28 + c.ph) % 2 ? "b" : "a";
		const img = IMG["arena/aud" + String(AUDV[c.v]).padStart(2, "0") + "_" + fr];
		if (!img) return;
		const Z = cam.Z * (1 + cam.pk * clamp(depthOf$1(c.x, c.y) / A, -1, 1));
		const bounce = REDUCED_MOTION ? 0 : Math.abs(Math.sin(S.tick * .09 + c.ph)) * 4 * Z;
		const [x, y] = proj$1(c.x, c.y, 0), w = 64 * Z, h = 64 * Z;
		sg.drawImage(img, Math.round(x - w / 2), Math.round(y - h - bounce), Math.round(w), Math.round(h));
	}
	function drawBannerPole(p, i) {
		const g = sg, [x, y] = proj$1(p.x, p.y, 0), Z = cam.Z;
		const H = Math.round(150 * Z), Wd = Math.max(2, Math.round(7 * Z));
		g.fillStyle = "#3d3f4d";
		g.fillRect(Math.round(x - Wd / 2), Math.round(y - H), Wd, H);
		const D = AR().dress;
		if (D && D.banner === "seal") {
			const sway = REDUCED_MOTION ? 0 : Math.sin(S.tick * .04 + i * 1.7) * 2 * Z;
			const w = Math.round(56 * Z), h = Math.round(104 * Z);
			g.fillStyle = "rgba(216,224,236,.92)";
			g.fillRect(Math.round(x - w / 2), Math.round(y - H + sway), w, h);
			g.fillStyle = "#2a2f3d";
			g.font = `700 ${Math.max(8, Math.round(30 * Z))}px Georgia,serif`;
			g.textAlign = "center";
			g.fillText([
				"I",
				"II",
				"III",
				"Ø"
			][i % 4], Math.round(x), Math.round(y - H + h * .62 + sway));
			return;
		}
		const img = IMG["arena/banner" + i % 4];
		if (!img) return;
		const sway = REDUCED_MOTION ? 0 : Math.sin(S.tick * .05 + i * 1.7) * 3 * Z;
		const w = Math.round(110 * Z), h = Math.round(55 * Z);
		g.drawImage(img, Math.round(x - w / 2), Math.round(y - H + sway), w, h);
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
	function drawLights() {
		const k = Lc.width / VW, g = lg;
		g.globalCompositeOperation = "source-over";
		g.fillStyle = "rgb(172,176,192)";
		g.fillRect(0, 0, Lc.width, Lc.height);
		g.globalCompositeOperation = "lighter";
		const L = (wx, wy, wz, r, c, i, sq = .62, lift = 10) => {
			const [x, y] = proj$1(wx, wy, wz), R = r * cam.Z * k;
			g.save();
			g.translate(x * k, (y - lift * cam.Z) * k);
			g.scale(1, sq);
			const gr = g.createRadialGradient(0, 0, 0, 0, 0, R);
			gr.addColorStop(0, `rgba(${c},${i})`);
			gr.addColorStop(.5, `rgba(${c},${i * .4})`);
			gr.addColorStop(1, `rgba(${c},0)`);
			g.fillStyle = gr;
			g.fillRect(-R, -R, R * 2, R * 2);
			g.restore();
		};
		L(0, 0, 0, 380, AR().centerLight, .55, .66, 0);
		for (const b of BRAZ) L(b.x * .97, b.y * .97, 22, 230, AR().brazLight, .9 * flick(b), .7, 0);
		L(P.x, P.y, P.z * .5, 92, "130,175,255", .38, .7, 16);
		L(E.x, E.y, E.z * .5, 86, "255,140,80", .3, .7, 16);
		for (const f of flashes) {
			const u = f.t / f.dur;
			L(f.x, f.y, f.z * .4, f.r * (1 + u * .4), f.col.join(","), f.I * (1 - u), .8, 10);
		}
		sg.globalCompositeOperation = "multiply";
		sg.imageSmoothingEnabled = true;
		sg.drawImage(Lc, 0, 0, VW, VH);
		sg.imageSmoothingEnabled = false;
		sg.globalCompositeOperation = "source-over";
	}
	function drawGlow() {
		const g = sg;
		g.globalCompositeOperation = "lighter";
		for (const b of BRAZ) {
			const [x, y] = proj$1(b.x, b.y, 34), R = 44 * cam.Z, fl = flick(b), BG = AR().brazGlow;
			const gr = g.createRadialGradient(x, y, 0, x, y, R);
			gr.addColorStop(0, `rgba(${BG[0]},${.34 * fl})`);
			gr.addColorStop(1, `rgba(${BG[1]},0)`);
			g.fillStyle = gr;
			g.fillRect(x - R, y - R, R * 2, R * 2);
		}
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
		for (const r of rings) {
			const u = r.t / r.dur, R = r.maxR * (1 - (1 - u) * (1 - u)), [x, y] = proj$1(r.x, r.y, 0);
			g.strokeStyle = "rgba(255,210,150," + (1 - u) * .55 + ")";
			g.lineWidth = Math.max(1, Math.round(3 * (1 - u) * cam.Z));
			g.beginPath();
			g.ellipse(x, y, R * cam.Z, R * cam.Z * cam.py, 0, 0, TAU);
			g.stroke();
		}
		g.globalAlpha = 1;
		for (const e of embers) {
			const [x, y] = proj$1(e.x, e.y, e.z), a = Math.sin(e.z / 170 * Math.PI) * .7;
			g.fillStyle = `rgba(${AR().ember},${a})`;
			g.fillRect(Math.round(x), Math.round(y), 1, 1);
		}
		for (const p of parts) {
			if (p.type === "dust") continue;
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
				g.fillRect(Math.round(x - 1), Math.round(y - R), 2, Math.round(R * 2));
				g.fillRect(Math.round(x - R * .5), Math.round(y - R * .5), Math.round(R), Math.round(R));
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
	}
	function drawDebug() {
		const g = sg;
		const [ex, ey] = proj$1(E.x, E.y, 0);
		g.strokeStyle = "rgba(90,220,140,.9)";
		g.lineWidth = 1;
		g.beginPath();
		g.ellipse(ex, ey, 14 * cam.Z, 7 * cam.Z, 0, 0, TAU);
		g.stroke();
		const [ez0, ez1] = [proj$1(E.x, E.y, E.z), proj$1(E.x, E.y, E.z + 40)];
		g.beginPath();
		g.moveTo(ez0[0], ez0[1]);
		g.lineTo(ez1[0], ez1[1]);
		g.stroke();
		if (dbg.cone) {
			const c = dbg.cone, pts = [proj$1(c.x, c.y, 0)];
			const n = c.arc >= 360 ? 48 : 14;
			for (let i = 0; i <= n; i++) {
				const a = rad(c.arc >= 360 ? i / n * 360 : c.face - c.arc + 2 * c.arc * i / n);
				pts.push(proj$1(c.x + Math.cos(a) * c.reach, c.y + Math.sin(a) * c.reach, 0));
			}
			g.fillStyle = "rgba(255,70,70,.25)";
			g.strokeStyle = "rgba(255,110,110,.9)";
			poly(g, c.arc >= 360 ? pts.slice(1) : pts);
			g.fill();
			g.stroke();
		}
		g.font = "10px ui-monospace,Menlo,monospace";
		g.textAlign = "left";
		g.fillStyle = "#d6dae6";
		[
			`Bram  ${P.state}  ${P.slot || P.anim}  f${P.state === "atk" || P.state === "airatk" || P.state === "plunge" ? frameIdx(P) + 1 : "-"}  z${P.z.toFixed(0)}  air${P.airCount}`,
			`Cinder ${E.state}${E.kd ? "/" + E.kd.phase : ""}  z${E.z.toFixed(0)}  vz${E.vz.toFixed(0)}  juggle${E.juggle}`,
			`hitstop ${S.hitstop}  cam ${wrap(cam.target)}°  zoom ${cam.zoom.toFixed(2)}  auto ${opt.autocam ? dir.pause > 0 ? "paused" : "on" : "off"} q${dir.cur.toFixed(2)} cd ${(Math.max(0, 90 - (S.tick - dir.last)) / 60).toFixed(1)}s ${dir.latch ? "LATCH " : ""}last ${dir.why}`
		].forEach((t, i) => {
			g.fillText(t, 8, VH - 44 + i * 12);
		});
		{
			const cx = VW - 40, cy = 44;
			g.save();
			for (let i = 0; i < 8; i++) {
				const a = rad(i * 45 - 90), r = 6 + Math.max(0, dir.sc[i]) * 24, on = i * 45 === wrap(cam.target);
				g.strokeStyle = on ? "#ffd37a" : "rgba(214,218,230,.7)";
				g.lineWidth = on ? 3 : 1;
				g.beginPath();
				g.moveTo(cx, cy);
				g.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
				g.stroke();
			}
			g.fillStyle = "#d6dae6";
			g.textAlign = "right";
			dir.log.slice(-3).forEach((t, i) => g.fillText(t, VW - 8, VH - 74 + i * 12));
			g.restore();
		}
		if (P.move && (P.state === "atk" || P.state === "airatk" || P.state === "plunge")) {
			const m = P.move, fps = animFps(P.anim), f = frameIdx(P), w = 26, h = 9, x0 = Math.round(VW / 2 - 78), y0 = VH - 22;
			for (let i = 0; i < 6; i++) {
				const hit = m.hit_frames.includes(i), start = i < m.hit_frames[0];
				g.fillStyle = hit ? "#e0524b" : start ? "#4d78b0" : "#555b6b";
				g.fillRect(x0 + i * w, y0, 24, h);
				if (i >= m.cancel_from) {
					g.fillStyle = "#53c27d";
					g.fillRect(x0 + i * w, y0 + h + 1, 24, 2);
				}
			}
			g.strokeStyle = "#fff";
			g.lineWidth = 1;
			g.strokeRect(x0 + f * w - .5, y0 - 1.5, 25, 11);
			g.fillStyle = "#d6dae6";
			g.textAlign = "center";
			g.fillText(`${m.name}  startup ${m.startup}  cancel ${m.cancel_from}  (${fps}fps)`, VW / 2, y0 - 5);
		}
	}
	function render(s) {
		bind(s);
		setCamMatrix$1();
		sg.globalCompositeOperation = "source-over";
		sg.globalAlpha = 1;
		sg.imageSmoothingEnabled = false;
		drawBackdrop();
		drawFloor();
		drawRingsFloor();
		drawShadow(P);
		drawShadow(E);
		const list = [{
			d: depthOf$1(P.x, P.y),
			f: () => drawEnt(P, deps.getPA(), false)
		}, {
			d: depthOf$1(E.x, E.y),
			f: () => drawEnt(E, deps.getPB(), true)
		}];
		for (const b of BRAZ) list.push({
			d: depthOf$1(b.x, b.y),
			f: () => drawBrazier(b)
		});
		POSTS.forEach((p, i) => list.push({
			d: depthOf$1(p.x, p.y),
			f: () => drawPost(p, i)
		}));
		for (const [ia, ib] of ROPES) {
			const a = POSTS[ia], b = POSTS[ib], mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
			if (!AR().dress || AR().dress.ropes !== false) list.push({
				d: depthOf$1(mx, my),
				f: () => {
					drawRope(a, b, 64, AR().ropes[0]);
					drawRope(a, b, 46, AR().ropes[1]);
				}
			});
		}
		for (const c of CROWD) list.push({
			d: depthOf$1(c.x, c.y),
			f: () => drawCrowd(c)
		});
		BANP.forEach(([x, y], i) => list.push({
			d: depthOf$1(x, y),
			f: () => drawBannerPole({
				x,
				y
			}, i)
		}));
		list.sort((a, b) => a.d - b.d);
		list.forEach((o) => o.f());
		drawFxWorld();
		if (opt.light) drawLights();
		drawGlow();
		if (opt.debug) drawDebug();
		composite();
	}
	function maskBlur(g, fx, fy, r0, r1) {
		g.globalCompositeOperation = "destination-in";
		g.setTransform(1.7, 0, 0, 1, fx * -.7, 0);
		const gr = g.createRadialGradient(fx, fy, r0, fx, fy, r1);
		gr.addColorStop(0, "rgba(0,0,0,0)");
		gr.addColorStop(1, "rgba(0,0,0,1)");
		g.fillStyle = gr;
		g.fillRect(-2e3, -2e3, 5e3, 5e3);
		g.setTransform(1, 0, 0, 1, 0, 0);
		g.globalCompositeOperation = "source-over";
	}
	function composite() {
		cg.imageSmoothingEnabled = false;
		cg.globalCompositeOperation = "source-over";
		cg.drawImage(S_, 0, 0);
		if (opt.dof) {
			q2g.imageSmoothingEnabled = true;
			q4g.imageSmoothingEnabled = true;
			q8g.imageSmoothingEnabled = true;
			q2g.drawImage(S_, 0, 0, Q2.width, Q2.height);
			q4g.drawImage(Q2, 0, 0, Q4.width, Q4.height);
			q8g.drawImage(Q4, 0, 0, Q8.width, Q8.height);
			const mid = proj$1((P.x + E.x) / 2, (P.y + E.y) / 2, 10);
			const fx = mid[0], fy = mid[1], k = 1 - cam.fk * .4;
			b1g.globalCompositeOperation = "source-over";
			b1g.clearRect(0, 0, VW, VH);
			b1g.imageSmoothingEnabled = true;
			b1g.drawImage(Q4, 0, 0, VW, VH);
			maskBlur(b1g, fx, fy, 95 * k, 205 * k);
			b2g.globalCompositeOperation = "source-over";
			b2g.clearRect(0, 0, VW, VH);
			b2g.imageSmoothingEnabled = true;
			b2g.drawImage(Q8, 0, 0, VW, VH);
			maskBlur(b2g, fx, fy, 175 * k, 300 * k);
			cg.imageSmoothingEnabled = true;
			cg.drawImage(B1, 0, 0);
			cg.drawImage(B2, 0, 0);
			cg.imageSmoothingEnabled = false;
		}
		if (dir.flash > 0) {
			cg.fillStyle = "rgba(255,244,225," + dir.flash / 8 * .14 + ")";
			cg.fillRect(0, 0, VW, VH);
		}
		if (dir.bar > 0) {
			const e = Math.min(1, (54 - dir.bar) / 8, dir.bar / 14), h = Math.round(VH * .07 * e);
			cg.fillStyle = "#000";
			cg.fillRect(0, 0, VW, h);
			cg.fillRect(0, VH - h, VW, h);
		}
		const vg = cg.createRadialGradient(VW / 2, VH / 2, VH * .35, VW / 2, VH / 2, Math.max(VW, VH) * .72);
		vg.addColorStop(0, "rgba(0,0,0,0)");
		vg.addColorStop(1, "rgba(0,0,0,.5)");
		cg.fillStyle = vg;
		cg.fillRect(0, 0, VW, VH);
	}
	function hud(s) {
		bind(s);
		if (!hpfill) {
			hpfill = $("hpfill");
			hpghost = $("hpghost");
			hpn = $("hpn");
			comboEl = $("combo");
			cn = $("cn");
			cl = $("cl");
			cs = $("cs");
			mvEl = $("mv");
		}
		const hpW = (E.hp / HP_MAX * 100).toFixed(1) + "%", ghW = (E.hpShown / HP_MAX * 100).toFixed(1) + "%";
		if (hpW !== lastHpW) {
			hpfill.style.width = hpW;
			lastHpW = hpW;
		}
		if (ghW !== lastGhW) {
			hpghost.style.width = ghW;
			lastGhW = ghW;
		}
		const hpnT = String(Math.round(E.hp));
		if (hpnT !== lastHpn) {
			hpn.textContent = hpnT;
			lastHpn = hpnT;
		}
		const on = combo.hits > 0;
		comboEl.classList.toggle("on", on && combo.hits > 1);
		const alive = combo.active || S.tick - combo.endT <= 75;
		const comboT = combo.hits + "|" + (combo.hits === 1) + "|" + combo.dmg + "|" + combo.air + "|" + alive;
		if (comboT !== lastCombo) {
			lastCombo = comboT;
			cn.textContent = combo.hits;
			cl.textContent = combo.hits === 1 ? "HIT" : "HITS";
			cs.textContent = combo.dmg + " damage" + (combo.air ? "  ·  air " + combo.air : "") + (alive ? "" : "  ·  done");
		}
		const txt = combo.chain.length ? combo.chain.map((c, i) => i === combo.chain.length - 1 ? "<b>" + c + "</b>" : c).join(" › ") : "";
		if (txt !== lastHud) {
			mvEl.innerHTML = txt;
			lastHud = txt;
		}
	}
	return {
		render,
		hud
	};
}
var ARENAS = {
	day: {
		label: "Day Tournament",
		sky: [
			"#1e6cc0",
			"#57aae6",
			"#bcdcf2",
			"#e6d3a8"
		],
		skyStops: [
			0,
			.5,
			.75,
			1
		],
		sun: [
			"rgba(255,252,230,.9)",
			"rgba(255,246,205,.35)",
			"rgba(255,246,205,0)"
		],
		sunXY: [.78, .18],
		stands: [
			"rgba(125,138,160,.85)",
			"rgba(105,118,142,.9)",
			"rgba(234,240,244,.5)"
		],
		windows: false,
		mat: {
			l0: 198,
			l1: 206,
			worn: 14,
			hs: 6,
			t: [
				0,
				-8,
				-38
			],
			stroke: "#8a8468"
		},
		ring: {
			m: [
				.72,
				.95,
				1.55
			],
			l0: 58,
			l1: 68,
			hs: 8,
			stroke: "#2c3a5e"
		},
		apron: {
			l0: 120,
			l1: 133,
			hs: 7,
			stroke: "#6b6a5e",
			crack: "rgba(70,68,58,.55)"
		},
		emblem: ["rgba(150,84,24,.6)", "rgba(150,84,24,.35)"],
		slab: ["#a09c8e", "#8f8b7d"],
		slabEdge: "#c9c4b2",
		flame: [
			"#ff7a2a",
			"#ffb347",
			"#fff0b0"
		],
		brazLight: "255,150,70",
		brazGlow: ["255,160,70", "255,120,40"],
		centerLight: "255,244,220",
		ember: "255,170,90",
		postCap: "#2c3a5e",
		ropes: ["#c8483c", "#e8e0cc"]
	},
	heavens: {
		label: "Heavens Tower",
		sky: [
			"#05070f",
			"#0b1226",
			"#1a2440",
			"#2a3350"
		],
		skyStops: [
			0,
			.55,
			.8,
			1
		],
		sun: [
			"rgba(190,210,255,.55)",
			"rgba(150,180,240,.18)",
			"rgba(150,180,240,0)"
		],
		sunXY: [.78, .18],
		stands: [
			"rgba(30,36,52,.92)",
			"rgba(24,29,44,.95)",
			"rgba(40,48,70,.55)"
		],
		windows: true,
		mat: {
			l0: 168,
			l1: 176,
			worn: 10,
			hs: 6,
			t: [
				-16,
				-8,
				14
			],
			stroke: "#5a6278"
		},
		ring: {
			m: [
				.45,
				1,
				1.35
			],
			l0: 52,
			l1: 62,
			hs: 8,
			stroke: "#1d2c47"
		},
		apron: {
			l0: 74,
			l1: 84,
			hs: 7,
			stroke: "#3a3f52",
			crack: "rgba(20,22,32,.6)"
		},
		emblem: ["rgba(120,180,230,.55)", "rgba(120,180,230,.3)"],
		slab: ["#4a5068", "#3e4459"],
		slabEdge: "#7a86a8",
		flame: [
			"#7ab8ff",
			"#cfe6ff",
			"#ffffff"
		],
		brazLight: "150,190,255",
		brazGlow: ["150,190,255", "120,150,255"],
		centerLight: "200,215,255",
		ember: "150,190,255",
		postCap: "#1d2438",
		ropes: ["#3fa8c8", "#dfe9f2"]
	},
	hollow: {
		label: "Ash Hollow",
		sky: [
			"#030408",
			"#0a0c14",
			"#141821",
			"#1e222e"
		],
		skyStops: [
			0,
			.5,
			.8,
			1
		],
		sun: [
			"rgba(255,122,42,.5)",
			"rgba(255,122,42,.16)",
			"rgba(255,122,42,0)"
		],
		sunXY: [.5, .42],
		stands: [
			"rgba(16,18,26,.95)",
			"rgba(12,14,22,.97)",
			"rgba(26,28,38,.6)"
		],
		windows: false,
		rift: true,
		mat: {
			l0: 96,
			l1: 104,
			worn: 8,
			hs: 6,
			t: [
				-6,
				-6,
				-4
			],
			stroke: "#43434a"
		},
		ring: {
			m: [
				1.25,
				.62,
				.3
			],
			l0: 64,
			l1: 74,
			hs: 8,
			stroke: "#4a2418"
		},
		apron: {
			l0: 52,
			l1: 60,
			hs: 7,
			stroke: "#2c2c33",
			crack: "rgba(255,122,42,.5)"
		},
		emblem: ["rgba(220,228,240,.5)", "rgba(220,228,240,.28)"],
		slab: ["#33333b", "#2b2b32"],
		slabEdge: "#5a5a64",
		flame: [
			"#ff5a1e",
			"#ff8a3c",
			"#ffd9a0"
		],
		brazLight: "255,120,50",
		brazGlow: ["255,130,60", "255,90,30"],
		centerLight: "255,220,190",
		ember: "255,140,70",
		postCap: "#3d3a44",
		ropes: ["#3fa8c8", "#dfe9f2"],
		dress: {
			braz: "vent",
			post: "pillar",
			ropes: false,
			crowd: "host",
			banner: "seal"
		}
	}
};
var arenaId = "day";
var AR = () => ARENAS[arenaId] || ARENAS.day;
function setArena(id) {
	if (ARENAS[id]) {
		arenaId = id;
		try {
			localStorage.setItem("vs_arena", id);
		} catch (e) {}
	}
}
function createSpriteLoader(IMG, DATA, o) {
	function loadImgs(keys, done) {
		keys = keys.filter((k) => DATA.img[k] && !IMG[k]);
		let n = keys.length;
		if (!n) return done();
		keys.forEach((k) => {
			const i = new Image();
			i.crossOrigin = "anonymous";
			i.onload = () => {
				if (--n === 0) done();
			};
			i.onerror = () => {
				if (o.onImgError) o.onImgError(k);
				if (--n === 0) done();
			};
			i.src = DATA.img[k];
			IMG[k] = i;
		});
	}
	function loadToons(keys, done, quiet) {
		keys = keys.filter((k) => !IMG[k]);
		let n = keys.length;
		if (!n) return done();
		if (!quiet) o.busyOn();
		const fin = () => {
			if (--n === 0) {
				if (!quiet) o.busyOff();
				done();
			}
		};
		keys.forEach((k) => {
			const i = new Image();
			i.crossOrigin = "anonymous";
			const url = k === "toon/shadow" ? o.toonBase + "/shadow_standard.png" : o.toonBase + "/" + k.slice(5) + ".png";
			i.onload = () => {
				IMG[k] = i;
				fin();
			};
			i.onerror = fin;
			i.src = url;
		});
	}
	return {
		loadImgs,
		loadToons
	};
}
/** Overlay stack: only one panel is 'on' at a time and gameplay input is muted. */
function createOverlay(UI, keys, opts = {}) {
	const show = (id) => {
		if (UI.open) {
			const prev = $(UI.open);
			if (prev) prev.classList.remove("on");
		}
		UI.open = id;
		keys.clear();
		const el = $(id);
		if (el) el.classList.add("on");
		document.body.style.overflow = "hidden";
		const f = opts.focus && opts.focus[id] && $(opts.focus[id]);
		if (f) try {
			f.focus({ preventScroll: true });
		} catch {}
	};
	const hide = () => {
		if (!UI.open) return;
		const el = $(UI.open);
		if (el) el.classList.remove("on");
		UI.open = null;
		document.body.style.overflow = "";
		if (opts.onResume) opts.onResume();
	};
	return {
		show,
		hide,
		go: (id) => {
			hide();
			show(id);
		},
		get open() {
			return UI.open;
		}
	};
}
function on(el, type, fn, opts) {
	if (!el) return () => {};
	el.addEventListener(type, fn, opts);
	return () => el.removeEventListener(type, fn, opts);
}
/** Virtual stick plus coarse-pointer detection; reveals the touch bar. */
function bindStick(o) {
	const bar = $("touch");
	const show = () => {
		if (bar) bar.classList.add("show");
		document.body.classList.add("gb");
		if (o.onShow) o.onShow();
	};
	const offs = [];
	try {
		if (matchMedia("(pointer:coarse)").matches) show();
	} catch {}
	offs.push(on(window, "touchstart", show, {
		once: true,
		passive: true
	}));
	const stick = $("stick"), knob = $("knob");
	let stickId = null;
	const move = (e) => {
		if (!stick || !knob) return;
		const r = stick.getBoundingClientRect();
		const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
		let dx = (e.clientX - cx) / (r.width / 2), dy = (e.clientY - cy) / (r.height / 2);
		const m = Math.hypot(dx, dy);
		if (m > 1) {
			dx /= m;
			dy /= m;
		}
		o.touchMove.x = Math.abs(dx) < .15 ? 0 : dx;
		o.touchMove.y = Math.abs(dy) < .15 ? 0 : dy;
		knob.style.transform = `translate(${dx * 36}px,${dy * 36}px)`;
	};
	offs.push(on(stick, "pointerdown", (e) => {
		stickId = e.pointerId;
		stick.setPointerCapture(e.pointerId);
		if (o.onDown) o.onDown();
		move(e);
	}));
	offs.push(on(stick, "pointermove", (e) => {
		if (e.pointerId === stickId) move(e);
	}));
	const end = (e) => {
		if (e.pointerId !== stickId) return;
		stickId = null;
		o.touchMove.x = 0;
		o.touchMove.y = 0;
		if (knob) knob.style.transform = "";
	};
	offs.push(on(stick, "pointerup", end));
	offs.push(on(stick, "pointercancel", end));
	return () => offs.forEach((f) => f());
}
function bindActionButtons(o) {
	const offs = [];
	document.querySelectorAll("#btns button[data-a]").forEach((b) => {
		const a = b.dataset.a;
		offs.push(on(b, "pointerdown", (e) => {
			e.preventDefault();
			if (o.UI.open) return;
			if (a === "guard") o.keys.add("l");
			if (o.onPress) o.onPress();
			o.press(a);
			b.classList.add("dn");
		}));
		const up = () => {
			b.classList.remove("dn");
			if (a === "guard") o.keys.delete("l");
		};
		offs.push(on(b, "pointerup", up));
		offs.push(on(b, "pointercancel", up));
		offs.push(on(b, "pointerleave", up));
	});
	const bPause = $("bPause");
	offs.push(on(bPause, "pointerdown", (e) => {
		e.preventDefault();
		if (!o.UI.open) o.onPause();
	}));
	return () => offs.forEach((f) => f());
}
function bindCamButtons(rotate) {
	const offs = [];
	offs.push(on($("camL"), "click", (e) => {
		rotate(-1);
		e.currentTarget.blur();
	}));
	offs.push(on($("camR"), "click", (e) => {
		rotate(1);
		e.currentTarget.blur();
	}));
	return () => offs.forEach((f) => f());
}
function bindCanvasButtons(o) {
	const offs = [];
	offs.push(on($("c"), "mousedown", (e) => {
		if (o.UI.open) return;
		if (e.button === 0) {
			e.preventDefault();
			o.press("light");
		} else if (e.button === 2) {
			e.preventDefault();
			o.press("special");
		}
		const active = document.activeElement;
		if (o.blurFocus && active && active.blur) active.blur();
	}));
	offs.push(on($("stage"), "contextmenu", (e) => e.preventDefault()));
	return () => offs.forEach((f) => f());
}
function bindMuteButtons() {
	const m = () => {
		toggleMute();
		snd(660, .05);
	};
	const offs = [];
	offs.push(on($("mMute"), "click", m));
	offs.push(on($("pMute"), "click", m));
	return () => offs.forEach((f) => f());
}
function bindKeyRelease(keys) {
	const up = (e) => {
		const k = e.key.toLowerCase();
		keys.delete(k);
		if (k === "h") keys.delete("l");
		if (k === " ") e.preventDefault();
	};
	const blur = () => keys.clear();
	addEventListener("keyup", up);
	addEventListener("blur", blur);
	return () => {
		removeEventListener("keyup", up);
		removeEventListener("blur", blur);
	};
}
function fitStage(opts) {
	const st = $("stage");
	const narrow = innerWidth < 700;
	const w = narrow ? 480 : 640;
	const h = narrow ? opts.narrowH ?? 430 : opts.wideH ?? 360;
	if (opts.canvas.width !== w || opts.canvas.height !== h) {
		opts.canvas.width = w;
		opts.canvas.height = h;
	}
	if (st) st.style.setProperty("--s", clamp((st.clientWidth || w) / (narrow ? 480 : 640), 1, 2.2).toFixed(3));
	return {
		VW: w,
		VH: h
	};
}
function makeOffscreen(w, h) {
	const c = document.createElement("canvas");
	c.width = w;
	c.height = h;
	return {
		c,
		g: c.getContext("2d")
	};
}
function codeToKey(code) {
	return {
		KeyW: "w",
		KeyA: "a",
		KeyS: "s",
		KeyD: "d",
		ArrowUp: "arrowup",
		ArrowDown: "arrowdown",
		ArrowLeft: "arrowleft",
		ArrowRight: "arrowright",
		Space: " ",
		ShiftLeft: "shift",
		ShiftRight: "shift",
		KeyJ: "j",
		KeyK: "k",
		KeyL: "l",
		KeyQ: "q",
		KeyE: "e",
		KeyF: "f",
		KeyZ: "z",
		KeyX: "x",
		KeyV: "v",
		KeyC: "c"
	}[code] ?? code.toLowerCase();
}
//#endregion
export { depthOf as A, rnd as B, codeToKey as C, createOverlay as D, createFx as E, paintMute as F, snap8 as G, setArena as H, poly as I, wrap as J, snd as K, proj as L, hash as M, lerp as N, createSpriteLoader as O, makeOffscreen as P, rad as R, clamp as S, createDuelRenderer as T, setCamMatrix as U, rowOf as V, setP1 as W, bindCamButtons as _, DATA as a, bindMuteButtons as b, MOVE as c, TAU as d, TICK as f, bindActionButtons as g, animFps as h, CHR as i, fitStage as j, deg as k, REDUCED_MOTION as l, angDiff as m, ARENAS as n, EL as o, VFX as p, toggleMute as q, CHAIN_NEXT as r, META as s, $ as t, STYLE as u, bindCanvasButtons as v, createDuel as w, bindStick as x, bindKeyRelease as y, resumeAudio as z };
