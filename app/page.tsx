import AboutMePageCard from "@/components/Cards/AboutMePageCard";
import ProjectCard from "@/components/Cards/ProjectCard";
import TechStackPageCard from "@/components/Cards/TechStackPageCard";
import { Button } from "@/components/ui/button";
import { Projects } from "@/lib/Data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen mt-36 md:mt-56">
      <section className="relative flex items-center justify-end w-full py-2 md:min-h-96 h-fit">
        <div className="relative top-0 left-0 z-10 flex flex-col gap-6 overflow-hidden md:absolute md:w-7/12 text-pretty">
          <div>
            <Image
              className="object-cover w-24 h-24 mb-3 border-4 rounded-full md:hidden"
              width={80}
              height={80}
              src="/sham2.png"
              alt="Ehtisham"
            />
            <h1 className="text-[46px] font-extrabold leading-[120%] text-foreground/50 md:text-left md:text-[80px]">
              I&apos;m <span className="text-foreground">Ehtisham</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-left md:text-2xl text-pretty">
              A front-end developer, based in Pakistan. specializing in
              full-stack web applications using JavaScript, TypeScript, React,
              Next.js, and Node.js. I love building Web-Applications that are
              user-friendly, simple and delightful. ✨
            </p>
          </div>
          <div className="flex flex-col items-center w-full gap-4 mt-10 md:flex-row">
            <Button
              size="lg"
              variant="default"
              className="w-full text-xl md:w-44 h-14"
            >
              <a target="_blank" href="https://read.cv/ehtisham">
                See my resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="w-full text-xl md:w-44 h-14"
            >
              <Link prefetch={false} href="/Contact">
                Get in touch
              </Link>
            </Button>
          </div>
        </div>
        <Image
          src="/sham2.png"
          alt="Ehtisham Afzal"
          width="280"
          height="380"
          className="absolute right-0 hidden object-cover w-4/12 h-full p-0 border rounded-2xl md:block"
        />
      </section>

      <section className="w-full mt-20 md:mt-40">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-5xl scroll-m-20">
          Selected work
        </h2>
        <div className="w-full space-y-4 md:space-y-8">
          {Projects.map((project) => (
            <ProjectCard
              key={project.Name}
              Name={project.Name}
              Description={project.Description}
              ProjectIconUrl={project.ProjectIconUrl}
              ProjectUrl={project.ProjectUrl}
              ProjectImageUrl={project.ProjectImageUrl}
            />
          ))}
        </div>
      </section>
      <section className="w-full mt-20 md:mt-40">
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-5xl scroll-m-20">
          Get to know me
        </h2>

        <ul className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
          <AboutMePageCard
            Title="About me"
            Description="Who i am and what i do"
            PageUrl="/About"
            ImageUrl="/man-avatar.svg"
          />
          <TechStackPageCard
            Title="TeckStack"
            Description="The Dev Tools and app I use"
            PageUrl="/TechStack"
            ImageUrl="/Tools.png"
          />
        </ul>
      </section>
      <section className="relative z-10 flex flex-col items-center justify-between gap-10 my-28 lg:flex-row">
        <div>
          <h2 className="text-3xl font-bold text-center lg:text-left lg:text-5xl">
            Let’s work together
          </h2>
          <p className="mt-4 text-xl text-center text-muted-foreground lg:text-left text-pretty">
            Want to discuss an opportunity to create something great
            <br className="hidden lg:inline-block" /> I’m ready when you are.
          </p>
        </div>
        <a
          className="cursor-pointer rounded-lg w-full md:w-fit min-h-[60px] px-8 py-4 font-medium flex  items-center justify-center gap-2 bg-primary text-primary-foreground shadow hover:bg-primary/90"
          href="/Contact"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.934 12 3.09 5.732c-.481-1.635 1.05-3.147 2.665-2.628a53.872 53.872 0 0 1 12.64 5.963C19.525 9.793 21 10.442 21 12c0 1.558-1.474 2.207-2.605 2.933a53.87 53.87 0 0 1-12.64 5.963c-1.614.519-3.146-.993-2.665-2.628L4.934 12Zm0 0h4.9"
            ></path>
          </svg>
          Get in Touch
        </a>
      </section>
    </main>
  );
}
