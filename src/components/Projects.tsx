import { getFeaturedProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const featured = getFeaturedProjects();

  return (
    <section className="flex-1 border-t border-border bg-subtle">
      <div className="page-container pb-14 pt-9 md:pb-16 md:pt-10">
        <h2 className="mb-7 text-[1.125rem] font-semibold">프로젝트</h2>
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          {featured.map((project) => (
            <div key={project.slug} className="p-2">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
