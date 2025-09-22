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
      src: '/img/925/desktop/left_big_desktop.jpg', 
      title: 'LEFT BIG', 
      link: "50ss26", 
      type: "image",
      width: 800,
      height: 1000,
      aspectRatio: "4/5"
    },
    { 
      src: '/img/925/desktop/right_big_desktop.jpg', 
      title: 'RIGHT BIG', 
      link: "50ss26", 
      type: "image",
      width: 800,
      height: 1000,
      aspectRatio: "4/5"
    },
    { 
      src: '/img/925/desktop/1_rain_small.jpg', 
      title: 'RAIN', 
      link: "rain-capsule", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/925/desktop/2_denim_small.jpg', 
      title: 'DENIM', 
      link: "denim", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/925/desktop/3_eyewear_small.jpg', 
      title: 'EYEWEAR', 
      link: "ver-todo/gafas1", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection6.png', 
      title: 'SMOOTH BOOTS', 
      link: "botas-smooth", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection7.png', 
      title: 'INSOMNIAK JACKET', 
      link: "campera-insomniak", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection8.png', 
      title: 'RECKONER DRESS', 
      link: "vestido-reckoner", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection9.png', 
      title: 'OBJECTS SWEATSHIRT', 
      link: "buzo-objects-negro", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection10.png', 
      title: 'OUTRO MASK', 
      link: "mascara-outro", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection11.png', 
      title: 'HASENKAMP PANTS', 
      link: "pantalon-hasenkamp", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection12.png', 
      title: 'ZARS SUNGLASSES', 
      link: "gafas-zars", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    }
  ],
  mobile: [
    { 
      src: '/img/925/mobile/1_rain_mobile.jpg', 
      title: 'RAIN', 
      link: "https://eshop.kostumeweb.net/rain-capsule/", 
      type: "image",
      width: 800,
      height: 1000,
      aspectRatio: "4/5"
    },
    { 
      src: '/img/925/mobile/2_denim_mobile.jpg', 
      title: 'DENIM', 
      link: "https://eshop.kostumeweb.net/ar/50ss26", 
      type: "image",
      width: 800,
      height: 1000,
      aspectRatio: "4/5"
    },
    { 
      src: '/img/925/mobile/3_eyewear_mobile.jpg', 
      title: 'EYEWEAR', 
      link: "https://eshop.kostumeweb.net/ar/50ss26", 
      type: "image",
      width: 800,
      height: 1000,
      aspectRatio: "4/5"
    },
    { 
      src: '/img/925/desktop/1_rain_small.jpg', 
      title: 'RAIN', 
      link: "rain-capsule", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/925/desktop/2_denim_small.jpg', 
      title: 'DENIM', 
      link: "denim", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/925/desktop/3_eyewear_small.jpg', 
      title: 'EYEWEAR', 
      link: "ver-todo/gafas1", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection6.png', 
      title: 'SMOOTH BOOTS', 
      link: "botas-smooth", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection7.png', 
      title: 'INSOMNIAK JACKET', 
      link: "campera-insomniak", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection8.png', 
      title: 'RECKONER DRESS', 
      link: "vestido-reckoner", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection9.png', 
      title: 'OBJECTS SWEATSHIRT', 
      link: "buzo-objects-negro", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection10.png', 
      title: 'OUTRO MASK', 
      link: "mascara-outro", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection11.png', 
      title: 'HASENKAMP PANTS', 
      link: "pantalon-hasenkamp", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection12.png', 
      title: 'ZARS SUNGLASSES', 
      link: "gafas-zars", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    }
  ]
};

export default images;
