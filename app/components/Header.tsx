import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <div className={`flex gap-2 ${className}`}>
      <span
        className={`pointer-events-auto cursor-pointer font-bold ${region === "Argentina" ? "text-white" : "text-gray-500"}`}
        onClick={() => region !== "Argentina" && setRegion("Argentina")}
        tabIndex={0}
        role="button"
        aria-pressed={region === "Argentina"}
      >
        ARGENTINA
      </span>
      <span
        className={`pointer-events-auto cursor-pointer font-bold ${region === "Worldwide" ? "text-white" : "text-gray-500"}`}
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
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(label);
    setSubmenuVisible(true);
  };

  const handleMouseLeave = () => {
    // Delay closing the submenu to allow time to move to it
    timeoutRef.current = setTimeout(() => {
      // Check if the cursor is over the submenu
      if (!isMouseOverSubmenu()) {
        setSubmenuVisible(false);
        setActiveMenu(null);
      }
    }, 100);
  };

  // Check if mouse is over the submenu element
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
    // Allow a small delay before closing
    timeoutRef.current = setTimeout(() => {
      setSubmenuVisible(false);
      setActiveMenu(null);
    }, 50);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Modified function to handle the mobile submenu toggle with separate click tracking
  const handleSubmenuToggle = (e: React.MouseEvent, item: MenuItemProps) => {
    e.preventDefault(); // Prevent default link behavior
    e.stopPropagation(); // Stop event propagation
    
    if (activeMenu === item.label) {
      // If menu is already open and this is the second click on same item
      if (clickedOnce === item.label) {
        // This is the second click - allow navigation
        // Reset and navigate
        setClickedOnce(null);
        window.location.href = `${link}/${item.href}`;
      } else {
        // This is the first click on an already open menu
        // Mark as clicked once
        setClickedOnce(item.label);
      }
    } else {
      // First click on a closed menu - just open it
      setActiveMenu(item.label);
      setClickedOnce(null); // Reset click tracking
    }
  };

  const links = menu.find((item) => item.label === activeMenu)?.links || [];
  const currentSubcategories =
    menu.find((item) => item.label === activeMenu)?.subcategories || [];

  // Animation variants
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

  // Line animation
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
    <div className="max-w-full z-20 items-center pr-4 ease-in duration-300 py-2 h-fit bg-black flex font-semibold justify-between text-extraxs">
      <div className="flex items-center flex-grow min-w-0">
        <motion.div 
          onClick={() => setNav(!nav)}
          className="pl-4 z-10 block lg:hidden"
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
      {/* Desktop Location Toggle at far right */}
      <div className="hidden lg:flex items-center ml-4 flex-shrink-0 min-w-[140px] z-50 pointer-events-auto">
        <LocationToggle />
      </div>

      {/* Menú móvil */}
      <motion.div
        className="lg:hidden fixed inset-0 bg-black z-10 overflow-hidden mt-16"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: nav ? "calc(100vh - 4rem)" : 0,
          opacity: nav ? 1 : 0
        }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
      >
        <motion.ul 
          className="flex flex-col h-full w-full pt-8"
          variants={containerVariants}
          initial="hidden"
          animate={nav ? "visible" : "hidden"}
        >
          {menu.map((item, index) => (
            <motion.li
              key={index}
              custom={index}
              variants={menuItemVariants}
              className="relative mx-4 py-4 text-white"
            >
              {/* Top border line for first item */}
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
                        delay: index * 0.07,
                        duration: 0.3,
                        ease: "easeOut"
                      }}
                    >
                      <p className="self-center">{item.label}</p>
                      <motion.div
                        animate={{ rotate: activeMenu === item.label ? 90 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <MdOutlineKeyboardArrowRight color="white" size={20} />
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
                    delay: index * 0.07,
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  <Link onClick={handleNav} href={`${link}/${item.href}`}>
                    <div className="flex justify-between">
                      <p className="self-center">{item.label}</p>
                      <MdOutlineKeyboardArrowRight color="white" size={20} />
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Bottom border line for each item */}
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
        {nav && (
          <div className="absolute bottom-4 w-full flex justify-center">
            <LocationToggle />
          </div>
        )}
      </motion.div>

      {/* Menú Desktop */}
      <div className="hidden lg:flex lg:items-center lg:flex-grow font-bold lg:justify-center relative w-full h-fit left-0 lg:absolute">
        <motion.ul 
          className="flex items-center relative h-full w-full justify-center"
          style={{ position: "relative" }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.03
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
                    delay: index * 0.03,
                    duration: 0.25
                  }
                }
              }}
              className="font-bold relative px-4 py-2"
              onMouseEnter={() => handleMouseEnter(item.label, index)}
              onMouseLeave={handleMouseLeave}
              ref={(el) => (menuItemRefs.current[item.label] = el)}
              whileHover={{ color: "#999999" }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`${link}/${item.href}`}>{item.label}</Link>
              {/* Dropdown rendered as a child of the active menu item */}
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
      </div>
    </div>
  );
};

export default Header;