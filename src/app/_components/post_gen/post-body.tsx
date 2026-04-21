import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// added Options -> render`*.mdx` files as `pages`
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from "rehype-pretty-code";
import PostBodyClient from '@/app/_components/post_gen/post-body-client';
// inject REACT components, not MDX, common to most functions
import { frameComponents } from '@/lib/_data_exporter/pipeline/frame_components';

type Props = {
  content: string;
  components?: any;
};

const prettyOptions = {
  theme: "github-dark",
  keepBackground: true,
};

export function PostBody({ content, components = {} }: Props) {
  return (
    <PostBodyClient>
      <MDXRemote
        source={content || ''}
        components={{...components, ...frameComponents}}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              [rehypePrettyCode, prettyOptions],
              rehypeSlug,
              rehypeAutolinkHeadings,
            ],
          },
        }}
      />
    </PostBodyClient>
  );
}
