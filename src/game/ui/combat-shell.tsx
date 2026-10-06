export function CombatShell() {
  return (
    <>
      <main className="game">
        <div className="stagewrap">
          <div id="stage">
            <canvas id="c" width={640} height={360} aria-label="Isometric combat arena" />
            <div className="hud" id="hpbox">
              <div id="hpname">
                <span id="hpl">Cinder</span>
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
            <button className="cambtn" id="camL" aria-label="Rotate camera left" title="Rotate left (Q)">
              &#x27F2;<small>Q</small>
            </button>
            <button className="cambtn" id="camR" aria-label="Rotate camera right" title="Rotate right (E)">
              &#x27F3;<small>E</small>
            </button>
            <div id="dock">
              <button className="t" id="openSel">Fighter</button>
              <button className="t" id="openSet">Settings</button>
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
              <button id="bJump" data-a="jump">X<small>Jump</small></button>
              <button id="bLight" data-a="light">A<small>Light</small></button>
              <button id="bSpec" data-a="special">B<small>Launch</small></button>
              <button id="bDash" data-a="dash">Y<small>Dash</small></button>
              <button id="bGuard" data-a="guard">Guard</button>
              <button id="bPause">Start</button>
            </div>
          </div>
        </div>
      </main>

      <div className="ov" id="sel" role="dialog" aria-modal="true" aria-labelledby="selT">
        <div className="selw pickw">
          <header className="selh">
            <h2 id="selT">Fighter</h2>
            <p>Pick your body. The rival stays the <b style={{ color: "#e08a50" }}>Cinder dummy</b>.</p>
          </header>
          <div className="vsstage single">
            <section className="slot s1 on" aria-label="Your fighter preview">
              <div className="who">You · P1</div>
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
              <h3>Practice</h3>
              <div>One ring, one dummy. Chain lights into launcher, meet them in the air, drive them down.</div>
              <div className="kit"><b>J</b> strike · <b>K</b> launcher · <b>Space</b> jump · <b>Shift</b> dash · <b>L</b> guard · <b>B</b> skin</div>
              <div className="curbar" style={{ justifyContent: "flex-start", margin: 0 }}>
                <button className="cur" id="rndBtn" title="Random fighter">Random</button>
              </div>
            </div>
          </div>
          <div className="roster" id="roster" />
          <div className="self"><button className="go" id="fight">Done</button></div>
        </div>
      </div>

      <div className="ov" id="title" role="dialog" aria-modal="true" aria-labelledby="titleT">
        <div className="selw">
          <div className="ttl">
            <div className="over">V E I L S P I R E</div>
            <h2 id="titleT">Practice Ring</h2>
            <p className="tag">Warm up. The Hollow waits.</p>
          </div>
          <div className="menubtns">
            <button className="go" id="mFight">Enter the Ring</button>
            <button className="go sm2" id="mPick">Fighter</button>
            <button className="go sm2" id="mHow">How to Play</button>
            <button className="go sm2" id="mCred">Credits</button>
            <button className="go sm2" id="mMute">Sound: on</button>
            <a className="go sm2" href="/hollow">Hollow I</a>
            <a className="go sm2" href="/">Leave</a>
          </div>
        </div>
      </div>

      <div className="ov" id="how" role="dialog" aria-modal="true" aria-labelledby="howT">
        <div className="selw">
          <div className="ttl"><h2 id="howT" style={{ fontSize: 30 }}>How to Play</h2></div>
          <div className="howlist">
            <h3>The bout</h3>
            <div>You are <b style={{ color: "#8fb4d9" }}>P1</b>. Break the rival's seal. Launch them with <kbd>K</kbd>, meet them in the air, drive them down.</div>
            <h3>Bindings</h3>
            <div><kbd>WASD</kbd> / arrows move · <kbd>Space</kbd> jump · <kbd>J</kbd> / click strike · <kbd>K</kbd> / right-click launcher, plunge in the air · <kbd>Shift</kbd> dash · hold <kbd>L</kbd> guard · <kbd>Q</kbd> <kbd>E</kbd> camera · <kbd>T</kbd> slow motion · <kbd>B</kbd> skin · <kbd>M</kbd> mute · <kbd>Esc</kbd> pause</div>
            <h3>Seals</h3>
            <div>Hits crack the rival's seal. A cracked seal breaks open — juggle the pieces before they get up.</div>
          </div>
          <div className="self"><button className="go sm2" id="howBack">Back</button></div>
        </div>
      </div>

      <div className="ov" id="credits" role="dialog" aria-modal="true" aria-labelledby="credT">
        <div className="selw">
          <div className="ttl"><h2 id="credT" style={{ fontSize: 30 }}>Credits</h2></div>
          <div className="credit">
            <div><b>Veilspire</b> — isometric 2:1 fighting on a diamond stone arena.</div>
            <div>Design, code and sprites by the Veilspire team.</div>
            <div>Hit FX: tbbk & CodeManu via OpenGameArt (CC0).</div>
            <div>The Ledger sees you and does not know where to file you.</div>
          </div>
          <div className="self"><button className="go sm2" id="credBack">Back</button></div>
        </div>
      </div>

      <div className="ov" id="result" role="dialog" aria-modal="true" aria-labelledby="resTitle">
        <div className="selw">
          <div className="boutcard">
            <div className="vs" id="resTitle" />
            <div className="test" id="resLine" />
            <div className="resstats" id="resStats" />
            <div className="menubtns" style={{ marginTop: 16 }}>
              <button className="go" id="resGo">Rematch</button>
              <button className="go sm2" id="resSel">Change fighter</button>
            </div>
            <p className="dimc"><kbd>R</kbd> rematch · <kbd>Esc</kbd> change fighters</p>
          </div>
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

      <div className="ov" id="set" role="dialog" aria-modal="true" aria-labelledby="setT">
        <div className="setw">
          <header className="seth">
            <h2 id="setT">Settings</h2>
            <button className="go sm2" id="setX">Done</button>
          </header>
          <div id="opts">
            <fieldset>
              <legend>Camera</legend>
              <button className="t" data-o="autocam" aria-pressed="true">Auto camera (C)</button>
              <button className="t" data-o="immersive" aria-pressed="true">Immersive</button>
              <button className="t" data-o="push" aria-pressed="true">Push-in</button>
              <button className="t" data-o="dof" aria-pressed="true">Depth of field</button>
            </fieldset>
            <fieldset>
              <legend>Look and feel</legend>
              <button className="t" data-o="light" aria-pressed="true">Lighting</button>
              <button className="t" data-o="shake" aria-pressed="true">Shake</button>
              <button className="t" data-o="fx" aria-pressed="true">Hit FX</button>
              <button className="t" data-o="debug" aria-pressed="false">Frame data (F)</button>
            </fieldset>
            <fieldset id="devplay">
              <legend>Playback</legend>
              <button className="t" data-o="speed" aria-pressed="false">Speed 1×</button>
              <button className="t" data-o="dguard" aria-pressed="false">Rival blocks</button>
              <button className="t" data-o="demo" aria-pressed="false">Demo combo</button>
              <button className="t" data-o="reset" aria-pressed="false">Reset (R)</button>
            </fieldset>
          </div>
          <h3 className="ch">Controls</h3>
          <ul className="ctl">
            <li><kbd>WASD</kbd> move, <kbd>Space</kbd> jump</li>
            <li><kbd>J</kbd> strike, <kbd>K</kbd> launcher — chain them in the air</li>
            <li><kbd>Shift</kbd> dash, hold <kbd>L</kbd> to guard</li>
            <li><kbd>Q</kbd> <kbd>E</kbd> turn the camera, <kbd>T</kbd> slow motion</li>
          </ul>
        </div>
      </div>
    </>
  );
}
