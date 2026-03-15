import type { SidebarSection } from "@/components/docs/DocsSidebar";

export const docsSidebarSections: readonly SidebarSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Quick Start", href: "/docs/quick-start" },
      { title: "Key Concepts", href: "/docs/key-concepts" },
    ],
  },
  {
    title: "Platform",
    items: [
      { title: "Dashboard", href: "/docs/dashboard" },
      { title: "Deployments", href: "/docs/deployments" },
      { title: "Runtimes", href: "/docs/runtimes" },
      { title: "LLM Providers", href: "/docs/llm-providers" },
    ],
  },
  {
    title: "Channels",
    items: [
      { title: "Web Chat", href: "/docs/web-chat" },
      { title: "WhatsApp", href: "/docs/whatsapp" },
      { title: "Telegram", href: "/docs/telegram" },
      { title: "Discord", href: "/docs/discord" },
      { title: "Slack", href: "/docs/slack" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Overview", href: "/docs/components" },
      { title: "Canvas System", href: "/docs/canvas-system" },
      { title: "Marketplace", href: "/docs/marketplace" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "Authentication", href: "/docs/api-authentication" },
      { title: "Endpoints", href: "/docs/api-endpoints" },
      { title: "MCP Tools", href: "/docs/mcp-tools" },
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
