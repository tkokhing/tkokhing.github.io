"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import { useNavigation } from "@/app/_components/main_frame/NavigationContext";
import Container from "@/app/_components/container";

const SubpageHeader = () => 
  {
    const { setSelected } = useNavigation();
    const pathname = usePathname();
    const segments = pathname.split('/').filter(segment => segment);
    const generateBreadcrumbs = () => {
      const breadcrumbs: JSX.Element[] = [];
      let path = '';
      
      breadcrumbs.push(
        <Link key="home" href={'/'} className="hover:underline">
          Home
        </Link>
      );
      segments.forEach((segment, index) => {
        path += `/${segment}`;
        if (index < segments.length - 1) {
          breadcrumbs.push(
            <span key={`separator-${index}`}>&nbsp;/&nbsp;</span>,
            <Link key={path} href={path} className="hover:underline">
              {segment}
            </Link>
          );
        } else {
          breadcrumbs.push(
            <span key={`separator-${index}`}>&nbsp;/&nbsp;</span>,
            <span key={path}>{segment}</span>
          );
        }
      });
      return breadcrumbs;
      };

  return (
    <Container>
    <h2 className="uppercase text-1xl md:text-2xl font-light tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <div className="truncate">
        {generateBreadcrumbs()}
      </div>
    </h2>
    </Container>
  );
};

export default SubpageHeader;
