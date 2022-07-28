import "./components-styles/Header.css";
import { Products, Product } from "../data/data";
import StoreItem from "./StoreItem";
import { useState, useEffect } from "react";

type Props = {
  products: Products;
  addToCartFromStore: Function;
};

export default function Header({ products, addToCartFromStore }: Props) {
  const [sort, setSort] = useState(false);
  return (
    <header id="store">
      <h1>Grocero</h1>

      <ul className="item-list store--item-list">
        {products.map((product: Product) => (
          <StoreItem
            product={product}
            addToCartFromStore={addToCartFromStore}
            key={product.id}
          />
        ))}
      </ul>
    </header>
  );
}
