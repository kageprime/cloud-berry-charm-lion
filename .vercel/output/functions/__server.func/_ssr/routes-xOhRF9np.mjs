import { K as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-xOhRF9np.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "gate",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "gate-rift",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "gate-head",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "gate-kicker",
						children: "The Ledger writes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Veilspire" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "gate-sub",
						children: "Isometric 2:1 fighting on a diamond stone arena under a hollow rift. Warm up in the Practice Ring, or descend Hollow I: Cinder Hall."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gate-modes",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/hollow",
					className: "gate-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gate-card-kicker",
							children: "The game"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Hollow I: Cinder Hall" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Create your fighter, crack Host seals, take the Ember Shard from Pell." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/ring",
					className: "gate-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gate-card-kicker",
							children: "Warm-up"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Practice Ring" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Twelve fighters, auto camera, launch-juggle-plunge on a stone diamond." })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "gate-foot",
				children: "WASD move · J strike · K launch · Space jump · Shift dash · L guard · Q/E camera"
			})
		]
	});
}
//#endregion
export { Home as component };
