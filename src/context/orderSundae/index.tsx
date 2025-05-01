import { createContext, useState } from "react";
import { scoops, toppings } from "../../constant";

export interface IOrder {
  id: number;
  img: string;
  name: string;
  price: number;
  quantity: number;
}

export interface IOrderSundayContent {
  scoopData: IOrder[] | [];
  toppingData: IOrder[] | [];
  setScoopData: any;
  setToppingData: any;
  calculateTotal: any;
  calculateGrandTotal: any;
}
const orderSundaeContent: any = createContext({
  scoopData: [],
  toppingData: [],
});

const OrderProvider = ({ children }: any) => {
  const [scoopData, setScoopData] = useState<IOrder[]>(scoops);
  const [toppingData, setToppingData] = useState<IOrder[]>(toppings);

  const calculateTotal = (data: any) => {
    let subTotal = data.reduce(
      (total: any, item: any) => total + item.price * item.quantity,
      0
    );
    return subTotal;
  };

  const calculateGrandTotal = () => {
    const abc = scoopData.filter((item) => item.quantity > 0);
    const def = toppingData.filter((item) => item.quantity > 0);
    const scoopSubTotal = calculateTotal(abc);
    const toppingSubTotal = calculateTotal(def);
    return scoopSubTotal + toppingSubTotal;
  };

    const value = {
    scoopData,
    toppingData,
    setScoopData,
    setToppingData,
    calculateTotal,
    calculateGrandTotal,
    };
    
  return (
    <orderSundaeContent.Provider value={value}>
      {children}
    </orderSundaeContent.Provider>
  );
};

export default OrderProvider;
export { orderSundaeContent };
