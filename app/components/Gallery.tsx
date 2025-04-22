import React, { useState, useEffect } from "react";
import images from "../data/gallery";
import Link from "next/link";
import { motion } from "framer-motion";

interface GalleryProps {
  link: string;
}

const Gallery: React.FC<GalleryProps> = ({ link }) => {
  const [imageSet, setImageSet] = useState(images.desktop);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      const tablet = width >= 768 && width < 1280;
      
      setIsMobile(mobile);
      setIsTablet(tablet);
      
      if (mobile) {
        setImageSet(images.mobile);
      } else if (tablet) {
        setImageSet(images.tablet); // Use tablet-specific images
      } else {
        setImageSet(images.desktop); // Use desktop images for large screens
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to determine aspect ratio class based on device type
  const getAspectRatioClass = (item: typeof imageSet[0]) => {
    if (isMobile) {
      // Mobile aspect ratios
      if (item.aspectRatio === "4/5") return "aspect-[4/5]";
      return item.aspectRatio ? `aspect-[${item.aspectRatio}]` : "aspect-square";
    } else if (isTablet) {
      // Tablet aspect ratios - works well with current 4/5 ratio
      return item.aspectRatio ? `aspect-[${item.aspectRatio}]` : "aspect-square";
    } else {
      // Desktop - use a slightly wider portrait ratio than 4/5 to prevent side cropping
      return "aspect-[9/10]"; // Still portrait but slightly wider than 4/5
    }
  };

  // Animation variants for container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <motion.section 
      aria-label="Product Categories" 
      className={`px-4 ${isMobile 
        ? "flex flex-wrap justify-between" 
        : "grid grid-cols-2 md:grid-cols-4 gap-2"}`}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {imageSet.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className={`relative group ${
            isMobile 
              ? "w-[48%] mb-2" // Mobile: width with space between
              : index < 2
                ? "md:col-span-2" // Big cards span 2 columns on tablet+
                : "md:col-span-1" // Small cards span 1 column on tablet+
          }`}
        >
          <Link
            href={
              item.title === "SEAMM" || item.title === "KOSTÜME STORE"
                ? item.link
                : `${link}/${item.link}`
            }
            aria-label={`View ${item.title} collection`}
          >
            {/* Aspect Ratio Container */}
            <div
              className={`relative w-full ${getAspectRatioClass(item)}`}
            >
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="absolute inset-0 w-full h-full object-contain md:object-cover xl:object-contain"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label={`${item.title} video`}
                />
              ) : (
                <img
                  src={item.src}
                  alt={`KOSTÜME ${item.title} collection`}
                  className="absolute inset-0 w-full h-full object-contain md:object-cover xl:object-contain"
                  loading={index < 2 ? "eager" : "lazy"}
                  width={item.width}
                  height={item.height}
                />
              )}
            </div>
            {/* Overlay Text */}
            <motion.div
              className={`absolute inset-0 flex justify-center items-center bg-black transition-opacity duration-700 ${
                isMobile
                  ? "bg-opacity-50 opacity-100"
                  : "bg-opacity-20 opacity-0 group-hover:opacity-100"
              }`}
              whileHover={{ backgroundColor: "rgba(0,0,0,0.6)" }}
            >
              <motion.span
                className={`text-white text-center font-bold ${
                  index < 2 ? "text-sm lg:text-lg" : "text-sm lg:text-base"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.title}
              </motion.span>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Gallery;