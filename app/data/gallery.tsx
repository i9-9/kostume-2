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
      src: '/img/825/denim_desktop.jpg', 
      title: 'DENIM', 
      link: "denim", 
      type: "image",
      width: 800,
      height: 1000,
      aspectRatio: "4/5"
    },
    { 
      src: '/img/825/eyewear_desktop.jpg', 
      title: 'EYEWEAR', 
      link: "ver-todo/gafas1", 
      type: "image",
      width: 800,
      height: 1000,
      aspectRatio: "4/5"
    },
    { 
      src: '/img/desktop/collection3.png', 
      title: 'FERAL JACKET', 
      link: "campera-feral", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection4.png', 
      title: 'BALLOONERISM DRESS', 
      link: "vestido-balloonerism", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection5.png', 
      title: 'VELOURIA HOODIE', 
      link: "buzo-velouria-negro", 
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
      src: '/img/825/denim_mobile_825.jpg', 
      title: 'DENIM', 
      link: "denim", 
      type: "image",
      width: 800,
      height: 1000,
      aspectRatio: "4/5"
    },
    { 
      src: '/img/825/eyewear_mobile_825.jpg', 
      title: 'EYEWEAR', 
      link: "ver-todo/gafas1", 
      type: "image",
      width: 800,
      height: 1000,
      aspectRatio: "4/5"
    },
    { 
      src: '/img/desktop/collection3.png', 
      title: 'FERAL JACKET', 
      link: "campera-feral", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection4.png', 
      title: 'BALLOONERISM DRESS', 
      link: "vestido-balloonerism", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection5.png', 
      title: 'VELOURIA HOODIE', 
      link: "buzo-velouria-negro", 
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
