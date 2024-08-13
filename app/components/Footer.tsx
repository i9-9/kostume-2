'use client'

import Link from 'next/link'
import React from 'react'
import footer from '../data/footer'
import SectionAccordion from './SectionAccordion';
import Newsletter from './Newsletter';

interface LinkItem {
  href: string;
  text: string;
}

export interface SectionProps {
  title: string;
  links: LinkItem[];
}


const Footer = () => {
  return (
    <div className='flex flex-col text-extraxs border-t border-t-white lg:border-t-white/30 mt-4 mx-4 lg:mx-8'>
      <div className='w-full pt-0 lg:pt-6 pb-6'>
        <div className='hidden lg:grid lg:grid-cols-12 lg:gap-6 uppercase'>
        {footer.map((item, index) => (
          <Section key={index} title={item.title} links={item.links} />
        ))}
        <Newsletter/> 
        </div>
        <div className='flex lg:hidden flex-col'>
        {footer.map((item, index) => (
          <div key={index}>
            <SectionAccordion title={item.title} links={item.links}/>
          </div>
        ))}
        </div>
      </div>
      <div className='lg:border-t py-6 lg:border-t-white/30 text-center text-[8px]'>© KOSTÜME 2024</div>
    </div>
  )
}

const Section: React.FC<SectionProps> =  ({ title, links }) => (
  <div className={`${title === "Newsletter" ? 'col-span-4' : 'col-span-2'} flex flex-col gap-y-3`}>
    <p className='font-bold'>{title}</p>
    {links.map((link, index) => (
      <Link key={index} href={link.href}>{link.text}</Link>
    ))}
  </div>
);


export default Footer;