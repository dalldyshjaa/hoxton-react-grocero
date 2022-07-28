import { Product } from "../data/data";
import "./components-styles/Header.css";
type Props = {
  product: Product;
  addToCartFromStore: Function;
};

export default function StoreItem({ product, addToCartFromStore }: Props) {
  let src = `src/components/icons/00${product.id}-${product.name}.svg`;
  return (
    <li>
      <div className="store--item-icon">
        <img src={src} alt={product.name} className="store-item-image" />
      </div>
      <button
        onClick={() => {
          addToCartFromStore(product);
        }}
      >
        Add to cart
      </button>
    </li>
  );
}
