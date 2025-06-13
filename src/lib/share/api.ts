import { Post } from "@/interfaces/post";
import { REPO_NAME } from '@/lib/share/constants';
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

function useBasePath(): string {
  return process.env.GITHUB_ACTIONS ? REPO_NAME : '';
}

function postsDirectory(mdx_folder: string): string{
  fs.readdir((join(process.cwd(), mdx_folder)), (err) => {
    if (err) {
      console.error('Error reading directory:', err);
    }
  })
  return join(process.cwd(), mdx_folder);
}

function getPostSlugs(mdx_folder: string) {
  return fs.readdirSync(postsDirectory(mdx_folder));
}

export function getPostBySlug(slug: string, mdx_folder: string){
  const realSlug = slug.replace(/\.mdx?$/, "");
  const fullPath = join(postsDirectory(mdx_folder), `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const BASE_PATH = useBasePath();
  
  // Update URLs based on the environment
  data.coverImage = data.coverImage.startsWith(BASE_PATH) ? data.coverImage : `${BASE_PATH}${data.coverImage}`;
  data.author.picture = data.author.picture.startsWith(BASE_PATH) ? data.author.picture : `${BASE_PATH}${data.author.picture}`;
  data.ogImage.url = data.ogImage.url.startsWith(BASE_PATH) ? data.ogImage.url : `${BASE_PATH}${data.ogImage.url}`;
  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(mdx_folder: string): Post[] {
  const slugs = getPostSlugs(mdx_folder);
  const posts = slugs.map((slug) => getPostBySlug(slug, mdx_folder));
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
