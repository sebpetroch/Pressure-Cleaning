"use client";

import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import {
  CheckCircle2,
  Droplets,
  ImagePlus,
  Loader2,
  Sun,
  Trees,
  Warehouse,
  Waves,
  X,
} from "lucide-react";

const serviceOptions = [
  { key: "gutter", label: "Gutter Cleaning", icon: Trees, startingPrice: 149 },
  { key: "driveway", label: "Pressure Washing – Driveway", icon: Droplets, startingPrice: 199 },
  { key: "walkway", label: "Pressure Washing – Walkway", icon: Waves, startingPrice: 199 },
  { key: "roof", label: "Roof Washing", icon: Warehouse, startingPrice: 349 },
  { key: "solar-panels", label: "Solar Panel Cleaning", icon: Sun, startingPrice: 249 },
  { key: "other", label: "Other", icon: ImagePlus, startingPrice: undefined },
] as const;

const areaSizeOptions = ["Small", "Medium", "Large", "Not Sure"] as const;

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  suburb?: string;
  services?: string;
  otherDetails?: string;
}

export default function QuoteForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [areaSize, setAreaSize] = useState<string>("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function toggleService(key: string) {
    setSelectedServices((prev) =>
      prev.includes(key) ? prev.filter((s) => s !== key) : [...prev, key]
    );
  }

  function handleFiles(files: FileList | null) {
    if (!files) return;
    setPhotos((prev) => [...prev, ...Array.from(files)]);
  }

  function removePhoto(index: number) {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const newErrors: FormErrors = {};
    const name = formData.get("name")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const suburb = formData.get("suburb")?.toString().trim();
    const otherDetails = formData.get("otherDetails")?.toString().trim();

    if (!name) newErrors.name = "Please enter your full name.";
    if (!phone) newErrors.phone = "Please enter a phone number.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email address.";
    if (!suburb) newErrors.suburb = "Please enter your suburb.";
    if (selectedServices.length === 0)
      newErrors.services = "Please select at least one service.";
    if (selectedServices.includes("other") && !otherDetails)
      newErrors.otherDetails = "Please describe the job.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("submitting");

    selectedServices.forEach((s) => formData.append("services", s));
    formData.append("areaSize", areaSize);
    photos.forEach((file) => formData.append("photos", file));

    try {
      const res = await fetch("/api/quote", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setSelectedServices([]);
      setAreaSize("");
      setPhotos([]);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center rounded-2xl bg-green-light px-6 py-16 text-center">
        <CheckCircle2 className="h-14 w-14 text-green" />
        <h3 className="mt-5 text-2xl font-bold text-navy">Thank you!</h3>
        <p className="mt-2 max-w-sm text-navy/70">
          We&apos;ve received your quote request and will be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-lg bg-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue/90"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-3xl">
      <div>
        <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="block text-sm font-semibold text-navy">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                aria-invalid={!!errors.name}
                className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 text-sm text-navy outline-none focus:border-blue focus:ring-2 focus:ring-blue/20"
              />
              {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="phone" className="block text-sm font-semibold text-navy">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                aria-invalid={!!errors.phone}
                className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 text-sm text-navy outline-none focus:border-blue focus:ring-2 focus:ring-blue/20"
              />
              {errors.phone && <p className="mt-1.5 text-xs text-red-600">{errors.phone}</p>}
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="email" className="block text-sm font-semibold text-navy">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 text-sm text-navy outline-none focus:border-blue focus:ring-2 focus:ring-blue/20"
              />
              {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="suburb" className="block text-sm font-semibold text-navy">
                Suburb
              </label>
              <input
                id="suburb"
                name="suburb"
                type="text"
                aria-invalid={!!errors.suburb}
                className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 text-sm text-navy outline-none focus:border-blue focus:ring-2 focus:ring-blue/20"
              />
              {errors.suburb && <p className="mt-1.5 text-xs text-red-600">{errors.suburb}</p>}
            </div>

          </div>

          <fieldset className="mt-7">
            <legend className="block text-sm font-semibold text-navy">
              What service do you require?
            </legend>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {serviceOptions.map(({ key, label, icon: Icon, startingPrice }) => {
                const checked = selectedServices.includes(key);
                return (
                  <label
                    key={key}
                    className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3.5 transition-colors ${
                      checked
                        ? "border-blue bg-blue-light"
                        : "border-black/10 hover:border-blue/40"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={checked}
                      onChange={() => toggleService(key)}
                    />
                    <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${checked ? "text-blue" : "text-navy/40"}`} />
                    <span className="flex flex-col">
                      <span className="text-sm font-medium text-navy">{label}</span>
                      {startingPrice && (
                        <span className="mt-0.5 text-xs text-navy/50">
                          Starting from ${startingPrice}
                        </span>
                      )}
                    </span>
                  </label>
                );
              })}
            </div>
            {errors.services && <p className="mt-1.5 text-xs text-red-600">{errors.services}</p>}

            {selectedServices.includes("other") && (
              <div className="mt-4">
                <label htmlFor="otherDetails" className="block text-sm font-semibold text-navy">
                  Please describe the job
                </label>
                <input
                  id="otherDetails"
                  name="otherDetails"
                  type="text"
                  aria-invalid={!!errors.otherDetails}
                  className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 text-sm text-navy outline-none focus:border-blue focus:ring-2 focus:ring-blue/20"
                />
                {errors.otherDetails && (
                  <p className="mt-1.5 text-xs text-red-600">{errors.otherDetails}</p>
                )}
              </div>
            )}
          </fieldset>

          <fieldset className="mt-7">
            <legend className="block text-sm font-semibold text-navy">
              Approximate area / size
            </legend>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {areaSizeOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setAreaSize(option)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    areaSize === option
                      ? "border-blue bg-blue text-white"
                      : "border-black/10 text-navy/70 hover:border-blue/40"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-7">
            <label htmlFor="message" className="block text-sm font-semibold text-navy">
              Tell us about the job
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us what you'd like cleaned, approximate size, current condition, or anything else we should know."
              className="mt-2 w-full rounded-lg border border-black/10 px-4 py-3 text-sm text-navy outline-none focus:border-blue focus:ring-2 focus:ring-blue/20"
            />
          </div>

          <div className="mt-7">
            <label className="block text-sm font-semibold text-navy">
              Upload Photos <span className="font-normal text-navy/40">(optional)</span>
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="mt-2 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-black/15 px-4 py-8 text-center transition-colors hover:border-blue/50"
            >
              <ImagePlus className="h-7 w-7 text-navy/30" />
              <p className="text-sm text-navy/60">
                Click to upload photos of the area you&apos;d like cleaned
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => handleFiles(e.target.files)}
              />
            </div>

            {photos.length > 0 && (
              <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
                {photos.map((file, index) => (
                  <li key={`${file.name}-${index}`} className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      aria-label={`Remove ${file.name}`}
                      className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy/80 text-white"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {status === "error" && (
            <p className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
              Something went wrong sending your request. Please try again or call us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-blue px-6 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue/90 disabled:opacity-70"
          >
            {status === "submitting" && <Loader2 className="h-5 w-5 animate-spin" />}
            Get My Free Quote
          </button>
        </div>
      </div>
    </form>
  );
}
