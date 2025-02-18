import Events from "@/components/Events";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <LandingPage />
      <Events />
    </section>
  );
}
