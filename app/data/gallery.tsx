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
    { src: '/48_desktop.jpg', title: '#48SS25', link: "48ss25/", type: "image" },
    { src: '/peces_raros_chica.jpg', title: 'PECES RAROS . KOSTÜME', link: "peces-raros-kostume/", type: "image" },
    { src: '/kostume_men_chica.jpg', title: 'KOSTÜME MEN', link: "men/", type: "image"},
    { src: '/kostume_women_chica.jpg', title: 'KOSTÜME WOMEN', link: "women/", type: "image"  },
    { src: '/store.jpg', title: 'KOSTÜME STORE', link: "https://maps.app.goo.gl/Va5Tjw4gF4NMDg3g7", type: "image" },
  ],
  mobile: [
    { src: '/48_mobile.jpg', title: '#48SS25', link: "48ss25/", type: "image" },
    { src: '/mobile_peces.jpg', title: 'PECES RAROS . KOSTÜME', link: "peces-raros-kostume/", type: "image" },
    { src: '/mobile_men1.jpg', title: 'KOSTÜME MEN', link: "men/", type: "image"},
    { src: '/mobile_women.jpg', title: 'KOSTÜME WOMEN', link: "women/", type: "image"  },
    { src: '/store.jpg', title: 'KOSTÜME STORE', link: "https://maps.app.goo.gl/Va5Tjw4gF4NMDg3g7", type: "image" },
  ]
};

export default images;
