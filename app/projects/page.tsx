"use client";
import BlurFade from "../../components/magicui/blur-fade";
import { ProjectCard } from "../../components/project-card";
import { DATA } from "../../data/resume";
const BLUR_FADE_DELAY = 0.04;
export default function Page() {
  return (
    <section id="projects">
      <div className="space-y-4 w-full py-2">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl text-center font-bold">Projects</h2>
        </BlurFade>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
