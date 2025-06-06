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
}: Props) {
  return (
    <div className="shadow-sm w-full dark:shadow-sky-900/50 hover:shadow-2xl hover:dark:shadow-zinc-50/100 hover:dark:shadow-lg py-3 px-4 text-xl mb-3 leading-snug">
      <Link href={`/${subPath}/${slug}`}>
        <h3 className="text-xl font-medium hover:underline">{title}</h3>
      </Link>
      <p className="text-pretty text-xs mb-1 italic">{excerpt}</p>
      <p className="text-right text-xs italic">
        {postStatus} <DateFormatter dateString={date} />
      </p>
    </div>
  );
}
