"use client";

import { useEffect, useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useNavigation } from "@/app/_components/main_frame/navigation-context";
import Container from "@/app/_components/preference/container";

const SubpageHeader = () => {
  const [scroll, setScroll] = useState(0);
  const [is404, setIs404] = useState<boolean | null>(null);
  const pathname = usePathname();
  const { setSelected } = useNavigation();
  const segments = useMemo(() => {
    return pathname.split("/").filter(Boolean);
  }, [pathname]);

  // Sync with NavigationProvider
  useEffect(() => {
    if (!segments.length) return;
    const current = segments[segments.length - 1];
    setSelected(current);
  }, [segments, setSelected]);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScroll(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 404 detection (stable check AFTER render)
  useEffect(() => {
    const detect404 = () => {
      const marker = document.getElementById("__NOT_FOUND__");
      setIs404(!!marker);
    };

    // delay ensures DOM is painted
    const id = requestAnimationFrame(detect404);
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  // wait until detection finishes
  if (is404 === null) return null;

  // kill if 404
  if (is404) return null;

  // Breadcrumb generator
  const generateBreadcrumbs = () => {
    // Condensed lengthy breadcrumb
    if (segments.length >= 4) {
      const thirdLast = segments.length - 3;
      const secondLast = segments.length - 2;
      const last = segments.length - 1;

      const thirdPath = "/" + segments.slice(0, thirdLast + 1).join("/");
      const secondPath = "/" + segments.slice(0, secondLast + 1).join("/");

      return (
        <>
          <Link
            href={thirdPath}
            onClick={() => setSelected(segments[thirdLast])}
            className="italic lowercase hover:underline"
          >
            ...back
          </Link>

          <span>&nbsp;/&nbsp;</span>

          <Link
            href={secondPath}
            onClick={() => setSelected(segments[secondLast])}
            className="italic hover:underline"
          >
            {segments[secondLast]}
          </Link>

          <span>&nbsp;/&nbsp;</span>

          <span>{segments[last]}</span>
        </>
      );
    }

    // Normal breadcrumb
    let path = "";

    return [
      <Link key="home" href="/" className="italic hover:underline">
        Home&nbsp;
      </Link>,
      ...segments.flatMap((segment, index) => {
        path += `/${segment}`;
        return [
          <span key={`sep-${index}`}>&nbsp;/&nbsp;</span>,
          index < segments.length - 1 ? (
            <Link
              key={path}
              href={path}
              onClick={() => setSelected(segment)}
              className="italic hover:underline"
            >
              {segment}
            </Link>
          ) : (
            <span key={path}>{segment}</span>
          ),
        ];
      }),
    ];
  };

  return (
    <div className="sticky top-0 z-30 bg-inherit/40 dark:bg-transparent backdrop-blur-md">
      <Container>
        <h2 className="uppercase text-adaptive_fs_sm md:text-adaptive_fs_xs text-tkokhing-blue dark:text-tkokhing-dark font-light tracking-tight md:tracking-tighter leading-tight py-1 flex items-center">
          <div className="truncate">{generateBreadcrumbs()}</div>
        </h2>

        <div
          className="h-1 bg-sky-500 transition-all"
          style={{ width: `${scroll}%` }}
        />

        <hr className="w-full border-gray-400" />
      </Container>
    </div>
  );
};

export default SubpageHeader;