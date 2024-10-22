import Category from "./_components/Category";
import Featured from "./_components/Featured";
import HeroSection from "./_components/HeroSection";
import Services from "./_components/Services";
import WhatsAppButton from "./_components/WhatsAppButton";
import 'leaflet/dist/leaflet.css';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Featured/>
      <Services/>
      <Category/>
    </>
  );
}
