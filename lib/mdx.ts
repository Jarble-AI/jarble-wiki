import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface DocMeta {
  readonly title: string;
  readonly description: string;
  readonly slug: string;
  readonly order?: number;
}

export interface DocPage {
  readonly meta: DocMeta;
  readonly content: string;
}

/**
 * Read an MDX file from the content directory.
 * Returns frontmatter metadata and raw MDX content.
 */
export function getDocBySlug(section: string, slug: string): DocPage | null {
  const filePath = path.join(CONTENT_DIR, section, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      title: data.title ?? slug,
      description: data.description ?? "",
      slug,
      order: data.order,
    },
    content,
  };
}

/**
 * List all MDX files in a content section.
 * Returns metadata sorted by the `order` frontmatter field.
 */
export function getDocsForSection(section: string): readonly DocMeta[] {
  const dirPath = path.join(CONTENT_DIR, section);

  if (!fs.existsSync(dirPath)) return [];

  const files = fs.readdirSync(dirPath).filter((f) => f.endsWith(".mdx"));

  const docs = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(dirPath, file), "utf-8");
    const { data } = matter(raw);

    return {
      title: data.title ?? slug,
      description: data.description ?? "",
      slug,
      order: data.order ?? 999,
    };
  });

  return docs.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

/**
 * Get all slugs for a content section (for generateStaticParams).
 */
export function getSlugsForSection(section: string): readonly string[] {
  const dirPath = path.join(CONTENT_DIR, section);

  if (!fs.existsSync(dirPath)) return [];

  return fs
    .readdirSync(dirPath)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/**
 * Extract headings from MDX content for table of contents.
 */
export function extractHeadings(content: string): readonly { id: string; text: string; level: number }[] {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm;
  const headings: { id: string; text: string; level: number }[] = [];

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    headings.push({ id, text, level });
  }

  return headings;
}
