import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  date: string;
  slug: string;
  subPath: string;
  excerpt: string;
  postStatus: string;
};

export function TitlePreview({
  title,
  date,
  slug,
  subPath,
  excerpt,
  postStatus,
  }: Props) 
  {
  return (
    <div>
      <h3 className="shadow-sm w-full dark:shadow-sky-900/50 hover:shadow-2xl hover:dark:shadow-zinc-50/100 hover:dark:shadow-lg py-3 px-4 text-xl mb-3 leading-snug">
        <Link href={`/${subPath}/${slug}`} className="hover:underline">
          {title}
          <p className="text-pretty text-xs mb-4 italic">
            {excerpt}
          </p>
          <p className="text-right text-xs mb-4 italic">
            {postStatus} <DateFormatter dateString={date} />
          </p>
        </Link>
      </h3>
    </div>
  );
}
