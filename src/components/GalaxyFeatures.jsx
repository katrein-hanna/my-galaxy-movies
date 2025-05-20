import astronautImg from "../assets/images/FeaturesAstro.png";

export default function GalaxyFeatures() {
  const features = [
    {
      icon: "🌠",
      title: "Save Your Stars",
      description: "Keep your favorite movies in one glowing collection.",
      float: "animate-float1",
    },
    {
      icon: "🪐",
      title: "Organize by Orbit",
      description: "Wishlist, Favorites, and Watched – all in your control.",
      float: "animate-float",
    },
    {
      icon: "🚀",
      title: "Launch Anytime",
      description: "Your list is always saved — across galaxies (devices).",
      float: "animate-float2",
    },
    {
      icon: "👨‍🚀",
      title: "Create an Account",
      description: "Sign up and suit up for your galactic movie journey.",
      float: "animate-float",
    },
    {
      icon: "🔭",
      title: "Explore the Universe",
      description: "Browse and search movies across genres and ratings.",
      float: "animate-float1",
    },
    {
      icon: "🌌❤️",
      title: "Add to Your Galaxy",
      description:
        "Wishlist or favorite movies to build your own space collection.",
      float: "animate-float2",
    },
  ];

  return (
    <section className="relative w-full h-[800px] bg-primary text-bright overflow-hidden ">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-glowing  z-10 relative">
        Discover Your Movie Galaxy
      </h2>

      <div className="relative w-full h-full flex items-center justify-center">
        {/* Central Astronaut Image */}
        <img
          src={astronautImg}
          alt="Astronaut"
          className="w-64 h-64 object-contain z-10"
        />

        {/* Oval orbiting cards */}
        <div className="absolute w-full h-[500px]  ">
          {features.map((feature, index) => {
            const angle = (index / features.length) * 2 * Math.PI;
            const radiusX = 550;
            const radiusY = 220;
            const x = radiusX * Math.cos(angle);
            const y = radiusY * Math.sin(angle);
            return (
              <div
                key={index}
                className="absolute w-56 h-56 flex flex-col items-center justify-center bg-highlights/10 backdrop-blur-md border border-highlights text-center text-sm shadow-lg rounded-full hover:scale-105 transition px-5 animate-float"
                style={{
                  top: `calc(50% + ${y}px - 128px)`, // 128 = half of 256px
                  left: `calc(50% + ${x}px - 128px)`,
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                <div className="text-3xl mb-2 ">{feature.icon}</div>
                <h3 className="text-glowing font-semibold text-xl mb-1">
                  {feature.title}
                </h3>
                <p className="text-bright/90 text-md font-medium">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
