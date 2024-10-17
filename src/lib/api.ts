import { Post } from "@/interfaces/post";
import { REPO_NAME } from '@/lib/constants';
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

function useBasePath(): string {
  return process.env.GITHUB_ACTIONS ? REPO_NAME : '';
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
} // synchronously read the contents of a given directory

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const BASE_PATH = useBasePath();

  // Update URLs based on the environment
  data.coverImage = data.coverImage.startsWith(BASE_PATH) ? data.coverImage : `${BASE_PATH}${data.coverImage}`;
  data.author.picture = data.author.picture.startsWith(BASE_PATH) ? data.author.picture : `${BASE_PATH}${data.author.picture}`;
  data.ogImage.url = data.ogImage.url.startsWith(BASE_PATH) ? data.ogImage.url : `${BASE_PATH}${data.ogImage.url}`;
  console.log(`BASE_PATH . >>>>>>>>>>>: ${BASE_PATH}`)
  console.log(`data.coverImage_______>: ${data.coverImage}`)
  console.log(`data.author.picture___>: ${data.author.picture}`)
  console.log(`data.ogImage.url______>: ${data.ogImage.url}`)
  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  // console.log(`slugs are -+++++++++++++++++++++-  ______________   >: ${slugs}`)
  // slugs are -->: bc_as_cert.md,dynamic-routing.md,hello-world.md,preview.md,vision.mdx
  // all filenames appeared together with commas
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
