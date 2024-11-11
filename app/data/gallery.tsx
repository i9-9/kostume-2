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
    { src: '/48_desktop_2.jpg', title: '#48SS25', link: "48ss25/", type: "image" },
    { src: '/runway_grande.jpg', title: 'RUNWAY LOOKS', link: "runway-looks/", type: "image" },
    { src: '/img/kostume_w.jpg', title: 'KOSTÜME WOMEN', link: "women/", type: "image" },
    { src: '/img/kostume_m.jpg', title: 'KOSTÜME MEN', link: "men/", type: "image"},
    { src: '/img/runway_g.jpg', title: 'RUNWAY LOOKS', link: "runway-looks/", type: "image"  },
    { src: '/img/store_g.jpg', title: 'KOSTÜME STORE', link: "https://maps.app.goo.gl/Va5Tjw4gF4NMDg3g7", type: "image" },
  ],
  mobile: [
    { src: '/48ss25_mobile.jpg', title: '#48SS25', link: "48ss25/", type: "image" },
    { src: '/runway_mobile.jpg', title: 'RUNWAY LOOKS', link: "runway-looks/", type: "image" },
    { src: '/img/women_ch.jpg', title: 'KOSTÜME WOMEN', link: "women/", type: "image" },
    { src: '/img/men_ch.jpg', title: 'KOSTÜME MEN', link: "men/", type: "image"},
    { src: '/img/runway_ch.jpg', title: 'RUNWAY LOOKS', link: "runway-looks/", type: "image"},
    { src: '/img/store_ch.jpg', title: 'KOSTÜME STORE', link: "https://maps.app.goo.gl/Va5Tjw4gF4NMDg3g7", type: "image" },
  ]
};

export default images;
