/*
schema:
Items - 
  itemName,
  vegetarian,
  spicy,
  recommended,
  price,
  description,
  addOns

Add-Ons:
  addOnName,
  price

*/

export const breakfastMenu = [
  {
    itemName: "Avo-Easy",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$10.90",
    description:
      "Whole avocado smashed with a touch of lemon, two eggs over-easy, sliced tomatoes, on a sourdough toast.",
    addOns: [],
  },
  {
    itemName: "The English Spread",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$9.90",
    description:
      "Two sunny-side ups, turkey bacon strips, hash brown, baked beans, grilled tomato, Shiitake mushrooms and a sourdough toast.",
    addOns: [
      {
        addOnName: "Chicken Bratwurst",
        price: "+$4.50",
      },
    ],
  },
  {
    itemName: "Buttermilk Pancakes with Maple Syrup",
    vegetarian: true,
    spicy: false,
    recommended: true,
    price: "$6.90",
    description:
      "Fluffy American-style pancakes made with our tasty homemade batter. Dressed with a knob of butter, and maple syrup. Minimum wait time of 12 minutes.",
    addOns: [],
  },
  {
    itemName: "Ample Scrambled",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$6.90",
    description:
      "Three eggs in a soft and creamy scramble, served on a sourdough toast with a side salad.",
    addOns: [
      {
        addOnName: "Truffles Infusion",
        price: "+$2.00",
      },
    ],
  },
  {
    itemName: "Classic French Omelette with Fine Herbs",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$6.90",
    description:
      "Three-egg omelette with a smooth, silky exterior and a moist, soft-scrambled interior mixed with assorted herbs. Served on a sourdough toast with a side salad.",
    addOns: [
      {
        addOnName: "Turkey Bacon",
        price: "+$1.50",
      },
      {
        addOnName: "Shiitake Mushrooms",
        price: "+$1.00",
      },
      {
        addOnName: "Capsicums",
        price: "+$1.00",
      },
      {
        addOnName: "Fior di Latte | Cheddar",
        price: "+$1.00",
      },
      {
        addOnName: "Greek Feta",
        price: "+$1.50",
      },
    ],
  },
  {
    itemName: "Tortilla de Patatas (Spanish Omelette)",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$6.90",
    description:
      "Potato slices and onions sautéed in olive oil, mixed with two whisked eggs, and pan-fried to golden perfection. Served with a side salad.",
    addOns: [],
  },
  {
    itemName: "Overnight Oats",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$5.90",
    description:
      "A thick, creamy mixture of rolled oats, fresh milk, premium fat-free Greek yogurt, chia seeds, and maple syrup. Topped with honey nut granola.",
    addOns: [
      {
        addOnName: "Dried Cranberries",
        price: "+$1.00",
      },
      {
        addOnName: "Peanut Butter | Nutella",
        price: "+$1.00",
      },
    ],
  },
];

export const snackMenu = [
  {
    itemName: "Regular Fries",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$3.50",
    description: "",
    addOns: [],
  },
  {
    itemName: "Truffle Fries",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$5.50",
    description: "",
    addOns: [],
  },
  {
    itemName: "Mentaiko Fries",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$5.50",
    description: "",
    addOns: [],
  },
  {
    itemName: "Curly Fries",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$5.50",
    description: "",
    addOns: [],
  },
  {
    itemName: "Chicken Nuggets",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$4.80",
    description: "",
    addOns: [],
  },
  {
    itemName: "Egg Salad",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$3.90",
    description: "",
    addOns: [],
  },
  {
    itemName: "Tuna Mayo",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$4.20",
    description: "",
    addOns: [],
  },
  {
    itemName: "Half Bagel with Cream Cheese",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$3.30",
    description: "",
    addOns: [],
  },
];

export const saladMenu = [
  {
    itemName: "Superfood Medley",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$10.50",
    description:
      "Roasted Sweet Potatoes, Romaine Lettuce, Roasted Kale Chips, Broccoli, Avocado, Beetroot, Cherry Tomatoes, Sunflower Seeds, EVOL",
    addOns: [],
  },
  {
    itemName: "Insalata di Pasta",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$9.50",
    description:
      "Fusilli, Cherry Tomatoes, Cucumber, Sliced Beef, Baby Spinach, Vinaigrette, EVOL",
    addOns: [],
  },
  {
    itemName: "Salade Niçoise",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$8.50",
    description:
      "Romaine Lettuce, Sweet Tuna Chunks, French Beans, Cherry Tomatoes, Cucumbers, Hard-Boiled Egg, EVOL",
    addOns: [],
  },
  {
    itemName: "The Post Workout",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$8.50",
    description:
      "Brown Rice, Roasted Chicken, Hard-Boiled Egg, Broccoli, Edamame, Carrots, Beetroot Mayo",
    addOns: [],
  },
  {
    itemName: "Japanese Inspired",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$8.80",
    description:
      "Soba Noodles, Ajitsuke Tamago, Edamame, Japanese Silken Tofu, Nori, Corn, Red Cabbage, Baisen Goma",
    addOns: [],
  },
  {
    itemName: "Greek Inspired",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$9.00",
    description:
      "Baby Spinach, Capsicums, Cucumber, Black Olives, Cherry Tomatoes, Shallots, Greek Feta, Vinaigrette",
    addOns: [],
  },
  {
    itemName: "The Dealer’s Choice",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$9.00",
    description:
      "Romaine Lettuce, Sweet Tuna Chunks, Cherry Tomatoes, Honey Pineapple, Capsicums, Broccoli, Shallots, EVOL",
    addOns: [],
  },
  {
    itemName: "Summer in a Bowl",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$7.50",
    description:
      "Roasted Sweet Potatoes, Sweet Tuna Chunks, Honey Pineapple, Edamame, Beetroot, Beetroot Mayo",
    addOns: [],
  },
  {
    itemName: "The Side Salad",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$4.50",
    description:
      "Romaine Lettuce, Corn, Cucumber, Cherry Tomatoes, Croutons, Vinaigrette",
    addOns: [],
  },
];

export const italianMenu = [
  {
    itemName: "Penne al Pesto di Basilico",
    vegetarian: true,
    spicy: false,
    recommended: true,
    price: "$8.90",
    description:
      "A light, creamy homemade paste of crushed Italian basil leaves, toasted pine nuts, garlic, and extra virgin olive oil.",
    addOns: [],
  },
  {
    itemName: "Penne alla Norma",
    vegetarian: true,
    spicy: false,
    recommended: true,
    price: "$7.90",
    description:
      "Sicilian eggplant pasta. Sautéed aubergine tossed in a homemade tomato sauce and sprinkled with shredded Fior di Latte.",
    addOns: [],
  },
  {
    itemName: "Spaghetti al Pomodoro con Burratina",
    vegetarian: true,
    spicy: false,
    recommended: true,
    price: "$7.90",
    description:
      "Classic base of tomatoes and Italian basil, topped with a soft, buttery mix of Buffalo Mozzarella and cream.",
    addOns: [
      {
        addOnName: "Sliced Beef",
        price: "+$4.00",
      },
    ],
  },
  {
    itemName: "Penne all’Arrabbiata",
    vegetarian: true,
    spicy: true,
    recommended: true,
    price: "$6.50",
    description:
      "An angry pasta, literally. A spicy sauce made from garlic, tomatoes, and red chili peppers cooked in olive oil.",
    addOns: [
      {
        addOnName: "Chicken",
        price: "+$2.00",
      },
      {
        addOnName: "Prawns",
        price: "+$4.50",
      },
    ],
  },
  {
    itemName: "Spaghetti Aglio, Olio e Peperoncino",
    vegetarian: false,
    spicy: true,
    recommended: false,
    price: "$6.50",
    description: "Garlic and red chili peppers sautéed in olive oil.",
    addOns: [
      {
        addOnName: "Turkey Bacon",
        price: "$6.50",
      },
      {
        addOnName: "Wild Mushrooms & Spinach",
        price: "$6.50",
      },
      {
        addOnName: "Chicken",
        price: "$6.50",
      },
      {
        addOnName: "Chicken, Wild Mushrooms & Spinach",
        price: "$8.50",
      },
      {
        addOnName: "Prawns",
        price: "$9.90",
      },
    ],
  },
  {
    itemName: "Penne al Funghi e Spinaci",
    vegetarian: true,
    spicy: false,
    recommended: true,
    price: "$6.90",
    description:
      "Wild mushrooms, spinach, and garlic sautéed in olive oil, tossed in cream, and topped with Italian parsley.",
    addOns: [
      {
        addOnName: "Truffles Infused Mushroom Cream",
        price: "+$3.00",
      },
    ],
  },
  {
    itemName: "Spaghetti alla Carbonara (Turkey Bacon)",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$7.90",
    description:
      "A pork-free, and loose adaptation of the traditional recipe. Sautéed turkey bacon, cream, black pepper, and sous vide egg.",
    addOns: [
      {
        addOnName: "Truffles Infusion",
        price: "+$2.00",
      },
    ],
  },
  {
    itemName: "Penne al ragu Bolognese",
    vegetarian: false,
    spicy: false,
    recommended: true,
    price: "$9.90",
    description:
      "A rich, herbed tomato meat gravy braised over 3 hours. Minced beef, onions, celery, carrots, whole peeled tomatoes, rosemary, bay leave, and a dash of wine.",
    addOns: [
      {
        addOnName: "Bolognese Gravy (1.5 portions)",
        price: "+$2.50",
      },
    ],
  },
  {
    itemName: "Lasagne al Forno",
    vegetarian: false,
    spicy: false,
    recommended: true,
    price: "$9.90",
    description:
      "Baked layers of our Bolognese gravy, Béchamel sauce, Fior di Latte, Grana Padano, and lasagne pasta sheets.",
    addOns: [],
  },
  {
    itemName: "Spaghetti alla Puttanesca",
    vegetarian: false,
    spicy: false,
    recommended: true,
    price: "$9.90",
    description:
      "Capers, black olives, anchovies, and garlic sautéed in olive oil and tossed in a light tomato sauce.",
    addOns: [],
  },
  {
    itemName: "Spaghetti alle Vongole in Bianco",
    vegetarian: false,
    spicy: false,
    recommended: true,
    price: "$9.90",
    description:
      "Fresh local clams, parsley and garlic sautéed in olive oil with a splash of white wine. A light, Italian classic.",
    addOns: [],
  },
  {
    itemName: "Spaghetti alla Nerano",
    vegetarian: true,
    spicy: false,
    recommended: true,
    price: "$9.90",
    description:
      "A light, buttery pasta dish named after a village along the Amalfi coast. Pan-fried zucchini creamed with Provolone del Monaco (or other substitutes).",
    addOns: [],
  },
];

export const sandwichMenu = [
  {
    itemName: "Caprese",
    vegetarian: true,
    spicy: false,
    recommended: false,
    price: "$11.90",
    description:
      "Open-faced. Slices of Buffalo Mozzarella, tomatoes, Italian basil, drizzle of olive oil and Balsamic vinegar, and homemade Pesto spread on a sourdough toast.",
    addOns: [],
  },
  {
    itemName: "Turkey BLT & E",
    vegetarian: false,
    spicy: false,
    recommended: true,
    price: "$10.90",
    description:
      "Turkey bacon, Cheddar cheese slice, egg over-easy, Romaine lettuce, sliced tomatoes, sweet chili sauce, and white toast slices.",
    addOns: [
      {
        addOnName: "Avocado",
        price: "+$2.50",
      },
    ],
  },
  {
    itemName: "Katsu-Sando",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$8.90",
    description:
      "6oz Panko-breaded chicken cutlet, homemade Tonkatsu sauce, cabbage, and white toast slices.",
    addOns: [],
  },
  {
    itemName: "Turkey Bacon, Brie, Mushroom & Spinach",
    vegetarian: false,
    spicy: false,
    recommended: true,
    price: "$15.90",
    description:
      "Double turkey bacon, melted Brie, sautéed mushrooms, wilted baby spinach, and sourdough toast slices. Minimum wait time of 15 minutes.",
    addOns: [],
  },
  {
    itemName: "Chicken Burger",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$11.90",
    description:
      "8oz grilled chicken, Cheddar cheese slice, lettuce, and tomato between fluffy brioche buns buttered with mayonnaise. Served with fries.",
    addOns: [],
  },
  {
    itemName: "Signature Angus Beef Burger",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$18.50",
    description:
      "A hefty and juicy 8oz Angus beef patty, Cheddar cheese slice, Romaine lettuce, and sliced tomato between fluffy brioche buns buttered with our special house sauce. Served with fries. Minimum wait time of 15 minutes to allow the meat to rest sufficiently.",
    addOns: [
      {
        addOnName: "Egg Over-Easy",
        price: "+$1.00",
      },
      {
        addOnName: "Upgrade to Truffle or Curly Fries",
        price: "+$2.00",
      },
    ],
  },
];

export const mainsMenu = [
  {
    itemName: "Pan-Seared Chicken Chop",
    vegetarian: false,
    spicy: false,
    recommended: true,
    price: "$8.90",
    description:
      "8oz grilled chicken served with roasted potatoes and market greens.",
    addOns: [
      {
        addOnName: "Double Up Chicken",
        price: "+$5.50",
      },
    ],
  },
  {
    itemName: "Fish & Chips",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$8.90",
    description:
      "John Dory fish fried in a light and airy Tempura batter. Served with fries and coleslaw.",
    addOns: [
      {
        addOnName: "Upsize Fish (1.5 portions)",
        price: "+$2.50",
      },
    ],
  },
  {
    itemName: "Chicken Parmigiana",
    vegetarian: false,
    spicy: false,
    recommended: true,
    price: "$15.90",
    description:
      "12oz crispy breaded chicken cutlet covered in our homemade tomato sauce and melted Mozzarella. Served with roasted potatoes and salad greens. Minimum wait time of 15 minutes.",
    addOns: [],
  },
  {
    itemName: "Pan Seared Seabass",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$14.90",
    description:
      "7oz local seabass fillet pan-seared and served with roasted potatoes and market greens.",
    addOns: [],
  },
  {
    itemName: "Steak-Frites",
    vegetarian: false,
    spicy: false,
    recommended: false,
    price: "$18.90",
    description:
      "7oz Picanha (rump cap) seared medium rare. Served with black pepper sauce, and a double portion of shoestring fries. Minimum wait time of 15 minutes to allow the meat to rest sufficiently.",
    addOns: [],
  },
];
