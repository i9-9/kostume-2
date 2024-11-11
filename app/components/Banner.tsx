import React from "react";
import banner from "../data/banner";

interface BannerProps {
  region: "Argentina" | "Worldwide";
  externalLinks: Record<"Argentina" | "Worldwide", string>;
}

const Banner: React.FC<BannerProps> = ({ region, externalLinks }) => {
  return (
    <div className="px-4 lg:px-8 my-4">
      {/* Mobile view */}
      <div className="block lg:hidden">
        {banner.mobile.map((image, index) => (
          <a
            key={index}
            href={`${externalLinks[region]}/${image.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
          >
            <img src={image.src} alt={image.title} className="w-full h-auto" />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <span className="text-white text-center font-bold text-sm">
                {image.title}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden lg:block">
        {banner.desktop.map((image, index) => (
          <a
            key={index}
            href={`${externalLinks[region]}/${image.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <img src={image.src} alt={image.title} className="w-full h-auto" />
            {/* Overlay with text, visible on hover */}
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-700">
              <span className="text-white text-center font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {image.title}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Banner;
