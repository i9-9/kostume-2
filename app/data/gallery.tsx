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
      src: '/img/desktop/collection1.png', 
      title: 'STONED SKIRT', 
      link: "collection1", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection2.png', 
      title: 'ZEFSIDE SUNGLASSES', 
      link: "collection2", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection3.png', 
      title: 'FERAL JACKET', 
      link: "collection3", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection4.png', 
      title: 'BALOONERISM DRESS', 
      link: "collection4", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection5.png', 
      title: 'VELOURIA HOODIE', 
      link: "collection5", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection6.png', 
      title: 'SMOOTH BOOTS', 
      link: "collection6", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection7.png', 
      title: 'INSOMNIAK JACKET', 
      link: "collection7", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection8.png', 
      title: 'RECKONER DRESS', 
      link: "collection8", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection9.png', 
      title: 'OBJECTS SWEATSHIRT', 
      link: "collection9", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection10.png', 
      title: 'OUTRO MASK', 
      link: "collection10", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection11.png', 
      title: 'HASENKAMP PANTS', 
      link: "collection11", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection12.png', 
      title: 'ZARS SUNGLASSES', 
      link: "collection12", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    }
  ],
  mobile: [
    { 
      src: '/img/desktop/collection1.png', 
      title: 'STONED SKIRT', 
      link: "collection1", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection2.png', 
      title: 'ZEFSIDE SUNGLASSES', 
      link: "collection2", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection3.png', 
      title: 'FERAL JACKET', 
      link: "collection3", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection4.png', 
      title: 'BALOONERISM DRESS', 
      link: "collection4", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection5.png', 
      title: 'VELOURIA HOODIE', 
      link: "collection5", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection6.png', 
      title: 'SMOOTH BOOTS', 
      link: "collection6", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection7.png', 
      title: 'INSOMNIAK JACKET', 
      link: "collection7", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection8.png', 
      title: 'RECKONER DRESS', 
      link: "collection8", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection9.png', 
      title: 'OBJECTS SWEATSHIRT', 
      link: "collection9", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection10.png', 
      title: 'OUTRO MASK', 
      link: "collection10", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection11.png', 
      title: 'HASENKAMP PANTS', 
      link: "collection11", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    },
    { 
      src: '/img/desktop/collection12.png', 
      title: 'ZARS SUNGLASSES', 
      link: "collection12", 
      type: "image",
      width: 658,
      height: 823,
      aspectRatio: "658/823"
    }
  ]
};

export default images;
