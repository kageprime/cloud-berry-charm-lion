export function HollowShell() {
  return (
    <>
      <main className="game">
        <div className="stagewrap">
          <div id="stage">
            <canvas id="c" width={640} height={360} aria-label="Hollow I Cinder Hall" />
            <div className="hud" id="hpbox">
              <div id="hpname">
                <span id="hpl">Ren Calder</span>
                <span id="hpn" />
              </div>
              <div id="hpbar" style={{ position: "relative" }}>
                <div id="hpghost" />
                <div id="hpfill" />
              </div>
            </div>
            <div className="hud" id="combo">
              <div id="cn">0</div>
              <div id="cl">HITS</div>
              <div id="cs" />
            </div>
            <div className="hud" id="mv" />
            <div id="zone" />
            <button className="cambtn" id="camL" aria-label="Rotate camera left" title="Rotate left (Q)">
              &#x27F2;<small>Q</small>
            </button>
            <button className="cambtn" id="camR" aria-label="Rotate camera right" title="Rotate right (E)">
              &#x27F3;<small>E</small>
            </button>
            <div id="dock">
              <button className="t" id="openCreate">Fighter</button>
              <button className="t" id="openHow">How</button>
              <button className="t" id="openPause" aria-label="Pause">II</button>
            </div>
            <div id="busy" role="status">The Ledger writes…</div>
            <div id="load">
              <div className="ttl">
                <div className="over">V E I L S P I R E</div>
                <p className="tag">Opening the Hollow…</p>
              </div>
            </div>
          </div>
          <div id="touch">
            <div id="stick" aria-label="Move stick"><div id="knob" /></div>
            <div id="btns">
              <button data-a="jump">X<small>Jump</small></button>
              <button data-a="light">A<small>Cut</small></button>
              <button data-a="special">B<small>Launch</small></button>
              <button data-a="use">Y<small>Use</small></button>
              <button data-a="guard">Guard</button>
              <button id="bPause">Start</button>
            </div>
          </div>
        </div>
      </main>

      <div className="ov" id="title" role="dialog" aria-modal="true" aria-labelledby="titleT">
        <div className="selw">
          <div className="ttl">
            <div className="over">V E I L S P I R E</div>
            <h2 id="titleT">Hollow I: Cinder Hall</h2>
            <p className="tag">The Floor Voice sets the test: DESCEND.</p>
          </div>
          <div className="menubtns">
            <button className="go" id="mCreate">Create your fighter</button>
            <button className="go sm2" id="mHow">How to Play</button>
            <button className="go sm2" id="mCred">Credits</button>
            <button className="go sm2" id="mMute">Sound: on</button>
            <a className="go sm2" href="/ring">Practice Ring</a>
            <a className="go sm2" href="/">Leave</a>
          </div>
        </div>
      </div>

      <div className="ov" id="create" role="dialog" aria-modal="true" aria-labelledby="createT">
        <div className="selw">
          <header className="selh">
            <h2 id="createT">Create your fighter</h2>
            <p>One body for the whole descent. Hover to preview, click to choose.</p>
          </header>
          <div className="vsstage single">
            <section className="slot s1 on" aria-label="Your fighter preview">
              <div className="who">You · the carrier</div>
              <canvas width={256} height={256} />
              <div className="skincyc">
                <button data-sk="-1" aria-label="Previous skin">‹</button>
                <span className="skinname" />
                <button data-sk="1" aria-label="Next skin">›</button>
              </div>
              <h3 className="sn" />
              <div className="st" />
            </section>
            <div className="lorebox">
              <h3>The test</h3>
              <div>Floor One. Six Hosts hold the hall. <b>Pell, the last carrier</b>, holds the Ember Shard.</div>
              <div className="kit"><b>J</b> strike · <b>K</b> launch / plunge · <b>Space</b> jump · <b>F</b> rest / take · <b>L</b> guard</div>
              <div className="kit">Rest at the pale ring to close your cracks. Take chests with F.</div>
            </div>
          </div>
          <div className="roster" id="roster" />
          <div className="self"><button className="go" id="descend">Descend</button></div>
        </div>
      </div>

      <div className="ov" id="how" role="dialog" aria-modal="true" aria-labelledby="howT">
        <div className="selw">
          <div className="ttl"><h2 id="howT" style={{ fontSize: 30 }}>How to Play</h2></div>
          <div className="howlist">
            <h3>The descent</h3>
            <div>Cut Hosts, juggle them, and drive them down. Rest at the pale ring to mend. Take what the chests keep. File Pell to open the Hollow.</div>
            <h3>Bindings</h3>
            <div><kbd>WASD</kbd> move · <kbd>J</kbd> strike · <kbd>K</kbd> launch / plunge · <kbd>Space</kbd> jump · <kbd>Shift</kbd> dash · <kbd>L</kbd> guard · <kbd>F</kbd> rest / take · <kbd>Q</kbd> <kbd>E</kbd> camera · <kbd>Esc</kbd> pause</div>
          </div>
          <div className="self"><button className="go sm2" id="howBack">Back</button></div>
        </div>
      </div>

      <div className="ov" id="credits" role="dialog" aria-modal="true" aria-labelledby="credT">
        <div className="selw">
          <div className="ttl"><h2 id="credT" style={{ fontSize: 30 }}>Credits</h2></div>
          <div className="credit">
            <div><b>Veilspire — Hollow I: Cinder Hall</b></div>
            <div>Design, code and sprites by the Veilspire team.</div>
            <div>Hit FX: tbbk & CodeManu via OpenGameArt (CC0).</div>
            <div>The Ledger sees you and does not know where to file you.</div>
          </div>
          <div className="self"><button className="go sm2" id="credBack">Back</button></div>
        </div>
      </div>

      <div className="ov" id="pause" role="dialog" aria-modal="true" aria-labelledby="pauseT">
        <div className="selw">
          <div className="ttl">
            <h2 id="pauseT" style={{ fontSize: 30 }}>Paused</h2>
            <p className="tag">The Hollow holds its breath.</p>
          </div>
          <div className="menubtns">
            <button className="go" id="pResume">Resume</button>
            <button className="go sm2" id="pQuit">Quit to title</button>
            <button className="go sm2" id="pMute">Sound: on</button>
          </div>
        </div>
      </div>

      <div className="ov" id="dead" role="dialog" aria-modal="true">
        <div className="selw">
          <div className="boutcard">
            <div className="vs">The seal scatters.</div>
            <div className="test" id="deadLine">Ash is kept. The Hollow forgets nothing, but it resets.</div>
            <p className="dimc"><kbd>R</kbd> walk in again · <kbd>Esc</kbd> title</p>
            <div className="menubtns" style={{ marginTop: 16 }}>
              <button className="go" id="deadGo">Walk in again</button>
              <button className="go sm2" id="deadTitle">Title</button>
            </div>
          </div>
        </div>
      </div>

      <div className="ov" id="end" role="dialog" aria-modal="true">
        <div className="selw">
          <div className="boutcard">
            <div className="vs">The Floor Voice: the test is met.</div>
            <div className="test">You hold the Ember Shard. The last carrier is filed.<br />Below, something heavy shifts. A maul drags on stone.</div>
            <p className="dimc"><kbd>R</kbd> dive again · <kbd>Esc</kbd> title</p>
            <div className="menubtns" style={{ marginTop: 16 }}>
              <button className="go" id="endGo">Dive again</button>
              <button className="go sm2" id="endTitle">Title</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
