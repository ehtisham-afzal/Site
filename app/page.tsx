import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full relative mt-28 overflow-hidden">
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

      <section className="relative flex items-center justify-end pb-32">
        <div className="relative left-0 z-10 flex w-full flex-col gap-6 md:absolute md:w-8/12 md:gap-10">
          <div>
            <h1 className="text-center text-[46px] font-extrabold leading-[120%] text-onyx/60 dark:text-dark-gray md:text-left md:text-[80px]">
              I&apos;m{" "}
              <span className="text-onyx dark:text-white">Ehtisham</span>
            </h1>
            <p className="text-center text-lg text-onyx/60 dark:text-dark-gray md:text-left md:text-2xl">
              I&apos;m a front-end developer, based in Pakistan. specializing in
              full-stack web applications using JavaScript, TypeScript, React,
              Next.js, and Node.js. I love building Web-Applications that are
              user-friendly, simple and delightful. ✨
            </p>
          </div>
          <div className="mt-10 flex w-full flex-col items-center gap-4 md:flex-row">
            <a
              className="cursor-pointer rounded-lg flex justify-center items-center bg-dark-gradient min-h-[60px] px-8 py-4 primary-button hover:translate-y-[-1px] text-white dark:text-light-gray hover:text-white active:translate-y-[1px] font-medium transition duration-300 w-full md:w-fit"
              target="_blank"
              href="https://read.cv/eihab"
            >
              See my resume
            </a>
            <a
              className="cursor-pointer rounded-lg flex justify-center items-center bg-faint-white text-onyx dark:bg-onyx dark:text-light-gray min-h-[60px] px-8 py-4 dark:hover:text-white dark:hover:bg-medium-gray/20 hover:bg-light-gray/40 transition duration-300 active:translate-y-[1px] font-medium w-full md:w-fit"
              href="/contact"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="relative me-[-120px] mt-6 hidden h-[540px] w-[540px] select-none overflow-hidden rounded-full md:block">
          <picture
            className="relative z-[1] block h-full w-full"
            style={{ opacity: 1 }}
          >
            <div className="portrait-radient absolute h-[540px] w-[540px] opacity-100 transition"></div>
            <Image
              src="/sham2.png"
              alt="Ehtisham Afzal"
              width="540"
              height="540"
              decoding="async"
              data-nimg="1"
              className="absolute bottom-1 left-1/2 -z-10 -translate-x-1/2"
            />
          </picture>
        </div>
      </section>

      <h2 className="text-3xl font-semibold leading-9 my-10">Projects</h2>
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
      </h2>
    </main>
  );
}
