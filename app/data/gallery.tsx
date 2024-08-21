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
      { src: '/48ss25_1.jpg', title: '#48SS25', link: "peces-raros-kostume/", type: "image" },
      { src: '/48ss25_2.jpg', title: '#48SS25', link: "women/", type: "image" },
      { src: '/peces_raros_chica.jpg', title: 'PECES RAROS', link: "https://seamm.io/marketplace?search=kost%C3%BCme", type: "image" },
      { src: '/men.jpg', title: 'KOSTÜME MEN', link: "men/", type: "image"},
      { src: '/kostume_women_chica.jpg', title: 'KOSTÜME WOMEN', link: "47aw24/", type: "image"  },
      { src: '/store.jpg', title: 'KOSTÜME STORE', link: "https://maps.app.goo.gl/Va5Tjw4gF4NMDg3g7", type: "image" },
  ],
  mobile: [
      { src: '/mobile_48ss25.jpg', title: '#48SS25', link: "peces-raros-kostume/", type: "image" },
      { src: '/mobile_48ss25_2.jpg', title: '#48SS25', link: "women/", type: "image" },
      { src: '/mobile_peces.jpg', title: 'PECES RAROS', link: "https://seamm.io/marketplace?search=kost%C3%BCme", type: "image" },
      { src: '/mobile_men1.jpg', title: 'KOSTÜME MEN', link: "men/", type: "image"},
      { src: '/mobile_women.jpg', title: 'KOSTÜME WOMEN', link: "women/", type: "image"  },
      { src: '/store.jpg', title: 'KOSTÜME STORE', link: "https://maps.app.goo.gl/Va5Tjw4gF4NMDg3g7", type: "image" },
  ]
};

export default images;
