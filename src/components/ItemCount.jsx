import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const ItemCount = () => {
  const [countItem, setCountItem] = useState(1);
  const { count, setCount } = useContext(CartContext);

  const handleAdd = () => {
    setCountItem(countItem + 1);
  };

  const handleRemove = () => {
    setCountItem(countItem - 1);
  };

  return (
    <div>
      <div>
        <Button onClick={handleRemove}>-</Button>
        <span>{countItem}</span>
        <Button onClick={handleAdd}>+</Button>
      </div>
      <Button
        onClick={() => {
          setCount(count + countItem);
          setCountItem(1);
        }}
      >
        Agregar al Carrito
      </Button>
    </div>
  );
};

export default ItemCount;
