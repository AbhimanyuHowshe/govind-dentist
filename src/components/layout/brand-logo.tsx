import Image from "next/image";
import { cn } from "@/lib/utils";

// The client's original logo, set on a white badge framed by an animated
// blue → violet → plum gradient ring (the logo's own colors) with a soft glow,
// so its white background reads as an intentional badge rather than a pasted box.
export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="group/logo relative inline-flex">
      {/* soft glow behind the badge */}
      <span
        aria-hidden="true"
        className="logo-ring absolute -inset-1 rounded-2xl opacity-35 blur-md transition-opacity duration-300 group-hover/logo:opacity-70"
      />
      {/* gradient ring */}
      <span className="logo-ring relative rounded-2xl p-[2px] shadow-md shadow-[#7B2C82]/15">
        <span className="relative flex overflow-hidden rounded-[14px] bg-white px-2.5 py-1">
          <Image
            src="/images/logo.png"
            alt="Dr. Singh Dental Clinic — Care for your smile"
            width={767}
            height={365}
            priority
            className={cn(
              "w-auto transition-all duration-300",
              compact ? "h-9 sm:h-10" : "h-10 sm:h-12"
            )}
          />
          {/* glossy shine that sweeps across on hover */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent transition-[left] duration-700 ease-out group-hover/logo:left-[120%] motion-reduce:hidden"
          />
        </span>
      </span>
    </span>
  );
}
