"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface Props {
  before: string;
  after: string;
  label: string;
}

export default function BeforeAfterSlider({ before, after, label }: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  function updateFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }

  return (
    <div className="flex flex-col gap-3">
      <div
        ref={containerRef}
        className="relative aspect-4/3 w-full touch-none select-none overflow-hidden rounded-2xl shadow-sm"
        onMouseDown={(e) => {
          dragging.current = true;
          updateFromClientX(e.clientX);
        }}
        onMouseMove={(e) => {
          if (dragging.current) updateFromClientX(e.clientX);
        }}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchStart={(e) => updateFromClientX(e.touches[0].clientX)}
        onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
      >
        <Image
          src={after}
          alt={`${label} after pressure cleaning`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <Image
            src={before}
            alt={`${label} before pressure cleaning`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div
          className="absolute inset-y-0 w-1 -translate-x-1/2 bg-white shadow-md"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md">
            <div className="flex gap-0.5">
              <div className="h-3 w-0.5 bg-navy/40" />
              <div className="h-3 w-0.5 bg-navy/40" />
            </div>
          </div>
        </div>

        <span className="absolute left-3 top-3 rounded-md bg-navy/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-blue/90 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          After
        </span>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`Reveal ${label} before and after comparison`}
          className="absolute inset-x-0 bottom-2 mx-auto w-4/5 accent-blue opacity-0 focus:opacity-100 lg:opacity-100"
        />
      </div>
      <p className="text-center text-sm font-semibold text-navy">{label}</p>
    </div>
  );
}
