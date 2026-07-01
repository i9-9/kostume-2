import React, { useState, useEffect } from "react";
import images from "../data/gallery";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getEshopBase } from "../data/countries";

interface GalleryProps {
  region: string;
}

const Gallery: React.FC<GalleryProps> = ({ region }) => {
  const [imageSet, setImageSet] = useState(images.desktop);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setImageSet(mobile ? images.mobile : images.desktop);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseUrl = getEshopBase(region);

  const getProductUrl = (productPath: string) => {
    if (productPath.startsWith('http')) return productPath;
    return `${baseUrl}/${productPath}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  const largeCards = imageSet.slice(0, 2);
  const smallCards = isMobile ? images.mobile.slice(0, 3) : images.desktop.slice(2, 5);

  const renderCard = (item: any, index: number, isLarge: boolean = false) => (
    <motion.div key={index} variants={itemVariants} className="relative group">
      <Link href={getProductUrl(item.link)} aria-label={`View ${item.title} collection`}>
        <div className="relative w-full aspect-[4/5]">
          {item.type === "video" ? (
            <video
              src={item.src}
              className="min-w-full min-h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              aria-label={`${item.title} video`}
            />
          ) : (
            <Image
              src={item.src}
              alt={`KOSTÜME ${item.title} collection`}
              className="min-w-full min-h-full object-cover"
              loading="lazy"
              width={item.width}
              height={item.height}
              sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
              quality={85}
            />
          )}
        </div>
      </Link>
    </motion.div>
  );

  return (
    <motion.section 
      aria-label="Product Categories" 
      className="px-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {!isMobile && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          {largeCards.map((item, index) => renderCard(item, index, true))}
        </div>
      )}
      <div className={`grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-3"}`}>
        {smallCards.map((item, index) => renderCard(item, index, false))}
      </div>
    </motion.section>
  );
};

export default Gallery;
