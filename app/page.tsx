import AboutMePageCard from "@/components/Cards/AboutMePageCard";
import ProjectCard from "@/components/Cards/ProjectCard";
import TechStackPageCard from "@/components/Cards/TechStackPageCard";
import { Button } from "@/components/ui/button";
import { Projects } from "@/lib/Data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full mt-36 min-h-screen md:mt-56">
      <section className="flex relative items-center justify-end w-full md:min-h-96 h-fit py-2">
        <div className="z-10 relative md:absolute left-0 top-0 md:w-7/12 flex flex-col gap-6 overflow-hidden text-pretty">
          <div>
            <Image
              className="w-24 h-24 rounded-full border-4 object-cover mb-3 md:hidden"
              width={80}
              height={80}
              src="/sham2.png"
              alt="Ehtisham"
            />
            <h1 className="text-[46px] font-extrabold leading-[120%] text-foreground/50 md:text-left md:text-[80px]">
              I&apos;m <span className="text-foreground">Ehtisham</span>
            </h1>
            <p className=" text-lg text-muted-foreground md:text-left md:text-2xl text-pretty">
              A front-end developer, based in Pakistan. specializing in
              full-stack web applications using JavaScript, TypeScript, React,
              Next.js, and Node.js. I love building Web-Applications that are
              user-friendly, simple and delightful. ✨
            </p>
          </div>
          <div className="mt-10 flex w-full flex-col items-center gap-4 md:flex-row">
            <Button
              size="lg"
              variant="default"
              className="w-full md:w-44 h-14 text-xl"
            >
              <a target="_blank" href="https://read.cv/ehtisham">
                See my resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="w-full md:w-44 h-14 text-xl"
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
          decoding="async"
          data-nimg="1"
          className="hidden object-cover h-full w-4/12 backdrop-blur-sm bg-secondary/50 border absolute right-0 rounded-2xl md:block p-0"
        />
      </section>

      <section className="w-full mt-20 md:mt-40">
        <h2 className=" text-foreground text-3xl md:text-5xl scroll-m-20 font-bold tracking-tight mb-12">
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
        <h2 className=" text-foreground text-3xl md:text-5xl scroll-m-20 font-bold tracking-tight mb-12">
          Get to know me
        </h2>

        <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
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
      <section className="relative z-10 my-28 flex flex-col items-center justify-between gap-10 lg:flex-row">
        <div>
          <h2 className="text-center text-3xl font-bold lg:text-left lg:text-5xl">
            Let’s work together
          </h2>
          <p className="mt-4 text-center text-xl text-muted-foreground lg:text-left text-pretty">
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
