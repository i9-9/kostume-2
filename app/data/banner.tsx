interface ImageProps { src: string;
title: string;
link: string;
type: "image" | "video";
}

interface ImageSets { desktop: ImageProps[]; mobile: ImageProps[]; }

const banner: ImageSets = {
  desktop: [{ src: '/img/banner_g.jpg', title: '48ss25', link: '48ss25', type: 'image' }],
  mobile: [{ src: '/img/banner_ch.jpg', title: '48ss25', link: '48ss25', type: 'image' }],
};

export default banner;

