import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
// import { REPO_NAME } from './constants';


// export function logMessage(message: string) {
//   const fs = require('fs');
//   const logStream = fs.createWriteStream('log.txt', { flags: 'a' });
//   logStream.write(`${new Date().toISOString()} - ${message}\n`);
// }

// export function useBasePath() {
//   if (process.env.GITHUB_ACTIONS) // `npm run build` in GitHub
//   {
//     console.log("Running in GitHub Actions CI environment");
//     console.log(`${process.env.GITHUB_ACTIONS}`);
//     return ''
//   }
//   else // Running in local environment
//   {
//     // console.log("Running in local environment");
//     console.log(`${process.env.NODE_ENV}`);

//     if (process.env.NODE_ENV === 'development') //`npn run dev` in local
//     {
//       console.log("Running in local development environment");
//       console.log(`${process.env.NODE_ENV}`);
//       return  ''
//     } 
//     else if (process.env.NODE_ENV === 'production')// `npm run build` in local
//     {
//       console.log("Running in local production environment");
//       console.log(`${process.env.NODE_ENV}`);
//       logMessage(`Running in local production environment: ${process.env.NODE_ENV}`);
//       return  ''
//     } 
//     else if (process.env.NODE_ENV === 'test')//  === 'test', `npx serve ./dist`  in local 
//     {
//       console.log("Running in local testing environment");
//       console.log(`${process.env.NODE_ENV}`);
//       logMessage(`Running in local testing environment: ${process.env.NODE_ENV}`);
//       return  ''
//     } 
//   }
// }

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
} // synchronously read the contents of a given directory

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  // const BASE_PATH = useBasePath();

  // Update URLs based on the environment
  // data.coverImage = data.coverImage.startsWith(BASE_PATH) ? data.coverImage : `${BASE_PATH}${data.coverImage}`;
  // data.author.picture = data.author.picture.startsWith(BASE_PATH) ? data.author.picture : `${BASE_PATH}${data.author.picture}`;
  // data.ogImage.url = data.ogImage.url.startsWith(BASE_PATH) ? data.ogImage.url : `${BASE_PATH}${data.ogImage.url}`;

  // console.log(`data.coverImage_______>: ${data.coverImage}`)
  // console.log(`data.author.picture___>: ${data.author.picture}`)
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
