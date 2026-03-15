import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getDocsForSection } from "@/lib/mdx";

export const metadata = {
  title: "Tutorials",
  description: "Step-by-step guides for building and deploying bots with Jarble.",
};

export default function TutorialsPage() {
  const tutorials = getDocsForSection("tutorials");

  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-2 font-serif">Tutorials</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Learn by building. Follow these step-by-step guides.
      </p>

      <div className="grid gap-4">
        {tutorials.map((tutorial) => (
          <Link key={tutorial.slug} href={`/tutorials/${tutorial.slug}`} className="group">
            <Card className="border border-border transition-all hover:border-primary/20 hover:shadow-md">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary">Tutorial</Badge>
                </div>
                <CardTitle className="text-lg group-hover:underline underline-offset-4">
                  {tutorial.title}
                </CardTitle>
                <CardDescription>{tutorial.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
