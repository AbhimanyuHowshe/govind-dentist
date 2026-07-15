import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-brand-navy">
        Page Not Found
      </h1>
      <p className="text-muted-foreground">
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      <Button render={<Link href="/" />}>Back to Home</Button>
    </div>
  );
}
