import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/brand";

type BrandLogoProps = {
  size?: "sm" | "md";
  showName?: boolean;
  className?: string;
  priority?: boolean;
};

const sizes = {
  sm: 32,
  md: 36,
} as const;

export default function BrandLogo({
  size = "md",
  showName = true,
  className = "",
  priority = false,
}: BrandLogoProps) {
  const px = sizes[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 ${className}`}
      aria-label={`${BRAND.name} home`}
    >
      <Image
        src={BRAND.logo.src}
        alt={BRAND.logo.alt}
        width={px}
        height={px}
        className="rounded-xl"
        priority={priority}
      />
      {showName && (
        <span className="text-xl font-bold tracking-tight text-slate-950">
          {BRAND.name}
        </span>
      )}
    </Link>
  );
}
