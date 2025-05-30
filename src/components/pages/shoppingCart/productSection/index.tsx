import ProductCards from "../productCard";
import styles from "./ProductSection.module.scss";

const ProductData = () => {
  return (
    <div className={styles.container2}>
      <div className={styles.productTitle}>Products</div>
      <ProductCards />
    </div>
  );
};

export default ProductData;
