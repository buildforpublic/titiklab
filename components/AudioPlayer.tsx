type AudioPlayerProps = {
  src: string;
  label: string;
  language?: "en" | "ms";
};

export default function AudioPlayer({ src, label, language = "en" }: AudioPlayerProps) {
  const type = src.endsWith(".m4a") ? "audio/mp4" : "audio/mpeg";

  return (
    <div className="card-hard p-5">
      <p className="mb-3 text-sm font-600 text-[var(--color-ink)]">{language === "ms" ? "Dengar" : "Listen"} — {label}</p>
      <audio controls preload="none" className="w-full">
        <source src={src} type={type} />
        {language === "ms" ? "Pelayar anda tidak menyokong elemen audio." : "Your browser does not support the audio element."}
      </audio>
      <p className="mt-2 text-xs text-[var(--color-ink-faint)]">
        {language === "ms" ? "Rakaman irama untuk pembelajaran Tagunggu'." : "A rhythm recording for learning Tagunggu'."}
      </p>
    </div>
  );
}
