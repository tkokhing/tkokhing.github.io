import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
  <div className="prose prose-lg md:prose-lg lg:prose-lg mx-auto prose-headings:text-indigo-900 dark:prose-headings:text-slate-100">
    <div className="prose-a:text-blue-600 dark:prose-a:text-blue-300 dark:text-slate-300 prose dark:prose-invert">
      <MDXRemote source={content || ""}  />
    </div>
  </div>
  );
}
