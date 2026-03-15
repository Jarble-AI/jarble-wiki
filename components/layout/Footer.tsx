import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold mb-3">Documentation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/docs" className="hover:text-foreground transition-colors">Getting Started</Link></li>
              <li><Link href="/docs/components" className="hover:text-foreground transition-colors">Components</Link></li>
              <li><Link href="/docs/api-reference" className="hover:text-foreground transition-colors">API Reference</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Tutorials</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/tutorials" className="hover:text-foreground transition-colors">All Tutorials</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Project</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/roadmap" className="hover:text-foreground transition-colors">Roadmap</Link></li>
              <li><Link href="/changelog" className="hover:text-foreground transition-colors">Changelog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://jarble.ai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Jarble Platform</a></li>
              <li><a href="https://github.com/Jarble-AI" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <Separator className="my-6" />
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Jarble. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
