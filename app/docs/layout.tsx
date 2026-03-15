import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { docsSidebarSections } from "@/lib/docs-config";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex gap-8">
      <DocsSidebar sections={docsSidebarSections} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
