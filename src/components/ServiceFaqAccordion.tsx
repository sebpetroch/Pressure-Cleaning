"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ArticleBlock } from "@/lib/articles";

export interface ServiceQaItem {
  question: string;
  answer: ArticleBlock[];
}

function AnswerBlock({ block }: { block: ArticleBlock }) {
  if (block.type === "list") {
    return (
      <ul className="list-disc space-y-2 pl-5">
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "paragraph") {
    return <p>{block.text}</p>;
  }
  return null;
}

export default function ServiceFaqAccordion({ items }: { items: ServiceQaItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
          .map((b) => (b.type === "list" ? b.items.join(" ") : b.type === "paragraph" ? b.text : ""))
          .join(" "),
      },
    })),
  };

  return (
    <div className="mt-12 divide-y divide-black/10 rounded-2xl border border-black/5 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-base font-semibold text-navy">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-blue transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid px-6 text-sm leading-relaxed text-navy/60 transition-all ${
                isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
              style={{ display: "grid" }}
            >
              <div className="flex flex-col gap-3 overflow-hidden">
                {item.answer.map((block, i) => (
                  <AnswerBlock key={i} block={block} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
