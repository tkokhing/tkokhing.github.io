import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts("_topics");

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1); 
  return (
    <main>
      <Container>
      <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          slug={heroPost.slug}
          author={heroPost.author}
          excerpt={heroPost.excerpt}
          subPath={heroPost.subPath}
          />
      
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
