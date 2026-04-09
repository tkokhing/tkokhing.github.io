// next.config.mjs, implemented with @next/mdx, serves for `import` of *.MDX
import createMDX from "@next/mdx";
// import rehypePrettyCode from "rehype-pretty-code";
// import remarkGfm from "remark-gfm"; 
// import rehypePrettyCode from "rehype-pretty-code";
// From Next v16+, import packages no longer required hence call as string under [options]

/** @type {import('rehype-pretty-code').Options} */
const prettyOptions = {
  theme: "github-dark",
  keepBackground: true,
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [["rehype-pretty-code", prettyOptions], "rehype-slug", "rehype-autolink-headings"],
  },
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // mdxRs  MUST  be FALSE for remark/rehype plugins to work
  experimental: { mdxRs: false },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  distDir: "dist",
  images: { unoptimized: true },
};

export default withMDX(nextConfig);