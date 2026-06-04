import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export function getMdxFiles(dir: string) {
  const fullPath = path.join(contentDir, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs.readdirSync(fullPath).filter((file) => file.endsWith(".mdx"));
}

export function readMdxFile(dir: string, filePath: string) {
  const rawContent = fs.readFileSync(path.join(contentDir, dir, filePath), "utf-8");
  return matter(rawContent);
}

export function getMdxData(dir: string) {
  const mdxFiles = getMdxFiles(dir);
  return mdxFiles.map((file) => {
    const { data, content } = readMdxFile(dir, file);
    return {
      slug: file.replace(".mdx", ""),
      frontmatter: data,
      content,
    };
  });
}

// Helpers
export const getExperiences = () => getMdxData("experience");
export const getProjects = () => getMdxData("projects");
export const getAchievements = () => getMdxData("achievements");
export const getPosts = () => getMdxData("blog");
