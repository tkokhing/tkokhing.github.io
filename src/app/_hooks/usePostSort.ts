// app/_hooks/usePostSort.ts

"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Post } from "@/interfaces/post";

type SortMode = "title" | "date";

export function usePostSort(posts: Post[], skipURLParam = false) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultSort: SortMode = searchParams.get("sort") === "date" ? "date" : "title";
  const [sortBy, setSortBy] = useState<SortMode>(defaultSort);

  // Sync localStorage
  useEffect(() => {
    localStorage.setItem("preferredSort", sortBy);
  }, [sortBy]);

  // Load preferred sort if no query param and not skipping
  useEffect(() => {
    const saved = localStorage.getItem("preferredSort");
    if (!skipURLParam && !searchParams.get("sort") && saved) {
      const savedMode = saved === "date" ? "date" : "title";
      setSortBy(savedMode);
      router.replace(`?sort=${savedMode}`, { scroll: false });
    }
  }, []);

  // Apply sorting
  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === "title") return a.title.localeCompare(b.title);
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // handle sort change
  const handleSortChange = (mode: SortMode) => {
    setSortBy(mode);
    if (!skipURLParam) {
      router.replace(`?sort=${mode}`, { scroll: false });
    }
  };
  return { sortedPosts, sortBy, handleSortChange };
}
