import Container from "@/app/_components/container";
import { getAllPosts } from "@/lib/api";
import { AllStoriesTitle } from "@/app/_components/all-stories-title"
import SubpageHeader from "@/app/_components/main_frame/subpage-header";

export default function AtoZIndex() {
  const allPosts = getAllPosts("_topics");

  return (
    <main>
      <Container>
        {/* <SubpageHeader subPath={allPosts[0].subPath} title={""}/> */}
        <SubpageHeader />

        {allPosts.length > 0 && <AllStoriesTitle posts={allPosts} />}
      </Container>
    </main>
  );
}
