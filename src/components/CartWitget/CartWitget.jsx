import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartWitget.css"

const CartWitget = () => {
  const {count} = useContext(CartContext);
  return (
    <div className="seeCarrito">
        🛒
        {count}
    </div>
  )
}

export default CartWitget