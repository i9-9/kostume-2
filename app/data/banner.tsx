interface ImageProps {
  src: string;
  title: string;
  link: string;
  type: "image" | "video";
  width: number;
  height: number;
  aspectRatio: string;
}

interface BannerData {
  [key: string]: {
    desktop: ImageProps[];
    mobile: ImageProps[];
  };
}

const bannerData: BannerData = {
  collection1: {
    desktop: [
      { 
        src: "/img/banner_825.png", 
        title: "Rain Capsule", 
        link: "rain-capsule", 
        type: "image",
        width: 1800,
        height: 900,
        aspectRatio: "2/1"
      },
    ],
    mobile: [
      { 
        src: "/img/banner_825_mobile.jpg", 
        title: "Rain Capsule", 
        link: "rain-capsule", 
        type: "image",
        width: 800,
        height: 600,
        aspectRatio: "4/3"
      },
    ],
  },
  collection2: {
    desktop: [
      { 
        src: "/img/swimwear_desktop.jpg", 
        title: "SWIMWEAR", 
        link: "swimwear", 
        type: "image",
        width: 1800,
        height: 900,
        aspectRatio: "2/1"
      },
    ],
    mobile: [
      { 
        src: "/img/swimwear_mobile.jpg", 
        title: "SWIMWEAR", 
        link: "swimwear", 
        type: "image",
        width: 800,
        height: 600,
        aspectRatio: "4/3"
      },
    ],
  },
};

export default bannerData;
