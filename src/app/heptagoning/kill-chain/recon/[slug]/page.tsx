// [tkokhing/heptagoning/_heptagoning/_kill-chain/_recon] MDX_FOLDER
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/app/_components/preference/container";
import { PostHeader } from "@/app/_components/post_gen/post-header";
import { PostBody } from "@/app/_components/post_gen/post-body";
import { getPostBySlug } from "@/lib/share/api";
import { generatePageMetadata } from "@/lib/share/generatePageMetadata";
import { generatePageStaticParams } from "@/lib/share/generatePageStaticParams";
import { RECON_Site, NMAP_Overview, NMAP_Vuln_Scan, NMAP_SMB_Enum, NMAP_TCP_vs_UDP, RUSTSCAN_Overview, GOBUSTER_Overview, GOBUSTER_Outsmart_301,GOBUSTER_Advanced, SQLI_Overview, SQLI_Ph_1, SQLI_Ph_2, SQLI_Ph_3, SQLI_Ph_4a_union_based, SQLI_Ph_4b_blind_auth_bypass, SQLI_Ph_4c_blind_boolean_based, SQLI_Ph_4d_blind_time_based, SQLI_Ph_4e_search_bar } from "@/lib/_data_exporter/data_kiil-chain/kill-chain_exporter";
import Alert from "@/app/_components/blog_frame/alert";
import Note from "@/app/_components/blog_frame/note";
import Tip from "@/app/_components/blog_frame/tip";
import { ToggleFrame } from "@/app/_components/preference/toggle-frame";
import { ToggleAllFrame } from "@/app/_components/preference/toggle-frame-display";

const MDX_FOLDER = "_heptagoning/_kill-chain/_recon"; 

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
    RECON_Site,
    NMAP_Overview,
    NMAP_Vuln_Scan,
    NMAP_SMB_Enum,
    NMAP_TCP_vs_UDP,
    RUSTSCAN_Overview,
    GOBUSTER_Overview,
    GOBUSTER_Outsmart_301,
    GOBUSTER_Advanced,
    SQLI_Overview,
    SQLI_Ph_1,
    SQLI_Ph_2,
    SQLI_Ph_3,
    SQLI_Ph_4a_union_based,
    SQLI_Ph_4b_blind_auth_bypass,
    SQLI_Ph_4c_blind_boolean_based,
    SQLI_Ph_4d_blind_time_based,
    SQLI_Ph_4e_search_bar,
    };
  const post = getPostBySlug(params.slug, MDX_FOLDER);
  if (!post || post.subPath != 'heptagoning/kill-chain/recon') return notFound();
 
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