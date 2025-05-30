import styles from "../orderSummary/OrderSummary.module.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import {
  IOrderSundayContent,
  orderSundaeContent,
} from "../../../../context/orderSundae";
import { useContext, useState } from "react";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";

const OrderTotal = (props: any) => {
  const { setStep } = props;
  const { scoopData, toppingData, calculateTotal, calculateGrandTotal } =
    useContext<IOrderSundayContent>(orderSundaeContent);
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState(false);

  const handleError = () => {
    if (!agree) {
      setError(true);
    } else {
      setError(false);
      setStep(3);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={() => setStep(1)}>
        <ArrowBackOutlinedIcon />
        <div className={styles.backContain}> Back to home page</div>
      </div>
      <div className={styles.summaryTitle}>Order summary</div>
      <div className={styles.productDetail}>
        Scoops: <CurrencyRupeeOutlinedIcon />
        {calculateTotal(scoopData)}
      </div>
      <ul className={styles.ordersData}>
        {scoopData
          .filter((item) => item.quantity > 0)
          .map((item) => (
            <div>
              <li key={item.id}>
                {item.quantity} {item.name}
              </li>
            </div>
          ))}
      </ul>
      <div className={styles.productDetail}>
        Toppings: <CurrencyRupeeOutlinedIcon /> {calculateTotal(toppingData)}
      </div>
      <ul className={styles.ordersData}>
        {toppingData
          .filter((item) => item.quantity)
          .map((item) => (
            <div>
              <li key={item.id}>
                {item.quantity} {item.name}
              </li>
            </div>
          ))}
      </ul>
      <div className={styles.productDetail}>
        Total: <CurrencyRupeeOutlinedIcon /> {calculateGrandTotal()}
      </div>
      <div className={styles.checker}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked);
            if (e.target.checked) setError(false);
          }}
        ></input>
        <div className={styles.errMsg}>I agree to Terms and Conditions</div>
      </div>
      {error && (
        <div className={styles.errorHandle}>
          Please accept The terms and conditions
        </div>
      )}
      <button className={styles.confirmButton} onClick={handleError}>
        Confirm Order
      </button>
    </div>
  );
};

export default OrderTotal;
