"use client";

import { useState } from "react";
import { Post } from "@/interfaces/post";
import { TitlePreview } from "../title-preview";

type Props = {
  posts: Post[];
};

export function AllStoriesTitle({ posts }: Props) {
  const [sortBy, setSortBy] = useState<"title" | "date">("title");

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-4xl md:text-6xl font-thin tracking-tighter leading-tight">
          Browse by {sortBy === "title" ? "Title (A–Z)" : "Date (Newest)"}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => setSortBy("title")}
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
            onClick={() => setSortBy("date")}
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
            postStatus={post.postStatus}
          />
        ))}
      </div>
    </section>
  );
}
