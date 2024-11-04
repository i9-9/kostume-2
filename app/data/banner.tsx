interface ImageProps { src: string;
title: string;
link: string;
type: "image" | "video";
}

interface ImageSets { desktop: ImageProps[]; mobile: ImageProps[]; }

const banner: ImageSets = {
  desktop: [{ src: '/blue-monday/blue-monday-dt.jpg', title: 'Blue Monday', link: 'blue-monday', type: 'image' }],
  mobile: [{ src: '/blue-monday/blue-monday-m.jpg', title: 'Your Banner Title', link: 'blue-monday', type: 'image' }],
};

export default banner;

