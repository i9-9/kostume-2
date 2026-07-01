"use client"

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from '../context/LocationContext';
import { getEshopBase } from '../data/countries';

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ isOpen, onClose }) => {
  const { region, language } = useLocation();

  const modalContent = {
    es: {
      title: "UNITE A LA COMUNIDAD KOSTÜME",
      text: "ACCEDÉ A LANZAMIENTOS Y NOVEDADES EXCLUSIVAS. \nCREA TU CUENTA Y OBTENÉ 10% OFF EN TU PRIMERA COMPRA ONLINE.",
      cta: "CREA TU CUENTA"
    },
    en: {
      title: "JOIN THE KOSTÜME COMMUNITY",
      text: "ACCESS EXCLUSIVE LAUNCHES AND NEWS. \nCREATE YOUR ACCOUNT AND GET 10% OFF ON YOUR FIRST ONLINE PURCHASE.",
      cta: "CREATE ACCOUNT"
    }
  };

  const content = modalContent[language as keyof typeof modalContent] || modalContent.es;
  const registerLink = `${getEshopBase(region)}/account/register/`;

  const handleSubscribe = () => {
    window.open(registerLink, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/90"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white border border-black/20 px-16 py-24 max-w-6xl mx-4 text-center shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
            >
              <div className="w-5 h-5 relative">
                <div className="w-full h-[0.5px] bg-black absolute top-1/2 left-0 rotate-45 transform -translate-y-1/2" />
                <div className="w-full h-[0.5px] bg-black absolute top-1/2 left-0 -rotate-45 transform -translate-y-1/2" />
              </div>
            </button>

            <h2 className="text-black text-xl md:text-2xl font-bold mb-12 uppercase tracking-wide">
              {content.title}
            </h2>

            <p className="text-black text-xs md:text-sm mb-16 uppercase leading-relaxed">
              {content.text.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < content.text.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>

            <button
              onClick={handleSubscribe}
              className="bg-transparent border-2 border-black text-black px-8 py-3 uppercase font-bold text-sm md:text-base hover:bg-black hover:text-white transition-all duration-300"
            >
              {content.cta}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;
