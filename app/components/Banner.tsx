import React from "react";
import bannerData from "../data/banner";

interface BannerProps {
  collection: "collection1" | "collection2";
  region: "Argentina" | "Worldwide";
  externalLinks: Record<"Argentina" | "Worldwide", string>;
  text: string;
  deviceType: "desktop" | "mobile";
}

const Banner: React.FC<BannerProps> = ({ collection, region, externalLinks, text, deviceType }) => {
  const images = bannerData[collection][deviceType];

  return (
    <div className="px-4 mt-1 mb-4">
      {images.map((image, index) => (
        <a
          key={index}
          href={`${externalLinks[region]}/${image.link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <div className="relative">
            <img src={image.src} alt={image.title} className="w-full h-auto" />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10">
              <span className="text-white text-center font-bold text-sm">
                {text}
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Banner;
