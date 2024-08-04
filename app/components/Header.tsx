import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";
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

  const handleSubmenuToggle = (label: string) => {
    setActiveMenu(activeMenu === label ? null : label);
  };

  const currentSubcategories =
    menu.find((item) => item.label === activeMenu)?.subcategories || [];

  return (
    <div className="max-w-full z-20 items-center pr-4 ease-in duration-300 py-2 h-fit bg-black flex font-semibold justify-between lg:justify-start text-extraxs">
      <div className="flex justify-between items-center w-full lg:w-auto">
        <div onClick={handleNav} className="pl-4 z-10 block lg:hidden">
          {nav ? (
            <Image
              src="/close.svg"
              className="transition-transform duration-300 ease-in-out"
              style={{ color: "#ffffff" }}
              width={20}
              alt="Close"
              height={20}
            />
          ) : (
            <Image
              src="/hamburger.svg"
              className="transition-transform duration-300 ease-in-out"
              style={{ color: "#ffffff" }}
              width={20}
              alt="Close"
              height={20}
            />
          )}
        </div>
        <div className="flex-grow flex lg:justify-start h-full self-center w-full lg:w-fit justify-center">
          <Link href="/">
            <Image
              src="/kostume_logo.svg"
              width={125}
              height={30}
              alt="Kostume"
              className="py-2 lg:ml-4"
            />
          </Link>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-black z-10 overflow-hidden transition-max-height duration-300 ease-in-out ${
          nav ? "max-h-screen mt-16" : "max-h-0 mt-16"
        }`}
      >
        <ul className="flex flex-col lg:items-center lg:justify-center h-full w-full pt-8">
          {menu.map((item, index) => (
            <li
              key={index}
              className={`lg:hover:text-gray-500 border-b mx-4 py-4 text-white ${index === 0 ? "border-t" : ""}`}
            >
              {item.subcategories && item.subcategories.length > 0 ? (
                <>
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => handleSubmenuToggle(item.label)}
                  >
                    <p className="self-center text-white">{item.label}</p>
                    {activeMenu === item.label ? (
                      <MdOutlineKeyboardArrowDown color="white" size={20} />
                    ) : (
                      <MdOutlineKeyboardArrowRight color="white" size={20} />
                    )}
                  </div>
                  {activeMenu === item.label && (
                    <ul className="pl-4 mt-2">
                      {item.subcategories.map((sub, subIndex) => (
                        <li key={subIndex} className="py-2">
                          <Link onClick={handleNav} href={`${link}/${item.href}/${sub.toLowerCase().replace(/ /g, "-")}`}>
                            {sub}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link onClick={handleNav} href={`${link}/${item.href}`}>
                  <div className="flex justify-between">
                    <p className="self-center text-white">{item.label}</p>
                    <MdOutlineKeyboardArrowRight color="white" size={20} />
                  </div>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden lg:flex lg:items-center lg:flex-grow lg:justify-center relative w-full h-fit left-0 lg:absolute">
        <ul className="flex items-center relative h-full">
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
            className="absolute top-full left-0 w-full bg-black bg-opacity-90 p-4 grid gap-4 grid-cols-3 text-[10px] transition-transform duration-300 ease-in-out z-50"
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
            {currentSubcategories.map((sub: any, subIndex: any) => (
              <Link
                key={subIndex}
                href={`${link}/${activeMenu.toLowerCase()}/${sub.toLowerCase().replace(/ /g, "-")}`}
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