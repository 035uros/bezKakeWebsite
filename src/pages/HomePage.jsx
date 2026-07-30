import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import Pricing from "../components/Pricing";
import Referral from "../components/Referral";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <Referral />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default HomePage;
