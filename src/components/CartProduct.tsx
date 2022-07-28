import { Product } from "../data/data";
import "./components-styles/Cart.css";

type Props = {
  product: Product;
  addProduct: Function;
  removeProduct: Function;
};

export function CartItem({ product, addProduct, removeProduct }: Props) {
  let src = `src/components/icons/00${product.id}-${product.name}.svg`;
  return (
    <li>
      <img className="cart--item-icon" src={src} alt="beetroot" />
      <p>{product.name}</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={() => removeProduct(product)}
      >
        -
      </button>
      <span className="quantity-text center">{product.quantityOnCart}</span>
      <button
        className="quantity-btn add-btn center"
        onClick={() => addProduct(product)}
      >
        +
      </button>
    </li>
  );
}
