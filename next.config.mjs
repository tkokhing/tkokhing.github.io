
// next.config.mjs
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('rehype-pretty-code').Options} */
const prettyOptions = {
  theme: "github-dark",
  keepBackground: true,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, prettyOptions]],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // turn off mdxRs for plugin support
  experimental: { mdxRs: false },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  distDir: "dist",
  images: { unoptimized: true },
};

export default withMDX(nextConfig);
