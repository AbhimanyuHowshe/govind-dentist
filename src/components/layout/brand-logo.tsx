import Image from "next/image";
import { cn } from "@/lib/utils";

// The client's original logo, shown directly on the white header. The PNG's
// own background is white; mix-blend-multiply hides any off-white compression
// fringe so only the logo artwork is visible.
export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Dr. Singh Dental Clinic — Care for your smile"
      width={767}
      height={365}
      priority
      className={cn(
        "w-auto mix-blend-multiply transition-all duration-300",
        compact ? "h-10 sm:h-12" : "h-11 sm:h-14"
      )}
    />
  );
}
