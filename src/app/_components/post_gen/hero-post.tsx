import Avatar from "@/app/_components/post_gen/avatar";
import CoverImage from "@/app/_components/post_gen/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
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

export function HeroPost(
  {
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
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage subPath={subPath} title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={`/${subPath}/${slug}`} className="hover:underline">
              {title}
              <p className="mb-4 md:mb-0 text-lg italic">
                {postStatus} < DateFormatter dateString={date} />
              </p>
            </Link>
          </h3>
        </div>
        <div className="shadow-sm w-full dark:shadow-sky-900/50 hover:shadow-2xl hover:dark:shadow-zinc-50/100 hover:dark:shadow-lg py-3 px-4">
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
    </section>
  );
}
