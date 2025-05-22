"use client"

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useNavigation } from '@/app/_components/main_frame/navigation-context';
import Container from '@/app/_components/container';

const SubpageHeader = () => {
  const [scroll, setScroll] = useState(0);
  const pathname = usePathname();
  const { setSelected } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScroll(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const segments = pathname.split('/').filter(Boolean);
  const generateBreadcrumbs = () => {
    let path = '';
    return [
      <Link key="home" href="/" className="hover:underline">Home</Link>,
      ...segments.flatMap((segment, index) => {
        path += `/${segment}`;
        return [
          <span key={`sep-${index}`}>&nbsp;/&nbsp;</span>,
          index < segments.length - 1 ? (
            <Link key={path} href={path} className="hover:underline">{segment}</Link>
          ) : (
            <span key={path}>{segment}</span>
          ),
        ];
      }),
    ];
  };

  return (
    <div className="sticky top-0 z-30 bg-slate-50 dark:bg-slate-900">
      <Container>
        <h2 className="uppercase text-1xl md:text-2xl font-light tracking-tight md:tracking-tighter leading-tight py-4 flex items-center">
          <div className="truncate">{generateBreadcrumbs()}</div>
        </h2>
      <div className="h-1 bg-sky-500 transition-all" style={{ width: `${scroll}%` }} />
        <hr className="w-full border-gray-400" />
      </Container>
    </div>
  );
};

export default SubpageHeader;
