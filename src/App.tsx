import { useState, useEffect } from "react";
import { Product, Products, initProducts } from "./data/data";
import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState(initProducts);
  const [productsOnCart, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);

  function productExistsOnCart(product: Product) {
    for (let prod of productsOnCart) {
      if (product.id === prod.id) {
        return true;
      }
    }
    return false;
  }

  function addToCartFromStore(product: Product) {
    let productsOnCartCopy = structuredClone(productsOnCart);
    if (productExistsOnCart(product)) {
      for (let prod of productsOnCartCopy) {
        if (prod.id === product.id) {
          prod.quantityOnCart++;
          setTotal(total + prod.price);
        }
      }
      setCartProducts(productsOnCartCopy);
      return;
    } else {
      let prod = structuredClone(product);
      prod.quantityOnCart++;
      productsOnCartCopy.push(prod);
      setCartProducts(productsOnCartCopy);
      setTotal(total + prod.price);
      return;
    }
  }

  function addProduct(product: Product) {
    let productsOnCartCopy = structuredClone(productsOnCart);
    for (let prod of productsOnCartCopy) {
      if (prod.id === product.id) {
        prod.quantityOnCart++;
        setTotal(total + prod.price);
      }
    }
    setCartProducts(productsOnCartCopy);
  }
  function removeProduct(product: Product) {
    let productsOnCartCopy = structuredClone(productsOnCart);
    for (let prod of productsOnCartCopy) {
      if (prod.id === product.id) {
        prod.quantityOnCart--;
        setTotal(total - prod.price);
      }
    }
    setCartProducts(productsOnCartCopy);
  }

  return (
    <div className="App">
      <Header products={products} addToCartFromStore={addToCartFromStore} />
      <Cart
        productsOnCart={productsOnCart}
        setCartProducts={setCartProducts}
        addProduct={addProduct}
        removeProduct={removeProduct}
        total={total}
      />
    </div>
  );
}

export default App;
