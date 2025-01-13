import { type Author } from "./author";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  subPath: string;
  content: string;
  preview?: boolean;
  remarks?: string;
  postStatus: string;
};
