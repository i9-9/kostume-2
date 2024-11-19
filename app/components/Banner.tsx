// app/components/Banner.tsx
import React from "react";
import bannerData from "../data/banner";  // Correct import path for banner data

interface BannerProps {
  collection: "collection1" | "collection2";  // Specify the collection
  region: "Argentina" | "Worldwide";           // Specify the region
  externalLinks: Record<"Argentina" | "Worldwide", string>;
  text: string;                               // Text that will appear on the banner
  deviceType: "desktop" | "mobile";           // Device type (mobile or desktop)
}

const Banner: React.FC<BannerProps> = ({ collection, region, externalLinks, text, deviceType }) => {
  // Get the images based on collection and device type
  const images = bannerData[collection][deviceType];

  return (
    <div className="px-4 lg:px-8 my-4">
      {images.map((image, index) => (
        <a
          key={index}
          href={`${externalLinks[region]}/${image.link}`}  // Region-specific link
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
