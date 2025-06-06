"use client"

import { Post } from "@/interfaces/post";
import { TitlePreview } from "@/app/_components/post_gen/title-preview";
import { usePostSort } from "@/app/_hooks/usePostSort";

type Props = {
  posts: Post[];
  skipURLParam?: boolean; // for MDX usage
};

export function MoreStoriesConcise({ posts, skipURLParam }: Props) {
  const { sortedPosts, sortBy, handleSortChange } = usePostSort(posts, skipURLParam);

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
