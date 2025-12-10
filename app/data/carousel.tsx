interface CarouselProduct {
  id: number;
  nameAR: string;
  nameUS: string;
  folder: string;
  images: {
    primary: string;
    hover: string;
  };
  links: {
    ar: string;
    us: string;
  };
}

const carouselProducts: CarouselProduct[] = [
  {
    id: 1,
    nameAR: "BLUSA ANTISTAR",
    nameUS: "ANTISTAR BLOUSE",
    folder: "BLUSA ANTISTAR NEGRO",
    images: {
      primary: "/img/diciembre25/CAROUSEL/BLUSA ANTISTAR NEGRO/1.jpg",
      hover: "/img/diciembre25/CAROUSEL/BLUSA ANTISTAR NEGRO/2.jpg",
    },
    links: {
      ar: "https://eshop.kostumeweb.net/productos/blusa-antistar-negra/",
      us: "https://eshop.kostumeweb.net/us/products/antistar-black-blouse/",
    },
  },
  {
    id: 2,
    nameAR: "BUZO PLOTTIER",
    nameUS: "PLOTTIER SWEATSHIRT",
    folder: "BUZO PLOTTIER NEGRO",
    images: {
      primary: "/img/diciembre25/CAROUSEL/BUZO PLOTTIER NEGRO/1.jpg",
      hover: "/img/diciembre25/CAROUSEL/BUZO PLOTTIER NEGRO/2.jpg",
    },
    links: {
      ar: "https://eshop.kostumeweb.net/productos/buzo-plottier-negro/",
      us: "https://eshop.kostumeweb.net/us/products/plottier-black-sweatshirt/",
    },
  },
  {
    id: 3,
    nameAR: "FALDA AVIAN",
    nameUS: "AVIAN SKIRT",
    folder: "FALDA AVIAN GRIS",
    images: {
      primary: "/img/diciembre25/CAROUSEL/FALDA AVIAN GRIS/1.jpg",
      hover: "/img/diciembre25/CAROUSEL/FALDA AVIAN GRIS/3.jpg",
    },
    links: {
      ar: "https://eshop.kostumeweb.net/productos/avian-falda-gris/",
      us: "https://eshop.kostumeweb.net/us/products/avian-grey-skirt/",
    },
  },
  {
    id: 4,
    nameAR: "CAMPERA STORM",
    nameUS: "STORM JACKET",
    folder: "CAMPERA STORM NEGRO",
    images: {
      primary: "/img/diciembre25/CAROUSEL/CAMPERA STORM NEGRO/1.jpg",
      hover: "/img/diciembre25/CAROUSEL/CAMPERA STORM NEGRO/3.jpg",
    },
    links: {
      ar: "https://eshop.kostumeweb.net/productos/campera-storm-negro/",
      us: "https://eshop.kostumeweb.net/us/products/storm-black-jacket/",
    },
  },
  {
    id: 5,
    nameAR: "VESTIDO TRINITY",
    nameUS: "TRINITY DRESS",
    folder: "VESTIDO TRINITY BLANCO",
    images: {
      primary: "/img/diciembre25/CAROUSEL/VESTIDO TRINITY BLANCO/1.jpg",
      hover: "/img/diciembre25/CAROUSEL/VESTIDO TRINITY BLANCO/5.jpg",
    },
    links: {
      ar: "https://eshop.kostumeweb.net/productos/vestido-trinity-blanco/",
      us: "https://eshop.kostumeweb.net/us/products/trinity-white-dress/",
    },
  },
  {
    id: 6,
    nameAR: "SHORT GILBERT",
    nameUS: "GILBERT SHORT",
    folder: "SHORT GILBERT NEGRO",
    images: {
      primary: "/img/diciembre25/CAROUSEL/SHORT GILBERT NEGRO/1.jpg",
      hover: "/img/diciembre25/CAROUSEL/SHORT GILBERT NEGRO/4.jpg",
    },
    links: {
      ar: "https://eshop.kostumeweb.net/productos/short-gilbert-negro/",
      us: "https://eshop.kostumeweb.net/us/products/gilbert-black-short/",
    },
  },
  {
    id: 7,
    nameAR: "CAMISA VOYAGE",
    nameUS: "VOYAGE SHIRT",
    folder: "CAMISA VOYAGE VERDE",
    images: {
      primary: "/img/diciembre25/CAROUSEL/CAMISA VOYAGE VERDE/1.jpg",
      hover: "/img/diciembre25/CAROUSEL/CAMISA VOYAGE VERDE/2.jpg",
    },
    links: {
      ar: "https://eshop.kostumeweb.net/productos/camisa-voyage-verde/",
      us: "https://eshop.kostumeweb.net/us/products/voyage-green-shirt/",
    },
  },
  {
    id: 8,
    nameAR: "SOMBRERO FLOATING",
    nameUS: "FLOATING HAT",
    folder: "SOMBRERO FLOATING CAMEL",
    images: {
      primary: "/img/diciembre25/CAROUSEL/SOMBRERO FLOATING CAMEL/1.jpg",
      hover: "/img/diciembre25/CAROUSEL/SOMBRERO FLOATING CAMEL/4a.jpg",
    },
    links: {
      ar: "https://eshop.kostumeweb.net/productos/sombrero-floating-camel/",
      us: "https://eshop.kostumeweb.net/us/products/floating-camel-hat/",
    },
  },
  {
    id: 9,
    nameAR: "SOMBRERO FLOATING",
    nameUS: "FLOATING HAT",
    folder: "SOMBRERO FLOATING NEGRO",
    images: {
      primary: "/img/diciembre25/CAROUSEL/SOMBRERO FLOATING NEGRO/1.jpg",
      hover: "/img/diciembre25/CAROUSEL/SOMBRERO FLOATING NEGRO/2.jpg",
    },
    links: {
      ar: "https://eshop.kostumeweb.net/productos/sombrero-floating-negro/",
      us: "https://eshop.kostumeweb.net/us/products/floating-black-hat/",
    },
  },
];

export default carouselProducts;
export type { CarouselProduct };

