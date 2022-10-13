// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "01",
    title: "Chicken Burger",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc:
      "Big, juicy Swiss Mushrooms Burgers are a mighty vegetarian burger that at first glance, looks like a beef burger! Large mushrooms are roasted with garlic butter, topped with Swiss cheese then stuffed into fully loaded soft rolls. ",
  },

  {
    id: "02",
    title: "Vegetarian Pizza",
    price: 115.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",

    desc:
      "Fresh tomatoes, onions, arugula, kale, eggplants, bell peppers, spinach, zucchini, mushrooms and more. They all make flavorsome vegetarian pizza toppings. Some vegetables need to be cooked or roasted to bring out their flavors, while others vegetables are best when they're raw.",
  },

  {
    id: "03",
    title: "Double Cheese Margherita",
    price: 110.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",

    desc:
      "Our double cheese pizza comes with the goodness of extra cheese. You can see oodles of liquid cheese coming out with every bite, making the pizza all the more delicious.",
  },

  {
    id: "04",
    title: "Maxican Green Wave",
    price: 110.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",

    desc:
      "A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.",
  },

  {
    id: "05",
    title: "Cheese Burger",
    price: 24.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Burger",

    desc:
      "A traditional grilled sandwich that consists of ground meat made into a patty, cooked, topped with a slice of cheese, and placed between two halves of a bun to create this favorite international food.",
  },
  {
    id: "06",
    title: "Royal Cheese Burger",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc:
      "00% quarter pounder beef patty, then complete the tasty picture with cheese, onions, tangy mustard and pickles.",
  },

  {
    id: "07",
    title: "Seafood Pizza",
    price: 115.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",

    desc:
      "Its toppings commonly serve scampi, mussels, or squid on top of a tomato sauce with no cheese.",
  },

  {
    id: "08",
    title: "Thin Cheese Pizza",
    price: 110.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",

    desc:
      "This thin crust pizza does not have a pronounced rim to it and bakes up flat all the way across, making it ideal for spreading the sauce and any cheeses to the very edge. Try cutting into squares instead of triangles for a fun twist.",
  },

  {
    id: "09",
    title: "Pizza With Mushroom",
    price: 110.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",

    desc:
      "This pizza is layered in sauce (that comes together in seconds), quick sautéed mushrooms, onions and garlic, ribbons of lacinato kale and light layers of mozzarella (fresh and shredded) and parmesan cheese.",
  },

  {
    id: "10",
    title: "Classic Hamburger",
    price: 24.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Burger",

    desc:
      "The meat is usually accompanied by various ingredients such as tomato slices, onions, pickles, or lettuce, and numerous condiments such as mayonnaise, ketchup, or salsa.",
  },

  {
    id: "11",
    title: "Crunchy Bread ",
    price: 35.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc:
      "The crispness of the dough is created by starch gel on its surface, which is created in the dough when it's moist at 180°F and above. And the lovely brown color we associate with well-baked bread is a by-product of the Maillard reaction.",
  },

  {
    id: "12",
    title: "Delicious Bread ",
    price: 35.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Bread",

    desc:
      "Real, crusty, chewy, delicious bakery-style loaves that taste incredible with dips, soups, sauces, and comforting dinners.",
  },

  {
    id: "13",
    title: "Loaf Bread ",
    price: 35.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc:
      "A loaf of bread is bread which has been shaped and baked in one piece. It is usually large enough for more than one person and can be cut into slices.",
  },
];

export default products;
