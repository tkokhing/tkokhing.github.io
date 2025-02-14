"use client"

import Link from "next/link";
// import { useRouter } from "next/router";
import {usePathname} from "next/navigation";
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
    const modifiedSubPath = subPath.substring(0, subPath.indexOf('/'));
    const endsWithModifiedSubPath = usePathname().endsWith(modifiedSubPath);
  return (
    <h2 className="text-1xl md:text-2xl font-light tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <Link href={Home} className="hover:underline">
        Home
      </Link>
      /{endsWithModifiedSubPath ? (
        <span>{modifiedSubPath}</span>
      ) : (
        <Link href="../" className="hover:underline">
          {modifiedSubPath}
        </Link>
      )}
      /{title}
    </h2>
  );
};

export default SubpageHeader;
