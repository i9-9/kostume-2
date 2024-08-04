import React from 'react'
import Marquee from "react-fast-marquee";

interface MarqueeProps {
  marqueeText: string;
}

const PromotionsMarquee: React.FC<MarqueeProps> = ({ marqueeText }) => {
  const repeatedText =` ${marqueeText} \u00A0 \u00A0 \u00A0 \u00A0 ${marqueeText} \u00A0 \u00A0 \u00A0 \u00A0 ${marqueeText} \u00A0 \u00A0 \u00A0 \u00A0 ${marqueeText} \u00A0 \u00A0 \u00A0 \u00A0 ${marqueeText} \u00A0 \u00A0 \u00A0 \u00A0 ${marqueeText}`;

  return (
    <Marquee 
      className='w-full bg-black text-[7px] text-white h-fit uppercase py-1 border-b-[0.5px] border-b-white/20'
      speed={50}
      gradient={false}
      pauseOnHover={true}
    >
      {repeatedText}
    </Marquee>
  )
}

export default PromotionsMarquee