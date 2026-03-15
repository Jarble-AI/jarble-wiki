"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface SidebarSection {
  readonly title: string;
  readonly items: readonly SidebarItem[];
}

export interface SidebarItem {
  readonly title: string;
  readonly href: string;
}

interface DocsSidebarProps {
  readonly sections: readonly SidebarSection[];
}

export function DocsSidebar({ sections }: DocsSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-14">
        <ScrollArea className="h-[calc(100vh-3.5rem)] py-6 pr-4">
          <nav className="space-y-6">
            {sections.map((section) => (
              <div key={section.title}>
                <h4 className="text-sm font-semibold mb-2 px-2">{section.title}</h4>
                <ul className="space-y-0.5">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block text-sm px-2 py-1.5 rounded-md transition-colors",
                          pathname === item.href
                            ? "bg-secondary text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </aside>
  );
}
