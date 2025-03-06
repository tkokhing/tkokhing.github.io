"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
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

    const segments = subPath.split('/');
    const generateBreadcrumbs = () => {
      const breadcrumbs: JSX.Element[] = [];
      let path = '';
  
      segments.forEach((segment, index) => {
        path += `/${segment}`;
        breadcrumbs.push(
          <span key={index}>&nbsp;/&nbsp;</span>,
          <Link key={path} href={path} className="hover:underline" onClick={() => setSelected(segment)} >
            {segment}
          </Link>
        );
      });
      const subheader = breadcrumbs.slice(1);
      return subheader;
    };
  

    const modifiedSubPath = subPath.substring(0, subPath.indexOf('/'));
    const endsWithModifiedSubPath = usePathname().endsWith('/'+ modifiedSubPath);
  return (
    <h2 className="uppercase text-1xl md:text-2xl font-light tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <div className="truncate">
        <Link href="../../" className="hover:underline" onClick={() => setSelected('Home')}>
          HOME
        </Link>
        &nbsp;/&nbsp;
        {endsWithModifiedSubPath ? (
          <span>{modifiedSubPath}</span>
        ) : (
          <span>{generateBreadcrumbs()}</span>

        )}
      &nbsp;/&nbsp;{title}
      </div>
    </h2>
  );
};

export default SubpageHeader;
