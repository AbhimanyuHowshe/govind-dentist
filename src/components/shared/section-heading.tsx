import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-blue/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-brand-blue uppercase">
          <span className="size-1.5 rounded-full bg-brand-blue" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-muted-foreground",
            align === "center" ? "max-w-2xl" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
