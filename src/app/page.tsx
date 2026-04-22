import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ClientLogos from "@/components/ClientLogos";
import Portfolio from "@/components/Portfolio";
import SocialSection from "@/components/SocialSection";
import AboutUs from "@/components/AboutUs";
import QnA from "@/components/QnA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <ClientLogos />
      <Portfolio />
      <SocialSection />
      <AboutUs />
      <QnA />
      <ContactForm />
      <Footer />
    </main>
  );
}
