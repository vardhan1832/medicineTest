import React, {useState} from "react";
import CartOverlay from "./components/Cart/CartOverlay";
import "./App.css";
import FormProvider from "./store/FormProvider";
import Form from "./components/Form/Form";
import Medicines from "./components/Medicines/Medicines";
import CartProvider from "./store/CartProvider";
import Header from "./components/Layout/Header";

function App() {
  const [cartDisplay, setcartDisplay] = useState(false);
  const onCartClickHandler = () => {
    setcartDisplay(true);
  };
  const onCancelClickHandler = () => {
    setcartDisplay(false);
  };
  return (
    <FormProvider>
      <CartProvider>
      {cartDisplay && <CartOverlay onCancelClick={onCancelClickHandler}/>}
        <Header onCartclick={onCartClickHandler} />
        <Form />
        <Medicines />
      </CartProvider>
    </FormProvider>
  );
}

export default App;
