import { Post } from "@/interfaces/post";
import { REPO_NAME } from '@/lib/share/constants';
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

function useBasePath(): string {
  return process.env.GITHUB_ACTIONS ? REPO_NAME : '';
}

function postsDirectory(post_folder: string): string{
  fs.readdir((join(process.cwd(), post_folder)), (err) => {
    if (err) {
      console.error('Error reading directory:', err);
    }
  })
  return join(process.cwd(), post_folder);
}

// dual usage, call it directly to load MD format
export function loadPost(slug: string, post_folder: string) {
  const ext = slug.endsWith(".mdx")
  ? ".mdx"
  : slug.endsWith(".md")
  ? ".md"
  : ".mdx"; // default fallback

  const realSlug = slug.replace(/\.mdx?$/, "").replace(/\.md$/, "");
  const fullPath = join(postsDirectory(post_folder), `${realSlug}${ext}`);
  return fs.readFileSync(fullPath, "utf-8");
}

function getPostSlugs(post_folder: string) {
  return fs
    .readdirSync(postsDirectory(post_folder), { withFileTypes: true })
    .filter(entry => entry.isFile() && entry.name.endsWith(".mdx"))
    .map(entry => entry.name);
}

export function getPostBySlug(slug: string, post_folder: string) {
  const fileContents = loadPost(slug,post_folder);
  const { data, content } = matter(fileContents);
  const BASE_PATH = useBasePath();

  // Update URLs based on the environment
  data.coverImage = data.coverImage.startsWith(BASE_PATH) ? data.coverImage : `${BASE_PATH}${data.coverImage}`;
  data.author.picture = data.author.picture.startsWith(BASE_PATH) ? data.author.picture : `${BASE_PATH}${data.author.picture}`;
  data.ogImage.url = data.ogImage.url.startsWith(BASE_PATH) ? data.ogImage.url : `${BASE_PATH}${data.ogImage.url}`;

  return { ...data, slug: slug.replace(/\.mdx?$/, ""), content } as Post;
}

export function getAllPosts(post_folder: string): Post[] {
  const slugs = getPostSlugs(post_folder);
  const posts = slugs.map(slug => getPostBySlug(slug, post_folder));
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
