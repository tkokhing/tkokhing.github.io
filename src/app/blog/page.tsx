import Container from "@/app/_components/container";
import { getAllPosts } from "@/lib/api";
import { HeroPost } from "@/app/_components/post_gen/hero-post";
import { MoreStories } from "@/app/_components/post_gen/more-stories";

export default function Index() {
  const allPosts = getAllPosts("_posts");
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
          subPath={heroPost.subPath}
          postStatus={heroPost.postStatus}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
