import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { articles, getArticleBySlug } from "@/lib/articles";
import { business } from "@/lib/config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${business.domain}/articles/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      images: [article.coverImage],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage],
    },
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: [article.coverImage],
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: business.name,
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
    },
  };

  return (
    <article className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-96">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/articles"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-navy"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Articles
        </Link>

        <div className="mt-6 flex items-center gap-4 text-xs font-medium text-navy/50">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(article.publishedAt)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {article.readTime}
          </span>
        </div>

        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          {article.title}
        </h1>

        <div className="mt-8 flex flex-col gap-5">
          {article.content.map((block, i) => {
            if (block.type === "heading") {
              return (
                <h2 key={i} className="mt-3 text-xl font-bold text-navy">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="list-disc space-y-2 pl-5 text-base leading-relaxed text-navy/70">
                  {block.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-base leading-relaxed text-navy/70">
                {block.text}
              </p>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl bg-grey-light p-6 text-center sm:p-8">
          <p className="text-lg font-bold text-navy">
            Ready to bring your property back to life?
          </p>
          <p className="mt-2 text-sm text-navy/60">
            Get a free, no-obligation quote from Adelaide Pressure Cleaning today.
          </p>
          <Link
            href="/#quote"
            className="mt-5 inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue/90"
          >
            Request a Free Quote
          </Link>
        </div>
      </div>
    </article>
  );
}
