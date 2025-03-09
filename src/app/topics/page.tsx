import Container from "@/app/_components/container";
import { getAllPosts } from "@/lib/api";
import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import SubpageHeader from "@/app/_components/main_frame/subpage-header";

export default function Index() {
  const allPosts = getAllPosts("_topics");
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1); 
  return (
    <main>
      <Container>
      <SubpageHeader />
      <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          slug={heroPost.slug}
          author={heroPost.author}
          excerpt={heroPost.excerpt}
          subPath={heroPost.subPath}
          postStatus={heroPost.postStatus}
          />
      
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
