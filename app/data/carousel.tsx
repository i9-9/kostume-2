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

const BASE = "/img_carrousel_abr_14_opt";
const SHOP_AR = "https://eshop.kostumeweb.net";
const SHOP_US = "https://eshop.kostumeweb.net/us";

const mkLinks = (arPath: string, usPath: string) => ({
  ar: `${SHOP_AR}${arPath}`,
  us: `${SHOP_US}${usPath}`,
});

const carouselProducts: CarouselProduct[] = [
  {
    id: 1,
    nameAR: "CAMISA CASKET NEGRA",
    nameUS: "CASKET BLACK SHIRT",
    folder: BASE,
    images: { primary: `${BASE}/CASKET_NEGRA.webp`, hover: `${BASE}/CASKET_NEGRA.webp` },
    links: mkLinks("/productos/camisa-casket-blanca-copia-u4yfw/", "/products/casket-white-shirt-copia-1rtp0/"),
  },
  {
    id: 2,
    nameAR: "VESTIDO UNTITLED",
    nameUS: "UNTITLED DRESS",
    folder: BASE,
    images: { primary: `${BASE}/UNTITLED.webp`, hover: `${BASE}/UNTITLED.webp` },
    links: mkLinks("/productos/vestido-untitled-odiit/", "/products/untitled-dress-1tb19/"),
  },
  {
    id: 3,
    nameAR: "VESTIDO UNTITLED",
    nameUS: "UNTITLED DRESS",
    folder: BASE,
    images: { primary: `${BASE}/UNTITLED_2.webp`, hover: `${BASE}/UNTITLED_2.webp` },
    links: mkLinks("/productos/vestido-untitled-odiit/", "/products/untitled-dress-1tb19/"),
  },
  {
    id: 4,
    nameAR: "CAMISA CASKET BLANCA",
    nameUS: "CASKET WHITE SHIRT",
    folder: BASE,
    images: { primary: `${BASE}/CASKET_BLANCA.webp`, hover: `${BASE}/CASKET_BLANCA.webp` },
    links: mkLinks("/productos/camisa-casket-azul-copia-1fcz5/", "/products/casket-blue-shirt-copia-ok2vh/"),
  },
  {
    id: 5,
    nameAR: "FALDA CRIMEA",
    nameUS: "CRIMEA SKIRT",
    folder: BASE,
    images: { primary: `${BASE}/CRIMEA.webp`, hover: `${BASE}/CRIMEA.webp` },
    links: mkLinks("/productos/falda-crimea-1by8c/", "/products/crimea-skirt-ac7z1/"),
  },
  {
    id: 6,
    nameAR: "TOP DAZE",
    nameUS: "DAZE TOP",
    folder: BASE,
    images: { primary: `${BASE}/TOP_DAZE.webp`, hover: `${BASE}/TOP_DAZE.webp` },
    links: mkLinks("/productos/top-daze-1ygbq/", "/products/daze-top-19ely/"),
  },
  {
    id: 7,
    nameAR: "ANTEOJOS MANIFESTO",
    nameUS: "MANIFESTO SUNGLASSES",
    folder: BASE,
    images: { primary: `${BASE}/MANIFESTO.webp`, hover: `${BASE}/MANIFESTO.webp` },
    links: mkLinks("/productos/anteojos-avalon-copia-1uscj/", "/products/avalon-sunglasses-copia-ulj88/"),
  },
  {
    id: 8,
    nameAR: "BLUSA DEMOLITION BLANCA",
    nameUS: "DEMOLITION WHITE BLOUSE",
    folder: BASE,
    images: { primary: `${BASE}/DEMOLITION_BLANCA.webp`, hover: `${BASE}/DEMOLITION_BLANCA.webp` },
    links: mkLinks("/productos/blusa-demolition-blanca-1mqmb/", "/products/demolition-white-blouse-wb3va/"),
  },
  {
    id: 9,
    nameAR: "PANTALON HIGHER",
    nameUS: "HIGHER PANTS",
    folder: BASE,
    images: { primary: `${BASE}/HIGHER.webp`, hover: `${BASE}/HIGHER.webp` },
    links: mkLinks("/productos/pantalon-higher-1aubs/", "/products/higher-pants-wwg5y/"),
  },
  {
    id: 10,
    nameAR: "CAMPERA LAMAZE",
    nameUS: "LAMAZE JACKET",
    folder: BASE,
    images: { primary: `${BASE}/LAMAZE.webp`, hover: `${BASE}/LAMAZE.webp` },
    links: mkLinks("/productos/campera-lamaze-ex93a/", "/products/lamaze-jacket-cg6kr/"),
  },
  {
    id: 11,
    nameAR: "CAMISA CASKET AZUL",
    nameUS: "CASKET BLUE SHIRT",
    folder: BASE,
    images: { primary: `${BASE}/CASKET_AZUL.webp`, hover: `${BASE}/CASKET_AZUL.webp` },
    links: mkLinks("/productos/camisa-casket-azul-169so/", "/products/casket-blue-shirt-1tdi7/"),
  },
  {
    id: 12,
    nameAR: "SWEATER STEINER",
    nameUS: "STEINER SWEATER",
    folder: BASE,
    images: { primary: `${BASE}/STEINER.webp`, hover: `${BASE}/STEINER.webp` },
    links: mkLinks("/productos/sweater-steiner-1hs45/", "/products/steiner-sweater-15bv2/"),
  },
  {
    id: 13,
    nameAR: "CARDIGAN ASCEND",
    nameUS: "ASCEND CARDIGAN",
    folder: BASE,
    images: { primary: `${BASE}/ASCEND.webp`, hover: `${BASE}/ASCEND.webp` },
    links: mkLinks("/productos/cardigan-ascen-1qenh/", "/products/ascend-cardigan-1djm0/"),
  },
  {
    id: 14,
    nameAR: "TOP CABOOSE",
    nameUS: "CABOOSE TOP",
    folder: BASE,
    images: { primary: `${BASE}/CABOSSE.webp`, hover: `${BASE}/CABOSSE.webp` },
    links: mkLinks("/productos/top-caboose-76m1i/", "/products/caboose-top-ifd2q/"),
  },
  {
    id: 15,
    nameAR: "BLUSA DEMOLITION NEGRA",
    nameUS: "DEMOLITION BLACK BLOUSE",
    folder: BASE,
    images: { primary: `${BASE}/DEMOLITION_NEGRO.webp`, hover: `${BASE}/DEMOLITION_NEGRO.webp` },
    links: mkLinks("/productos/blusa-demolition-negra-xhbpg/", "/products/demolition-white-blouse-copia-333ma/"),
  },
  {
    id: 16,
    nameAR: "FAJA SANDTRAP",
    nameUS: "SANDTRAP GIRDLE",
    folder: BASE,
    images: { primary: `${BASE}/SANDTRAP.webp`, hover: `${BASE}/SANDTRAP.webp` },
    links: mkLinks("/productos/faja-sandtrap-e78x1/", "/products/sandtrap-gridle-1j87k/"),
  },
  {
    id: 17,
    nameAR: "TOP INFAMIA",
    nameUS: "INFAMIA TOP",
    folder: BASE,
    images: { primary: `${BASE}/INFAMIA.webp`, hover: `${BASE}/INFAMIA.webp` },
    links: mkLinks("/productos/top-infamia-m7z81/", "/products/infamia-top-1m50f/"),
  },
  {
    id: 18,
    nameAR: "VESTIDO SYMBIOSIS",
    nameUS: "SYMBIOSIS DRESS",
    folder: BASE,
    images: { primary: `${BASE}/VESTIDO_SYMBIOSIS.webp`, hover: `${BASE}/VESTIDO_SYMBIOSIS.webp` },
    links: mkLinks("/productos/vestido-symbiosis-7ams3/", "/products/symbiosis-dress-bdm21/"),
  },
  {
    id: 19,
    nameAR: "TAPADO NONSENSE",
    nameUS: "NONSENSE TRENCH",
    folder: BASE,
    images: { primary: `${BASE}/NON_SENSE_COAT.webp`, hover: `${BASE}/NON_SENSE_COAT.webp` },
    links: mkLinks("/productos/tapado-nonsense/", "/products/nonsense-trench-242jp/"),
  },
  {
    id: 20,
    nameAR: "FALDA SYMBIOSIS",
    nameUS: "SYMBIOSIS SKIRT",
    folder: BASE,
    images: { primary: `${BASE}/FALDA_SYMBIOSIS.webp`, hover: `${BASE}/FALDA_SYMBIOSIS.webp` },
    links: mkLinks("/productos/falda-symbiosis-4gtif/", "/products/symbiosis-skirt-1m5kp/"),
  },
  {
    id: 21,
    nameAR: "FALDA SISSY",
    nameUS: "SISSY SKIRT",
    folder: BASE,
    images: { primary: `${BASE}/SISSY.webp`, hover: `${BASE}/SISSY.webp` },
    links: mkLinks("/productos/falda-sissy-ayrwo/", "/products/sissy-skirt-1mr5n/"),
  },
  {
    id: 22,
    nameAR: "PANTALON MODULATIONS",
    nameUS: "MODULATION PANTS",
    folder: BASE,
    images: { primary: `${BASE}/MODULATIONS.webp`, hover: `${BASE}/MODULATIONS.webp` },
    links: mkLinks("/productos/pantalon-modulations-tuzjy/", "/products/modulation-pants-jfzdh/"),
  },
  {
    id: 23,
    nameAR: "SACO STARDUST",
    nameUS: "STARDUST TAILORED BLAZER",
    folder: BASE,
    images: { primary: `${BASE}/STARDUST.webp`, hover: `${BASE}/STARDUST.webp` },
    links: mkLinks("/productos/saco-stardust-c4078/", "/products/stardust-tailored-blazer-1y9ke/"),
  },
  {
    id: 24,
    nameAR: "CAMPERA CONTRARIAN NEGRO",
    nameUS: "CONTRARIAN BLACK JACKET",
    folder: BASE,
    images: { primary: `${BASE}/CONTRARIAN_NEGRO.webp`, hover: `${BASE}/CONTRARIAN_NEGRO.webp` },
    links: mkLinks("/productos/campera-contrarian-negro-1aap0/", "/products/contrarian-black-jacket-f4g8u/"),
  },
  {
    id: 25,
    nameAR: "ANTEOJOS MANIFESTO",
    nameUS: "MANIFESTO SUNGLASSES",
    folder: BASE,
    images: { primary: `${BASE}/MANIFESTO_2.webp`, hover: `${BASE}/MANIFESTO_2.webp` },
    links: mkLinks("/productos/anteojos-avalon-copia-1uscj/", "/products/avalon-sunglasses-copia-ulj88/"),
  },
  {
    id: 26,
    nameAR: "PANTALON MODULATIONS",
    nameUS: "MODULATION PANTS",
    folder: BASE,
    images: { primary: `${BASE}/MODULATIONS_2.webp`, hover: `${BASE}/MODULATIONS_2.webp` },
    links: mkLinks("/productos/pantalon-modulations-tuzjy/", "/products/modulation-pants-jfzdh/"),
  },
  {
    id: 27,
    nameAR: "ANTEOJOS AVALON",
    nameUS: "AVALON SUNGLASSES",
    folder: BASE,
    images: { primary: `${BASE}/AVALON.webp`, hover: `${BASE}/AVALON.webp` },
    links: mkLinks("/productos/avalon-sunglasses-15btq/", "/products/avalon-sunglasses-15btq/"),
  },
  {
    id: 28,
    nameAR: "CAMPERA CONTRARIAN NEGRO",
    nameUS: "CONTRARIAN BLACK JACKET",
    folder: BASE,
    images: { primary: `${BASE}/CONTRARIAN_NEGRO_2.webp`, hover: `${BASE}/CONTRARIAN_NEGRO_2.webp` },
    links: mkLinks("/productos/campera-contrarian-negro-1aap0/", "/products/contrarian-black-jacket-f4g8u/"),
  },
];

export default carouselProducts;
export type { CarouselProduct };
