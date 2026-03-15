import { cn } from "@/lib/utils";

interface Step {
  readonly title: string;
  readonly content: React.ReactNode;
}

interface StepGuideProps {
  readonly steps: readonly Step[];
}

export function StepGuide({ steps }: StepGuideProps) {
  return (
    <div className="my-6 space-y-0">
      {steps.map((step, index) => (
        <div key={index} className="relative flex gap-4 pb-8 last:pb-0">
          {/* Vertical line */}
          <div className="flex flex-col items-center">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-semibold">
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className="w-px flex-1 bg-border mt-2" />
            )}
          </div>
          {/* Content */}
          <div className={cn("pt-1 pb-2 min-w-0", index < steps.length - 1 && "pb-0")}>
            <h4 className="font-semibold text-sm mb-2">{step.title}</h4>
            <div className="text-sm text-muted-foreground [&>p]:mb-2">{step.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
