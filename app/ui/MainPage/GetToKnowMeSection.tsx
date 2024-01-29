import AboutMePageCard from "../Cards/AboutMePageCard";
import TechStackPageCard from "../Cards/TechStackPageCard";

const GetToKnowMeSection = () => {
  return (
    <section className="w-full mt-20 md:mt-40">
      <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-5xl scroll-m-20">
        Get to know me
      </h2>

      <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
        <AboutMePageCard
          Title="About me"
          Description="Who i am and what i do"
          PageUrl="/Aboute"
          ImageUrl="/man-avatar.svg"
        />
        <TechStackPageCard
          Title="TeckStack"
          Description="The Dev Tools and app I use"
          PageUrl="/TechStack"
          ImageUrl="/Tools.png"
        />
      </div>
    </section>
  );
};

export default GetToKnowMeSection;
