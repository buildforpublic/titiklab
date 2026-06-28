type AudioPlayerProps = {
  src: string;
  label: string;
};

/**
 * Simple native audio player for a titik rhythm.
 * If the audio file is missing/placeholder, the browser shows a graceful empty player.
 * Swapping in real recordings is a good-first-issue (drop an .mp3 into public/media/audio/).
 */
export default function AudioPlayer({ src, label }: AudioPlayerProps) {
  return (
    <div className="card-hard p-5">
      <p className="mb-3 text-sm font-600 text-[var(--color-ink)]">🎧 Listen — {label}</p>
      <audio controls preload="none" className="w-full">
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p className="mt-2 text-xs text-[var(--color-ink-faint)]">
        Recording: <code>{src}</code> — replace the placeholder with a real demonstration.
      </p>
    </div>
  );
}
