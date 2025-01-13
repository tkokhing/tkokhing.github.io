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
      <div className="mb-5">
        <CoverImage subPath={subPath} slug={slug} title={title} src={coverImage} /> 
      </div>
        <h3 className="text-3xl mb-3 leading-snug">
          <Link href={`/${subPath}/${slug}`} className="hover:underline">
            {title}
            <p className="text-right text-sm mb-4">
              {postStatus} <DateFormatter dateString={date} />
            </p>
          </Link>
        </h3>
      <div className="shadow-sm w-full shadow-sky-900/50 hover:shadow-2xl hover:dark:shadow-zinc-50/100 hover:dark:shadow-lg py-3 px-4">
        <Link href={`/${subPath}/${slug}`}>
          <h4
          className="font-semibold italic text-lg hover:underline text-sky-950 dark:text-slate-100"> 
            Excerpt:
          </h4>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </Link>

      </div>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
