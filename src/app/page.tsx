import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { REPO_NAME } from '@/lib/constants';

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  if (process.env.GITHUB_ACTIONS) // add repo name into images links if env = GitHub 
  {
    heroPost.coverImage = heroPost.coverImage.startsWith(REPO_NAME) ? heroPost.coverImage : `${REPO_NAME}${heroPost.coverImage}`;


    // heroPost.coverImage = `${REPO_NAME}${heroPost.coverImage}`;
    // heroPost.author.picture = `${REPO_NAME}${heroPost.author.picture}`;
    // heroPost.ogImage.url = `${REPO_NAME}${heroPost.ogImage.url}`;
  }
  console.log(`heroPost.coverImage ~~~+++++~~>: ${heroPost.coverImage}`)

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
