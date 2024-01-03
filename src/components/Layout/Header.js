import React , {useContext} from "react";
import "./Header.css";
import CartContext from "../../store/cartcontext";

const Header = (props) => {
    const cartctx = useContext(CartContext)
  const numberofCartItems = cartctx.items.reduce((currentamount,item)=>{
    return currentamount + Number(item.Amount)
  },0)
  const cartHandler = ()=>{
     props.onCartclick()
  }
  return (
    <React.Fragment>
      <header className="header">
        <h1>MEDICINE STORE</h1>
        <button onClick={cartHandler}>
          <span className="icon">
          </span>
            <span>Your Cart :</span>
            <span className="badge">{numberofCartItems}</span>
        </button>
      </header>
    </React.Fragment>
  );
};

export default Header;