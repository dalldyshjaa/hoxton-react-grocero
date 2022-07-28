export type Product = {
  id: number;
  name: string;
  price: number;
  quantityOnCart: number;
};
export type Products = Product[];

export const initProducts: Products = [
  {
    id: 1,
    name: "beetroot",
    price: 0.35,
    quantityOnCart: 0,
  },
  {
    id: 2,
    name: "carrot",
    price: 0.45,
    quantityOnCart: 0,
  },
  {
    id: 3,
    name: "apple",
    price: 0.7,
    quantityOnCart: 0,
  },
  {
    id: 4,
    name: "apricot",
    price: 0.25,
    quantityOnCart: 0,
  },
  {
    id: 5,
    name: "avocado",
    price: 0.5,
    quantityOnCart: 0,
  },
  {
    id: 6,
    name: "bananas",
    price: 0.8,
    quantityOnCart: 0,
  },
  {
    id: 7,
    name: "bell-pepper",
    price: 1,
    quantityOnCart: 0,
  },
  {
    id: 8,
    name: "berry",
    price: 0.95,
    quantityOnCart: 0,
  },
  {
    id: 9,
    name: "blueberry",
    price: 0.35,
    quantityOnCart: 0,
  },
];
