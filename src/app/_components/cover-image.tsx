import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  subPath: string;
};

const CoverImage = ( { title, src, slug, subPath }: Props) => {
  const image = (
    <Image 
      className={cn("shadow-sm w-full", {
      "dark:shadow-sky-900 hover:shadow-2xl hover:dark:shadow-zinc-50/100 hover:dark:shadow-lg transition-shadow duration-200": slug,
      })}
      src={src}
      alt={`Cover Image for ${title}`}

      width={1300}
      height={630}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/${subPath}/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
