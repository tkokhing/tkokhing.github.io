import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

type Props = {
  content: string;
  components?: any;
};

export function PostBody({ content, components = {} }: Props) {
	
  const options = {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
      ],
    },
  };

  return (
  <div className="prose prose-lg md:prose-lg lg:prose-lg mx-auto prose-headings:text-indigo-900 dark:prose-headings:text-slate-100">
    <div className="prose-a:text-blue-600 dark:prose-a:text-blue-300 dark:text-slate-300 prose dark:prose-invert">
      <MDXRemote source={content || ""} options={options} components={components} />
    </div>
  </div>
  );
}
