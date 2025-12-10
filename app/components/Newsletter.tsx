import React, { useState } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    try {
      const region = localStorage.getItem('region') || 'Argentina';
      const storeUrl = region === 'Argentina' 
        ? 'https://eshop.kostumeweb.net/ar' 
        : 'https://eshop.kostumeweb.net/us';
      
      const apiUrl = region === 'Argentina'
        ? 'https://api.tiendanube.com/v1'
        : 'https://api.nuvemshop.com.br/v1';
      
      
      
      window.open(`${storeUrl}/account/register?email=${encodeURIComponent(email)}`, '_blank');
      
      console.log(`Email subscribed: ${email} for store: ${storeUrl}`);
      setMessage('¡Gracias por suscribirte!');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setMessage('Error al suscribirse. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-white font-semibold mb-2">NEWSLETTER</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-full">
        <div className="flex w-full h-10">
          <div className="flex-grow h-full">
            <input 
              type="email" 
              placeholder="e-mail..." 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full h-full px-2 bg-[#171717] text-white border-none focus:outline-none box-border" 
              required
            />
          </div>
          <button 
            type="submit" 
            className="bg-white flex items-center justify-center w-10 h-full flex-shrink-0"
            disabled={loading}
          >
            {loading ? (
              <span className="animate-pulse">•••</span>
            ) : (
              <AiOutlineArrowRight size={20} color='black' />
            )}
          </button>
        </div>
        {message && (
          <p className="mt-2 text-xs text-white/80">{message}</p>
        )}
      </form>
    </div>
  );
};

export default Newsletter;
