import Contact from "@/components/Contact";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import NotableSpeakers from "@/components/NotableSpeakers";
import SeniorPastor from "@/components/SeniorPastor";
import VisionMission from "@/components/VisionMission";
import WordsOfGrace from "@/components/WordsOfGrace";

export default function Home() {
  return (
    <section>
      <LandingPage />
      <Events />
      <VisionMission />
      <WordsOfGrace />
      <SeniorPastor />
      <NotableSpeakers />
      <Contact />
      <Footer />
    </section>
  );
}
