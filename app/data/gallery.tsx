interface ImageProps {
  src: string;
  title: string;
  link: string;
  type: "image" | "video";
}

interface ImageSets {
  desktop: ImageProps[];
  mobile: ImageProps[];
}

const images: ImageSets = {
  desktop: [
    { src: '/img/denim.jpg', title: 'DENIM', link: "denim", type: "image" },
    { src: '/img/eyewear.jpg', title: 'EYEWEAR', link: "eyewear", type: "image" },

  ],
  mobile: [
    { src: '/img/denim_m.jpg', title: 'DENIM', link: "denim", type: "image" },
    { src: '/img/eyewear_m.jpg', title: 'EYEWEAR', link: "eyewear", type: "image" },

  ]
};

export default images;
