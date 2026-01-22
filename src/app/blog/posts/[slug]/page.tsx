// [tkokhing/blog_post/_blog_post/_blogs] MDX_FOLDER
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/share/api";
import { generatePageMetadata } from "@/lib/share/generatePageMetadata";
import { generatePageStaticParams } from "@/lib/share/generatePageStaticParams";
import Container from "@/app/_components/preference/container";
import { PostHeader } from "@/app/_components/post_gen/post-header";
import { PostBody } from "@/app/_components/post_gen/post-body";
import { FrontierData } from "@/lib/_data_exporter/data_securingdigitalfrontiers/frontier_data-exporter";
import { FrontierLeadinData } from "@/lib/_data_exporter/data_securingdigitalfrontiers/frontier_data-exporter";
import { ToggleFrame } from "@/app/_components/preference/toggle-frame";
import { ToggleAllFrame } from "@/app/_components/preference/toggle-frame-display";
import { PostListConcise } from "@/app/_components/post_gen/post-list-concise";

const MDX_FOLDER = "_blog_post/_blogs"; 

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post(props: Params) {
  const params = await props.params;
  const ImportComponents = {
    FrontierData,
    FrontierLeadinData,
    ToggleFrame,
    PostListConcise,
  };
  const post = getPostBySlug(params.slug, MDX_FOLDER);
  if (!post || post.subPath != 'blog/posts') return notFound();
 
  return (
    <main>
      <Container>
        <ToggleAllFrame>
          <article className="mb-32">
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author} 
              subPath={post.subPath}
              postStatus={post.postStatus}
              />
            <PostBody content={post.content} components={ImportComponents}/>
          </article>
        </ToggleAllFrame>
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