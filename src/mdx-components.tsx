// for @next/mdx
// inject REACT components and MDX, common to most functions
import type { MDXComponents } from "mdx/types";
import { frameComponents } from "./lib/_data_exporter/pipeline/frame_components";
import { KILL_CHAIN_SUMMARY } from "./lib/_data_exporter/data_kiil-chain/kill-chain_exporter";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...frameComponents,
    ...KILL_CHAIN_SUMMARY,
  };
}
