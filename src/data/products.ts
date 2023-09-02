// Importing product images
import oreiller1 from '../assets/images/Oreillers-1.png';
import oreiller2 from '../assets/images/Oreillers-2.png';
import oreiller5 from '../assets/images/Oreillers-5.png';
import oreiller6 from '../assets/images/Oreillers-6.png';
import oreiller8 from '../assets/images/Oreillers-8.png';
import mousse4 from '../assets/images/mousse4.png';
import mousse5 from '../assets/images/mousse5.png';
import mousse6 from '../assets/images/mousse6.png';
import comfortplus from '../assets/images/comfort+.png';
import comfortplus1 from '../assets/images/comfort+1.png';
import soft2 from '../assets/images/softplus2.png';
import soft1 from '../assets/images/softplus1.png';
import venise from '../assets/images/venise.png';
import venise1 from '../assets/images/venise1.png';
import pillowtop2 from '../assets/images/pillowtop2.png';
import pillowtop1 from '../assets/images/pillowtop1.png';
import orthomed2 from '../assets/images/orthomed2.png';
import orthomed1 from '../assets/images/orthomed1.png';
import orthomed132 from '../assets/images/orthomed132.png';
import orthomed131 from '../assets/images/orthomed131.png';
import orthomed152 from '../assets/images/orthomed152.png';
import orthomed151 from '../assets/images/orthomed151.png';
import bébé from '../assets/images/bébé.png';

// Importing product images (keep the import statements as they are)

interface ProductData {
  size: string;
  price: string;
}

interface Product {
  name: string;
  image: ImageMetadata;
  data: ProductData[];
  description: string;
}

const products: Product[] = [
  // Matelas orthopédique category
  {
    name: "Matelas orthopédique comfort plus 2 places",
    image: comfortplus, // Corresponding image
    data: [
      { size: "190/140", price: "285" },
      { size: "190/160", price: "299" },
      { size: "200/160", price: "349" },
      { size: "200/180", price: "399" }
    ],
    description: ""
  },
  {
    name: "Matelas orthopédique comfort plus 1 place",
    image: comfortplus1, // Corresponding image
    data: [
      { size: "190/90", price: "199" },
      { size: "190/100", price: "225" },
      { size: "190/120", price: "249" }
    ],
    description: ""
  },

  // Matelas orthopédique soft category
  {
    name: "Matelas orthopédique soft plus 7 étoiles 2 places",
    image: soft2, // Corresponding image
    data: [
      { size: "190/140", price: "350" },
      { size: "190/160", price: "380" },
      { size: "200/160", price: "430" },
      { size: "200/180", price: "480" }
    ],
    description: ""
  },
  {
    name: "Matelas orthopédique soft plus 7 étoiles 1 places",
    image: soft1, // Corresponding image
    data: [
      { size: "190/90", price: "245" },
      { size: "190/100", price: "265" },
      { size: "190/120", price: "295" }
    ],
    description: ""
  },

  // Matelas orthopédique venise category
  {
    name: "Matelas orthopédique venise plus 2 places",
    image: venise, // Corresponding image
    data: [
      { size: "190/140", price: "420" },
      { size: "190/160", price: "440" },
      { size: "200/160", price: "490" },
      { size: "200/180", price: "540" }
    ],
    description: ""
  },
  {
    name: "Matelas orthopédique venise plus 1 place",
    image: venise1, // Corresponding image
    data: [
      { size: "190/90", price: "285" },
      { size: "190/100", price: "305" },
      { size: "190/120", price: "335" }
    ],
    description: ""
  },

  // Matelas ortho pillow top category
  {
    name: "Matelas ortho pillow top 10 étoiles 2 places 32cm",
    image: pillowtop2, // Corresponding image
    data: [
      { size: "190/140", price: "530" },
      { size: "190/160", price: "549" },
      { size: "200/160", price: "599" },
      { size: "200/180", price: "650" }
    ],
    description: ""
  },
  {
    name: "Matelas ortho pillow top 10 étoiles 1 places 32cm",
    image: pillowtop1, // Corresponding image
    data: [
      { size: "190/90", price: "385" },
      { size: "190/100", price: "405" },
      { size: "190/120", price: "410" }
    ],
    description: ""
  },

  // Matelas orthomédical category
  {
    name: "Matelas orthomédical 11 étoiles 2 places",
    image: orthomed2, // Corresponding image
    data:[
      { size:"190/140", price:"649" },
      { size:"190/160", price:"699" }
    ],
    description: ""
  },
  {
    name: "Matelas orthomédical 11 étoiles 1 places",
    image: orthomed1, // Corresponding image
    data:[
      { size:"190/90", price:"390" },
      { size:"190/100", price:"410" },
      { size:"190/120", price:"435" }
    ],
    description: ""
  },

  // Matelas orthomédical category continued
  {
    name: "Matelas orthomédical 13 étoiles 2 places",
    image: orthomed132, // Corresponding image
    data:[
      { size:"190/140", price:"749" },
      { size:"190/160", price:"799" }
    ],
    description: ""
  },
  {
    name: "Matelas orthomédical 13 étoiles 1 places",
    image: orthomed131, // Corresponding image
    data:[
      { size:"190/90", price:"490" },
      { size:"190/100", price:"510" },
      { size:"190/120", price:"535" }
    ],
    description: ""
  },
  // Matelas orthomédical category continued
  {
    name: "Matelas orthomédical 15 étoiles 2 places",
    image: orthomed152, // Corresponding image
    data:[
      { size:"190/140", price:"1150" },
      { size:"190/160", price:"1199" }
    ],
    description: ""
  },
  {
    name: "Matelas orthomédical 15 étoiles 1 places",
    image: orthomed151, // Corresponding image
    data:[
      { size:"190/90", price:"650" },
      { size:"190/100", price:"675" },
      { size:"190/120", price:"699" }
    ],
    description: ""
  },
  // Matelas Bébé category
  {
    name: "Matelas Bébé",
    image: bébé, // Corresponding image
    data:[
      { size:"120/60", price:"119" },
      { size:"140/70", price:"139" }
    ],
    description: ""
  },
  // Matelas mousse category
  {
    name:"Matelas mousse 4 étoiles super mousse",
    image: mousse4, // Corresponding image
    data:[
      { size:"190/90", price:"79" },
      { size:"190/120", price:"99" }
    ],
    description: ""
  },
  {
    name:"Matelas mousse 5 étoiles super mousse",
    image: mousse5, // Corresponding image
    data:[
      { size:"190/90", price:"85" },
      { size:"190/120", price:"105" }
    ],
    description: ""
  },
  {
    name:"Matelas mousse 6 étoiles super mousse",
    image: mousse6, // Corresponding image
    data:[
      { size:"190/90", price:"110" },
      { size:"190/120", price:"130" }
    ],
    description: ""
  },

  // Oreiller category
  {
    name:"1 Oreiller Orthopédique Top Qualité Lavable 70x50cm",
    image: oreiller1, // Corresponding image
    data:[
      { size:"70x50", price:"18" }
    ],
    description: ""
  },
  {
    name:"2 Oreiller Orthopédique Top Qualité Lavable 70x50cm",
    image: oreiller2, // Corresponding image
    data:[
      { size:"70x50", price:"35" }
    ],
    description: ""
  },
  {
    name:"5 Oreiller Orthopédique Top Qualité Lavable 70x50cm",
    image: oreiller5, // Corresponding image
    data:[
      { size:"70x50", price:"85" }
    ],
    description: ""
  },
  {
    name:"6 Oreiller Orthopédique Top Qualité Lavable 70x50cm",
    image: oreiller6, // Corresponding image
    data:[
      { size:"70x50", price:"99" }
    ],
    description: ""
  },
  {
    name: "8 Oreiller Orthopédique Top Qualité Lavable 70x50cm",
    image: oreiller8, // Corresponding image
    data: [
      { size: "70x50", price: "128" }
    ],
    description: ""
  }
];

export default products;
