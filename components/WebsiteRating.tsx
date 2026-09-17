"use client";

import { FormEvent, useState } from "react";

type WebsiteRatingProps = {
  recipient: string;
};

export default function WebsiteRating({ recipient }: WebsiteRatingProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function sendFeedback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!rating) return;

    setStatus("sending");
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Maklum balas TitikLab - ${rating}/5 bintang`,
          _template: "table",
          Penilaian: `${rating}/5 bintang`,
          Komen: comment.trim() || "Tiada komen diberikan.",
        }),
      });

      if (!response.ok) throw new Error("Feedback submission failed");
      setStatus("success");
      setRating(0);
      setComment("");
    } catch {
      setStatus("error");
    }
  }

  const activeRating = hoveredRating || rating;

  return (
    <section id="website-rating" className="mt-12 scroll-mt-28 border-t border-[var(--color-border-subtle)] pt-10 text-center">
      <p className="eyebrow">
        <span className="lang-en">Website feedback</span>
        <span className="lang-ms">Maklum balas laman web</span>
      </p>
      <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--color-ocean-deep)]">
        <span className="lang-en">Rate your TitikLab experience</span>
        <span className="lang-ms">Nilai pengalaman anda di TitikLab</span>
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[var(--color-ink-soft)]">
        <span className="lang-en">Choose one to five stars and share a short comment with us.</span>
        <span className="lang-ms">Pilih satu hingga lima bintang dan kongsikan komen ringkas dengan kami.</span>
      </p>

      <form onSubmit={sendFeedback} className="mx-auto mt-7 max-w-xl">
        <fieldset>
          <legend className="sr-only">Website rating / Penilaian laman web</legend>
          <div className="flex justify-center gap-2" onMouseLeave={() => setHoveredRating(0)}>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                aria-label={`${star} star${star === 1 ? "" : "s"}`}
                aria-pressed={rating === star}
                className={`text-4xl transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ocean-deep)] ${
                  star <= activeRating ? "text-[var(--color-brass)]" : "text-[#d8cbb9]"
                }`}
              >
                ★
              </button>
            ))}
          </div>
          <p className="mt-2 min-h-6 text-sm font-semibold text-[var(--color-maroon)]" aria-live="polite">
            {rating ? <><span className="lang-en">{rating}/5 stars</span><span className="lang-ms">{rating}/5 bintang</span></> : <><span className="lang-en">Choose your rating</span><span className="lang-ms">Pilih penilaian anda</span></>}
          </p>
        </fieldset>

        <label htmlFor="website-feedback-en" className="lang-en mt-5 text-left text-sm font-semibold text-[var(--color-ink)]">
          <span className="lang-en">Comment (optional)</span>
        </label>
        <label htmlFor="website-feedback-ms" className="lang-ms mt-5 text-left text-sm font-semibold text-[var(--color-ink)]">Komen (pilihan)</label>
        <textarea
          id="website-feedback-en"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          rows={4}
          maxLength={800}
          placeholder="Share your experience or suggestions..."
          className="lang-en mt-2 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-brass)] focus:ring-2 focus:ring-[var(--color-brass)]/20"
        />
        <textarea
          id="website-feedback-ms"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          rows={4}
          maxLength={800}
          placeholder="Kongsikan pengalaman atau cadangan anda..."
          className="lang-ms mt-2 w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-brass)] focus:ring-2 focus:ring-[var(--color-brass)]/20"
        />

        <button type="submit" disabled={!rating || status === "sending"} className="btn-pill btn-pill-filled mt-5 disabled:cursor-not-allowed disabled:opacity-45">
          {status === "sending" ? <><span className="lang-en">Sending...</span><span className="lang-ms">Sedang dihantar...</span></> : <><span className="lang-en">Send Feedback</span><span className="lang-ms">Hantar Maklum Balas</span></>}
        </button>
        <div className="mt-3 min-h-6 text-sm font-semibold" aria-live="polite">
          {status === "success" && <p className="text-emerald-700"><span className="lang-en">Thank you. Your feedback has been sent.</span><span className="lang-ms">Terima kasih. Maklum balas anda telah dihantar.</span></p>}
          {status === "error" && <p className="text-red-700"><span className="lang-en">Your feedback could not be sent. Please try again.</span><span className="lang-ms">Maklum balas tidak dapat dihantar. Sila cuba lagi.</span></p>}
        </div>
      </form>
    </section>
  );
}
