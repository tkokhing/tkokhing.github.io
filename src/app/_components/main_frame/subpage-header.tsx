"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import { Home } from "@/lib/constants"
import { useNavigation } from "@/app/_components/main_frame/NavigationContext";

type Props = {
  title: string;
  subPath: string;
};

const SubpageHeader = ({
  title,
  subPath,
}:Props) => 
  {
    const { setSelected } = useNavigation();
    const modifiedSubPath = subPath.substring(0, subPath.indexOf('/'));
    const endsWithModifiedSubPath = usePathname().endsWith('/'+ modifiedSubPath);
  return (
    <h2 className="text-1xl md:text-2xl font-light tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <Link href="../../" className="hover:underline" onClick={() => setSelected('Home')}>
        Home
      </Link>
      &nbsp;/&nbsp;
      {endsWithModifiedSubPath ? (
        <span>{modifiedSubPath}</span>
      ) : (
        <Link href="../" className="hover:underline" onClick={() => setSelected(modifiedSubPath)}>
        {modifiedSubPath}
        </Link>
      )}
      &nbsp;/&nbsp;{title}
    </h2>
  );
};

export default SubpageHeader;
