interface ImageProps {
  src: string;
  title: string;
  link: string;
  type: "image" | "video";
  width: number;
  height: number;
  aspectRatio: string;
}

interface ImageSets {
  desktop: ImageProps[];
  tablet: ImageProps[];
  mobile: ImageProps[];
}

const images: ImageSets = {
  desktop: [
    { 
      src: '/img/desktop/denim.png', 
      title: 'DENIM', 
      link: "denim", 
      type: "image",
      width: 720,
      height: 800,
      aspectRatio: "9/10"
    },
    { 
      src: '/img/desktop/eyewear.png', 
      title: 'EYEWEAR', 
      link: "gafas1", 
      type: "image",
      width: 720,
      height: 800,
      aspectRatio: "9/10"
    },
  ],
  tablet: [
    { 
      src: '/img/denim.png', 
      title: 'DENIM', 
      link: "denim", 
      type: "image",
      width: 640,
      height: 800,
      aspectRatio: "4/5"
    },
    { 
      src: '/img/eyewear.png', 
      title: 'EYEWEAR', 
      link: "gafas1", 
      type: "image",
      width: 640,
      height: 800,
      aspectRatio: "4/5"
    },
  ],
  mobile: [
    { 
      src: '/img/denim_m.jpg', 
      title: 'DENIM', 
      link: "denim", 
      type: "image",
      width: 400,
      height: 500,
      aspectRatio: "4/5"
    },
    { 
      src: '/img/eyewear_m.jpg', 
      title: 'EYEWEAR', 
      link: "gafas1", 
      type: "image",
      width: 400,
      height: 500,
      aspectRatio: "4/5"
    },
  ]
};

export default images;
