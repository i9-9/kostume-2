import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import Image from "next/image";
import { MenuItemProps } from "../home/page";

interface HeaderProps {
  link: string;
  menu: MenuItemProps[];
}

const Header: React.FC<HeaderProps> = ({ link, menu }) => {
  const [nav, setNav] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const handleNav = () => setNav(!nav);

  const handleMouseEnter = (label: string) => {
    setActiveMenu(label);
    setSubmenuVisible(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!submenuVisible) {
        setActiveMenu(null);
      }
    }, 100);
  };

  const handleSubmenuMouseEnter = () => setSubmenuVisible(true);
  const handleSubmenuMouseLeave = () => {
    setSubmenuVisible(false);
    setTimeout(() => {
      if (!submenuVisible) {
        setActiveMenu(null);
      }
    }, 100);
  };

  const currentSubcategories =
    menu.find((item) => item.label === activeMenu)?.subcategories || [];

  return (
    <div className="max-w-full z-20 items-center mx-4 ease-in duration-300 py-2 h-fit  bg-black flex font-semibold justify-between lg:justify-start text-extraxs">
      <div className="flex justify-between items-center w-full lg:w-auto lg:mr-auto">
        <div onClick={handleNav} className="z-10 block lg:hidden">
          {nav ? (
            <RiCloseFill
              className="transition-transform duration-300 ease-in-out"
              style={{ color: "#ffffff" }}
              size={24}
            />
          ) : (
            <HiOutlineMenuAlt4
              className="transition-transform duration-300 ease-in-out"
              style={{ color: "#ffffff" }}
              size={24}
            />
          )}
        </div>
        <div className="flex-grow lg:flex lg:items-center lg:justify-start">
          <Link href="/">
            <Image
              src="/kostume_logo.svg"
              width={150}
              height={30}
              alt="Kostume"
              className="py-2 mx-auto lg:ml-4"
            />
          </Link>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-black z-10 overflow-hidden transition-max-height duration-300 ease-in-out ${
          nav ? "max-h-screen mt-16" : "max-h-0 mt-16"
        }`}
      >
        <ul className="flex flex-col lg:items-center lg:justify-center h-full w-full">
          {menu.map((item, index) => (
            <li
              key={index}
              className={` hover:text-gray-500 border-b mx-4 py-4 ${
                index === menu.length - 1 ? "text-yellow-400" : "text-white"
              }`}
            >
              <Link onClick={handleNav} href={`${link}/${item.href}`}>
                <div className="flex justify-between">
                  <p>{item.label}</p>
                  <MdOutlineKeyboardArrowRight color="white" size={20} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden lg:flex lg:items-center lg:flex-grow lg:justify-center relative">
        <ul className="flex items-center relative">
          {menu.map((item, index) => (
            <li
              key={index}
              className="relative px-4 py-2 hover:text-gray-500"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={`${link}/${item.href}`}>{item.label}</Link>
            </li>
          ))}
        </ul>
        {currentSubcategories.length > 0 && activeMenu && (
          <div
            className="absolute top-full w-full left-0 right-0 bg-black bg-opacity-90 p-4 grid gap-4 grid-cols-3 text-[8px] transition-transform duration-300 ease-in-out z-50"
            onMouseEnter={handleSubmenuMouseEnter}
            onMouseLeave={handleSubmenuMouseLeave}
            style={{
              transform: submenuVisible ? "translateY(0)" : "translateY(-100%)",
              visibility: submenuVisible ? "visible" : "hidden",
              opacity: submenuVisible ? 1 : 0,
              transition:
                "transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
            }}
          >
            {currentSubcategories.map((sub, subIndex) => (
              <Link
                key={subIndex}
                href={`${link}/${activeMenu.toLowerCase()}/${sub
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
                className="text-white font-normal hover:underline"
              >
                {sub}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
