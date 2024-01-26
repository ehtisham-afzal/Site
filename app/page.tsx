import CallToActionComp from "../components/MainPage/CallToActionComp";
import GetToKnowMeSection from "../components/MainPage/GetToKnowMeSection";
import HeroSection from "../components/MainPage/HeroSection";
import SelectedWorkSection from "../components/MainPage/SelectedWorkSection";

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
