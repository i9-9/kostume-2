'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const menuItems = [
  { href: "47aw24/", label: "#47AW24", subcategories: ['DESCUBRIR #47AW24'] },
  { href: "descubrir1/", label: "#46SS24", subcategories: ['DISCOVER #46SS24'] },
  { href: "hmen/", label: "MEN", subcategories: ['T-SHIRTS', 'SHIRTS', 'PANTS & SKIRTS', 'COATS', 'JUMPSUITS', 'ACCESSORIES'] },
  { href: "women/", label: "WOMEN", subcategories: ['TOPS & T-SHIRTS', 'SHIRTS', 'DRESSES & JUMPSUITS', 'PANTS & SKIRTS', 'COATS', 'BODIES & SWIMSUITS', 'ACCESSORIES'] },
  { href: "wild-object/", label: "WILD OBJECT", subcategories: ['DISCOVER WILD OBJECT'] },
  { href: "re-con-figure/", label: "RE.CON.FIGURE", subcategories: ['DISCOVER RE.CON.FIGURE'] },
  { href: "peces-raros-kostume/descubrir-pr-k/", label: "PECES RAROS", subcategories: ['DISCOVER PR . K'] },
];

interface HeaderProps {
  link: string;
}

const Header: React.FC<HeaderProps> = ({ link }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <div className="w-full z-20 ease-in duration-300 h-fit pt-2 pb-2 lg:pb-0 bg-black flex font-semibold justify-between lg:justify-center items-center text-extraxs">
      <div className="flex justify-between items-center w-full lg:w-auto px-4">
        <div onClick={handleNav} className="z-10 block lg:hidden">
          {nav ? (
            <RiCloseFill className="transition-transform duration-300 ease-in-out" style={{ color: "#ffffff" }} size={24} />
          ) : (
            <HiOutlineMenuAlt4 className="transition-transform duration-300 ease-in-out" style={{ color: "#ffffff" }} size={24} />
          )}
        </div>
        <div className="flex-grow text-center">
          <Link href="/">
            <Image src="/logo.svg" width={150} height={30} alt="Kostume" className="py-2 lg:py-1 lg:pb-4 mx-auto" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-black z-10 overflow-hidden transition-max-height duration-300 ease-in-out ${nav ? 'max-h-screen mt-16' : 'max-h-0 mt-16'}`}>
        <ul className="flex flex-col lg:items-center lg:justify-center h-full w-full">
          {menuItems.map((item, index) => (
            <li key={index} className={`p-4 hover:text-gray-500 border-b w-full ${index === menuItems.length - 1 ? 'text-yellow-400' : 'text-white'}`}>
              <Link onClick={handleNav} href={`${link}/${item.href}`}>
                <div className='flex justify-between w-full'>
                  <p>{item.label}</p>
                  <MdOutlineKeyboardArrowRight color='white' size={20} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex lg:flex-row lg:items-center">
        <ul className="flex items-center">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`relative px-4 py-2 hover:text-gray-500 border-none ${index === menuItems.length - 1 ? 'text-yellow-400' : 'text-white'}`}
            >
              <Link href={`${link}/${item.href}`}>{item.label}</Link>
              {/* Submenu */}
              {item.subcategories && (
                <ul className="hidden absolute left-0 top-full bg-black shadow-lg group-hover:block">
                  {item.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex} className="hover:text-gray-500 px-4 py-2">
                      <Link href={`${link}/${item.href}/${subcategory.toLowerCase().replace(/\s/g, '-')}`}>
                        {subcategory}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
