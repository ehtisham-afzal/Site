import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full mt-32 min-h-screen">
      {/* <div className="w-full text-center">
        <h1 className="scroll-m-20 text-5xl font-extrabold text-primary/50 lg:text-6xl">
          I&apos;m <span className="text-primary">Ehtisham</span>
        </h1>
        <p className="text-lg font-medium my-2 w-full tracking-tight text-muted-foreground">
          I&apos;m a front-end developer, based in Pakistan. specializing in
          full-stack web applications using JavaScript, TypeScript, React,
          Next.js, and Node.js. I love building Web-Applications that are
          user-friendly, simple and delightful. ✨
        </p>
      </div> */}

      <section className="flex relative items-center justify-end w-full md:min-h-96 h-fit py-2">
        <div className="z-10 relative md:absolute left-0 top-0 md:w-8/12 flex flex-col gap-6 overflow-hidden">
          <>
            <h1 className="text-center text-[46px] font-extrabold leading-[120%] text-primary/50 md:text-left md:text-[80px]">
              I&apos;m <span className="text-primary">Ehtisham</span>
            </h1>
            <p className="text-center text-lg text-muted-foreground md:text-left md:text-2xl">
              I&apos;m a front-end developer, based in Pakistan. specializing in
              full-stack web applications using JavaScript, TypeScript, React,
              Next.js, and Node.js. I love building Web-Applications that are
              user-friendly, simple and delightful. ✨
            </p>
          </>
          <div className="mt-10 flex w-full flex-col items-center gap-4 md:flex-row">
            <Button size="lg" variant="outline" className="">
              <a target="_blank" href="https://read.cv/ehtisham">
                See my resume
              </a>
            </Button>
            <Button size="lg" variant="default" className="">
              <Link prefetch={false} href="/contact">
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
          className="hidden object-cover h-full w-4/12  backdrop-blur-sm bg-secondary/50 border absolute right-0 rounded-2xl md:block p-0"
        />
      </section>

      {/* <h2 className="text-3xl font-semibold leading-9 my-10">Projects</h2>
      <div className="grid sm:grid-flow-col sm:grid-cols-2 gap-2 w-full sm:h-45">
        <a className="w-full h-60 sm:h-44" href="/projects/LittleLemon">
          <Image
            // fill
            width={350}
            height={200}
            alt="Little-Lemon-ScreenShot"
            className="w-full h-52 sm:h-40 border rounded-lg object-cover object-top"
            src="/LettleLemonHero700px.jpg"
          />
          <h2 className="text-lg mt-1">LittleLemon</h2>
        </a>
        <a className="w-full h-60 sm:h-44" href="#/">
          <Image
            // fill
            width={350}
            height={200}
            alt="Under construction"
            className="w-full h-52 sm:h-40 border rounded-lg object-cover object-top"
            src="/page-under-construction.png"
          />
          <h2 className="text-lg mt-1">Under-construction</h2>
        </a>
      </div>

      <h2 className="my-12 text-3xl font-semibold leading-9 tracking-tight text-primary">
        TechStack
      </h2> */}
    </main>
  );
}
