import { cn } from "@/lib/utils";
import { Info, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

type CalloutType = "info" | "warning" | "success" | "error";

interface CalloutProps {
  readonly type?: CalloutType;
  readonly title?: string;
  readonly children: React.ReactNode;
}

const calloutConfig: Record<CalloutType, { icon: typeof Info; className: string }> = {
  info: {
    icon: Info,
    className: "border-chart-1/30 bg-chart-1/5 [&_svg]:text-chart-1",
  },
  warning: {
    icon: AlertTriangle,
    className: "border-chart-3/30 bg-chart-3/5 [&_svg]:text-chart-3",
  },
  success: {
    icon: CheckCircle,
    className: "border-chart-2/30 bg-chart-2/5 [&_svg]:text-chart-2",
  },
  error: {
    icon: XCircle,
    className: "border-chart-5/30 bg-chart-5/5 [&_svg]:text-chart-5",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <div className={cn("my-6 flex gap-3 rounded-lg border p-4", config.className)}>
      <Icon className="size-5 shrink-0 mt-0.5" />
      <div className="min-w-0">
        {title && <p className="font-semibold text-sm mb-1">{title}</p>}
        <div className="text-sm [&>p]:mb-0">{children}</div>
      </div>
    </div>
  );
}
