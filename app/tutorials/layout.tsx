import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { tutorialsSidebarSections } from "@/lib/docs-config";

export default function TutorialsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex gap-8">
      <DocsSidebar sections={tutorialsSidebarSections} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
