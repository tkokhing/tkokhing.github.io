// pull from private repo: [tkokhing/linux_post/_linux] MDX_FOLDER
import { notFound } from "next/navigation";
import Container from "@/app/_components/container";
import { PostHeader } from "@/app/_components/post-header";
import { PostBody } from "@/app/_components/post-body";
import { getPostBySlug } from "@/lib/api";
import { generatePageMetadata } from "@/lib/generatePageMetadata";
import { generatePageStaticParams } from "@/lib/generatePageStaticParams";

import Alert from "@/app/_components/blog_frame/alert";
import Note from "@/app/_components/blog_frame/note";
import Tip from "@/app/_components/blog_frame/tip";

const MDX_FOLDER = "_linux"; 

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, MDX_FOLDER);
  const LinuxBlogComponents = {
    Tip,
    Note,
    Alert,
  };
  if (!post) return notFound();
 
  return (
    <main>
      <Container>
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author} 
            subPath={post.subPath}
            postStatus={post.postStatus}
          />
          <PostBody content={post.content} components={LinuxBlogComponents} />
        </article>
      </Container>
    </main>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return generatePageMetadata(params.slug, MDX_FOLDER);
}

export async function generateStaticParams() {
  return generatePageStaticParams(MDX_FOLDER);
}