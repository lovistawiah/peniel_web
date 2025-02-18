import Events from "@/components/Events";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import VisionMission from "@/components/VisionMission";

export default function Home() {
  return (
    <section>
      <Navbar />
      <LandingPage />
      <Events />
      <VisionMission />
    </section>
  );
}
