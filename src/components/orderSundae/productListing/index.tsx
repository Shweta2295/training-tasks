import { useContext, useState } from "react";
import {
  IOrderSundayContent,
  orderSundaeContent,
} from "../../../context/orderSundae";
import styles from "./ProductListing.module.scss";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";

interface IProps {
  setStep: (step: number) => void;
}

const ProductList = (props: IProps) => {
  const [error, setError] = useState<string | null>(null);

  const { setStep } = props;
  const {
    scoopData,
    toppingData,
    setScoopData,
    setToppingData,
    calculateTotal,
    calculateGrandTotal,
  } = useContext<IOrderSundayContent>(orderSundaeContent);

  const scoopsQuantityHandler = (index: number, type: string) => {
    const scoopClone = [...scoopData];
    if (type === "increment") {
      scoopClone[index].quantity += 1;
      setError(null);
    }
    if (type === "decrement") {
      scoopClone[index].quantity -= 1;
    }
    if (type === "delete") {
      scoopClone[index].quantity = 0;
    }
    setScoopData(scoopClone);
  };

  const toppingQuantityHandler = (index: number, e: any) => {
    const toppingClone = [...toppingData];
    if (e.target.checked) {
      toppingClone[index].quantity = 1;
      setError(null);
    } else {
      toppingClone[index].quantity = 0;
    }
    setToppingData(toppingClone);
  };

  const handleOrderClick = () => {
    const errorScop = scoopData.some((item) => item.quantity > 0);
    const errorTopping = toppingData.some((item) => item.quantity > 0);
    if (errorScop || errorTopping) {
      setError(null);
      setStep(2);
    } else {
      setError(
        !errorScop || !errorTopping
          ? "please choose at least one scoops and toppings"
          : ""
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Design Your Sundae!</div>
      <div className={styles.itemTitle}>Scoops</div>
      <div className={styles.itemTotal}>
        Scoops total: <CurrencyRupeeOutlinedIcon />
        {calculateTotal(scoopData)}
      </div>
      <div className={styles.itemList}>
        {scoopData.map((ele, index) => {
          return (
            <div key={index} className={styles.productData}>
              <img src={ele.img} alt="scoops-name"></img>
              <div className={styles.productName}>{ele.name}</div>
              <div className={styles.priceData}>
                <div className={styles.productPrice}>
                  <CurrencyRupeeOutlinedIcon />
                  {ele.price}
                </div>
                <div className={styles.btn}>
                  {ele.quantity > 0 && (
                    <>
                      {ele.quantity > 1 ? (
                        <RemoveOutlinedIcon
                          onClick={() =>
                            scoopsQuantityHandler(index, "decrement")
                          }
                        />
                      ) : (
                        <DeleteOutlineOutlinedIcon
                          onClick={() => scoopsQuantityHandler(index, "delete")}
                        />
                      )}
                      <div className={styles.quantity}>{ele.quantity}</div>
                    </>
                  )}
                  <AddOutlinedIcon
                    onClick={() => scoopsQuantityHandler(index, "increment")}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.itemTitle}>Toppings</div>
      <div className={styles.itemTotal}>
        Toppings total: <CurrencyRupeeOutlinedIcon />
        {calculateTotal(toppingData)}
      </div>
      <div className={styles.itemList}>
        {toppingData.map((ele, index) => {
          return (
            <div key={ele.id} className={styles.productData}>
              <img src={ele.img} alt="toppings-name"></img>
              <div className={styles.toppingPriceData}>
                <input
                  className={styles.checkBox}
                  type="checkbox"
                  checked={ele.quantity > 0}
                  onChange={(e) => toppingQuantityHandler(index, e)}
                ></input>
                <div className={styles.toppingName}>{ele.name}</div>
              </div>
              <div className={styles.toppingPrice}>
                <CurrencyRupeeOutlinedIcon /> {ele.price}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.totalLast}>
        Grand total : <CurrencyRupeeOutlinedIcon /> {calculateGrandTotal()}
      </div>
      {error && (
        <div className={styles.error}>
          {error} please choose at least one scoops and toppings
        </div>
      )}
      <div className={styles.orderSundaeBtn}>
        <button className={styles.confirmBtn} onClick={handleOrderClick}>
          Order Sundae!
        </button>
      </div>
    </div>
  );
};

export default ProductList;
