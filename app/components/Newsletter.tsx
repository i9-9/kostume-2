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
      // Get the region from localStorage to determine the correct store URL
      const region = localStorage.getItem('region') || 'Argentina';
      const storeUrl = region === 'Argentina' 
        ? 'https://eshop.kostumeweb.net/ar' 
        : 'https://eshop.kostumeweb.net/us';
      
      // Create the API endpoint based on the region
      const apiUrl = region === 'Argentina'
        ? 'https://api.tiendanube.com/v1'
        : 'https://api.nuvemshop.com.br/v1';
      
      // In a real implementation, you would send a request to your backend server 
      // which would then use the Tienda Nube API with proper authentication
      // This is a simplified version that simulates the process
      
      // Simulate API call
      // In production, you would implement a backend API that uses Tienda Nube's API
      // POST /customers or similar endpoints to create/update customer with newsletter subscription
      
      // For now, redirect to the store's newsletter signup
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
