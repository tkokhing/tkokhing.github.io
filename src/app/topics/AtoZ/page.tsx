import Container from "@/app/_components/container";
import { getAllPosts } from "@/lib/api";
import { AllStoriesTitle } from "@/app/_components/post_gen/all-stories-title"

export default function AtoZIndex() {
  const allPosts = getAllPosts("_topics");

  return (
    <main>
      <Container>
        {allPosts.length > 0 && <AllStoriesTitle posts={allPosts} />}
      </Container>
    </main>
  );
}
