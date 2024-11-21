interface ImageProps {
  src: string;
  title: string;
  link: string;
  type: "image" | "video";
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
      { src: "/img/banner_1.jpg", title: "#48SS25", link: "48ss25", type: "image" },
    ],
    mobile: [
      { src: "/img/banner_ch.jpg", title: "#48SS25", link: "48ss25", type: "image" },
    ],
  },
  collection2: {
    desktop: [
      { src: "/img/swimwear_desktop.jpg", title: "SWIMWEAR", link: "swimwear", type: "image" },
    ],
    mobile: [
      { src: "/img/swimwear_mobile.jpg", title: "SWIMWEAR", link: "swimwear", type: "image" },
    ],
  },
};

export default bannerData;
