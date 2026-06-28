"use client";

const NOTES = [
  { label: "1", frequency: 392 },
  { label: "2", frequency: 440 },
  { label: "3", frequency: 494 },
  { label: "4", frequency: 523 },
  { label: "5", frequency: 587 },
  { label: "6", frequency: 659 },
  { label: "7", frequency: 698 },
  { label: "8", frequency: 784 },
];

const RHYTHMS = ["Tabawan", "Tarirai", "Limbayan", "Lellang", "Senai-senai"];

function playTone(frequency: number) {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  const context = new AudioContextClass();
  const now = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const filter = context.createBiquadFilter();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, now);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(1100, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.55, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.1);

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + 1.15);
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}

export default function PhoneInstrument() {
  return (
    <section className="card-hard overflow-hidden bg-white">
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-[var(--color-ocean-deep)] p-7 text-white sm:p-9">
          <p className="text-xs font-700 uppercase tracking-[0.18em] text-white/70">
            Akan datang
          </p>
          <h2 className="mt-3 text-3xl font-700 text-white sm:text-4xl">
            Main kulintangan melalui telefon
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/82">
            Bahagian ini disediakan sebagai ruang interaktif untuk pelajar mencuba bunyi asas
            kulintangan. Apabila rakaman dan susunan ritma lengkap dikumpulkan, setiap titik boleh
            ditambah sebagai mod latihan berpandu.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3">
            {RHYTHMS.map((rhythm) => (
              <div
                key={rhythm}
                className="border border-white/20 bg-white/8 px-3 py-3 text-sm font-600 text-white/80"
              >
                {rhythm}
                <span className="mt-1 block text-[0.68rem] uppercase tracking-wide text-white/50">
                  Ritma belum lengkap
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="mx-auto max-w-sm rounded-[2rem] border-[10px] border-[var(--color-ink)] bg-[#f8efe2] p-4 shadow-2xl">
            <div className="mb-4 h-1.5 w-20 rounded-full bg-[var(--color-ink)]/25 mx-auto" />
            <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-white p-4">
              <p className="text-center font-[family-name:var(--font-display)] text-xl font-700 text-[var(--color-ocean-deep)]">
                Cuba Bunyi Asas
              </p>
              <p className="mx-auto mt-2 max-w-64 text-center text-xs leading-5 text-[var(--color-ink-soft)]">
                Sentuh gong untuk mendengar nada contoh. Ini ialah bunyi latihan sementara, bukan
                rakaman rasmi komuniti.
              </p>
              <div className="mt-5 grid grid-cols-4 gap-3">
                {NOTES.map((note) => (
                  <button
                    key={note.label}
                    type="button"
                    onClick={() => playTone(note.frequency)}
                    className="aspect-square rounded-full border-4 border-[#7f5b22] bg-[radial-gradient(circle_at_35%_30%,#f7d991,#b98736_58%,#77511d)] text-sm font-800 text-[#421f00] shadow-[inset_0_-8px_18px_rgba(66,31,0,0.24),0_5px_0_#4c2c10] transition active:translate-y-1 active:shadow-[inset_0_-5px_12px_rgba(66,31,0,0.22),0_2px_0_#4c2c10]"
                    aria-label={`Play gong ${note.label}`}
                  >
                    {note.label}
                  </button>
                ))}
              </div>
              <div className="mt-5 rounded-lg bg-[#f4eadc] p-3 text-center text-xs text-[var(--color-ink-soft)]">
                Mod latihan ritma akan dimasukkan selepas kod ritma dan rakaman setiap titik
                disahkan.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
