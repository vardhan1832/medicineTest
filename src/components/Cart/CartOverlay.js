import React, { useContext } from "react";
import ReactDom from "react-dom";
import "./CartOverlay.css";
import CartContext from "../../store/cartcontext";

const CartOverlay = (props) => {
  const cartctx = useContext(CartContext);
  const cancelHandler = () => {
    props.onCancelClick();
  };
  const orderHandler = ()=>{
    cartctx.orderPlaced()
    alert('order placed')
    props.onCancelClick()
  }
  const totalAmount = `$${cartctx.totalAmount.toFixed(2)}`;
  const hasItems = cartctx.items.length > 0;
  return ReactDom.createPortal(
    <div className="cart-overlay">
      {cartctx.items.map((item) => {
        return (
          <li key={item.id} className="cart-item">
            <h2>{item.name}</h2>
            <div className='summaryctx'>
              <span className='price'>{item.price}</span>
              <span className='amount'>x {item.Amount}</span>
            </div>
            <div className="actionsctx">
              <button onClick={() => cartctx.removeFromCart(item.id)}>-</button>
              <button onClick={() => cartctx.addToCart({...item,Amount:1})}>+</button>
            </div>
          </li>
        );
      })}
      <div className='total'>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button onClick={cancelHandler}>Cancel</button>
        {hasItems && <button onClick={orderHandler}>Order</button> }
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default CartOverlay;