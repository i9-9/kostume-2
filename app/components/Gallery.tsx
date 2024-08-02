import Image from "next/image";
import React from "react";
import images from "../data/gallery";
import Link from "next/link";

interface GalleryProps {
  link: string;
}

const Gallery: React.FC<GalleryProps> = ({ link }) => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 px-4 lg:px-8">
      {images.map((item, index) => (
        <div
          key={index}
          className={`relative group ${
            index < 2
              ? "md:col-span-2 md:row-span-1"
              : "md:col-span-1 md:row-span-2"
          }`}
        >
          <Link href={item.title === "SEAMM" || item.title === "KOSTÜME STORE" ? item.link : `${link}/${item.link}`}>
              <div
                className={`relative w-full h-0 ${
                  index < 2 ? "pb-[150%] lg:pb-[100%]" : "pb-[150%]"
                }`}
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:opacity-50 group-hover:brightness-110"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%' }}
                  />
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition duration-300 group-hover:opacity-50 group-hover:brightness-110"
                  />
                )}
              </div>
              <div className="absolute inset-0 flex justify-center items-center opacity-100 lg:opacity-0 group-hover:opacity-100 transition duration-300 bg-white bg-opacity-50 group-hover:cursor-pointer">
                <span
                  className={`text-white text-center font-bold ${
                    index < 2 ? "text-lg lg:text-xl" : "text-lg"
                  }`}
                >
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
