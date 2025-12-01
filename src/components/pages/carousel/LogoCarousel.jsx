import { motion } from "framer-motion";

const logos = [
  "/logos/cleartax.png",
  "/logos/bookmyshow.png",
  "/logos/bmw.png",
  "/logos/apollo.png",
  "/logos/bookmyshow.png",
  "/logos/bmw.png",
  "/logos/apollo.png",
  "/logos/bookmyshow.png",
  "/logos/bmw.png",
];

const LogoCarousel = () => {
  return (
    <div className="w-full overflow-hidden py-6 bg-gradient-to-r from-[#f5f0ff] to-white">

      <div className="flex items-center space-x-10 group">
        {/* Duplicate twice for seamless infinite scroll */}
        {[...logos, ...logos].map((logo, i) => (
          <motion.img
            key={i}
            src={logo}
            alt="client-logo"
            className="h-10 w-auto opacity-90 cursor-pointer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.25 }}
          />
        ))}

      </div>

      {/* Animation */}
      <style>{`
        .group {
          animation: scroll 18s linear infinite;
        }
        .group:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </div>
  );
};

export default LogoCarousel;
