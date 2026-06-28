import type { Partner } from "@/lib/content";

export default function PartnerCard({ partner }: { partner: Partner }) {
  const inner = (
    <>
      <div className="flex items-center gap-3">
        {partner.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={partner.logo} alt={partner.name} className="h-12 w-12 rounded-full object-cover" />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-ocean)] font-700 text-white">
            {partner.name.charAt(0)}
          </div>
        )}
        <div>
          <h3 className="font-700 text-[var(--color-ink)]">{partner.name}</h3>
          <p className="text-xs font-600 uppercase tracking-wide text-[var(--color-brass)]">
            {partner.role}
          </p>
        </div>
      </div>
      <p className="mt-3 text-sm text-[var(--color-ink-soft)]">{partner.description}</p>
    </>
  );

  return partner.link ? (
    <a href={partner.link} className="card-hard block p-5 no-underline">
      {inner}
    </a>
  ) : (
    <div className="card-hard p-5">{inner}</div>
  );
}
