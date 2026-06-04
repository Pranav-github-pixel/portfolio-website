import {
  getExperiences,
  getProjects,
  getAchievements,
} from "@/lib/mdx";
import PortfolioClient from "./portfolio-client";

export default function Portfolio() {
  const experiences = getExperiences();
  const projects = getProjects();
  const achievements = getAchievements();

  return (
    <PortfolioClient
      experiences={experiences}
      projects={projects}
      achievements={achievements}
    />
  );
}
