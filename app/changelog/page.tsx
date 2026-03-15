import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Changelog",
  description: "Track every release, improvement, and fix to the Jarble platform.",
};

interface ChangelogEntry {
  readonly version: string;
  readonly date: string;
  readonly changes: readonly {
    readonly type: "feat" | "fix" | "perf" | "docs";
    readonly description: string;
  }[];
}

const changelog: readonly ChangelogEntry[] = [
  {
    version: "0.3.0",
    date: "March 15, 2026",
    changes: [
      { type: "feat", description: "Launched wiki.jarble.ai with docs, tutorials, roadmap, and changelog." },
      { type: "feat", description: "Component marketplace — browse, install, and publish custom UI components." },
      { type: "feat", description: "Admin dashboard with cluster metrics, audit logs, and user management." },
      { type: "perf", description: "Optimized canvas rendering with lazy-loaded heavy components." },
    ],
  },
  {
    version: "0.2.0",
    date: "February 1, 2026",
    changes: [
      { type: "feat", description: "Chat session history — browse past conversations grouped by date." },
      { type: "feat", description: "Unified chart component replacing 22 individual Ant Design charts." },
      { type: "feat", description: "AutoFix prop repair with 20 rules and 30+ component name aliases." },
      { type: "fix", description: "IME composition handling in dialogs for CJK language input." },
    ],
  },
  {
    version: "0.1.0",
    date: "December 15, 2025",
    changes: [
      { type: "feat", description: "Initial platform launch with WhatsApp, Telegram, Discord, and Slack support." },
      { type: "feat", description: "37 canvas UI components for rich bot conversations." },
      { type: "feat", description: "Guided onboarding wizard for zero-code bot deployment." },
      { type: "feat", description: "Secure sandbox for custom HTML/CSS/JS components with Three.js and D3." },
    ],
  },
];

const typeConfig = {
  feat: { label: "Feature", variant: "default" as const },
  fix: { label: "Fix", variant: "secondary" as const },
  perf: { label: "Performance", variant: "outline" as const },
  docs: { label: "Docs", variant: "outline" as const },
} as const;

export default function ChangelogPage() {
  return (
    <div className="container py-12 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight mb-2 font-serif">Changelog</h1>
      <p className="text-lg text-muted-foreground mb-8">
        All notable changes to the Jarble platform.
      </p>

      <div className="space-y-8">
        {changelog.map((entry, index) => (
          <div key={entry.version}>
            <div className="flex items-baseline gap-3 mb-4">
              <h2 className="text-xl font-bold font-serif">v{entry.version}</h2>
              <span className="text-sm text-muted-foreground">{entry.date}</span>
            </div>

            <ul className="space-y-3">
              {entry.changes.map((change, i) => {
                const config = typeConfig[change.type];
                return (
                  <li key={i} className="flex items-start gap-3">
                    <Badge variant={config.variant} className="mt-0.5 shrink-0">
                      {config.label}
                    </Badge>
                    <span className="text-sm">{change.description}</span>
                  </li>
                );
              })}
            </ul>

            {index < changelog.length - 1 && <Separator className="mt-8" />}
          </div>
        ))}
      </div>
    </div>
  );
}
