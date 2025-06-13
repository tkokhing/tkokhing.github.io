import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/share/api";

export async function generatePageMetadata(slug: string, mdx_folder: string): Promise<Metadata> {
  const post = getPostBySlug(slug, mdx_folder);
  if (!post) return notFound();

  const title = `${post.title}`;
  return {
    title,
    description: post.excerpt,
    openGraph: {
      title,
      description: post.excerpt,
      images: [post.ogImage.url ?? "/img/logo/t.png"],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
      images: [post.ogImage.url ?? "/img/logo/t.png"],
    },
  };
}