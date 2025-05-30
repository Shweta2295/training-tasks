import Cart from "./cart";
import ProductData from "./productSection";
import styles from "./ShoppingCart.module.scss";

interface ShoppingCartProps {
  cartData: {
    id: number;
    img: string;
    title: string;
    description: string;
  };
}

const ShoppingCart = ({ cartData }: ShoppingCartProps) => {
  return (
    <div>
      <div className={styles.container1}>
        <div className={styles.title}>
          {cartData.id}.{cartData.title}
        </div>
        <div className={styles.description}>{cartData.description}</div>
      </div>
      <div className={styles.container2}>
        <div className={styles.productSection}>
          <ProductData />
        </div>
        <div className={styles.cartSection}>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
