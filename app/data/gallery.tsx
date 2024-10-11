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
    { src: '/peces_raros_chica.jpg', title: 'PECES RAROS . KOSTÜME', link: "peces-raros-kostume/", type: "image" },
    { src: '/women_2.jpg', title: 'KOSTÜME WOMEN', link: "women/", type: "image"  },
    { src: '/men_2.jpg', title: 'KOSTÜME MEN', link: "men/", type: "image"},
    { src: '/store.jpg', title: 'KOSTÜME STORE', link: "https://maps.app.goo.gl/Va5Tjw4gF4NMDg3g7", type: "image" },
  ],
  mobile: [
    { src: '/48ss25_mobile.jpg', title: '#48SS25', link: "48ss25/", type: "image" },
    { src: '/runway_mobile.jpg', title: 'RUNWAY LOOKS', link: "runway-looks/", type: "image" },
    { src: '/mobile_peces.jpg', title: 'PECES RAROS . KOSTÜME', link: "peces-raros-kostume/", type: "image" },
    { src: '/mobile_men1.jpg', title: 'KOSTÜME MEN', link: "men/", type: "image"},
    { src: '/mobile_women.jpg', title: 'KOSTÜME WOMEN', link: "women/", type: "image"  },
    { src: '/store.jpg', title: 'KOSTÜME STORE', link: "https://maps.app.goo.gl/Va5Tjw4gF4NMDg3g7", type: "image" },
  ]
};

export default images;
