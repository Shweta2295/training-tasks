import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { products } from "../../../../constant";
import { addToCart } from "../../../../redux/shoppingCart/reducer";
import styles from "./ProductCard.module.scss";

const ProductCards = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.productList}>
      {products.map((res: any, index: any) => {
        return (
          <div key={index} className={styles.productData}>
            <div className={styles.images}>
              <img src={res.img} alt="products" />
            </div>
            <div>
              <div className={styles.productDetails}>
                <div className={styles.productContent}>{res.name}</div>
                <div className={styles.productContent}>Rs. {res.price}</div>
              </div>
              <div className={styles.productCategory}>{res.category}</div>
              <Button
                className={styles.addBtn}
                onClick={() => dispatch(addToCart(res))}
              >
                + Add To Cart
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCards;
