import { getAllPosts } from "@/lib/share/api";

export function generatePageStaticParams(mdx_folder: string) {
  const posts = getAllPosts(mdx_folder);
  return posts.map((post) => ({ slug: post.slug }));
}