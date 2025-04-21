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
  mobile: ImageProps[];
}

const images: ImageSets = {
  desktop: [
    { 
      src: '/img/denim.jpg', 
      title: 'DENIM', 
      link: "denim", 
      type: "image",
      width: 800,
      height: 1067,
      aspectRatio: "3/4"
    },
    { 
      src: '/img/eyewear.jpg', 
      title: 'EYEWEAR', 
      link: "gafas1", 
      type: "image",
      width: 800,
      height: 1067,
      aspectRatio: "3/4"
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
