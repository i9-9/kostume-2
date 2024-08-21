'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Get the current visit count from localStorage, or default to 0
    let visitCount = parseInt(localStorage.getItem('visitCount') || '0', 10);

    // Increment the visit count
    visitCount += 1;

    // Store the updated visit count in localStorage
    localStorage.setItem('visitCount', visitCount.toString());

    // Get the region from localStorage
    const region = localStorage.getItem('region');

    // Redirect to pre-landing page every 5 visits, or if no region is set
    if (visitCount % 5 === 0 || !region) {
      // Reset the visit count to 0 after 5 visits
      localStorage.setItem('visitCount', '0');
    } else if (region) {
      // Otherwise, redirect to the home page
      router.push('/home');
    }
  }, [router]);

  const handleSelection = (region: string) => {
    // Set the selected region in localStorage
    localStorage.setItem('region', region);

    // Redirect to the home page
    router.push('/home');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">
      <div className="flex flex-col md:flex-row justify-center items-center text-title">
        <p className="title">THIS</p>
        <p className="title">IS</p>
        <p className="title">KOSTÜME</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-6 items-center">
        <button onClick={() => handleSelection('Argentina')} className="link-location mb-4 md:mb-0 md:pr-10">Argentina</button>
        <button onClick={() => handleSelection('Worldwide')} className="link-location">Worldwide</button>
      </div>
    </main>
  );
}
