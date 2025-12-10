import React from "react";

interface TextBannerProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  padding?: string;
  className?: string;
}

const TextBanner: React.FC<TextBannerProps> = ({
  text,
  backgroundColor = "bg-[#070707]",
  textColor = "text-white",
  padding = "py-12",
  className = "",
}) => {
  return (
    <div
      className={`flex justify-center items-center text-center ${backgroundColor} ${textColor} ${padding} ${className}`}
      style={{ minHeight: "280px" }}
    >
      <a href="https://eshop.kostumeweb.net/sale/" className="hidden sm:flex flex-col justify-center items-center">
        <div className="flex items-center justify-center">
          <div className="text-xl font-light px-2 pl-1">( This is )</div>
          <div className="text-8xl font-bold px-2 pl-1">SALE</div>
          <div className="text-lg font-light">( 30% en items seleccionados )</div>
          <div className="text-lg font-light px-2 pl-1">( Solo Online )</div>
        </div>
      </a>

      <a href="https://eshop.kostumeweb.net/sale/" className="block sm:hidden">
        <div className="flex items-center justify-center">
          <div className="text-md font-light px-2 pl-1">( This is )</div>
          <div className="text-6xl font-bold px-2 pl-1">SALE</div>
          <div className="text-md font-light px-2 pl-1">( Solo Online )</div>
        </div>
        <div className="text-md font-light mt-12">( 30% en items seleccionados )</div>
      </a>
    </div>
  );
};

export default TextBanner;
