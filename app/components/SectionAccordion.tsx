'use client'

import React, { useState, useRef, useEffect } from 'react'
import { SectionProps } from './Footer';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion';

const SectionAccordion: React.FC<SectionProps> = ({ title, links }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const controls = useAnimation();
    
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    // Animation variants
    const linkVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.1 + i * 0.05,
                duration: 0.3,
                ease: [0.25, 0.1, 0.25, 1.0]
            }
        })
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    // Line animation
    const lineVariants = {
        hidden: { width: 0 },
        visible: {
            width: "100%",
            transition: {
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1.0]
            }
        }
    };

    return (
        <div className="relative" ref={ref}>
            {/* Bottom border line */}
            <motion.div
                className="absolute bottom-0 left-0 h-[0.5px] bg-white/20"
                variants={lineVariants}
                initial="hidden"
                animate={controls}
            />

            <motion.div 
                className="flex justify-between items-center py-6 cursor-pointer" 
                onClick={() => setAccordionOpen(!accordionOpen)}
                whileTap={{ scale: 0.98 }}
            >
                <motion.div 
                    className="text-extraxs uppercase font-sem"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    {title}
                </motion.div>
                <motion.div 
                    className="flex items-center justify-center"
                    animate={{ rotate: accordionOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                >
                    <IoIosArrowDown className="text-white cursor-pointer text-lg" size={20} />
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {accordionOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
                        className="overflow-hidden"
                    >
                        <motion.div 
                            className='flex flex-col gap-y-4 mb-6 pl-2'
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {links.map((link, index) => (
                                <motion.div
                                    key={index}
                                    custom={index}
                                    variants={linkVariants}
                                >
                                    <Link 
                                        href={link.href}
                                        className="hover:text-gray-400 transition-colors duration-300"
                                    >
                                        {link.text}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default SectionAccordion
