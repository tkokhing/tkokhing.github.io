import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from "rehype-pretty-code";
// added Options here to processes `*.mdx` files as `pages`

import PostBodyClient from '@/app/_components/post_gen/post-body-client';

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
        components={components}
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
