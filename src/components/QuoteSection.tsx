import QuoteForm from "./QuoteForm";

export default function QuoteSection() {
  return (
    <section id="quote" className="bg-grey-light py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue">
            Get Started
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Request Your Free Quote
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy/60">
            Tell us what you need cleaned and we&apos;ll get back to you with
            a quote.
          </p>
        </div>

        <div className="mt-12">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
