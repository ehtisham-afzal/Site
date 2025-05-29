import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Projects } from "@/lib/Data";
import { siteConfig } from "@/config/site";
import PageHeader from "@/components/PageHeader";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

async function getProject() {
  return Projects.find((project) => project.path === "LittleLemon") ?? null;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const project = await getProject();

  if (!project?.path) {
    return {
      title: "Project Not Found",
    };
  }

  const ogImage = project.ProjectImageUrl ?? siteConfig.ogImage;

  return {
    title: project.Name,
    description: project.Description,
    openGraph: {
      title: project.Name,
      description: project.Description,
      type: "article",
      url: `${siteConfig.url}/Projects/${project.path}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.Name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.Name,
      description: project.Description,
      images: [ogImage],
    },
    alternates: {
      canonical: `${siteConfig.url}/Projects/${project.path}`,
    },
  };
}

export default async function LittleLemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const project = await getProject();

  if (!project) {
    notFound();
  }
    // Define the slug for the project
  const slug = "Little-Lemon"
  // Get related projects
  const relatedProjects = Projects.filter(
    (p) =>
      p.path !== slug && p.Keywords?.some((k) => project.Keywords?.includes(k))
  )
    .filter((p) => p.ProjectUrl !== siteConfig.url)
    .slice(0, 2);

  // Add structured data for better SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.Name,
    description: project.Description,
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
    author: {
      "@type": "Person",
      name: "Ehtisham Afzal",
      url: siteConfig.url,
    },
    ...(project.ProjectUrl && { url: project.ProjectUrl }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        className="md:px-0"
        Title={project.Name}
        Description={project.Description}
      />

      <main className="w-full max-w-5xl mx-auto space-y-8 text-foreground">
        {/* Project Image Section */}
        {project.ProjectImageUrl && (
          <div className="relative aspect-auto w-full overflow-hidden rounded-xl border group">
            <Image
              src={project.ProjectImageUrl}
              alt={project.Name}
              width={1200}
              height={630}
              priority
              className="object-cover w-full h-full transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            {/* About Section */}
            <section>
              {/* Summary Section */}
              {project.Summary && (
                <section className="text-pretty prose dark:prose-invert text-base md:text-lg lg:prose-xl max-w-none prose-img:rounded-lg">
                  {children}
                </section>
              )}
            </section>

            {/* Tech Stack Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.Keywords?.map((tech) => (
                  <Badge
                    variant="outline"
                    key={tech}
                    className="hover:border-primary rounded-full sm:text-base text-primary sm:font-normal"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>
          </div>

          {/* Project Links Sidebar */}
          <aside className="space-y-6 relative">
            <div className="rounded-xl border bg-card p-6 sticky top-4">
              <h3 className="text-xl font-semibold mb-4">Project Links</h3>
              <div className="space-y-3">
                {project.ProjectUrl && (
                  <a
                    href={project.ProjectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary-foreground/50 hover:text-primary"
                  >
                    <GlobeAltIcon className="h-5 w-5" />
                    Live Demo
                  </a>
                )}
                <a
                    href="https://github.com/ehtisham-afzal/LittleLemon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary-foreground/50 hover:text-primary"
                  >
                    <GitHubLogoIcon className="h-5 w-5" />
                    GitHub Repository
                  </a>
              </div>
            </div>
          </aside>
        </div>
        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <section className="pt-12 border-t">
            <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((project) => (
                <Link
                  key={project.path}
                  href={`/Projects/${project.path}`}
                  className="group relative overflow-hidden rounded-xl border bg-card p-4 transition-colors hover:bg-card/80"
                >
                  <div className="flex items-center gap-4">
                    {project.ProjectIconUrl && (
                      <Image
                        src={project.ProjectIconUrl}
                        alt={project.Name}
                        width={48}
                        height={48}
                        className="rounded-lg"
                      />
                    )}
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {project.Name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {project.Description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
