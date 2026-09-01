import { Fragment, useState } from "react";

type FaqItem = { q: string; a: string };

const PHONE_DISPLAY = "+40 745 506 443";
const PHONE_TEL = "+40745506443";
const WHATSAPP_HREF = "https://wa.me/40745506443";

const PHONE_VARIANTS = ["+40 745 506 443", "0745 506 443", "+40745506443"];

const PATTERN = /(https?:\/\/[^\s]+|\+40 745 506 443|0745 506 443|\+40745506443|WhatsApp)/g;

function renderAnswer(text: string) {
  return text.split(PATTERN).map((part, i) => {
    if (!part) return null;

    if (part.startsWith("http")) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline underline-offset-2"
        >
          {part}
        </a>
      );
    }

    if (part === "WhatsApp") {
      return (
        <a
          key={i}
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#128C7E] underline underline-offset-2"
        >
          WhatsApp
        </a>
      );
    }

    if (PHONE_VARIANTS.includes(part)) {
      return (
        <a
          key={i}
          href={`tel:${PHONE_TEL}`}
          className="font-semibold text-gold underline underline-offset-2"
        >
          {PHONE_DISPLAY}
        </a>
      );
    }

    return <Fragment key={i}>{part}</Fragment>;
  });
}

export function Faq({ items }: { items: readonly FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-rule rounded-2xl border border-rule bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-btn-${i}`;
        return (
          <li key={i}>
            <button
              id={btnId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-[18px] font-semibold text-ink"
            >
              <span>{item.q}</span>
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className={`h-5 w-5 shrink-0 text-gold transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="faq-panel"
              data-open={isOpen}
            >
              <div>
                <p className="whitespace-pre-line px-5 pb-5 text-[17px] leading-7 text-ink/70">
                  {renderAnswer(item.a)}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
