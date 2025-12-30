import { MDXRemote } from 'next-mdx-remote/rsc';
import PostBodyClient from '@/app/_components/post_gen/post-body-client';

type Props = {
  content: string;
  components?: any;
};

export function PostBody({ content, components = {} }: Props) {
  return (
    <PostBodyClient>
      <MDXRemote
        source={content || ''}
        components={components}
      />
    </PostBodyClient>
  );
}
