import React, { useState, useRef } from "react";
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
  const menuItemRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});

  const handleNav = () => setNav(!nav);

  const handleMouseEnter = (label: string, index: number) => {
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

  const links = menu.find((item) => item.label === activeMenu)?.links || [];
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
              width={20}
              alt="Close"
              height={20}
            />
          ) : (
            <Image
              src="/hamburger.svg"
              className="transition-transform duration-300 ease-in-out"
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

      {/* Menú móvil */}
      <div
        className={`lg:hidden fixed inset-0 bg-black z-10 overflow-hidden transition-max-height duration-300 ease-in-out ${
          nav ? "max-h-screen mt-16" : "max-h-0 mt-16"
        }`}
      >
        <ul className="flex flex-col h-full w-full pt-8">
          {menu.map((item, index) => (
            <li
              key={index}
              className={`border-b-[0.5px] mx-4 py-4 text-white ${
                index === 0 ? "border-t-[0.5px]" : ""
              }`}
            >
              {item.subcategories && item.subcategories.length > 0 ? (
                <>
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => handleSubmenuToggle(item.label)}
                  >
                    <p className="self-center">{item.label}</p>
                    {activeMenu === item.label ? (
                      <MdOutlineKeyboardArrowDown color="white" size={20} />
                    ) : (
                      <MdOutlineKeyboardArrowRight color="white" size={20} />
                    )}
                  </div>
                  <div
                    className={`transition-max-height duration-300 font-normal ease-in-out overflow-hidden ${
                      activeMenu === item.label ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <ul className="pl-4 mt-2">
                      {item.subcategories.map((sub, subIndex) => (
                        <li key={subIndex} className="py-2">
                          <Link
                            onClick={handleNav}
                            href={`${link}/${item.href}/${item.links[subIndex]}`}
                          >
                            {sub}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link onClick={handleNav} href={`${link}/${item.href}`}>
                  <div className="flex justify-between">
                    <p className="self-center">{item.label}</p>
                    <MdOutlineKeyboardArrowRight color="white" size={20} />
                  </div>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Menú Desktop */}
      <div className="hidden lg:flex lg:items-center lg:flex-grow font-bold lg:justify-center relative w-full h-fit left-0 lg:absolute">
        <ul className="flex items-center relative h-full w-full justify-center">
          {menu.map((item, index) => (
            <li
              key={index}
              className="font-bold relative px-4 py-2 hover:text-gray-400"
              onMouseEnter={() => handleMouseEnter(item.label, index)}
              onMouseLeave={handleMouseLeave}
              ref={(el) => (menuItemRefs.current[item.label] = el)}
            >
              <Link href={`${link}/${item.href}`}>{item.label}</Link>
            </li>
          ))}
        </ul>
        {currentSubcategories.length > 0 && activeMenu && (
          <div
          className="absolute top-full bg-black bg-opacity-90 p-4 flex flex-col items-start text-[10px] transition-transform duration-300 ease-in-out z-50 min-w-[150px] max-w-[300px]"
          onMouseEnter={handleSubmenuMouseEnter}
            onMouseLeave={handleSubmenuMouseLeave}
            style={{
              transform: submenuVisible ? "translateY(0)" : "translateY(-20px)",
              opacity: submenuVisible ? 1 : 0,
              pointerEvents: submenuVisible ? "auto" : "none",
              left: menuItemRefs.current[activeMenu]?.offsetLeft || 0,
              width: `${menuItemRefs.current[activeMenu]?.offsetWidth}px` || "auto",
              
            }}
          >
            <ul className="flex flex-col space-y-2 w-full">
              {currentSubcategories.map((sub: any, subIndex: any) => (
                <li key={subIndex}>
                  <Link
                    href={`${link}/${activeMenu.toLowerCase()}/${links[subIndex]}`}
                    className="text-white text-left font-normal hover:underline"
                  >
                    {sub}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;