'use client';

import React, { useState } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { useLocation } from '../context/LocationContext';
import { getEshopBase } from '../data/countries';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { region, language } = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    try {
      const storeUrl = getEshopBase(region);
      window.open(`${storeUrl}/account/register?email=${encodeURIComponent(email)}`, '_blank');
      setMessage(language === 'es' ? '¡Gracias por suscribirte!' : 'Thanks for subscribing!');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setMessage(language === 'es' ? 'Error al suscribirse. Intenta nuevamente.' : 'Error subscribing. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-black font-semibold mb-2">NEWSLETTER</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-full">
        <div className="flex w-full h-10">
          <div className="flex-grow h-full">
            <input 
              type="email" 
              placeholder="e-mail..." 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full h-full px-2 bg-[#f0f0f0] text-black border border-black/20 focus:outline-none box-border" 
              required
            />
          </div>
          <button 
            type="submit" 
            className="bg-black flex items-center justify-center w-10 h-full flex-shrink-0"
            disabled={loading}
          >
            {loading ? (
              <span className="animate-pulse text-white">•••</span>
            ) : (
              <AiOutlineArrowRight size={20} color='white' />
            )}
          </button>
        </div>
        {message && (
          <p className="mt-2 text-xs text-black/80">{message}</p>
        )}
      </form>
    </div>
  );
};

export default Newsletter;
