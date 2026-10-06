import { i as __toESM } from "../_runtime.mjs";
import { K as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hollow-BjdyjfBj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HollowShell() {
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
							"aria-label": "Hollow I Cinder Hall"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hud",
							id: "hpbox",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								id: "hpname",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									id: "hpl",
									children: "Ren Calder"
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { id: "zone" }),
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
									id: "openCreate",
									children: "Fighter"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "t",
									id: "openHow",
									children: "How"
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
								"data-a": "jump",
								children: ["X", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Jump" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								"data-a": "light",
								children: ["A", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Cut" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								"data-a": "special",
								children: ["B", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Launch" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								"data-a": "use",
								children: ["Y", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Use" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
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
							children: "Hollow I: Cinder Hall"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "tag",
							children: "The Floor Voice sets the test: DESCEND."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "menubtns",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "go",
							id: "mCreate",
							children: "Create your fighter"
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
							href: "/ring",
							children: "Practice Ring"
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
			id: "create",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "createT",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "selw",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "selh",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "createT",
							children: "Create your fighter"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "One body for the whole descent. Hover to preview, click to choose." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "vsstage single",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "slot s1 on",
							"aria-label": "Your fighter preview",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "who",
									children: "You · the carrier"
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "The test" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									"Floor One. Six Hosts hold the hall. ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Pell, the last carrier" }),
									", holds the Ember Shard."
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "kit",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "J" }),
										" strike · ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "K" }),
										" launch / plunge · ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Space" }),
										" jump · ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "F" }),
										" rest / take · ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "L" }),
										" guard"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "kit",
									children: "Rest at the pale ring to close your cracks. Take chests with F."
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
							id: "descend",
							children: "Descend"
						})
					})
				]
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "The descent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Cut Hosts, juggle them, and drive them down. Rest at the pale ring to mend. Take what the chests keep. File Pell to open the Hollow." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Bindings" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "WASD" }),
								" move · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "J" }),
								" strike · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "K" }),
								" launch / plunge · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "Space" }),
								" jump · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "Shift" }),
								" dash · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "L" }),
								" guard · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "F" }),
								" rest / take · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "Q" }),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "E" }),
								" camera · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "Esc" }),
								" pause"
							] })
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Veilspire — Hollow I: Cinder Hall" }) }),
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
			id: "dead",
			role: "dialog",
			"aria-modal": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "selw",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "boutcard",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "vs",
							children: "The seal scatters."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "test",
							id: "deadLine",
							children: "Ash is kept. The Hollow forgets nothing, but it resets."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "dimc",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "R" }),
								" walk in again · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "Esc" }),
								" title"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "menubtns",
							style: { marginTop: 16 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "go",
								id: "deadGo",
								children: "Walk in again"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "go sm2",
								id: "deadTitle",
								children: "Title"
							})]
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ov",
			id: "end",
			role: "dialog",
			"aria-modal": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "selw",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "boutcard",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "vs",
							children: "The Floor Voice: the test is met."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "test",
							children: [
								"You hold the Ember Shard. The last carrier is filed.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Below, something heavy shifts. A maul drags on stone."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "dimc",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "R" }),
								" dive again · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", { children: "Esc" }),
								" title"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "menubtns",
							style: { marginTop: 16 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "go",
								id: "endGo",
								children: "Dive again"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "go sm2",
								id: "endTitle",
								children: "Title"
							})]
						})
					]
				})
			})
		})
	] });
}
function HollowPage() {
	(0, import_react.useLayoutEffect)(() => {
		let stop = () => {};
		let cancelled = false;
		import("./hollow-bb2K84eM.mjs").then(({ mountHollow }) => {
			if (cancelled) return;
			stop = mountHollow();
		});
		return () => {
			cancelled = true;
			stop();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HollowShell, {});
}
//#endregion
export { HollowPage as component };
