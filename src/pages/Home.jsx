import Hero from "../sections/Hero";
import HeroRamadan from "../sections/PromoSection";
import MenuSection from "../sections/MenuSection";
import NutriSection from "../sections/NutriSection";
import Partners from "../sections/Partners";
import Works from "../sections/HowItWorks";
import HeroMessage from "../sections/HeroMessage";
import Testimonials from "../sections/Testimonials";
import CommunityMarquee from "../sections/CommunityMarquee";
import FavoritesSection from "../sections/FavoritesSection";

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
    <Testimonials />
    <FavoritesSection />
    <CommunityMarquee />
    </>
  );
}

export default Home;
