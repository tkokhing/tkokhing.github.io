"use client";

import Container from "@/app/_components/container";
import cn from "classnames";
import { useRef, useEffect } from "react";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const handleMouseEnter = () => {
      if (marqueeElement) {
        marqueeElement.style.animationPlayState = "paused";
      }
    };
    const handleMouseLeave = () => {
      if (marqueeElement) {
        marqueeElement.style.animationPlayState = "running";
      }
    };

    if (marqueeElement) {
      marqueeElement.addEventListener("mouseenter", handleMouseEnter);
      marqueeElement.addEventListener("mouseleave", handleMouseLeave);
    }
  }, []);

  return (
    <div
      className={cn("border-b dark:bg-slate-800", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm dark:text-teal-100">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-300 transition-colors"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <div className="whitespace-nowrap overflow-hidden relative">
              <div
                ref={marqueeRef}
                className="inline-block animate-marquee"
              > UNDER DEVELOPMENT...  Learning never stops. Your comments, encouragement or criticism to my blog{" "}
                <a
                  href={`https://tkokhing.github.io/`}
                  className="underline hover:text-blue-500 duration-100 transition-colors"
                >
                  tkokhing.github.io
                </a>
                &nbsp;are most welcome to help me grow. Thank you!    ...UNDER DEVELOPMENT  
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
