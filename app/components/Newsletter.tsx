import React, { useState } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(`Email suscrito: ${email}`);
    setEmail(''); 
  };

  return (
    <div className="bg-black col-span-4">
      <h2 className="text-white font-semibold mb-2">NEWSLETTER</h2>
      <form onSubmit={handleSubmit} className="flex">
        <input 
          type="email" 
          placeholder="e-mail..." 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="flex-grow p-2 bg-[#171717] text-white border-none focus:outline-none" 
          required
        />
        <button 
          type="submit" 
          className="bg-white p-2 flex items-center justify-center">
          <AiOutlineArrowRight size={20} color='black' />
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
