import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AppLogos } from "@/lib/Data";
import MainPageNav from "@/components/MainPageNav";

export default function Home() {
  return (
    <main className="w-full mt-28 ">
      <div className="w-full gap-5 flex">
        <Image
          width={80}
          height={80}
          alt="Ehtisham Afzal"
          src="/sham2.jpg"
          className="object-contain object-center border-2 p-0.5 rounded-full "
        />
        <div className="w-fit grid grid-flow-row grid-rows-2">
          <h1 className="text-3xl md:text-4xl font-bold">Ehtisham Afzal.</h1>
          <h2 className="text-neutral-500 text-xl font-semibold leading-7">
            Web Developer
          </h2>
        </div>
      </div>
      <p className="text-lg font-medium mt-6 w-full">
        I&apos;m a front-end developer, based in Pakistan. specializing in
        full-stack web applications using JavaScript, TypeScript, React,
        Next.js, and Node.js. I love building Web-Applications that are
        user-friendly, simple and delightful. ✨
      </p>
      <MainPageNav />

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

      <h2 className="my-12 text-3xl font-semibold leading-9 tracking-tight">
        TechStack
      </h2>
      <div className="self-center grid flex-wrap w-full grid-flow-dense grid-cols-4 sm:grid-cols-5 gap-2 justify-stretch h-fit mb-10">
        {AppLogos.map((logo) => (
          <TooltipProvider key={logo.Name}>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  width={1}
                  height={1}
                  alt={`${logo.Name} Logo`}
                  className="border w-full h-full p-4 object-cover rounded-lg backdrop-filter bg-background/50 border-primary shadow-sm hover:shadow-md"
                  src={logo.Logo}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{logo.Name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </main>
  );
}
