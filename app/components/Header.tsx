import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MenuItemProps } from "../home/page";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "../context/LocationContext";
import menuItemsEs from '../data/es-menu';
import menuItemsEn from '../data/en-menu';

interface HeaderProps {
  link: string;
  menu: MenuItemProps[];
}

const LocationToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { region, setRegion } = useLocation();
  return (
    <div className={`flex gap-2 justify-center ${className}`}>
      <span
        className={`pointer-events-auto cursor-pointer font-bold py-3 px-4 rounded-sm transition-colors duration-200 ${region === "Argentina" ? "text-white" : "text-gray-500"} lg:py-0 lg:px-0`}
        onClick={() => region !== "Argentina" && setRegion("Argentina")}
        tabIndex={0}
        role="button"
        aria-pressed={region === "Argentina"}
      >
        ARGENTINA
      </span>
      <span
        className={`pointer-events-auto cursor-pointer font-bold py-3 px-4 rounded-sm transition-colors duration-200 ${region === "Worldwide" ? "text-white" : "text-gray-500"} lg:py-0 lg:px-0`}
        onClick={() => region !== "Worldwide" && setRegion("Worldwide")}
        tabIndex={0}
        role="button"
        aria-pressed={region === "Worldwide"}
      >
        WORLDWIDE
      </span>
    </div>
  );
};

const Header: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const menuItemRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
  const [clickedOnce, setClickedOnce] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const submenuRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const { region } = useLocation();
  const menu = region === "Argentina" ? menuItemsEs : menuItemsEn;
  const link = region === "Argentina" ? "https://eshop.kostumeweb.net/ar" : "https://eshop.kostumeweb.net/us";

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [nav]);

  const handleNav = () => setNav(!nav);

  const handleMouseEnter = (label: string, index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(label);
    setSubmenuVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (!isMouseOverSubmenu()) {
        setSubmenuVisible(false);
        setActiveMenu(null);
      }
    }, 100);
  };

  const isMouseOverSubmenu = () => {
    return document.querySelector(':hover') === submenuRef.current;
  };

  const handleSubmenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setSubmenuVisible(true);
  };

  const handleSubmenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setSubmenuVisible(false);
      setActiveMenu(null);
    }, 50);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubmenuToggle = (e: React.MouseEvent, item: MenuItemProps) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (activeMenu === item.label) {
      if (clickedOnce === item.label) {
        setClickedOnce(null);
        router.push(`${link}/${item.href}`);
      } else {
        setClickedOnce(item.label);
      }
    } else {
      setActiveMenu(item.label);
      setClickedOnce(null);
    }
  };

  const links = menu.find((item) => item.label === activeMenu)?.links || [];
  const currentSubcategories =
    menu.find((item) => item.label === activeMenu)?.subcategories || [];

  const menuItemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.35,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }),
    exit: { opacity: 0, y: 5, transition: { duration: 0.2 } }
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, x: -3 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.05 + i * 0.03,
        duration: 0.2,
        ease: "easeOut"
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.05
      }
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: (i: number) => ({
      width: "100%",
      transition: {
        delay: 0.2 + i * 0.08,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    })
  };

  const topLineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        delay: 0.2,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <div className="max-w-full z-50 items-center px-4 ease-in duration-300 py-5 lg:py-2 h-fit bg-black flex font-semibold justify-between text-extraxs relative">
      <div className="flex lg:hidden items-center justify-between w-full relative">
        <motion.div 
          onClick={() => setNav(!nav)}
          className="z-50 w-8 flex justify-start relative"
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-5 h-5 relative">
            <motion.div
              className="w-full h-[0.5px] bg-white absolute"
              animate={{
                top: nav ? "50%" : "30%",
                rotate: nav ? 45 : 0,
                y: nav ? "-50%" : 0
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
            />
            <motion.div
              className="w-full h-[0.5px] bg-white absolute"
              animate={{
                top: nav ? "50%" : "70%",
                rotate: nav ? -45 : 0,
                y: nav ? "-50%" : 0
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
            />
          </div>
        </motion.div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2 z-50">
          <Link href="/">
            <Image
              src="/kostume_logo.svg"
              width={125}
              height={30}
              alt="KOSTÜME — Inicio"
              className="py-2"
            />
          </Link>
        </div>
        
        <div className="w-8"></div>
      </div>

      <div className="hidden lg:flex items-center flex-grow min-w-0">
        <div className="flex-grow flex lg:justify-start h-full self-center w-full lg:w-fit justify-center">
          <Link href="/">
            <Image
              src="/kostume_logo.svg"
              width={125}
              height={30}
              alt="KOSTÜME — Inicio"
              className="py-2"
            />
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex items-center flex-shrink-0 min-w-[140px] z-50 pointer-events-auto justify-end">
        <LocationToggle />
      </div>

      <motion.div
        className="lg:hidden fixed top-0 left-0 w-full h-full bg-black z-20 overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: nav ? "100vh" : 0,
          opacity: nav ? 1 : 0
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        <nav className="h-full w-full" aria-label="Menú principal">
        <motion.ul 
          className="flex flex-col h-full w-full pt-20"
          variants={containerVariants}
          initial="hidden"
          animate={nav ? "visible" : "hidden"}
        >
          {menu.map((item, index) => (
            <motion.li
              key={index}
              custom={index}
              variants={menuItemVariants}
              className={`relative mx-4 py-4 ${item.label === "TEMPORARY REDIRECT" ? "text-[#0afd02]" : "text-white"}`}
            >
              {index === 0 && (
                <motion.div
                  className="absolute top-0 left-0 h-[0.5px] bg-white/20"
                  variants={topLineVariants}
                  initial="hidden"
                  animate={nav ? "visible" : "hidden"}
                />
              )}

              {item.subcategories && item.subcategories.length > 0 ? (
                <>
                  <div 
                    className="cursor-pointer"
                    onClick={(e) => handleSubmenuToggle(e, item)}
                  >
                    <motion.div
                      className="flex justify-between"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.15,
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                    >
                      <p className="self-center">{item.label}</p>
                      <motion.div
                        animate={{ rotate: activeMenu === item.label ? 90 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <MdOutlineKeyboardArrowRight color={item.label === "TEMPORARY REDIRECT" ? "#0afd02" : "white"} size={20} />
                      </motion.div>
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {activeMenu === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
                        className="overflow-hidden font-normal"
                      >
                        <motion.ul 
                          className="pl-4 mt-2"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {item.subcategories.map((sub, subIndex) => (
                            <motion.li 
                              key={subIndex} 
                              className="py-2"
                              initial={{ opacity: 0, x: -15 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ 
                                delay: 0.1 + subIndex * 0.05,
                                duration: 0.3,
                                ease: "easeOut"
                              }}
                            >
                              <Link
                                onClick={handleNav}
                                href={`${link}/${item.href}/${item.links[subIndex]}`}
                              >
                                {sub}
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.15,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                >
                  <Link 
                    onClick={handleNav} 
                    href={`${link}/${item.href}`}
                  >
                    <div className="flex justify-between">
                      <p className="self-center">{item.label}</p>
                      <MdOutlineKeyboardArrowRight color={item.label === "TEMPORARY REDIRECT" ? "#0afd02" : "white"} size={20} />
                    </div>
                  </Link>
                </motion.div>
              )}

              <motion.div
                className="absolute bottom-0 left-0 h-[0.5px] bg-white/20"
                custom={index}
                variants={lineVariants}
                initial="hidden"
                animate={nav ? "visible" : "hidden"}
              />
            </motion.li>
          ))}
        </motion.ul>
        </nav>
        {nav && (
          <div className="absolute bottom-12 w-full flex justify-center px-8">
            <LocationToggle className="w-full" />
          </div>
        )}
      </motion.div>

      <nav className="hidden lg:flex lg:items-center lg:flex-grow font-bold lg:justify-center relative w-full h-fit left-0 lg:absolute" aria-label="Menú principal">
        <motion.ul 
          className="flex items-center relative h-full w-full justify-center"
          style={{ position: "relative" }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
        >
          {menu.map((item, index) => (
            <motion.li
              key={index}
              custom={index}
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { 
                    delay: index * 0.08,
                    duration: 0.5
                  }
                }
              }}
              className={`font-bold relative px-4 py-2 ${item.label === "TEMPORARY REDIRECT" ? "text-[#0afd02]" : ""}`}
              onMouseEnter={() => handleMouseEnter(item.label, index)}
              onMouseLeave={handleMouseLeave}
              ref={(el) => (menuItemRefs.current[item.label] = el)}
              style={item.label === "TEMPORARY REDIRECT" ? { color: "#0afd02" } : {}}
              whileHover={item.label === "TEMPORARY REDIRECT" ? 
                { color: "rgb(10, 253, 2, 0.8)" } : 
                { color: "#999999" }
              }
              transition={{ duration: 0.3 }}
            >
              <Link href={`${link}/${item.href}`}>{item.label}</Link>
              {currentSubcategories.length > 0 && activeMenu === item.label && submenuVisible && (
                <motion.div
                  ref={submenuRef}
                  className="absolute top-full left-0 bg-black bg-opacity-90 p-4 flex flex-col items-start text-[10px] z-50 min-w-max"
                  onMouseEnter={handleSubmenuMouseEnter}
                  onMouseLeave={handleSubmenuMouseLeave}
                  initial={{ y: -5, opacity: 0, scaleY: 0.95 }}
                  animate={{ y: 0, opacity: 1, scaleY: 1 }}
                  exit={{ y: -5, opacity: 0, scaleY: 0.95 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1.0] }}
                  style={{
                    marginTop: "-2px",
                    width: "auto",
                    transformOrigin: "top center"
                  }}
                >
                  <motion.ul 
                    className="flex flex-col space-y-2 w-full"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {currentSubcategories.map((sub: any, subIndex: any) => (
                      <motion.li 
                        key={subIndex}
                        custom={subIndex}
                        variants={dropdownItemVariants}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={`${link}/${menu.find(item => item.label === activeMenu)?.href}/${links[subIndex]}`}
                          className="text-white text-left font-normal hover:underline"
                        >
                          {sub}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </div>
  );
};

export default Header;