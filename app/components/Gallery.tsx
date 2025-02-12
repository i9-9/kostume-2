import React, { useState, useEffect } from "react";
import images from "../data/gallery";
import Link from "next/link";

interface GalleryProps {
  link: string;
}

const Gallery: React.FC<GalleryProps> = ({ link }) => {
  const [imageSet, setImageSet] = useState(images.desktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImageSet(images.mobile);
      } else {
        setImageSet(images.desktop);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 px-4 lg:px-8">
      {imageSet.map((item, index) => {


        return (
          <div
            key={index}
            className={`relative group ${
              index < 2
                ? "md:col-span-2 md:row-span-1"
                : "md:col-span-1 md:row-span-2"
            }`}
          >
            <Link
              href={
                item.title === "SEAMM" || item.title === "KOSTÜME STORE"
                  ? item.link
                  : `${link}/${item.link}`
              }
            >
              <div
                className={`relative w-full h-0 ${
                  index < 2 ? "pb-[150%] lg:pb-[100%]" : "pb-[150%]"
                }`}
              >
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
                  typeof window !== "undefined" && window.innerWidth < 768
                    ? "bg-opacity-50 opacity-100"
                    : "bg-opacity-20 opacity-0 group-hover:opacity-100"
                }`}
              >
                <span
                  className={`text-white text-center font-bold ${
                    index < 2 ? "text-sm lg:text-lg" : "text-sm lg:text-base"
                  }`}
                >
                  {item.title}
                </span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
