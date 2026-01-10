// [tkokhing/heptagoning/_heptagoning/_kill-chain/_active_dir] MDX_FOLDER
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/app/_components/preference/container";
import { PostHeader } from "@/app/_components/post_gen/post-header";
import { PostBody } from "@/app/_components/post_gen/post-body";
import { getPostBySlug } from "@/lib/share/api";
import { generatePageMetadata } from "@/lib/share/generatePageMetadata";
import { generatePageStaticParams } from "@/lib/share/generatePageStaticParams";
import { AD_Access, AD_Enum_net_command, AD_Enum_powerview, AD_Exploit_attack, AD_Auth_decision_flow, AD_Kerberos, AD_As_rep_roast, AD_Ldap, AD_Call_back_attacker, AD_Lateral_move, AD_Bypass_uac, AD_Pass_the_hash, AD_Overpass_the_hash, AD_Netexec } from "@/lib/_data_exporter/data_kiil-chain/kill-chain_exporter";
import Alert from "@/app/_components/blog_frame/alert";
import Note from "@/app/_components/blog_frame/note";
import Tip from "@/app/_components/blog_frame/tip";
import { ToggleFrame } from "@/app/_components/preference/toggle-frame";

const MDX_FOLDER = "_heptagoning/_kill-chain/_active_dir"; 

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post(props: Params) {
  const params = await props.params;
  const ImportComponents = {
    Tip,
    Note,
    Alert,
    ToggleFrame,
    AD_Access,
    AD_Enum_net_command,
    AD_Enum_powerview,
    AD_Exploit_attack,
    AD_Auth_decision_flow,
    AD_Kerberos,
    AD_As_rep_roast,
    AD_Ldap,
    AD_Call_back_attacker,
    AD_Lateral_move,
    AD_Bypass_uac,
    AD_Pass_the_hash,
    AD_Overpass_the_hash,
    AD_Netexec,
  };
  const post = getPostBySlug(params.slug, MDX_FOLDER);
  if (!post || post.subPath != 'heptagoning/kill-chain/active_dir') return notFound();
 
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