import Hero from "../sections/Hero";
import HeroRamadan from "../sections/PromoSection";
import MenuSection from "../sections/MenuSection";
import NutriSection from "../sections/NutriSection";
import Partners from "../sections/Partners";
import Works from "../sections/HowItWorks";
import HeroMessage from "../sections/HeroMessage";

function Home() {
  return (
    <>
    <Hero />
    <MenuSection />
    <HeroRamadan />
    <NutriSection />
    <Partners />
    <Works />
    <HeroMessage />
    </>
  );
}

export default Home;
