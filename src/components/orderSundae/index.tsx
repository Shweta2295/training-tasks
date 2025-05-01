import { useState } from "react";
import OrderProvider from "../../context/orderSundae";
import ProductList from "./productListing";
import OrderTotal from "./orderSummary";
import ThankYouPage from "./thankYouPage";

const OrderSunday = () => {
  const [step, setStep] = useState<number>(1);

  const RenderComponent = () => {
    switch (step) {
      case 1:
        return <ProductList setStep={setStep}/>;
      case 2:
        return <OrderTotal setStep={setStep} />;
      case 3:
        return <ThankYouPage setStep={setStep} />;
    }
  };

  return (
    <OrderProvider>
      <div>
        {RenderComponent()}
      </div>
    </OrderProvider>
  );
};

export default OrderSunday;
