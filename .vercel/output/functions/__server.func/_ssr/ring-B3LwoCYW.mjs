import { i as __toESM } from "../_runtime.mjs";
import { K as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ring-B3LwoCYW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CombatShell() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "game",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagewrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: "stage",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
							id: "c",
							width: 640,
							height: 360,
							"aria-label": "Isometric combat arena"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hud",
							id: "hpbox",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								id: "hpname",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									id: "hpl",
									children: "Cinder"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { id: "hpn" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								id: "hpbar",
								style: { position: "relative" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { id: "hpghost" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { id: "hpfill" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hud",
							id: "combo",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									id: "cn",
									children: "0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									id: "cl",
									children: "HITS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { id: "cs" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hud",
							id: "mv"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "cambtn",
							id: "camL",
							"aria-label": "Rotate camera left",
							title: "Rotate left (Q)",
							children: ["⟲", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Q" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "cambtn",
							id: "camR",
							"aria-label": "Rotate camera right",
							title: "Rotate right (E)",
							children: ["⟳", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "E" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							id: "dock",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "t",
									id: "openSel",
									children: "Fighter"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "t",
									id: "openSet",
									children: "Settings"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "t",
									id: "openPause",
									"aria-label": "Pause",
									children: "II"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							id: "busy",
							role: "status",
							children: "The Ledger writes…"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							id: "load",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ttl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "over",
									children: "V E I L S P I R E"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "tag",
									children: "Opening the Hollow…"
								})]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: "touch",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "stick",
						"aria-label": "Move stick",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { id: "knob" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "btns",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								id: "bJump",
								"data-a": "jump",
								children: ["X", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Jump" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								id: "bLight",
								"data-a": "light",
								children: ["A", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Light" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								id: "bSpec",
								"data-a": "special",
								children: ["B", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Launch" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								id: "bDash",
								"data-a": "dash",
								children: ["Y", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Dash" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								id: "bGuard",
								"data-a": "guard",
								children: "Guard"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								id: "bPause",
								children: "Start"
							})
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ov",
			id: "sel",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "selT",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "selw pickw",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "selh",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "selT",
							children: "Fighter"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Pick your body. The rival stays the ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								style: { color: "#e08a50" },
								children: "Cinder dummy"
							}),
							"."
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "vsstage single",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "slot s1 on",
							"aria-label": "Your fighter preview",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "who",
									children: "You · P1"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
									width: 256,
									height: 256
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "skincyc",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											"data-sk": "-1",
											"aria-label": "Previous skin",
											children: "‹"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "skinname" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											"data-sk": "1",
											"aria-label": "Next skin",
											children: "›"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "sn" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "st" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lorebox",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Practice" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "One ring, one dummy. Chain lights into launcher, meet them in the air, drive them down." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "kit",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "J" }),
										" strike · ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "K" }),
										" launcher · ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Space" }),
										" jump · ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Shift" }),
										" dash · ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "L" }),
										" guard · ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "B" }),
										" skin"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "curbar",
									style: {
										justifyContent: "flex-start",
										margin: 0
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "cur",
										id: "rndBtn",
										title: "Random fighter",
										children: "Random"
									})
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "roster",
						id: "roster"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "self",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "go",
							id: "fight",
							children: "Done"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ov",
			id: "title",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "titleT",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "selw",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ttl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "over",
							children: "V E I L S P I R E"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "titleT",
							children: "Practice Ring"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "tag",
							children: "Warm up. The Hollow waits."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "menubtns",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "go",
							id: "mFight",
							children: "Enter the Ring"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "go sm2",
							id: "mPick",
							children: "Fighter"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "go sm2",
							id: "mHow",
							children: "How to Play"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "go sm2",
							id: "mCred",
							children: "Credits"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "go sm2",
							id: "mMute",
							children: "Sound: on"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "go sm2",
							href: "/hollow",
							children: "Hollow I"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "go sm2",
							href: "/",
							children: "Leave"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ov",
			id: "how",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "howT",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "selw",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ttl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "howT",
							style: { fontSize: 30 },
							children: "How to Play"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "howlist",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "The bout" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								"You are ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									style: { color: "#8fb4d9" },
									children: "P1"
								}),
								". Break the rival's seal. Launch them with ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "K" }),
								", meet them in the air, drive them down."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Bindings" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "WASD" }),
								" / arrows move · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "Space" }),
								" jump · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "J" }),
								" / click strike · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "K" }),
								" / right-click launcher, plunge in the air · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "Shift" }),
								" dash · hold ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "L" }),
								" guard · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "Q" }),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "E" }),
								" camera · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "T" }),
								" slow motion · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "B" }),
								" skin · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "M" }),
								" mute · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "Esc" }),
								" pause"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Seals" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Hits crack the rival's seal. A cracked seal breaks open — juggle the pieces before they get up." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "self",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "go sm2",
							id: "howBack",
							children: "Back"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ov",
			id: "credits",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "credT",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "selw",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ttl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "credT",
							style: { fontSize: 30 },
							children: "Credits"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "credit",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Veilspire" }), " — isometric 2:1 fighting on a diamond stone arena."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Design, code and sprites by the Veilspire team." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Hit FX: tbbk & CodeManu via OpenGameArt (CC0)." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "The Ledger sees you and does not know where to file you." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "self",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "go sm2",
							id: "credBack",
							children: "Back"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ov",
			id: "result",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "resTitle",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "selw",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "boutcard",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "vs",
							id: "resTitle"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "test",
							id: "resLine"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "resstats",
							id: "resStats"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "menubtns",
							style: { marginTop: 16 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "go",
								id: "resGo",
								children: "Rematch"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "go sm2",
								id: "resSel",
								children: "Change fighter"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "dimc",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "R" }),
								" rematch · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "Esc" }),
								" change fighters"
							]
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ov",
			id: "pause",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "pauseT",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "selw",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ttl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "pauseT",
						style: { fontSize: 30 },
						children: "Paused"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "tag",
						children: "The Hollow holds its breath."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "menubtns",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "go",
							id: "pResume",
							children: "Resume"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "go sm2",
							id: "pQuit",
							children: "Quit to title"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "go sm2",
							id: "pMute",
							children: "Sound: on"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ov",
			id: "set",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "setT",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "setw",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "seth",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "setT",
							children: "Settings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "go sm2",
							id: "setX",
							children: "Done"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "opts",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { children: "Camera" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "t",
									"data-o": "autocam",
									"aria-pressed": "true",
									children: "Auto camera (C)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "t",
									"data-o": "immersive",
									"aria-pressed": "true",
									children: "Immersive"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "t",
									"data-o": "push",
									"aria-pressed": "true",
									children: "Push-in"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "t",
									"data-o": "dof",
									"aria-pressed": "true",
									children: "Depth of field"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { children: "Look and feel" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "t",
									"data-o": "light",
									"aria-pressed": "true",
									children: "Lighting"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "t",
									"data-o": "shake",
									"aria-pressed": "true",
									children: "Shake"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "t",
									"data-o": "fx",
									"aria-pressed": "true",
									children: "Hit FX"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "t",
									"data-o": "debug",
									"aria-pressed": "false",
									children: "Frame data (F)"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
								id: "devplay",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { children: "Playback" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "t",
										"data-o": "speed",
										"aria-pressed": "false",
										children: "Speed 1×"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "t",
										"data-o": "dguard",
										"aria-pressed": "false",
										children: "Rival blocks"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "t",
										"data-o": "demo",
										"aria-pressed": "false",
										children: "Demo combo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "t",
										"data-o": "reset",
										"aria-pressed": "false",
										children: "Reset (R)"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "ch",
						children: "Controls"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "ctl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "WASD" }),
								" move, ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "Space" }),
								" jump"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "J" }),
								" strike, ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "K" }),
								" launcher — chain them in the air"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "Shift" }),
								" dash, hold ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "L" }),
								" to guard"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "Q" }),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "E" }),
								" turn the camera, ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "T" }),
								" slow motion"
							] })
						]
					})
				]
			})
		})
	] });
}
function RingPage() {
	(0, import_react.useLayoutEffect)(() => {
		let stop = () => {};
		let cancelled = false;
		import("./combat-CgUdYret.mjs").then(({ mountCombat }) => {
			if (cancelled) return;
			stop = mountCombat();
		});
		return () => {
			cancelled = true;
			stop();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CombatShell, {});
}
//#endregion
export { RingPage as component };
