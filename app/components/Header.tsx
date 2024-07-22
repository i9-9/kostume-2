'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { TbMenu } from "react-icons/tb";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='w-full z-20 ease-in duration-300 h-fit py-2 bg-black flex flex-col font-semibold justify-between lg:justify-center items-center text-extraxs'>
      <div className='flex justify-between items-center w-full lg:w-auto px-4'>
        <Link href="/">
          <Image src="/logo.svg" width={150} height={30} alt='Kostume' className='py-2 lg:py-1 lg:pb-4'/>
        </Link>
        <div onClick={handleNav} className="block lg:hidden z-10">
          {nav ? (
            <AiOutlineClose style={{ color: "#ffffff" }} size={30} />
          ) : (
            <TbMenu style={{ color: "#ffffff" }} size={30} />
          )}
        </div>
      </div>
      
      <div
        className={`lg:flex ${nav ? 'flex' : 'hidden'} flex-col lg:flex-row w-full h-screen lg:h-fit lg:w-auto lg:items-center bg-black lg:static absolute top-16 text-extraxs left-0 lg:top-auto lg:left-auto z-10`}
      >
        <ul className="w-full lg:flex lg:items-center px-4 lg:px-0">
          <li className="p-4 lg:p-0 lg:mx-4 hover:text-gray-500 border-b lg:border-none">
            <Link onClick={handleNav} href="https://eshop.kostumeweb.net/47aw24/">
            #47AW24
            </Link>
          </li>
          <li className="p-4 lg:p-0 lg:mx-4 hover:text-gray-500 border-b lg:border-none">
            <Link onClick={handleNav} href="https://eshop.kostumeweb.net/descubrir1/">
            #46SS24
            </Link>
          </li>
          <li className="p-4 lg:p-0 lg:mx-4 hover:text-gray-500 border-b lg:border-none ">
            <Link onClick={handleNav} href="https://eshop.kostumeweb.net/men/">
            MEN
            </Link>
          </li>
          <li className="p-4 lg:p-0 lg:mx-4 hover:text-gray-500 border-b lg:border-none">
            <Link onClick={handleNav} href="https://eshop.kostumeweb.net/women/">
            WOMEN
            </Link>
          </li>
          <li className="p-4 lg:p-0 lg:mx-4 hover:text-gray-500 border-b lg:border-none ">
            <Link onClick={handleNav} href="https://eshop.kostumeweb.net/wild-object/">
            WILD OBJECT
            </Link>
          </li>
          <li className="p-4 lg:p-0 lg:mx-4 hover:text-gray-500 border-b lg:border-none ">
            <Link onClick={handleNav} href="https://eshop.kostumeweb.net/re-con-figure/">
            RE.CON.FIGURE
            </Link>
          </li>
          <li className="p-4 lg:p-0 lg:mx-4 hover:text-gray-500 border-b lg:border-none ">
            <Link onClick={handleNav} href="https://eshop.kostumeweb.net/peces-raros-kostume/descubrir-pr-k/">
            PECES RAROS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
