import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Roadmap",
  description: "See what's coming next for Jarble.",
};

interface RoadmapItem {
  readonly title: string;
  readonly description: string;
  readonly status: "completed" | "in-progress" | "planned";
  readonly quarter: string;
}

const roadmapItems: readonly RoadmapItem[] = [
  {
    title: "Core Platform Launch",
    description: "Deploy AI bots to WhatsApp, Telegram, Discord, and Slack with zero code.",
    status: "completed",
    quarter: "Q4 2025",
  },
  {
    title: "Component Marketplace",
    description: "Discover, install, and publish custom UI components for bot conversations.",
    status: "completed",
    quarter: "Q1 2026",
  },
  {
    title: "Wiki & Documentation",
    description: "Comprehensive docs, tutorials, and guides at wiki.jarble.ai.",
    status: "in-progress",
    quarter: "Q1 2026",
  },
  {
    title: "Team Collaboration",
    description: "Invite team members, shared workspaces, role-based permissions.",
    status: "planned",
    quarter: "Q2 2026",
  },
  {
    title: "Analytics Dashboard",
    description: "Conversation analytics, user engagement metrics, and bot performance insights.",
    status: "planned",
    quarter: "Q2 2026",
  },
  {
    title: "Custom Runtime Support",
    description: "Bring your own runtime — deploy bots with any framework or language.",
    status: "planned",
    quarter: "Q3 2026",
  },
];

const statusConfig = {
  completed: { label: "Completed", variant: "default" as const },
  "in-progress": { label: "In Progress", variant: "secondary" as const },
  planned: { label: "Planned", variant: "outline" as const },
} as const;

export default function RoadmapPage() {
  return (
    <div className="container py-12 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight mb-2 font-serif">Roadmap</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Our plans for the future. Status updates as things ship.
      </p>

      <div className="space-y-4">
        {roadmapItems.map((item) => {
          const status = statusConfig[item.status];
          return (
            <Card key={item.title} className="border border-border">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant={status.variant}>{status.label}</Badge>
                  <span className="text-xs text-muted-foreground">{item.quarter}</span>
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
