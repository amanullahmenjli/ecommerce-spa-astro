// Importing product images
import oreiller1 from '../assets/images/Oreillers-1.png';
import oreiller2 from '../assets/images/Oreillers-2.png';
import oreiller5 from '../assets/images/Oreillers-5.png';
import oreiller6 from '../assets/images/Oreillers-6.png';
import oreiller8 from '../assets/images/Oreillers-8.png';
import mousse4 from '../assets/images/mousse4.png';
import mousse5 from '../assets/images/mousse5.png';
import mousse6 from '../assets/images/mousse6.png';
import etoile9 from '../assets/images/9etoile.png';
import comfortplus from '../assets/images/comfort+.png';
import comfortplus1 from '../assets/images/comfort+1.png';
import soft2 from '../assets/images/softplus2.png';
import soft92 from '../assets/images/soft92.png';
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
    name: "Matelas orthopédique confort plus 2 places",
    image: comfortplus, // Corresponding image
    data: [
      { size: "190/160", price: "299" },
      { size: "190/140", price: "285" },
      { size: "200/160", price: "399" },
      { size: "200/180", price: "445" }
    ],
    description: "Découvrez le confort et le soutien luxueux du matelas 6 étoiles. Le matelas est garanti 5 ans et livré à domicile gratuitement sur toute la Tunisie. Il a 23 cm d’épaisseur et il est recouvert de tissu Jacquard très confortable. La carcasse en ressorts biconiques de haute section offre un soutien ferme. L’isolation du matelas et réalisée avec une plaque de feutre super rigide et de haute densité de 1000 g/m2, associée à 2 plaques de 3 cm de mousse haute densité , apporte à ce matelas un confort de couchage très satisfaisant."
  },
  {
    name: "Matelas orthopédique confort plus 1 place",
    image: comfortplus1, // Corresponding image
    data: [
      { size: "190/90", price: "199" },
      { size: "190/80", price: "185" },
      { size: "190/100", price: "240" },
      { size: "190/120", price: "255" }
    ],
    description: "Découvrez le confort et le soutien luxueux du matelas 6 étoiles. Le matelas est garanti 5 ans et livré à domicile gratuitement sur toute la Tunisie. Il a 23 cm d’épaisseur et il est recouvert de tissu Jacquard très confortable. La carcasse en ressorts biconiques de haute section offre un soutien ferme. L’isolation du matelas et réalisée avec une plaque de feutre super rigide et de haute densité de 1000 g/m2, associée à 2 plaques de 3 cm de mousse haute densité , apporte à ce matelas un confort de couchage très satisfaisant."
  },

  // Matelas orthopédique soft category
  {
    name: "Matelas orthopédique soft plus 7 étoiles 2 places",
    image: soft2, // Corresponding image
    data: [
      { size: "190/160", price: "390" },
      { size: "190/140", price: "375" },
      { size: "200/160", price: "440" },
      { size: "200/180", price: "499" }
    ],
    description: "Découvrez le confort et le soutien luxueux du matelas 7 étoiles soft. Le matelas est garanti 10 ans et livré à domicile gratuitement sur toute la Tunisie. Il a 25 cm d’épaisseur et il est recouvert de tissu Jacquard très confortable. La carcasse en ressorts biconiques de haute section offre un soutien ferme. L’isolation du matelas et réalisée avec une plaque de feutre super rigide et de haute densité de 1000 g/m2, associée à 2 plaques de 5 cm de mousse haute densité , apporte à ce matelas un confort de couchage très satisfaisant."
  },
  {
    name: "Matelas orthopédique soft plus 7 étoiles 1 place",
    image: soft1, // Corresponding image
    data: [
      { size: "190/90", price: "255" },
      { size: "190/80", price: "235" },
      { size: "190/100", price: "285" },
      { size: "190/120", price: "350" }
    ],
    description: "Découvrez le confort et le soutien luxueux du matelas 7 étoiles soft. Le matelas est garanti 10 ans et livré à domicile gratuitement sur toute la Tunisie. Il a 25 cm d’épaisseur et il est recouvert de tissu Jacquard très confortable. La carcasse en ressorts biconiques de haute section offre un soutien ferme. L’isolation du matelas et réalisée avec une plaque de feutre super rigide et de haute densité de 1000 g/m2, associée à 2 plaques de 5 cm de mousse haute densité , apporte à ce matelas un confort de couchage très satisfaisant."
  },

  // Matelas orthopédique venise category
  {
    name: "Matelas orthopédique venise plus  9 étoiles 2 places",
    image: venise, // Corresponding image
    data: [
      { size: "190/160", price: "459" },
      { size: "190/140", price: "440" },
      { size: "200/160", price: "499" },
      { size: "200/180", price: "599" }
    ],
    description: "Découvrez le confort et le soutien luxueux du matelas 9 étoiles soft. Le matelas est garanti 10 ans et livré à domicile gratuitement sur toute la Tunisie. Il a 25 cm d’épaisseur et il est recouvert de tissu Jacquard très confortable. La carcasse en ressorts biconiques de haute section offre un soutien ferme. L’isolation du matelas et réalisée avec une plaque de feutre super rigide et de haute densité de 1000 g/m2, associée à 2 plaques de 7 cm de mousse haute densité , apporte à ce matelas un confort de couchage très satisfaisant."
  },
  {
    name: "Matelas orthopédique venise plus  9 étoiles 1 place",
    image: etoile9, // Corresponding image
    data: [
      { size: "190/90", price: "285" },
      { size: "190/80", price: "275" },
      { size: "190/100", price: "345" },
      { size: "190/120", price: "399" }
    ],
    description: "Découvrez le confort et le soutien luxueux du matelas 9 étoiles soft. Le matelas est garanti 10 ans et livré à domicile gratuitement sur toute la Tunisie. Il a 25 cm d’épaisseur et il est recouvert de tissu Jacquard très confortable. La carcasse en ressorts biconiques de haute section offre un soutien ferme. L’isolation du matelas et réalisée avec une plaque de feutre super rigide et de haute densité de 1000 g/m2, associée à 2 plaques de 7 cm de mousse haute densité , apporte à ce matelas un confort de couchage très satisfaisant."
  },

  // Matelas orthomédical category
  {
    name: "Matelas orthomédical 11 étoiles 2 places",
    image: orthomed2, // Corresponding image
    data:[
      { size:"190/160", price:"699" },
      { size:"190/140", price:"649" },
      { size:"200/160", price:"749" },
      { size:"200/180", price:"849" },
    ],
    description: "Caractéristiques du Matelas Haute Gamme:" + "- Hauteur: 27 cm" + "- Supporte jusqu'à: 220 kg par personne" + "- Technologie de Ressort: Ressort Bonnells pour un soutien optimal" + "- Réversible: Le matelas peut être retourné pour une usure uniforme" + "- Tissu: Fabriqué en 100 % coton, anti-acarien pour un environnement sain" + "- Sécurité Incendie: Résistant au feu pour une tranquillité d'esprit accrue" + "Ce matelas haute gamme offre un confort inégalé et une qualité exceptionnelle pour des nuits de sommeil parfaites, ce qui en fait le choix idéal pour ceux qui recherchent l'excellence dans leur sommeil. 🥇",
  },
  {
    name: "Matelas orthomédical 11 étoiles 1 place",
    image: venise1, // Corresponding image
    data:[
      { size:"190/90", price:"399" },
      { size:"190/80", price:"389" },
      { size:"190/100", price:"435" },
      { size:"190/120", price:"485" }
    ],
    description: "Caractéristiques du Matelas Haute Gamme:" + "- Hauteur: 27 cm" + "- Supporte jusqu'à: 220 kg par personne" + "- Technologie de Ressort: Ressort Bonnells pour un soutien optimal" + "- Réversible: Le matelas peut être retourné pour une usure uniforme" + "- Tissu: Fabriqué en 100 % coton, anti-acarien pour un environnement sain" + "- Sécurité Incendie: Résistant au feu pour une tranquillité d'esprit accrue" + "Ce matelas haute gamme offre un confort inégalé et une qualité exceptionnelle pour des nuits de sommeil parfaites, ce qui en fait le choix idéal pour ceux qui recherchent l'excellence dans leur sommeil. 🥇",  },

  // Matelas orthomédical category continued
  {
    name: "Matelas orthomédical 13 étoiles 2 places",
    image: orthomed132, // Corresponding image
    data:[
      { size:"190/160", price:"799" },
      { size:"190/140", price:"749" },
      { size:"200/160", price:"849" },
      { size:"200/180", price:"949" },
    ],
    description: "Caractéristiques du Matelas Haute Gamme:" + "- Hauteur: 28 cm" + "- Supporte jusqu'à: 260 kg par personne" + "- Technologie de Ressort: Ressort Ensachés pour un soutien optimal" + "- Réversible: Le matelas peut être retourné pour une usure uniforme" + "- Tissu: Fabriqué en 100 % coton, anti-acarien pour un environnement sain" + "- Sécurité Incendie: Résistant au feu pour une tranquillité d'esprit accrue" + "Ce matelas haute gamme offre un confort inégalé et une qualité exceptionnelle pour des nuits de sommeil parfaites, ce qui en fait le choix idéal pour ceux qui recherchent l'excellence dans leur sommeil. 🥇",
    },
  {
    name: "Matelas orthomédical 13 étoiles 1 place",
    image: orthomed131, // Corresponding image
    data:[
      { size:"190/90", price:"490" },
      { size:"190/80", price:"480" },
      { size:"190/100", price:"525" },
      { size:"190/120", price:"585" }
    ],
    description: "Caractéristiques du Matelas Haute Gamme:" + "- Hauteur: 28 cm" + "- Supporte jusqu'à: 130 kg par personne" + "- Technologie de Ressort: Ressort Ensachés pour un soutien optimal" + "- Réversible: Le matelas peut être retourné pour une usure uniforme" + "- Tissu: Fabriqué en 100 % coton, anti-acarien pour un environnement sain" + "- Sécurité Incendie: Résistant au feu pour une tranquillité d'esprit accrue" + "Ce matelas haute gamme offre un confort inégalé et une qualité exceptionnelle pour des nuits de sommeil parfaites, ce qui en fait le choix idéal pour ceux qui recherchent l'excellence dans leur sommeil. 🥇",
  },
  // Matelas orthomédical category continued
  {
    name: "Matelas orthomédical 15 étoiles 2 places",
    image: orthomed152, // Corresponding image
    data:[
      { size:"190/160", price:"1199" },
      { size:"190/140", price:"1150" },
      { size:"200/160", price:"1350" },
      { size:"200/180", price:"1499" },
    ],
    description: "MATLAS ERGONOMIQUE À RESSORTS DE HAUTE QUALITÉ : Découvrez notre matelas ergonomique à ressorts de la plus haute qualité, conçu pour vous offrir un sommeil incomparable. Avec une capacité de support allant jusqu'à 300 kg par personne, ce matelas est la solution idéale pour un repos bien mérité. Avec une hauteur de 30 cm, ce matelas vous offre un confort exceptionnel et un soutien optimal pour un sommeil réparateur. Les ressorts ensachés garantissent une répartition uniforme du poids corporel, réduisant ainsi les points de pression et offrant un soutien individuel à chaque partie de votre corps. La réversibilité de ce matelas le rend polyvalent, vous permettant de le retourner pour prolonger sa durée de vie. Le tissu en 100 % coton est spécialement traité pour être anti-acarien, assurant un environnement de sommeil propre et sain. De plus, ce matelas est résistant au feu, offrant une tranquillité d'esprit supplémentaire en matière de sécurité. Nous avons tellement confiance en la qualité de notre matelas ergonomique à ressorts qu'il est livré avec une garantie exceptionnelle de 11 ans. Investissez dans votre bien-être et votre confort avec notre matelas ergonomique de haute qualité. Profitez d'un sommeil de qualité supérieure et d'un soutien inégalé pour de nombreuses nuits à venir."
  },
  {
    name: "Matelas orthomédical 15 étoiles 1 place",
    image: orthomed151, // Corresponding image
    data:[
      { size:"190/90", price:"650" },
      { size:"190/80", price:"640" },
      { size:"190/100", price:"725" },
      { size:"190/120", price:"799" }
    ],
    description: "MATLAS ERGONOMIQUE À RESSORTS DE HAUTE QUALITÉ : Découvrez notre matelas ergonomique à ressorts de la plus haute qualité, conçu pour vous offrir un sommeil incomparable. Avec une capacité de support allant jusqu'à 150 kg par personne, ce matelas est la solution idéale pour un repos bien mérité. Avec une hauteur de 30 cm, ce matelas vous offre un confort exceptionnel et un soutien optimal pour un sommeil réparateur. Les ressorts ensachés garantissent une répartition uniforme du poids corporel, réduisant ainsi les points de pression et offrant un soutien individuel à chaque partie de votre corps. La réversibilité de ce matelas le rend polyvalent, vous permettant de le retourner pour prolonger sa durée de vie. Le tissu en 100 % coton est spécialement traité pour être anti-acarien, assurant un environnement de sommeil propre et sain. De plus, ce matelas est résistant au feu, offrant une tranquillité d'esprit supplémentaire en matière de sécurité. Nous avons tellement confiance en la qualité de notre matelas ergonomique à ressorts qu'il est livré avec une garantie exceptionnelle de 11 ans. Investissez dans votre bien-être et votre confort avec notre matelas ergonomique de haute qualité. Profitez d'un sommeil de qualité supérieure et d'un soutien inégalé pour de nombreuses nuits à venir."
  },
  // Matelas Bébé category
  {
    name: "Matelas Bébé",
    image: bébé, // Corresponding image
    data:[
      { size:"120/60", price:"119" },
    ],
    description: "Découvrez le confort et le soutien luxueux du matelas bébé. Le matelas est garanti 10 ans et livré à domicile gratuitement sur toute la Tunisie. Il a 25 cm d’épaisseur et il est recouvert de tissu Jacquard très confortable. La carcasse en ressorts biconiques de haute section offre un soutien ferme. L’isolation du matelas et réalisée avec une plaque de feutre super rigide et de haute densité de 1000 g/m2, associée à 2 plaques de 5 cm de mousse haute densité , apporte à ce matelas un confort de couchage très satisfaisant."
  },
  // Matelas mousse category
  {
    name:"Matelas mousse 4 étoiles super mousse",
    image: mousse4, // Corresponding image
    data:[
      { size:"190/65", price:"79" },
      { size:"190/70", price:"89" },
      { size:"190/80", price:"99" },
      { size:"190/90", price:"109" }
    ],
    description: "Ce matelas en mousse Premier Choix et de densité 15/17 ajoute du confort à votre chambre ou à votre salon. Il est Garantie 10 ans et livré à domicile  sur toute la Tunisie. Ce matelas est robuste, solide et ferme, et offre un excellent soutien et une tenue durable pour une utilisation jour après jour. Sa conception en mousse lui rend extrêmement flexible, léger."
  },
  {
    name:"Matelas mousse 5 étoiles super mousse",
    image: mousse5, // Corresponding image
    data:[
      { size:"190/65", price:"89" },
      { size:"190/70", price:"99" },
      { size:"190/80", price:"109" },
      { size:"190/90", price:"119" }
    ],
    description: "Ce matelas en mousse Premier Choix et de densité 20/24 ajoute du confort à votre chambre ou à votre salon. Il est Garantie 10 ans et livré à domicile  sur toute la Tunisie. Ce matelas est robuste, solide et ferme, et offre un excellent soutien et une tenue durable pour une utilisation jour après jour. Sa conception en mousse lui rend extrêmement flexible, léger."
  },
  {
    name:"Matelas mousse 6 étoiles super mousse",
    image: mousse6, // Corresponding image
    data:[
      { size:"190/65", price:"115" },
      { size:"190/70", price:"125" },
      { size:"190/80", price:"135" },
      { size:"190/90", price:"145" }
    ],
    description: "Ce matelas en mousse Premier Choix et de densité 28/30 ajoute du confort à votre chambre ou à votre salon. Il est Garantie 10 ans et livré à domicile  sur toute la Tunisie. Ce matelas est robuste, solide et ferme, et offre un excellent soutien et une tenue durable pour une utilisation jour après jour. Sa conception en mousse lui rend extrêmement flexible, léger."
  },

  // Oreiller category
  {
    name:"1 Oreiller Orthopédique Top Qualité Lavable 70x50cm",
    image: oreiller1, // Corresponding image
    data:[
      { size:"70x50", price:"18" }
    ],
    description: "Oreiller super confortable. L’oreiller est fabriqué avec un tissu frais au toucher, doté de propriétés respirantes et rafraîchissantes pour une expérience de sommeil apaisante. Garnissage en fibres de première qualité qui ne retiennent pas la chaleur et ne déclenchent pas d’allergies. Le rembourrage aéré permet une meilleure circulation de l’air, pour que vous puissiez dormir au frais. Ces oreillers offrent un confort et soutien maximal quelle que soit la position. ✅ Garnissage en Fibre vierge creux super siliconée Haute Qualité ➡️ Paiement à la livraison après vérification de produit. ✅ Livraison sur toute la Tunisie"
  },
  {
    name:"2 Oreiller Orthopédique Top Qualité Lavable 70x50cm",
    image: oreiller2, // Corresponding image
    data:[
      { size:"70x50", price:"35" }
    ],
    description: "Oreiller super confortable. L’oreiller est fabriqué avec un tissu frais au toucher, doté de propriétés respirantes et rafraîchissantes pour une expérience de sommeil apaisante. Garnissage en fibres de première qualité qui ne retiennent pas la chaleur et ne déclenchent pas d’allergies. Le rembourrage aéré permet une meilleure circulation de l’air, pour que vous puissiez dormir au frais. Ces oreillers offrent un confort et soutien maximal quelle que soit la position. ✅ Garnissage en Fibre vierge creux super siliconée Haute Qualité ➡️ Paiement à la livraison après vérification de produit. ✅ Livraison sur toute la Tunisie"
  },
  {
    name:"5 Oreiller Orthopédique Top Qualité Lavable 70x50cm",
    image: oreiller5, // Corresponding image
    data:[
      { size:"70x50", price:"85" }
    ],
    description: "Oreiller super confortable. L’oreiller est fabriqué avec un tissu frais au toucher, doté de propriétés respirantes et rafraîchissantes pour une expérience de sommeil apaisante. Garnissage en fibres de première qualité qui ne retiennent pas la chaleur et ne déclenchent pas d’allergies. Le rembourrage aéré permet une meilleure circulation de l’air, pour que vous puissiez dormir au frais. Ces oreillers offrent un confort et soutien maximal quelle que soit la position. ✅ Garnissage en Fibre vierge creux super siliconée Haute Qualité ➡️ Paiement à la livraison après vérification de produit. ✅ Livraison sur toute la Tunisie"
  },
  {
    name:"6 Oreiller Orthopédique Top Qualité Lavable 70x50cm",
    image: oreiller6, // Corresponding image
    data:[
      { size:"70x50", price:"99" }
    ],
    description: "Oreiller super confortable. L’oreiller est fabriqué avec un tissu frais au toucher, doté de propriétés respirantes et rafraîchissantes pour une expérience de sommeil apaisante. Garnissage en fibres de première qualité qui ne retiennent pas la chaleur et ne déclenchent pas d’allergies. Le rembourrage aéré permet une meilleure circulation de l’air, pour que vous puissiez dormir au frais. Ces oreillers offrent un confort et soutien maximal quelle que soit la position. ✅ Garnissage en Fibre vierge creux super siliconée Haute Qualité ➡️ Paiement à la livraison après vérification de produit. ✅ Livraison sur toute la Tunisie"
  },
  {
    name: "8 Oreiller Orthopédique Top Qualité Lavable 70x50cm",
    image: oreiller8, // Corresponding image
    data: [
      { size: "70x50", price: "128" }
    ],
    description: "Oreiller super confortable. L’oreiller est fabriqué avec un tissu frais au toucher, doté de propriétés respirantes et rafraîchissantes pour une expérience de sommeil apaisante. Garnissage en fibres de première qualité qui ne retiennent pas la chaleur et ne déclenchent pas d’allergies. Le rembourrage aéré permet une meilleure circulation de l’air, pour que vous puissiez dormir au frais. Ces oreillers offrent un confort et soutien maximal quelle que soit la position. ✅ Garnissage en Fibre vierge creux super siliconée Haute Qualité ➡️ Paiement à la livraison après vérification de produit. ✅ Livraison sur toute la Tunisie"
  }
];

export default products;
