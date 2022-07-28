import { Product } from "../data/data";
import { CartItem } from "./CartProduct";
import { useState, useEffect } from "react";
import "./components-styles/Cart.css";

type Props = {
  productsOnCart: Product[];
  setCartProducts: Function;
  addProduct: Function;
  removeProduct: Function;
  total: number;
};

export default function Cart({
  productsOnCart,
  addProduct,
  removeProduct,
  total,
}: Props) {
  function filterProducts() {
    return productsOnCart.filter((prod) => prod.quantityOnCart > 0);
  }

  return (
    <main id="cart">
      <h2>Your Cart</h2>

      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {filterProducts().map((product: Product) => (
            <CartItem
              product={product}
              addProduct={addProduct}
              removeProduct={removeProduct}
              key={product.id}
            />
          ))}
        </ul>
      </div>

      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span className="total-number">{`$${total.toFixed(2)}`}</span>
        </div>
      </div>
    </main>
  );
}
