import React, { useState, useEffect } from "react";
import images from "../data/gallery";
import Link from "next/link";

interface GalleryProps {
  link: string;
}

const Gallery: React.FC<GalleryProps> = ({ link }) => {
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

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 px-4 lg:px-8">
      {/* New large image */}
      <div className="col-span-2 md:col-span-4 md:row-span-1 relative group">
        <Link href={link}>
          <div className={`relative w-full h-0 ${isMobile ? 'pb-[177.78%]' : 'pb-[56.25%]'}`}>
            <img
              src={isMobile ? "/48_mobile.jpg" : "/48_desktop.jpg"}
              alt="#48SS25 Collection"
              className={`absolute inset-0 w-full h-full object-cover ${isMobile ? 'object-center' : 'object-top'}`}
            />
          </div>
          <div className={`absolute inset-0 flex justify-center items-center bg-black transition-opacity duration-700 ${
            isMobile ? "bg-opacity-50 opacity-100" : "bg-opacity-20 opacity-0 group-hover:opacity-100"
          }`}>
            <span className="text-white text-center font-bold text-sm lg:text-lg">
              #48SS25
            </span>
          </div>
        </Link>
      </div>

      {/* Remaining gallery items */}
      {imageSet.slice(2).map((item, index) => (
        <div
          key={index}
          className="relative group md:col-span-1 md:row-span-2"
        >
          <Link
            href={
              item.title === "SEAMM" || item.title === "KOSTÜME STORE"
                ? item.link
                : `${link}/${item.link}`
            }
          >
            <div className="relative w-full h-0 pb-[150%]">
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </div>
            <div
              className={`absolute inset-0 flex justify-center items-center bg-black transition-opacity duration-700 ${
                isMobile
                  ? "bg-opacity-50 opacity-100"
                  : "bg-opacity-20 opacity-0 group-hover:opacity-100"
              }`}
            >
              <span className="text-white text-center font-bold text-sm lg:text-base">
                {item.title}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
