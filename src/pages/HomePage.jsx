import HeroSection from "../components/HeroSection";
import GalaxyFeatures from "../components/GalaxyFeatures";
import MoviesCarousel from "../components/MoviesCarousel";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <div className="lg:relative   w-full h-20 flex items-center justify-center overflow-hidden lg:-mt-5 ">
        <div className="absolute w-3/4 h-2 bg-gradient-to-r from-transparent via-bright/60 to-transparent blur-sm" />

        {/* <div className="absolute top-1/2 transform -translate-y-1/2 animate-shoot">
          <span className="text-glowing text-2xl">🌠</span>
        </div> */}
      </div>

      <GalaxyFeatures />
      <MoviesCarousel />
    </>
  );
}
