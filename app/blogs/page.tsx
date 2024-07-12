"use client";
import { BlogCard } from "../../components/Blog-Card";
import BlurFade from "../../components/magicui/blur-fade";
import { DATA } from "../../data/resume";

const BLUR_FADE_DELAY = 0.04;
export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8 md:space-y-10">
      <section id="hero">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold text-center">My Blogs</h2>
          </BlurFade>
          {DATA.blogs.map((blog, id) => (
            <BlurFade key={blog.title} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <BlogCard
                key={blog.title}
                href={blog.href}
                logoUrl={blog.logoUrl}
                altText={blog.title}
                title={blog.title}
                period={`${blog.date}`}
                desc={blog.desc}
                badges={blog.badges}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}
