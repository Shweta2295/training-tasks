import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../../redux/shoppingCart/reducer";
import { AppDispatch, RootState } from "../../../../redux/shoppingCart/store";
import CartItems from "../cartItem";
import styles from "./Cart.module.scss";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch: AppDispatch = useDispatch();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 100 : 0;
  const total = subtotal + shipping;

  return (
    <div>
      <div className={styles.cart}>
        <ShoppingCartOutlinedIcon />
        <div className={styles.cartTitle}> Cart ({totalItems}) </div>
      </div>
      {cartItems.length === 0 ? (
        <div className={styles.noCart}>your cart is empty</div>
      ) : (
        <div>
          <CartItems />
          <div className={styles.cartTotal}>
            <div className={styles.totals}>
              <div>Subtotal:</div>
              <div>Rs. {subtotal}</div>
            </div>
            <div className={styles.totals}>
              <div>Shipping: </div>
              <div>Rs. {shipping}</div>
            </div>
            <div className={styles.totals}>
              <span>Total:</span>
              <span>Rs.{total}</span>
            </div>
          </div>
          <button
            className={styles.clearBtn}
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
