import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MOVIES } from "@/lib/movies";
import stockholmBg from "@/assets/northern-lights.jpg";
import posterExample from "@/assets/poster-example.jpg";
import { SnowCanvas } from "@/components/SnowCanvas";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Julfilmskalendar — Movie Advent Calendar" },
      { name: "description", content: "Open a snowglobe each December day to reveal a new holiday movie." },
      { property: "og:title", content: "Julfilmskalendar — Movie Advent Calendar" },
      { property: "og:description", content: "A new holiday movie inside a snowglobe, every day of December." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
loader: async () => {
  const d = new Date(2026, 11, 24); // December 24 for testing
  return {
    today: d.getMonth() === 11 ? Math.min(d.getDate(), 24) : 0,
  };
},
errorComponent: () => <p>Unable to open the calendar. Please refresh.</p>,
notFoundComponent: () => <p>Calendar not found.</p>,


  component: Index,
});

function Flakes({ n = 14 }: { n?: number }) {
  return (
    <>
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} className="flake" style={{ left: `${(i * 37) % 100}%`, animationDelay: `${(i * 0.53) % 5}s`, animationDuration: `${4 + (i % 4)}s` }} />
      ))}
    </>
  );
}

function Index() {
  const initialDate = Route.useLoaderData();
const [today, setToday] = useState(initialDate.today);
const [day, setDay] = useState<number | null>(
  initialDate.today || null
);

  const [shake, setShake] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const showMovie = revealed || (
  day !== null && today !== null && day < today
);
  useEffect(() => { setRevealed(false); }, [day]);
  const doShake = () => {
    setShake((n) => n + 1);
    if (!revealed) setTimeout(() => setRevealed(true), 1100);
  };
  //useEffect(() => {
    //const d = new Date();
    //const d = new Date(2026, 11, 24);

    //const t = d.getMonth() === 11 ? Math.min(d.getDate(), 24) : 0;
   // setToday(t);
    //setDay(t || null);
  //}, []);
  const movie = day ? MOVIES[day - 1] : undefined;

  return (
    <main style={{ ["--city-bg" as string]: `url(${stockholmBg})` }} className="min-h-screen night-sky stockholm-bg relative overflow-hidden px-4 pt-10 pb-40 flex flex-col items-center">
      <div className="pointer-events-none absolute inset-0"><Flakes n={40} />{Array.from({length:30}).map((_,i)=><span key={i} className="star" style={{left:`${(i*53)%100}%`,top:`${(i*29)%45}%`,animationDelay:`${(i%7)*0.4}s`}} />)}</div>
      <div className="lights" aria-hidden>{Array.from({length:28}).map((_,i)=><span key={i} className="bulb" style={{animationDelay:`${(i%4)*0.35}s`}} />)}</div>
      <header className="relative text-center mb-8 mt-6">
        <p className="font-display text-gold tracking-[0.3em] uppercase text-sm">December 2026</p>
        <h1 className="font-display text-5xl md:text-7xl text-foreground mt-2">Julfilmskalender</h1>
      </header>

      <div key={`${day}-${shake}`} className={`relative ${shake ? "globe-shake" : ""} flex flex-col items-center`}>
        <button type="button" aria-label="Shake the snowglobe" onClick={doShake} className="globe globe-xl globe-real">
          <SnowCanvas shake={shake} />
          <div className="glass-rim" />
          {shake > 0 && <div key={`bz-${shake}`} className="blizzard" />}
          <div className="snow-pile" />
          <div className="globe-shine" />
          <div className="relative z-10 text-center px-10">
            {movie ? (
              showMovie ? (<div className="reveal-in">
              <>
                <img src={movie.poster ?? posterExample} alt={`Poster for ${movie.title}`} width={768} height={1152} className="movie-poster mx-auto" onError={(e) => { if (!e.currentTarget.src.endsWith(posterExample)) e.currentTarget.src = posterExample; }} />
                <h2 className="font-display text-2xl md:text-3xl text-foreground mt-3">{movie.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">Watch on <span className="streaming-badge">{movie.where}</span></p>
              </>
            </div>) : (
                <div className="mystery">
                  <div className="mystery-card font-display"><div className="flex flex-col items-center leading-none"><span className="text-2xl tracking-widest uppercase">Day</span><span>{day}</span></div></div>
                  <p className="font-display text-2xl md:text-3xl text-foreground mt-4">Shake to reveal</p>
                </div>
              )
            ) : (
              <>
                <div className="mystery"><div className="mystery-card font-display">?</div></div>
                <p className="font-display text-3xl text-foreground mt-4">Opening soon</p><p className="mt-2 text-sm text-muted-foreground">Opens December 1st</p>
              </>
            )}
          </div>
        </button>
        <div className="stand"><div className="stand-collar" /><div className="stand-body"></div></div>
        <p className="hint-pill mt-4 text-sm text-foreground">{!movie ? "Come back on December 1st 🎄" : showMovie ? "Shake again for more snow ❄️" : "Click the globe to shake it and reveal the movie ❄️"}</p>
      </div>

      {today !== null && today > 0 && (
        <nav className="relative mt-10 flex flex-wrap justify-center gap-2 max-w-2xl">
          {MOVIES.map((_, i) => {
            const d = i + 1;
            const unlocked = d <= today;
            return (
              <button key={d} disabled={!unlocked} onClick={() => setDay(d)}
                className={`h-10 w-10 rounded-full border border-border font-bold transition ${d === day ? "bg-primary text-primary-foreground" : unlocked ? "text-foreground hover:bg-secondary" : "opacity-30 cursor-not-allowed text-muted-foreground"}`}>
                {d}
              </button>
            );
          })}
        </nav>
      )}
    </main>
  );
}
