import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
// import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts("_mdxposts");
  const heroPost = allPosts[0]; 
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        {/* <Intro /> */}
        Mdxtester Main Page
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt} 
          subPath={heroPost.subPath}       />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}