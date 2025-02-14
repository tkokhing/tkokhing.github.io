// pull from private repo: [tkokhing/blog_post]
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import Alert from "@/app/_components/main_frame/alert";
import Container from "@/app/_components/container";
import SubpageHeader from "@/app/_components/main_frame/subpage-header";
import { PostHeader } from "@/app/_components/post-header";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PostBody } from "@/app/_components/post-body";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug, "_posts");
  if (!post) {
    return notFound();
  }
  return (
    <main>
      <Container>
        <SubpageHeader subPath={post.subPath} title={post.title}/>
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author} 
            subPath={post.subPath}
            postStatus={post.postStatus}
          />
          <PostBody content={post.content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug, "_posts");

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts("_posts");

  return posts.map((post) => ({
    slug: post.slug,
  }));
}