// blog/post/ list page
import { PostListConcise } from "@/app/_components/post_gen/post-list-concise";

export default function BlogPostListPage() {
  return <PostListConcise dir={"_blog_post/_blogs"} chosen_subPath={"blog/posts"}/>
}