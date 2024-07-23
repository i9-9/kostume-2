import Image from "next/image";
import React from "react";
import images from "../data/gallery";
import Link from "next/link";
import { Region } from "../home/page";

interface GalleryProps {
  link: string
}

const Gallery: React.FC<GalleryProps> = ({ link }) => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 px-8">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative group ${
            index < 2
              ? "md:col-span-2 md:row-span-1" 
              : "md:col-span-1 md:row-span-2" 
          }`}
        >
          <Link href={`${link}/${image.link}`}>
            <div
              className={`relative w-full h-0 ${
                index < 2 ? "pb-[150%] lg:pb-[100%]" : "pb-[150%]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.title}
                layout="fill"
                objectFit="cover"
                className="transition duration-300 group-hover:opacity-50 group-hover:brightness-110"
              />
            </div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 bg-white bg-opacity-50 group-hover:cursor-pointer">
              <span className={`text-white ${
                index < 2 ? "text-5xl" : "text-2xl"
              } `}>{image.title}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
