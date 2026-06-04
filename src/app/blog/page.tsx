import { getPosts } from "@/lib/mdx";
import BlogClient from "./blog-client";

export default function Blog() {
  const posts = getPosts().sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );

  return <BlogClient posts={posts as any} />;
}
