type AudioPlayerProps = {
  src: string;
  label: string;
};

export default function AudioPlayer({ src, label }: AudioPlayerProps) {
  const type = src.endsWith(".m4a") ? "audio/mp4" : "audio/mpeg";

  return (
    <div className="card-hard p-5">
      <p className="mb-3 text-sm font-600 text-[var(--color-ink)]">Listen — {label}</p>
      <audio controls preload="none" className="w-full">
        <source src={src} type={type} />
        Your browser does not support the audio element.
      </audio>
      <p className="mt-2 text-xs text-[var(--color-ink-faint)]">
        Rakaman irama untuk pembelajaran Tagungguk.
      </p>
    </div>
  );
}
