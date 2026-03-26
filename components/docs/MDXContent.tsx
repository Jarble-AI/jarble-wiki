import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Callout } from "./Callout";
import { CodeBlock } from "./CodeBlock";
import { StepGuide } from "./StepGuide";

const mdxComponents = {
  Callout,
  CodeBlock,
  StepGuide,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = getHeadingId(props.children);
    return <h2 id={id} {...props} />;
  },
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = getHeadingId(props.children);
    return <h3 id={id} {...props} />;
  },
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = getHeadingId(props.children);
    return <h4 id={id} {...props} />;
  },
};

function getHeadingId(children: React.ReactNode): string {
  const text = typeof children === "string" ? children : "";
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

interface MDXContentProps {
  readonly source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <MDXRemote source={source} components={mdxComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
    </div>
  );
}
