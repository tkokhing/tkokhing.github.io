import Link from "next/link";
import { Home } from "@/lib/constants"
type Props = {
  title: string;
  subPath: string;
};

const SubpageHeader = ({
  title,
  subPath,
}:Props) => 
  {
    const modifiedSubPath = subPath.substring(0, subPath.indexOf('/') + 1);
  return (
    <h2 className="text-1xl md:text-2xl font-light tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <Link href={Home} className="hover:underline">
        Home
      </Link>
      /<Link href="../" className="hover:underline">
        {modifiedSubPath}
      </Link>
      {title}
    </h2>
  );
};

export default SubpageHeader;
