import { useGetProductById } from "../hooks/useProducts";
import ItemCount from "../components/ItemCount";

//Uso useParams para que al traer mi id sea dinamico
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const { productData } = useGetProductById("products", id);

  return (
    <div className="card-content" key={productData.id}>
      <img className="imagen-style" src={productData.img} />
      <div className="card-title">{productData.nombre}</div>
      <div className="card-text">
        {productData.categoria}
        <div className="card-text">Talle {productData.talle}</div>
        <div>Precio ${productData.precio}</div>
        <ItemCount />
      </div>
    </div>
  );
};
