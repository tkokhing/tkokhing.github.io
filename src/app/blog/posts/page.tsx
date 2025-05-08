import Container from "@/app/_components/container";
import { getAllPosts } from "@/lib/api";
import { AllStoriesTitle } from "@/app/_components/all-stories-title"

export default function PostsIndex() {
  const allPosts = getAllPosts("_posts");

  return (
    <main>
      <Container>
        {allPosts.length > 0 && <AllStoriesTitle posts={allPosts} />}
      </Container>
    </main>
  );
}
