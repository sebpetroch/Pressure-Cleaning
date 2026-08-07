import Link from "next/link";
import { Camera, FileText, Sparkles } from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Request a Quote",
    description:
      "Tell us what you need cleaned and upload a few photos if possible.",
    icon: Camera,
  },
  {
    step: "2",
    title: "Receive Your Quote",
    description: "We'll assess the job and provide you with a clear quote.",
    icon: FileText,
  },
  {
    step: "3",
    title: "We Get It Clean",
    description: "Choose a suitable time and we'll take care of the cleaning.",
    icon: Sparkles,
  },
];

export default function HowItWorks() {
  return (
    <section id="about" className="bg-grey-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Getting Your Property Cleaned Is Easy
          </h2>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {steps.map(({ step, title, description, icon: Icon }) => (
            <div key={step} className="relative flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-xl font-bold text-white">
                <Icon className="h-7 w-7 text-blue" />
              </div>
              <span className="mt-4 text-xs font-bold uppercase tracking-wider text-blue">
                Step {step}
              </span>
              <h3 className="mt-1.5 text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-navy/60">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/#quote"
            className="inline-flex items-center justify-center rounded-lg bg-blue px-7 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue/90"
          >
            Request Your Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
