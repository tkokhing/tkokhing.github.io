import { Post } from "@/interfaces/post";
import { TitlePreview } from "./title-preview";

type Props = {
  posts: Post[];
};

export function AllStoriesTitle({ posts }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-4xl md:text-6xl font-thin tracking-tighter leading-tight">
        Browse by Title
      </h2>
      <div className="">
        {posts.map((post) => (
          <TitlePreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            subPath={post.subPath}
            postStatus={post.postStatus}
          />
        ))}
      </div>
    </section>
  );
}
// grid grid-cols-1 md:grid-cols-1 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32