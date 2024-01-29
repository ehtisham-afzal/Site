import CallToActionComp from "./ui/MainPage/CallToActionComp";
import GetToKnowMeSection from "./ui/MainPage/GetToKnowMeSection";
import HeroSection from "./ui/MainPage/HeroSection";
import SelectedWorkSection from "./ui/MainPage/SelectedWorkSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen mt-36 md:mt-56">
      <HeroSection />
      <SelectedWorkSection />
      <GetToKnowMeSection />
      <CallToActionComp />
    </main>
  );
}
