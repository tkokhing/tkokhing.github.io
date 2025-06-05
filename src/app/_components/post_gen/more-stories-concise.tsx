"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Post } from "@/interfaces/post";
import { TitlePreview } from "@/app/_components/post_gen/title-preview";

type Props = {
  posts: Post[];
};

export function MoreStoriesConcise({ posts }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const defaultSort = searchParams.get("sort") === "date" ? "date" : "title";
  const [sortBy, setSortBy] = useState<"title" | "date">(defaultSort);

  // Sync localStorage on sort change
  useEffect(() => {
    localStorage.setItem("preferredSort", sortBy);
  }, [sortBy]);

  // If no URL param, check localStorage once on load
  useEffect(() => {
    const saved = localStorage.getItem("preferredSort");
    if (!searchParams.get("sort") && saved) {
      setSortBy(saved === "date" ? "date" : "title");
      router.replace(`?sort=${saved}`);
    }
  }, []);

  // Apply sorting
  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === "title") return a.title.localeCompare(b.title);
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Handle button click
  const handleSortChange = (mode: "title" | "date") => {
    setSortBy(mode);
    router.replace(`?sort=${mode}`);
  };

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="italic text-sm md:text-base font-thin tracking-tighter leading-tight">
          Browse by {sortBy === "title" ? "Title (A–Z)" : "Date (Newest)"}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => handleSortChange("title")}
            disabled={sortBy === "title"}
            className={`px-3 py-1 rounded transition ${
              sortBy === "title"
                ? "bg-gray-700 dark:bg-gray-600 text-tkokhing-blue cursor-default"
                : "bg-gray-200 hover:bg-gray-500 dark:text-tkokhing-blue hover:text-tkokhing-dark hover:dark:text-tkokhing-dark"
            }`}
          >
            A–Z
          </button>
          <button
            onClick={() => handleSortChange("date")}
            disabled={sortBy === "date"}
            className={`px-3 py-1 rounded transition ${
              sortBy === "date"
                ? "bg-gray-700 dark:bg-gray-600 text-tkokhing-blue cursor-default"
                : "bg-gray-200 hover:bg-gray-500 dark:text-tkokhing-blue hover:text-tkokhing-dark hover:dark:text-tkokhing-dark"
            }`}
          >
            Date
          </button>
        </div>
      </div>

      <div>
        {sortedPosts.map((post) => (
          <TitlePreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            subPath={post.subPath}
            excerpt={post.excerpt}
            postStatus={post.postStatus}
          />
        ))}
      </div>
    </section>
  );
}
