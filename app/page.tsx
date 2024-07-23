'use client'

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleSelection = (region:string) => {
    localStorage.setItem('region', region);
    router.push('/home');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <p className="title">THIS</p>
        <p className="title">IS</p>
        <p className="title">KOSTÜME</p>
    </div>
      <div className="flex flex-col md:flex-row justify-between mt-6 items-center">
        <button onClick={() => handleSelection('Argentina')} className="link-location mb-4 md:mb-0 md:pr-10">Argentina</button>
        <button onClick={() => handleSelection('Worldwide')} className="link-location">Worldwide</button>
      </div>
    </main>
  )
}