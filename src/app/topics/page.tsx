import Container from "@/app/_components/preference/container";
import { getAllPosts } from "@/lib/api";
import { HeroPost } from "@/app/_components/post_gen/hero-post";
import { MoreStories } from "@/app/_components/post_gen/more-stories";

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
          postStatus={heroPost.postStatus}
          />
      
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
