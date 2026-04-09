// src/data/menu.js
// ✅ Update prices and descriptions here anytime — no need to touch components

export const menuItems = [
  {
    id: 1,
    name: 'Honey Garlic Chicken',
    price: 580,
    image: '/img/menu1.jpg',
    tag: 'Bestseller',
  },
  {
    id: 2,
    name: 'Chicken Sisig',
    price: 270,
    image: '/img/menu2.jpg',
    tag: null,
  },
  {
    id: 3,
    name: 'Crispy Chicken Proben',
    price: 150,
    image: '/img/menu3.jpg',
    tag: 'Local Fave',
  },
  {
    id: 4,
    name: 'Tuna Belly',
    price: 100,
    image: '/img/menu5.jpg',
    tag: 'Bestseller',
  },
  {
    id: 5,
    name: 'Salmon Sinigang',
    price: 230,
    image: '/img/menu4.jpg',
    tag: 'Must Try',
  },
  {
    id: 6,
    name: 'Crispy Tilapia',
    price: 280,
    image: '/img/menu6.jpg',
    tag: null,
  },
  {
    id: 7,
    name: 'Beef Steak',
    price: 320,
    image: '/img/menu7.jpg',
    tag: null,
  },
  {
    id: 8,
    name: 'Papait',
    price: 100,
    image: '/img/menu9.jpg',
    tag: 'Local Fave',
  },
  {
    id: 9,
    name: 'Kare-Kare',
    price: 370,
    image: '/img/menu8.jpg',
    tag: 'Must Try',
  },
]

export const reviews = [
  {
    id: 1,
    name: 'Mohammad U.',
    rating: 5,
    text: 'One of the best if not the best resto in Cotabato. All the food is delicious!',
  },
  {
    id: 2,
    name: 'Chiclet T.',
    rating: 5,
    text: 'Outdoor seating under a big mango tree with fresh breeze — Papaitan is my ultimate fave from the Bistro!',
  },
  {
    id: 3,
    name: 'Sabr',
    rating: 4,
    text: '9/10, almost perfect. I barely give high reviews. This one deserves it. Come and visit!',
  },
  {
    id: 4,
    name: 'Lourdjim',
    rating: 5,
    text: 'I love the ambiance and service here! The food is also excellent, kudos!',
  },
  {
    id: 5,
    name: 'ベニートロキ',
    rating: 5,
    text: 'The best yung sisig dito. Great place, bit pricey but good value for money.',
  },
  {
    id: 6,
    name: 'Ainah D.',
    rating: 4,
    text: 'The ambiance is good. The food is good especially the chicken buffalo. The soda pops are my favorites too. ',
  },
]

// Catering packages
export const cateringPackages = [
  {
    id: 1,
    price: 330,
    label: 'Standard Package',
    minHeads: 30,
    inclusions: [
      'Beef Dish',
      'Chicken Dish',
      'Vegetable or Noodles',
      'Plain Rice',
      '1 Dessert',
      'Softdrinks',
    ],
  },
  {
    id: 2,
    price: 400,
    label: 'Premium Package',
    minHeads: 30,
    inclusions: [
      'Beef Dish',
      'Chicken Dish',
      'Seafood Dish',
      'Vegetable or Noodles',
      'Plain Rice',
      '1 Dessert',
      'Softdrinks',
    ],
  },
]

export const cateringMenu = [
  {
    category: 'Chicken',
    items: [
      'Buttered Chicken',
      'Garlic Chicken',
      'Chicken Lollipop',
      'Honey Garlic Chicken',
      'Chicken Curry',
    ],
  },
  {
    category: 'Beef',
    items: [
      'Beef Sinina',
      'Beef Steak Tagalog',
      'Beef Steak Chinese',
      'Beef in White Mushroom Sauce',
      'Beef Kaldereta',
      'Beef Ampalaya',
    ],
  },
  {
    category: 'Fish',
    items: [
      'Fish Fillet in Sweet n\' Sour Sauce',
      'Fish Fillet in White Sauce',
      'Breaded Fish Fillet in Tartar Sauce',
    ],
  },
  {
    category: 'Veggies',
    items: [
      'Mixed Vegetables',
      'Buttered Vegetables',
    ],
  },
  {
    category: 'Noodles',
    items: [
      'Sotanghon Guisado',
      'Pancit Guisado',
      'Pancit Canton',
      'Bam-i',
    ],
  },
  {
    category: 'Dessert',
    items: [
      'Mango Tapioca',
      'Fruit Salad',
      'Macaroni Salad',
    ],
  },
]

// Business hours — used by the Open/Closed indicator
// 0 = Sunday, 1 = Monday, ... 6 = Saturday
export const businessHours = {
  open:  { hour: 10, minute: 0 },
  close: { hour: 22, minute: 0 },
  closedDays: [0], // Sunday closed
}

// Promo banner — set to null to hide it
export const promoBanner = {
  text: '🎉 Summer Specials are here! Ask us about our seasonal dishes.',
  cta: 'Ask on Messenger',
  ctaUrl: 'https://www.facebook.com/messages/t/garahebistro',
}
