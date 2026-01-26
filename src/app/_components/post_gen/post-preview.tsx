import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  subPath: string;
  postStatus: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  subPath,
  postStatus,
  }: Props) 
  {
  return (
    <div>
      <div className="mb-3">
        <CoverImage subPath={subPath} slug={slug} title={title} src={coverImage} /> 
      </div>
        <h3 className="text-adaptive_fs_base mb-3 leading-snug">
          <Link href={`/${subPath}/${slug}`} className="hover:underline">
            {title}
            <p className="text-right text-adaptive_fs_xs mb-4 italic">
              {postStatus} <DateFormatter dateString={date} />
            </p>
          </Link>
        </h3>
      <div className="text-adaptive_fs_sm shadow-sm w-full dark:shadow-sky-900/50 hover:shadow-2xl hover:dark:shadow-zinc-50/100 hover:dark:shadow-lg py-3 px-4">
        <Link href={`/${subPath}/${slug}`}>
          <h4
          className="font-semibold italic hover:underline text-sky-950 dark:text-slate-100"> 
            Excerpt:
          </h4>
          <p className="leading-relaxed mb-4">{excerpt}</p>
        </Link>

      </div>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
