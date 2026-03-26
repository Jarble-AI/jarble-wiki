import type { SidebarSection } from "@/components/docs/DocsSidebar";

export const docsSidebarSections: readonly SidebarSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Getting Started", href: "/docs/getting-started" },
    ],
  },
  {
    title: "Platform",
    items: [
      { title: "Platform Guide", href: "/docs/platform" },
      { title: "Components", href: "/docs/components" },
      { title: "Marketplace", href: "/docs/marketplace" },
    ],
  },
  {
    title: "Reference",
    items: [
      { title: "API Reference", href: "/docs/api-reference" },
      { title: "Security", href: "/docs/security" },
      { title: "Architecture", href: "/docs/architecture" },
    ],
  },
];

export const tutorialsSidebarSections: readonly SidebarSection[] = [
  {
    title: "Beginner",
    items: [
      { title: "Build Your First Bot", href: "/tutorials/build-your-first-bot" },
      { title: "Deploy to Production", href: "/tutorials/deploy-to-production" },
    ],
  },
  {
    title: "Intermediate",
    items: [
      { title: "Custom Components", href: "/tutorials/custom-components" },
      { title: "Multi-Channel Setup", href: "/tutorials/multi-channel-setup" },
    ],
  },
];
