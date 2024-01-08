import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css"

const CartWidget = () => {
  const {count} = useContext(CartContext);
  return (
    <div className="seeCarrito">
        🛒
        {count}
    </div>
  )
}

export default CartWidget