import Category from "./_components/Category";
import Featured from "./_components/Featured";
import HeroSection from "./_components/HeroSection";
import Services from "./_components/Services";
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
