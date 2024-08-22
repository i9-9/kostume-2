'use client'

import React, { useState } from 'react'
import { SectionProps } from './Footer';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Link from 'next/link';

const SectionAccordion: React.FC<SectionProps> = ({ title, links }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="border-b-[0.5px]">
            <div 
                className="flex justify-between items-center py-3" 
                onClick={() => setAccordionOpen(!accordionOpen)}
            >
                <div className="text-extraxs uppercase font-sem">
                    {title}
                </div>
                <div className="flex items-center justify-center">
                    {accordionOpen ? 
                        <IoIosArrowUp className="text-white cursor-pointer" /> : 
                        <IoIosArrowDown className="text-white cursor-pointer" />
                    }
                </div>
            </div>
            <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${accordionOpen ? "max-h-96" : "max-h-0"}`}
                style={{ transition: "max-height 0.5s ease" }}
            >
                <div className='flex flex-col gap-y-3 mb-4'>
                    {links.map((link, key) => (
                        <Link key={key} href={link.href}>{link.text}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SectionAccordion
