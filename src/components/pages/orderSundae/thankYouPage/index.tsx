/* eslint-disable @typescript-eslint/no-redeclare */
import { useContext } from "react";
import {
  IOrderSundayContent,
  orderSundaeContent,
} from "../../../../context/orderSundae";
import styles from ".././thankYouPage/ThankYouPage.module.scss";

const ThankYouPage = (props: any) => {
  const { setStep } = props;
  const { scoopData, toppingData, setScoopData, setToppingData } =
    useContext<IOrderSundayContent>(orderSundaeContent);

  const resetOrder = () => {
    const resetScoop = scoopData.map((item) => ({
      ...item,
      quantity: 0,
    }));

    const resetTopping = toppingData.map((item) => ({
      ...item,
      quantity: 0,
    }));
    setScoopData(resetScoop);
    setToppingData(resetTopping);
    setStep(1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageSection}>
        <div className={styles.title}>Thank you!</div>
        <div className={styles.heading}>Your order number is 100 {}</div>
        <div className={styles.contain}>
          as per our terms and conditions, nothing will happen now
        </div>
        <div className={styles.btn}>
          <button className={styles.orderButton} onClick={resetOrder}>
            Create New Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
