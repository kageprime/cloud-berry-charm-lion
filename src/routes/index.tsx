import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="gate">
      <div className="gate-rift" aria-hidden="true" />
      <header className="gate-head">
        <p className="gate-kicker">The Ledger writes</p>
        <h1>Veilspire</h1>
        <p className="gate-sub">
          Isometric 2:1 fighting on a diamond stone arena under a hollow rift.
          Warm up in the Practice Ring, or descend Hollow I: Cinder Hall.
        </p>
      </header>
      <div className="gate-modes">
        <Link to="/hollow" className="gate-card">
          <span className="gate-card-kicker">The game</span>
          <strong>Hollow I: Cinder Hall</strong>
          <span>Create your fighter, crack Host seals, take the Ember Shard from Pell.</span>
        </Link>
        <Link to="/ring" className="gate-card">
          <span className="gate-card-kicker">Warm-up</span>
          <strong>Practice Ring</strong>
          <span>Twelve fighters, auto camera, launch-juggle-plunge on a stone diamond.</span>
        </Link>
      </div>
      <p className="gate-foot">
        WASD move · J strike · K launch · Space jump · Shift dash · L guard · Q/E camera
      </p>
    </main>
  );
}
