import React from "react";
import bannerData from "../data/banner";
import { motion } from "framer-motion";

interface BannerProps {
  collection: "collection1" | "collection2" | "hero";
  region: "Argentina" | "Worldwide";
  externalLinks: Record<"Argentina" | "Worldwide", string>;
  deviceType: "desktop" | "mobile";
}

const Banner: React.FC<BannerProps> = ({ collection, region, externalLinks, deviceType }) => {
  const images = bannerData[collection][deviceType];

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

  const overlayVariants = {
    initial: { 
      opacity: 0,
      backgroundColor: "rgba(0, 0, 0, 0)" 
    },
    hover: { 
      opacity: 1,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <motion.section 
      aria-label="Featured Collection" 
      className="px-4 mt-1 mb-4"
      initial="hidden"
      animate="visible"
      variants={bannerVariants}
    >
      {images.map((image, index) => (
        <a
          key={index}
          href={image.link === "50ss26" ? `https://eshop.kostumeweb.net/${region === 'Argentina' ? 'ar' : 'us'}/50ss26` : `${externalLinks[region]}/${image.link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block"
          aria-label={`View ${image.title} collection`}
        >
          <div className="relative">
            <img 
              src={image.src} 
              alt={`KOSTÜME ${image.title} collection`} 
              className="w-full h-auto" 
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
