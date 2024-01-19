import { useGetProductById } from "../hooks/useProducts";
import ItemCount from "../components/ItemCount/ItemCount";
import { LoadingComponent } from "../components/LoadingComponent/LoadingComponent";

//Uso useParams para que al traer mi id sea dinamico
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const { productData } = useGetProductById("products", id);

  return productData.length <= 0 ? (
    <LoadingComponent />
  ) : (
    <div className="card-Content">
    <div className="card-itemDetail" key={productData.id}>
      <img className="imagen-style" src={productData.img} />
      <div className="card-title">{productData.nombre}</div>
      <div className="card-text">
        {productData.categoria}
        <div>Talle {productData.talle}</div>
        <div>Precio ${productData.precio}</div>
        <ItemCount />
      </div>
    </div>
    </div>
  );
};
