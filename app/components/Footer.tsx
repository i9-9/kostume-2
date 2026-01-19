'use client'

import Link from 'next/link'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import footer from '../data/footer'
import SectionAccordion from './SectionAccordion';
import Newsletter from './Newsletter';
import { motion, useAnimation, useInView } from 'framer-motion';

interface LinkItem {
  href: string;
  text: string;
}

export interface SectionProps {
  title: string;
  links: LinkItem[];
}

type Region = 'Argentina' | 'Worldwide';

interface FooterProps {
  region?: Region;
}

const Footer = ({ region }: FooterProps) => {
  const controls = useAnimation();
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  const footerResolved = useMemo(() => footer.map(section => ({
    ...section,
    links: section.links.map(link => {
      const href = ('hrefByRegion' in link && link.hrefByRegion && region)
        ? (link.hrefByRegion[region] ?? link.href)
        : link.href;
      return { href, text: link.text };
    }),
  })), [region]);
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      ref={footerRef}
      className='flex flex-col text-extraxs relative mt-6 mx-4 lg:mx-4'
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-[0.5px] bg-white/20"
        variants={{
          hidden: { width: 0 },
          visible: {
            width: "100%",
            transition: {
              delay: 0.1,
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1.0]
            }
          }
        }}
      />
      
      <div className='w-full lg:pt-6 lg:pb-6'>
        <div className='hidden lg:flex lg:flex-row lg:gap-6 uppercase'>
          <div className="flex-1 grid grid-cols-8 gap-6">
            {footerResolved.map((item, index) => (
              <motion.div 
                key={index}
                className="col-span-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.2 + (index * 0.1),
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1.0]
                    }
                  }
                }}
              >
                <Section title={item.title} links={item.links} index={index} />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.4 + (footer.length * 0.1),
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1.0]
                }
              }
            }}
            className="w-4/12"
          >
            <Newsletter /> 
          </motion.div>
        </div>

        <div className='flex lg:hidden flex-col'>
          {footerResolved.map((item, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: {
                    delay: 0.2 + (index * 0.1),
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1.0]
                  }
                }
              }}
            >
              <SectionAccordion title={item.title} links={item.links}/>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div 
        className='py-5 text-center text-[8px] relative'
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              delay: 0.8 + (footer.length * 0.1),
              duration: 0.5 
            }
          }
        }}
      >
        <motion.div
          className="absolute top-0 left-0 right-0 h-[0.5px] bg-white/20 hidden lg:block"
          variants={{
            hidden: { width: 0 },
            visible: {
              width: "100%",
              transition: {
                delay: 0.4,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1.0]
              }
            }
          }}
        />
        © KOSTÜME {new Date().getFullYear()}
      </motion.div>
    </motion.div>
  )
}

const Section: React.FC<SectionProps & { index: number }> = ({ title, links, index }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + (index * 0.1) + (i * 0.05),
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    })
  };

  return (
    <div className="flex flex-col gap-y-3">
      <p className='font-bold'>{title}</p>
      {links.map((link, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={itemVariants}
        >
          <Link 
            href={link.href}
            className="hover:text-gray-400 transition-colors duration-300"
          >
            {link.text}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Footer;