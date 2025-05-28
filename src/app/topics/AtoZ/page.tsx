import Container from "@/app/_components/preference/container";
import { getAllPosts } from "@/lib/api";
import { MoreStoriesConcise } from "@/app/_components/post_gen/more-stories-concise"
import { Suspense } from "react";

export default function AtoZIndex() {
  const allPosts = getAllPosts("_topics");

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
