import product1 from '../../images/crepe-nutella.jpeg';
import product2 from '../../images/sandwichs poulets.jpg';
import product3 from '../../images/sandwichs boeufs.jpg';
import sweet1 from '../../images/jus ananas.jpg';
import sweet2 from '../../images/jus de pastheque.jpg';
import sweet3 from "../../images/jus d'orange.jpg";

export const productData = [
  {
    img: product1,
    alt: 'Crêpes ',
    name: 'Crêpes',
    desc:
      'crêpes Nutella',
    price: '2000 fcfa',
    button: 'Commandez'
  },
  {
    img: product2,
    alt: 'Sandwichs',
    name: 'Sandwichs-pain sésame ',
    desc:
      ' Emincé de poulet assaisonné au curry, salade, tomates',
    price: '1000 fcfa',
    button: 'Commandez'
  },
  {
    img: product3,
    alt: 'Pains sesame au boulettes de boeufs',
    name: 'Pains sesame au boulettes de boeufs',
    desc:
      ' Boulettes de boeufs, salade, tomates',
    price: '1500 fcfa',
    button: 'Commandez'
  }
];

export const productDataTwo = [
  {
    img: sweet2,
    alt: 'jus de pastèque',
    name: 'Classic watermelon',
    desc:
      'Jus de pastèques',
    price: '1500 fcfa',
    button: 'Commandez'
  },
  {
    img: sweet3,
    alt: 'jus orange',
    name: 'Classic Orange',
    desc:
      "Jus d'oranges pressés",
    price: '2000 fcfa',
    button: 'Commandez'
  },
  {
    img: sweet1,
    alt: 'jus ananas',
    name: 'Classic pineaple',
    desc:
      "jus d'ananas",
    price: '1500 fcfa',
    button: 'Commandez'
  }
];
