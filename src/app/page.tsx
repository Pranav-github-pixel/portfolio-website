import Link from "next/link";
import { getPosts } from "@/lib/mdx";
import HomeClient from "./home-client";

export default function Home() {
  const posts = getPosts()
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
    .slice(0, 2);

  return <HomeClient posts={posts} />;
}
