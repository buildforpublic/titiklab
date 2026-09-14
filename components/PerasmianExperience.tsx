"use client";

import { PointerEvent, useEffect, useRef, useState } from "react";

type TouchPoint = { id: number; x: number; y: number };

declare global {
  interface Window { webkitAudioContext?: typeof AudioContext; }
}

function playActivationSound(finale = false) {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  const context = new AudioContextClass();
  const now = context.currentTime;
  const master = context.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(finale ? 0.42 : 0.18, now + 0.02);
  master.gain.exponentialRampToValueAtTime(0.0001, now + (finale ? 2.4 : 0.65));
  master.connect(context.destination);
  const notes = finale ? [196, 261.63, 329.63, 392, 523.25] : [392];
  notes.forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = index % 2 ? "triangle" : "sine";
    oscillator.frequency.setValueAtTime(frequency, now + index * 0.09);
    gain.gain.value = 1 / (index + 1.1);
    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start(now + index * 0.09);
    oscillator.stop(now + (finale ? 2.4 : 0.68));
  });
  window.setTimeout(() => context.close(), finale ? 2700 : 900);
}

export default function PerasmianExperience() {
  const [touches, setTouches] = useState<TouchPoint[]>([]);
  const [charging, setCharging] = useState(false);
  const [phase, setPhase] = useState(0);
  const [launched, setLaunched] = useState(false);
  const activePointers = useRef(new Map<number, TouchPoint>());
  const launchTimer = useRef<number | null>(null);
  const ceremonyAudio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    ceremonyAudio.current = new Audio("/media/audio/senai-senai-perasmian.m4a");
    ceremonyAudio.current.preload = "auto";
    return () => {
      if (launchTimer.current) window.clearTimeout(launchTimer.current);
      ceremonyAudio.current?.pause();
    };
  }, []);

  function beginLaunch() {
    if (charging || launched) return;
    setCharging(true);
    setPhase(1);
    playActivationSound(false);
    if (ceremonyAudio.current) {
      ceremonyAudio.current.currentTime = 0;
      ceremonyAudio.current.volume = 0.01;
      ceremonyAudio.current.play().catch(() => undefined);
    }
    window.setTimeout(() => { setPhase(2); playActivationSound(false); }, 2600);
    window.setTimeout(() => { setPhase(3); playActivationSound(false); }, 5400);
    window.setTimeout(() => { setPhase(4); playActivationSound(false); }, 8200);
    window.setTimeout(() => { setPhase(5); playActivationSound(true); }, 10900);
    launchTimer.current = window.setTimeout(() => {
      if (ceremonyAudio.current) {
        ceremonyAudio.current.currentTime = 0;
        ceremonyAudio.current.volume = 1;
      }
      setCharging(false);
      setLaunched(true);
    }, 13500);
  }

  function addTouch(event: PointerEvent<HTMLDivElement>) {
    if (launched || activePointers.current.has(event.pointerId)) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    const bounds = event.currentTarget.getBoundingClientRect();
    const point = { id: event.pointerId, x: ((event.clientX - bounds.left) / bounds.width) * 100, y: ((event.clientY - bounds.top) / bounds.height) * 100 };
    activePointers.current.set(event.pointerId, point);
    const next = [...activePointers.current.values()].slice(0, 5);
    setTouches(next);
    playActivationSound(false);
    if (next.length === 5) beginLaunch();
  }

  function removeTouch(event: PointerEvent<HTMLDivElement>) {
    activePointers.current.delete(event.pointerId);
    if (!charging) setTouches([...activePointers.current.values()].slice(0, 5));
  }

  function runDemo() {
    if (charging || launched) return;
    const demo = [
      { id: 1, x: 22, y: 42 }, { id: 2, x: 36, y: 31 }, { id: 3, x: 50, y: 27 },
      { id: 4, x: 64, y: 32 }, { id: 5, x: 78, y: 43 },
    ];
    activePointers.current.clear();
    demo.forEach((_, index) => window.setTimeout(() => {
      setTouches(demo.slice(0, index + 1));
      playActivationSound(false);
      if (index === 4) beginLaunch();
    }, index * 760));
  }

  function reset() {
    ceremonyAudio.current?.pause();
    if (ceremonyAudio.current) ceremonyAudio.current.currentTime = 0;
    activePointers.current.clear();
    setTouches([]);
    setCharging(false);
    setPhase(0);
    setLaunched(false);
  }

  return (
    <div className={`launch-experience five-touch ${charging ? "is-charging" : ""} phase-${phase}`}>
      <div className="launch-stars" aria-hidden="true">{Array.from({ length: 20 }, (_, index) => <i key={index} />)}</div>
      <div className="ceremony-fireworks" aria-hidden="true">
        {Array.from({ length: 7 }, (_, firework) => (
          <span className={`ceremony-firework ceremony-firework--${firework + 1}`} key={firework}>
            {Array.from({ length: 12 }, (_, spark) => <i key={spark} />)}
          </span>
        ))}
      </div>
      <header className="launch-heading">
        <p className="launch-kicker">Majlis Perasmian Digital</p>
        <h1>Lima Jari, Satu Irama</h1>
        <p>Letakkan lima jari serentak pada ruang sentuhan untuk menyalakan TitikLab.</p>
      </header>

      <section className="five-touch-stage">
        <div className="five-touch-pad" onPointerDown={addTouch} onPointerUp={removeTouch} onPointerCancel={removeTouch} aria-label="Ruang sentuhan lima jari">
          <div className="five-touch-pad__pattern" aria-hidden="true" />
          <div className="five-touch-scanner" aria-hidden="true" />
          <div className="five-touch-orbits" aria-hidden="true"><i /><i /><i /></div>
          {touches.map((point, index) => (
            <span className="five-touch-point" key={point.id} style={{ left: `${point.x}%`, top: `${point.y}%` }}>
              <i /><b>{index + 1}</b>
            </span>
          ))}
          <div className="five-touch-center">
            <svg className="five-touch-hand" viewBox="0 0 120 135" aria-hidden="true">
              <rect x="17" y="36" width="16" height="52" rx="8" transform="rotate(-15 25 62)" />
              <rect x="34" y="13" width="17" height="68" rx="8.5" transform="rotate(-5 42 47)" />
              <rect x="54" y="5" width="18" height="75" rx="9" />
              <rect x="75" y="14" width="17" height="67" rx="8.5" transform="rotate(5 83 48)" />
              <rect x="94" y="32" width="15" height="54" rx="7.5" transform="rotate(13 101 59)" />
              <path d="M29 69c2-16 15-25 31-25h17c17 0 30 14 30 31v18c0 25-18 40-43 40-21 0-34-11-42-27L8 78c-5-11 10-19 18-9l13 17Z" />
            </svg>
            <strong>{charging ? `${phase} / 5` : `${touches.length} / 5`}</strong>
            <small>{charging ? ["", "Lima sentuhan diterima", "Menyatukan lima jari", "Menghidupkan warisan", "Irama Semporna bergema", "TitikLab bersedia"][phase] : "Sentuhan dikesan"}</small>
          </div>
        </div>
        <div className={`five-touch-narrative ${charging ? "is-visible" : ""}`} aria-live="polite">
          {charging && [
            "",
            "Lima jari menyatukan satu niat.",
            "Daripada tangan pewaris, irama terus hidup.",
            "Warisan lama diberi nafas untuk generasi baharu.",
            "Dari Semporna, bunyinya terus bergema.",
            "Dengan satu sentuhan, sebuah legasi diteruskan.",
          ][phase]}
        </div>
        <div className="five-touch-instruction">
          <div className="five-touch-progress" aria-label={`${touches.length} daripada 5 sentuhan dikesan`}>
            {Array.from({ length: 5 }, (_, index) => <span key={index} className={index < touches.length ? "is-on" : ""} />)}
          </div>
          <p>Gunakan kelima-lima jari pada skrin sentuh dan tahan seketika.</p>
          <button type="button" onClick={runDemo}>Demo menggunakan komputer</button>
        </div>
      </section>

      <p className="launch-note">Selepas lima sentuhan dikesan, irama Senai-senai akan mengiringi cahaya perasmian.</p>
      {launched && (
        <div className="launch-finale" role="dialog" aria-modal="true" aria-labelledby="launch-title">
          <div className="finale-flash" aria-hidden="true" />
          <div className="launch-rays" aria-hidden="true" />
          <div className="finale-rings" aria-hidden="true"><i /><i /><i /></div>
          <div className="finale-sparks" aria-hidden="true">{Array.from({ length: 34 }, (_, index) => <i key={index} />)}</div>
          <div className="launch-finale__content">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/gallery/titiklab-main-logo.png" alt="Logo TitikLab" />
            <p>Dengan penuh sukacita</p>
            <h2 id="launch-title">TitikLab<br />Dirasmikan</h2>
            <span>Warisan berbunyi. Generasi terhubung.</span>
            <button type="button" onClick={reset}>Ulang Perasmian</button>
          </div>
        </div>
      )}
    </div>
  );
}
