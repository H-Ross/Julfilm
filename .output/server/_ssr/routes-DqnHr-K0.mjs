import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DqnHr-K0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MOVIES = [
	{
		title: "Elf",
		where: "Netflix",
		poster: "/posters/day1.jpg"
	},
	{
		title: "Home Alone",
		where: "Disney+",
		poster: "/posters/day2.jpg"
	},
	{
		title: "The Polar Express",
		where: "Netflix",
		poster: "/posters/day3.jpg"
	},
	{
		title: "Love Actually",
		where: "Netflix",
		poster: "/posters/day4.jpg"
	},
	{
		title: "The Muppet Christmas Carol",
		where: "Disney+",
		poster: "/posters/day5.jpg"
	},
	{
		title: "It's a Wonderful Life",
		where: "Prime Video",
		poster: "/posters/day6.jpg"
	},
	{
		title: "Klaus",
		where: "Netflix",
		poster: "/posters/day7.jpg"
	},
	{
		title: "The Holiday",
		where: "Netflix",
		poster: "/posters/day8.jpg"
	},
	{
		title: "How the Grinch Stole Christmas",
		where: "Peacock",
		poster: "/posters/day9.jpg"
	},
	{
		title: "Die Hard",
		where: "Disney+",
		poster: "/posters/day10.jpg"
	},
	{
		title: "Miracle on 34th Street",
		where: "Disney+",
		poster: "/posters/day11.jpg"
	},
	{
		title: "Arthur Christmas",
		where: "Netflix",
		poster: "/posters/day12.jpg"
	},
	{
		title: "The Nightmare Before Christmas",
		where: "Disney+",
		poster: "/posters/day13.jpg"
	},
	{
		title: "Frozen",
		where: "Disney+",
		poster: "/posters/day14.jpg"
	},
	{
		title: "A Christmas Story",
		where: "Netflix",
		poster: "/posters/day15.jpg"
	},
	{
		title: "National Lampoon's Christmas Vacation",
		where: "Netflix",
		poster: "/posters/day16.jpg"
	},
	{
		title: "The Santa Clause",
		where: "Disney+",
		poster: "/posters/day17.jpg"
	},
	{
		title: "Paddington 2",
		where: "Netflix",
		poster: "/posters/day18.jpg"
	},
	{
		title: "Little Women",
		where: "Netflix",
		poster: "/posters/day19.jpg"
	},
	{
		title: "Scrooged",
		where: "Paramount+",
		poster: "/posters/day20.jpg"
	},
	{
		title: "Jingle All the Way",
		where: "Disney+",
		poster: "/posters/day21.jpg"
	},
	{
		title: "The Grinch",
		where: "Peacock",
		poster: "/posters/day22.jpg"
	},
	{
		title: "Gremlins",
		where: "Netflix",
		poster: "/posters/day23.jpg"
	},
	{
		title: "White Christmas",
		where: "Netflix",
		poster: "/posters/day24.jpg"
	}
];
var northern_lights_default = "/assets/northern-lights-BC4mCO_F.jpg";
var poster_example_default = "/assets/poster-example-CsVV_m-R.jpg";
function SnowCanvas({ shake }) {
	const ref = (0, import_react.useRef)(null);
	const parts = (0, import_react.useRef)([]);
	const first = (0, import_react.useRef)(true);
	(0, import_react.useEffect)(() => {
		const c = ref.current;
		const ctx = c.getContext("2d");
		let raf = 0;
		const size = () => {
			const s = c.clientWidth * devicePixelRatio;
			c.width = s;
			c.height = s;
		};
		size();
		const W = () => c.width;
		if (!parts.current.length) parts.current = Array.from({ length: 900 }, () => ({
			x: Math.random(),
			y: .55 + Math.random() * .4,
			vx: 0,
			vy: 0,
			r: .6 + Math.random() * 2.2,
			o: .6 + Math.random() * .4
		}));
		const tick = () => {
			const w = W();
			ctx.clearRect(0, 0, w, w);
			for (const p of parts.current) {
				p.vy += 35e-6 * (1 + p.r * .2);
				p.vx *= .975;
				p.vy *= .975;
				p.vx += (Math.random() - .5) * 12e-5;
				if (Math.hypot(p.vx, p.vy) > .004) {
					p.vx += -(p.y - .5) * .0015;
					p.vy += (p.x - .5) * .0015;
				}
				p.x += p.vx;
				p.y += p.vy;
				const dx = p.x - .5, dy = p.y - .5, d = Math.hypot(dx, dy);
				if (d > .47) {
					p.x = .5 + dx / d * .47;
					p.y = .5 + dy / d * .47;
					p.vx *= -.3;
					p.vy *= -.3;
				}
				if (p.y > .86) {
					p.y = .86;
					p.vy = 0;
					p.vx *= .8;
				}
				ctx.globalAlpha = p.o;
				ctx.fillStyle = "white";
				ctx.beginPath();
				ctx.arc(p.x * w, p.y * w, p.r * devicePixelRatio, 0, Math.PI * 2);
				ctx.fill();
			}
			raf = requestAnimationFrame(tick);
		};
		tick();
		window.addEventListener("resize", size);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", size);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (first.current) {
			first.current = false;
			for (const p of parts.current) {
				p.vy = -.004 - Math.random() * .01;
				p.vx = (Math.random() - .5) * .01;
			}
			return;
		}
		for (const p of parts.current) {
			const a = Math.random() * Math.PI * 2, s = .03 + Math.random() * .06;
			p.vx = Math.cos(a) * s;
			p.vy = Math.sin(a) * s - .035;
		}
	}, [shake]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		className: "absolute inset-0 h-full w-full z-[15] pointer-events-none"
	});
}
function Flakes({ n = 14 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: Array.from({ length: n }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "flake",
		style: {
			left: `${i * 37 % 100}%`,
			animationDelay: `${i * .53 % 5}s`,
			animationDuration: `${4 + i % 4}s`
		}
	}, i)) });
}
function Index() {
	const [today, setToday] = (0, import_react.useState)(null);
	const [day, setDay] = (0, import_react.useState)(null);
	const [shake, setShake] = (0, import_react.useState)(0);
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setRevealed(false);
	}, [day]);
	const doShake = () => {
		setShake((n) => n + 1);
		if (!revealed) setTimeout(() => setRevealed(true), 1100);
	};
	(0, import_react.useEffect)(() => {
		const d = /* @__PURE__ */ new Date();
		const t = d.getMonth() === 11 ? Math.min(d.getDate(), 24) : 0;
		setToday(t);
		setDay(t || null);
	}, []);
	const movie = day ? MOVIES[day - 1] : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		style: { ["--city-bg"]: `url(${northern_lights_default})` },
		className: "min-h-screen night-sky stockholm-bg relative overflow-hidden px-4 pt-10 pb-40 flex flex-col items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flakes, { n: 40 }), Array.from({ length: 30 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "star",
					style: {
						left: `${i * 53 % 100}%`,
						top: `${i * 29 % 45}%`,
						animationDelay: `${i % 7 * .4}s`
					}
				}, i))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lights",
				"aria-hidden": true,
				children: Array.from({ length: 28 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "bulb",
					style: { animationDelay: `${i % 4 * .35}s` }
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative text-center mb-8 mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-gold tracking-[0.3em] uppercase text-sm",
					children: "December 2026"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-5xl md:text-7xl text-foreground mt-2",
					children: "Julfilm Kalendar"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `relative ${shake ? "globe-shake" : ""} animate-in zoom-in-90 fade-in duration-700 flex flex-col items-center`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-label": "Shake the snowglobe",
						onClick: doShake,
						className: "globe globe-xl globe-real",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SnowCanvas, { shake }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "glass-rim" }),
							shake > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "blizzard" }, `bz-${shake}`),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "snow-pile" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "globe-shine" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative z-10 text-center px-10",
								children: movie ? revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "reveal-in",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: movie.poster ?? "/assets/poster-example-CsVV_m-R.jpg",
											alt: `Poster for ${movie.title}`,
											width: 768,
											height: 1152,
											className: "movie-poster mx-auto",
											onError: (e) => {
												if (!e.currentTarget.src.endsWith("/assets/poster-example-CsVV_m-R.jpg")) e.currentTarget.src = poster_example_default;
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-2xl md:text-3xl text-foreground mt-3",
											children: movie.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-3 text-sm text-muted-foreground",
											children: ["Watch on ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "streaming-badge",
												children: movie.where
											})]
										})
									] })
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mystery",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mystery-card font-display",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col items-center leading-none",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-2xl tracking-widest uppercase",
												children: "Day"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: day })]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl md:text-3xl text-foreground mt-4",
										children: "Shake to reveal"
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mystery",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mystery-card font-display",
											children: "?"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-3xl text-foreground mt-4",
										children: "Opening soon"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: "Opens December 1st"
									})
								] })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "stand-collar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "stand-body" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hint-pill mt-4 text-sm text-foreground",
						children: !movie ? "Come back on December 1st 🎄" : revealed ? "Shake again for more snow ❄️" : "Click the globe to shake it and reveal the movie ❄️"
					})
				]
			}, `${day}-${shake}`),
			today !== null && today > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "relative mt-10 flex flex-wrap justify-center gap-2 max-w-2xl",
				children: MOVIES.map((_, i) => {
					const d = i + 1;
					const unlocked = d <= today;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: !unlocked,
						onClick: () => setDay(d),
						className: `h-10 w-10 rounded-full border border-border font-bold transition ${d === day ? "bg-primary text-primary-foreground" : unlocked ? "text-foreground hover:bg-secondary" : "opacity-30 cursor-not-allowed text-muted-foreground"}`,
						children: d
					}, d);
				})
			})
		]
	});
}
//#endregion
export { Index as component };
