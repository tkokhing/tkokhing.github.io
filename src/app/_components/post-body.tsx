import markdownStyles from "./markdown-styles.module.css";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto markdownStyles['markdown']">
      <div
        // // dangerouslySetInnerHTML={{ __html: content }}
        // <MDXRemote source={content}/>
        
        />
    </div>
  );
}
// className={markdownStyles["markdown"]}
