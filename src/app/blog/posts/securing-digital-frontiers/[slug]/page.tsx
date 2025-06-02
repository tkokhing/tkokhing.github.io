// pull from private repo: [tkokhing/frontier_post/_frontier] MDX_FOLDER
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/app/_components/preference/container";
import { CyberDomainData } from "@/app/_components/preference/data-exporter";
import { BlueprintBattlefieldData } from "@/app/_components/preference/data-exporter";
import { PostHeader } from "@/app/_components/post_gen/post-header";
import { PostBody } from "@/app/_components/post_gen/post-body";
import { getPostBySlug } from "@/lib/api";
import { generatePageMetadata } from "@/lib/generatePageMetadata";
import { generatePageStaticParams } from "@/lib/generatePageStaticParams";

const MDX_FOLDER = "_frontier"; 

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug, MDX_FOLDER);
  const ImportComponents = {
    CyberDomainData,
    BlueprintBattlefieldData,
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
          <PostBody content={post.content} components={ImportComponents}/>
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