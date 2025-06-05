// dual use for page.tsx and mdx

import Container from "@/app/_components/preference/container";
import { getAllPosts } from "@/lib/api";
import { MoreStoriesConcise } from "@/app/_components/post_gen/more-stories-concise"
import { Suspense } from "react";

type Props = {
  dir: string;
};

export function PostListConcise ({ dir }: Props) {
  const allPosts = getAllPosts(dir);

  return (
    <main>
      <Container>
        <Suspense>
        {allPosts.length > 0 && <MoreStoriesConcise posts={allPosts} />}
        </Suspense>
      </Container>
    </main>
  );

}
