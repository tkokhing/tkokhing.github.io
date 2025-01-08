import { Post } from "@/interfaces/post";
import { REPO_NAME } from '@/lib/constants';
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

function useBasePath(): string {
  return process.env.GITHUB_ACTIONS ? REPO_NAME : '';
}

export function postsDirectory(subPath: string): string {
  return join(process.cwd(), subPath);
}

export function getPostSlugs(subPath: string) {
  return fs.readdirSync(postsDirectory(subPath));
}

export function getPostBySlug(slug: string, subPath: string){
  const realSlug = slug.replace(/\.mdx?$/, "");
  const fullPath = join(postsDirectory(subPath), `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const BASE_PATH = useBasePath();
  
  // Update URLs based on the environment
  data.coverImage = data.coverImage.startsWith(BASE_PATH) ? data.coverImage : `${BASE_PATH}${data.coverImage}`;
  data.author.picture = data.author.picture.startsWith(BASE_PATH) ? data.author.picture : `${BASE_PATH}${data.author.picture}`;
  data.ogImage.url = data.ogImage.url.startsWith(BASE_PATH) ? data.ogImage.url : `${BASE_PATH}${data.ogImage.url}`;
  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(subPath: string): Post[] {
  const slugs = getPostSlugs(subPath);
  const posts = slugs.map((slug) => getPostBySlug(slug, subPath));
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
