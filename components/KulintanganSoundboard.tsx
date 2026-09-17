"use client";

import { useRef, useState } from "react";

type GongSound = {
  label: string;
  audio: string;
};

export default function KulintanganSoundboard({
  sounds,
  language,
  title,
  description,
}: {
  sounds: GongSound[];
  language: "en" | "ms";
  title?: string;
  description?: string;
}) {
  const activeAudio = useRef<HTMLAudioElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function playSound(sound: GongSound, index: number) {
    activeAudio.current?.pause();
    if (activeAudio.current) activeAudio.current.currentTime = 0;

    const audio = new Audio(sound.audio);
    activeAudio.current = audio;
    setActiveIndex(index);
    audio.addEventListener("ended", () => setActiveIndex(null), { once: true });
    void audio.play().catch(() => setActiveIndex(null));
  }

  return (
    <section className="mt-10 rounded-3xl border border-[var(--color-border)] bg-[var(--color-sand)]/55 p-5 sm:p-7">
      <p className="text-xs font-700 uppercase tracking-[0.16em] text-[var(--color-brass)]">
        {language === "ms" ? "Dengar setiap gong" : "Hear each gong"}
      </p>
      <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-700 text-[var(--color-ink)]">
        {title ?? (language === "ms" ? "Tujuh bunyi kulintangan" : "Seven kulintangan sounds")}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-ink-soft)]">
        {description ??
          (language === "ms"
            ? "Tekan setiap gong untuk mendengar rakaman bunyinya. Gong disusun daripada saiz paling besar di kiri dan semakin kecil ke kanan."
            : "Press each gong to hear its recorded sound. The gongs are arranged from larger on the left to smaller on the right.")}
      </p>

      <div className="mt-8 flex items-end justify-center gap-2 overflow-x-auto pb-3 sm:gap-3">
        {sounds.map((sound, index) => {
          const size = 122 - index * 9;
          const active = activeIndex === index;
          return (
            <button
              key={sound.audio}
              type="button"
              onClick={() => playSound(sound, index)}
              aria-label={`${language === "ms" ? "Mainkan" : "Play"} ${sound.label}`}
              className={`group relative shrink-0 rounded-full border-4 transition duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ocean)] ${
                active
                  ? "border-[var(--color-ocean)] shadow-[0_0_0_6px_rgba(200,138,43,0.2)]"
                  : "border-[#8f5c20] shadow-[0_8px_18px_rgba(74,35,15,0.22)]"
              }`}
              style={{ width: size, height: size }}
            >
              <span className="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_40%_35%,#f5d477_0%,#c98b2d_38%,#86501d_76%,#5f3417_100%)]" />
              <span className="absolute left-1/2 top-1/2 h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#6d3d18] bg-[radial-gradient(circle_at_38%_32%,#ffe49a,#bb7524_65%,#744015)]" />
              <span className="absolute inset-x-0 -bottom-7 text-center text-xs font-700 text-[var(--color-ink-soft)]">
                {sound.label}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
