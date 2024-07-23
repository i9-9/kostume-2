'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { TbMenu } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const menuItems = [
  { href: "https://eshop.kostumeweb.net/47aw24/", label: "#47AW24" },
  { href: "https://eshop.kostumeweb.net/descubrir1/", label: "#46SS24" },
  { href: "https://eshop.kostumeweb.net/men/", label: "MEN" },
  { href: "https://eshop.kostumeweb.net/women/", label: "WOMEN" },
  { href: "https://eshop.kostumeweb.net/wild-object/", label: "WILD OBJECT" },
  { href: "https://eshop.kostumeweb.net/re-con-figure/", label: "RE.CON.FIGURE" },
  { href: "https://eshop.kostumeweb.net/peces-raros-kostume/descubrir-pr-k/", label: "PECES RAROS" },
];

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  return (
    <div className='w-full z-20 ease-in duration-300 h-fit py-2 bg-black flex flex-col font-semibold justify-between lg:justify-center items-center text-extraxs'>
      <div className='flex justify-between items-center w-full lg:w-auto px-4'>
        <Link href="/">
          <Image src="/logo.svg" width={150} height={30} alt='Kostume' className='py-2 lg:py-1 lg:pb-4' />
        </Link>
        <div onClick={handleNav} className="block lg:hidden z-10">
          {nav ? (
            <AiOutlineClose className="transition-transform duration-300 ease-in-out" style={{ color: "#ffffff" }} size={30} />
          ) : (
            <TbMenu className="transition-transform duration-300 ease-in-out" style={{ color: "#ffffff" }} size={30} />
          )}
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-black z-10 overflow-hidden transition-max-height duration-300 ease-in-out ${nav ? 'max-h-screen mt-16' : 'max-h-0 mt-16'}`}>
        <ul className="flex flex-col lg:items-center lg:justify-center h-full w-full">
          {menuItems.map((item, index) => (
            <li key={index} className="p-4 hover:text-gray-500 border-b w-full">
              <Link onClick={handleNav} href={item.href}>
                <div className='flex justify-between w-full'>
                  <p>{item.label}</p>
                  <MdOutlineKeyboardArrowRight color='white' size={16} />
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
            <li key={index} className="mx-4 hover:text-gray-500 border-none">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;