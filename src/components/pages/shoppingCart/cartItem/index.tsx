import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/shoppingCart/store";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import styles from "./CartItem.module.scss";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../../../redux/shoppingCart/reducer";

const CartItems = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      {cartItems.map((item: any) => (
        <div className={styles.cartItem} key={item.id}>
          <div className={styles.leftPart}>
            <img src={item.img} alt="" className={styles.cartImg} />
            <div className={styles.cartItemName}>
              {item.name}
              <div>RS.{item.price}</div>
            </div>
          </div>
          <div className={styles.rightPart}>
            <RemoveOutlinedIcon
              className={styles.icons}
              onClick={() => dispatch(decrementQuantity(item.id))}
            />
            {item.quantity}
            <AddOutlinedIcon
              className={styles.icons}
              onClick={() => dispatch(incrementQuantity(item.id))}
            />
            <DeleteOutlineOutlinedIcon
              onClick={() => dispatch(removeFromCart(item.id))}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
