import React from 'react'
import Marquee from "react-fast-marquee";

interface MarqueeProps {
  marqueeText: string;
}

const PromotionsMarquee: React.FC<MarqueeProps> = ({ marqueeText }) => {
  return (
    <Marquee className='gap-x-4 w-full bg-black text-[7px] text-white h-fit uppercase flex justify-center py-1 border-b-[0.5px] border-b-white/20'>{marqueeText}
</Marquee>
  )
}

export default PromotionsMarquee