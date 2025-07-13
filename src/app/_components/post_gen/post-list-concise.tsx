// dual use for page.tsx and mdx

import Container from "@/app/_components/preference/container";
import { getAllPosts } from "@/lib/share/api";
import { MoreStoriesConcise } from "@/app/_components/post_gen/more-stories-concise"
import { Suspense } from "react";

type Props = {
  dir: string;
  chosen_subPath: string;
};

export function PostListConcise ({ dir, chosen_subPath }: Props) {
  const allPosts = getAllPosts(dir);

  const filteredPosts = allPosts.filter(
    (post) => post.subPath === chosen_subPath
  );

  return (
    <main>
      <Container>
        <Suspense>
        {filteredPosts.length > 0 && <MoreStoriesConcise posts={filteredPosts} />}
        </Suspense>
      </Container>
    </main>
  );

}
