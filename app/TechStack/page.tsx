import TechCard from "../ui/Cards/TechCard";
import PageHeader from "../ui/PageHeader";
import { AppLogos } from "../lib/Data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stack",
  description: "The dev tools, Softwares, I use in my daily work",
  openGraph: {
    title: "Tech Stack",
  },
};

const page = () => {
  return (
    <>
      {/* Header */}
      <PageHeader
        Title="Tech Stack"
        Description="The dev tools, Softwares, I use"
      />

      <h2 className="text-2xl font-bold tracking-tight  md:pl-8 text-foreground md:text-4xl scroll-m-20">
        Dev & Design
      </h2>
      <div className="grid w-full grid-cols-1 gap-4 px-px my-5 md:px-8 md:my-8 md:grid-cols-3">
        {AppLogos.map((logo) => (
          <TechCard
            key={logo.Name}
            ImageURL={logo.ImageURL}
            href={logo.href}
            Name={logo.Name}
            Tage={logo.Tage}
          />
        ))}
      </div>
    </>
  );
};

export default page;
