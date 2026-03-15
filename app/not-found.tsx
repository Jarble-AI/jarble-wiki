import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center py-24 text-center">
      <h1 className="text-6xl font-bold font-serif mb-4">404</h1>
      <p className="text-lg text-muted-foreground mb-8">
        This page doesn't exist yet.
      </p>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}
