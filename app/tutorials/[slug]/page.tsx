import { notFound } from "next/navigation";
import { getDocBySlug, getSlugsForSection, extractHeadings } from "@/lib/mdx";
import { MDXContent } from "@/components/docs/MDXContent";
import { TableOfContents } from "@/components/docs/TableOfContents";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getSlugsForSection("tutorials");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const doc = getDocBySlug("tutorials", slug);
  if (!doc) return {};

  return {
    title: doc.meta.title,
    description: doc.meta.description,
  };
}

export default async function TutorialPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getDocBySlug("tutorials", slug);

  if (!doc) notFound();

  const headings = extractHeadings(doc.content);

  return (
    <div className="flex gap-8">
      <article className="min-w-0 flex-1 py-6">
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/tutorials">Tutorials</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{doc.meta.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-3xl font-bold tracking-tight mb-2 font-serif">{doc.meta.title}</h1>
        {doc.meta.description && (
          <p className="text-lg text-muted-foreground mb-8">{doc.meta.description}</p>
        )}

        <MDXContent source={doc.content} />
      </article>

      <TableOfContents items={headings} />
    </div>
  );
}
