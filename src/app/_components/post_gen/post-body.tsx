import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import PostBodyClient from '@/app/_components/post_gen/post-body-client'; 

type Props = {
  content: string;
  components?: any;
};

export function PostBody({ content, components = {} }: Props) {
  const options = {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
      remarkPlugins: [remarkGfm],
    },
  };

  return (
    <PostBodyClient>
      <MDXRemote source={content || ''} options={options} components={components} />
    </PostBodyClient>
  );
}
