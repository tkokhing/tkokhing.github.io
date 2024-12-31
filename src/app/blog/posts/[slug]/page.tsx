import { Metadata, ResolvedMetadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";

// export default async function Post({ params }: Params) {
export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug, "_posts");

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");
    
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
          />
          <PostBody content={content} />
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

// export  function generateMetadata({ params }: Params): Metadata {
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
