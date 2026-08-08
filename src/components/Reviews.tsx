import { Star } from "lucide-react";
import { reviews } from "@/lib/config";

const avatarColors = [
  "bg-blue",
  "bg-green",
  "bg-orange-500",
  "bg-violet-500",
  "bg-teal-500",
];

function ReviewCard({ review, index }: { review: (typeof reviews)[number]; index: number }) {
  const initial = review.name.charAt(0);
  const color = avatarColors[index % avatarColors.length];

  return (
    <div className="flex w-[320px] shrink-0 flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:w-[360px]">
      <div className="flex text-blue">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <span className="mt-3 inline-flex w-fit rounded-full border border-blue/30 bg-blue/10 px-3 py-1 text-xs font-semibold text-blue">
        {review.badge}
      </span>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-white/80">
        &quot;{review.quote}&quot;
      </p>
      <div className="mt-5 flex items-center gap-3">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${color}`}
        >
          {initial}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{review.name}</p>
          <p className="text-xs text-white/50">{review.suburb} Customer</p>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const half = Math.ceil(reviews.length / 2);
  const rowA = reviews.slice(0, half);
  const rowB = reviews.slice(half);

  return (
    <section className="overflow-hidden bg-navy py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue">
          Reviews
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Adelaide Homes Love The Results
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/60">
          Real feedback from real customers across Adelaide.
        </p>
      </div>

      <div className="relative mt-14 flex flex-col gap-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy to-transparent sm:w-32" />

        <div className="marquee-row overflow-hidden">
          <div className="animate-marquee-left flex w-max gap-6">
            {[...rowA, ...rowA].map((review, i) => (
              <ReviewCard key={`a-${i}`} review={review} index={i} />
            ))}
          </div>
        </div>

        <div className="marquee-row overflow-hidden">
          <div className="animate-marquee-right flex w-max gap-6">
            {[...rowB, ...rowB].map((review, i) => (
              <ReviewCard key={`b-${i}`} review={review} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
