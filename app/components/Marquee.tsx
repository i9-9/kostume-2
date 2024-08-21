import React from 'react';
import Marquee from 'react-fast-marquee';

interface MarqueeProps {
  marqueeText: string;
}

const PromotionsMarquee: React.FC<MarqueeProps> = ({ marqueeText }) => {
  // Dynamically repeat the marquee text multiple times with spaces in between
  const repeatText = (text: string, times: number): string =>
    Array(times).fill(text).join('');

  // Generate the repeated text with a certain number of repetitions
  const repeatedText = repeatText(marqueeText, 10); // Repeat 10 times

  return (
    <Marquee
      className="w-full bg-black text-[7px] text-white h-fit uppercase py-1 border-b-[0.5px] border-b-white/20"
      speed={50}
      gradient={false}
      pauseOnHover={true}
    >
      {repeatedText}
    </Marquee>
  );
};

export default PromotionsMarquee;
