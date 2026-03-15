import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Map, FileText } from "lucide-react";

const sections = [
  {
    title: "Documentation",
    description: "Learn how to use every feature of the Jarble platform.",
    icon: BookOpen,
    href: "/docs",
    color: "text-chart-1",
  },
  {
    title: "Tutorials",
    description: "Step-by-step guides to build and deploy your first bot.",
    icon: GraduationCap,
    href: "/tutorials",
    color: "text-chart-2",
  },
  {
    title: "Roadmap",
    description: "See what we're building next and what's in progress.",
    icon: Map,
    href: "/roadmap",
    color: "text-chart-3",
  },
  {
    title: "Changelog",
    description: "Track every release, improvement, and fix.",
    icon: FileText,
    href: "/changelog",
    color: "text-chart-4",
  },
];

export default function HomePage() {
  return (
    <div className="container py-16 md:py-24">
      {/* Hero */}
      <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-serif">
          Jarble Wiki
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Everything you need to deploy AI bots across WhatsApp, Discord, Slack, Telegram, and more — all without writing code.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link href="/docs/introduction">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/tutorials/build-your-first-bot">
            <Button variant="outline" size="lg">First Tutorial</Button>
          </Link>
        </div>
      </div>

      {/* Section Cards */}
      <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link key={section.href} href={section.href} className="group">
              <Card className="h-full border border-border transition-all hover:border-primary/20 hover:shadow-md">
                <CardHeader>
                  <Icon className={`size-8 mb-2 ${section.color}`} />
                  <CardTitle className="text-lg group-hover:underline underline-offset-4">
                    {section.title}
                  </CardTitle>
                  <CardDescription>{section.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
