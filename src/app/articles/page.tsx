import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { articles } from "@/lib/articles";
import { business } from "@/lib/config";

export const metadata: Metadata = {
  title: "Articles & Guides",
  description:
    "Tips, guides and advice on pressure cleaning, driveway care, roof washing, gutter maintenance and solar panel cleaning for Adelaide homes.",
  alternates: {
    canonical: "/articles",
  },
  openGraph: {
    title: "Articles & Guides | Adelaide Pressure Works",
    description:
      "Tips, guides and advice on pressure cleaning, driveway care, roof washing, gutter maintenance and solar panel cleaning for Adelaide homes.",
    url: `${business.domain}/articles`,
  },
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ArticlesPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="bg-white">
      <div className="bg-navy py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue">
            Articles &amp; Guides
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Pressure Cleaning Tips &amp; Advice
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            Practical guides on driveway care, roof washing, gutter
            maintenance and more — from the team at Adelaide Pressure
            Works.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-4 text-xs font-medium text-navy/50">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(article.publishedAt)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {article.readTime}
                  </span>
                </div>
                <h2 className="mt-3 text-lg font-bold text-navy">
                  {article.title}
                </h2>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-navy/60">
                  {article.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-colors group-hover:text-navy">
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
