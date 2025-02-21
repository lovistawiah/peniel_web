import Contact from "@/components/Contact";
import Events from "@/components/Events";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import NotableSpeakers from "@/components/NotableSpeakers";
import SeniorPastor from "@/components/SeniorPastor";
import VisionMission from "@/components/VisionMission";
import WordsOfGrace from "@/components/WordsOfGrace";

export default function Home() {
  return (
    <section>
      <Navbar />
      <LandingPage />
      <Events />
      <VisionMission />
      <WordsOfGrace />
      <SeniorPastor />
      <NotableSpeakers />
      <Contact />
    </section>
  );
}
