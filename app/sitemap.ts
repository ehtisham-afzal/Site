import { Projects } from "@/lib/Data";

export const baseUrl = "https://ehtisham.vercel.app";

type Sitemap = Array<{
  url: string;
  lastModified?: Date | string;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  // alternates?: {
  //     languages?: Languages<string>
  // }
}>;

export default async function sitemap() {
  const routes: Sitemap = [
    "",
    "/Aboute",
    "/Contact",
    "/Projects",
    "/TechStack",
    "/Projects/LittleLemon",
  ].map((route: string) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "daily",
    priority: 1,
  }));

  const ProjectsRoutes = Projects.map((project) => ({
    url: `${baseUrl}/Projects/${project.path}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "daily",
    priority: 1,
  }));

  return [...routes, ...ProjectsRoutes];
}
