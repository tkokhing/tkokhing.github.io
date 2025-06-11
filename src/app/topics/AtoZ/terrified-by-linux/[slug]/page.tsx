// [tkokhing/linux_post/_linux_post/_linux/] MDX_FOLDER
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/app/_components/preference/container";
import { PostHeader } from "@/app/_components/post_gen/post-header";
import { PostBody } from "@/app/_components/post_gen/post-body";
import { getPostBySlug } from "@/lib/api";
import { generatePageMetadata } from "@/lib/generatePageMetadata";
import { generatePageStaticParams } from "@/lib/generatePageStaticParams";

import Alert from "@/app/_components/blog_frame/alert";
import Note from "@/app/_components/blog_frame/note";
import Tip from "@/app/_components/blog_frame/tip";
import CodeLine from "@/app/_components/blog_frame/codeline";

const MDX_FOLDER = "_linux_post/_linux/"; 

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug, MDX_FOLDER);
  const LinuxBlogComponents = {
    Tip,
    Note,
    Alert,
    CodeLine,
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

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  return generatePageMetadata(params.slug, MDX_FOLDER);
}

export async function generateStaticParams() {
  return generatePageStaticParams(MDX_FOLDER);
}