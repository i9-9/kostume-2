import React from "react";
import bannerData from "../data/banner";
import { motion } from "framer-motion";
import { getEshopBase } from "../data/countries";

interface BannerProps {
  collection: "collection1" | "collection2" | "hero";
  region: string;
  deviceType: "desktop" | "mobile";
}

const Banner: React.FC<BannerProps> = ({ collection, region, deviceType }) => {
  const images = bannerData[collection][deviceType];
  const baseUrl = getEshopBase(region);

  const bannerVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const isHero = collection === "hero";

  return (
    <motion.section 
      aria-label="Featured Collection" 
      className={isHero ? "w-full h-[calc(100dvh-5.5rem)] overflow-hidden mb-4" : "px-4 mt-1 mb-4"}
      initial="hidden"
      animate="visible"
      variants={bannerVariants}
    >
      {images.map((image, index) => (
        <a
          key={index}
          href={`${baseUrl}/${image.link}`}
          target="_blank"
          rel="noopener noreferrer"
          className={isHero ? "relative block h-full" : "relative block"}
          aria-label={`View ${image.title} collection`}
        >
          <div className={isHero ? "relative h-full w-full overflow-hidden" : "relative"}>
            <img 
              src={image.src} 
              alt={`KOSTÜME ${image.title} collection`} 
              className={isHero ? "w-full h-full object-cover object-center" : "w-full h-auto"} 
              loading="eager" 
              width={image.width}
              height={image.height}
            />
          </div>
        </a>
      ))}
    </motion.section>
  );
};

export default Banner;
