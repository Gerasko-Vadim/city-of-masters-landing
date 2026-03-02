import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import HowItWorksClient from "@/components/HowItWorksClient";
import QRSection from "@/components/QRSection";
import HowItWorksMaster from "@/components/HowItWorksMaster";
import Reviews from "@/components/Reviews";
import MasterCTA from "@/components/MasterCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <HowItWorksClient />
      <QRSection />
      <HowItWorksMaster />
      <Reviews />
      <MasterCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
