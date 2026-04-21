// [tkokhing/heptagoning/_heptagoning/_kill-chain/_active_dir] MDX_FOLDER
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/app/_components/preference/container";
import { PostHeader } from "@/app/_components/post_gen/post-header";
import { PostBody } from "@/app/_components/post_gen/post-body";
import { getPostBySlug } from "@/lib/share/api";
import { generatePageMetadata } from "@/lib/share/generatePageMetadata";
import { generatePageStaticParams } from "@/lib/share/generatePageStaticParams";
import { AD_Access, AD_Enum_net_command, AD_Enum_powerview, AD_Exploit_attack, AD_Call_back_attacker, AD_Lateral_move, AOA_Killchain_roast_or_abuse, AOA_Killchain_rapid_checklist } from "@/lib/_data_exporter/data_kiil-chain/kill-chain_exporter";
import { ToggleAllFrame } from "@/app/_components/preference/toggle-frame-display";

const MDX_FOLDER = "_heptagoning/_kill-chain/_active_dir"; 

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post(props: Params) {
  const params = await props.params;
  const ImportComponents = {
    AD_Access,
    AD_Enum_net_command,
    AD_Enum_powerview,
    AD_Exploit_attack,
    AD_Call_back_attacker,
    AD_Lateral_move,
    AOA_Killchain_roast_or_abuse,
    AOA_Killchain_rapid_checklist,
  };
  const post = getPostBySlug(params.slug, MDX_FOLDER);
  if (!post || post.subPath != 'heptagoning/kill-chain/active_dir') return notFound();
 
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
            <PostBody content={post.content} components={{...ImportComponents}}/>
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