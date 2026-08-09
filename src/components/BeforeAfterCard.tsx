import Image from "next/image";

interface Props {
  before: string;
  after: string;
  label: string;
}

export default function BeforeAfterCard({ before, after, label }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-2 overflow-hidden rounded-2xl shadow-sm">
        <div className="relative aspect-4/3 overflow-hidden">
          <Image
            src={before}
            alt={`${label} before pressure cleaning`}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover"
          />
          <span className="absolute left-2 top-2 rounded-md bg-navy/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            Before
          </span>
        </div>
        <div className="relative aspect-4/3 overflow-hidden">
          <Image
            src={after}
            alt={`${label} after pressure cleaning`}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover"
          />
          <span className="absolute right-2 top-2 rounded-md bg-blue/90 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            After
          </span>
        </div>
      </div>
      <p className="text-center text-sm font-semibold text-navy">{label}</p>
    </div>
  );
}
