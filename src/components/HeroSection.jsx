import astronaut from "../assets/images/HeroAstro.png";

export default function HeroSection() {
  return (
    <>
      {/* Twinkling stars background */}
      <div className="absolute inset-0 bg-[url('/stars.png')] bg-repeat opacity-10 pointer-events-none z-0  animate-twinkle" />

      <section className="container mx-auto relative w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-20   text-bright overflow-hidden ">
        <div className="z-10 max-w-xl space-y-5">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Explore Your <span className="text-glowing">Movie Universe</span>
          </h1>
          <p className="text-lg text-bright/80">
            Build your own galaxy of favorites, add movies to your wishlist,
            watched list, and more.
          </p>

          <div className="flex gap-4">
            <button className="bg-glowing text-primary font-semibold px-6 py-3 rounded-lg hover:bg-highlights hover:text-bright transition">
              Browse Movies
            </button>
            <button className="border border-glowing text-glowing px-6 py-3 rounded-lg hover:bg-glowing hover:text-primary transition">
              Login to Start
            </button>
          </div>
        </div>

        <div className="z-10 mt-10 md:mt-0">
          <img
            src={astronaut}
            alt="Floating astronaut"
            className="w-[300px] md:w-[600px] animate-float"
          />
        </div>
      </section>
    </>
  );
}
