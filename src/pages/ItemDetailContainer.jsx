import { useGetProductById } from "../hooks/useProducts";

//Uso useParams para que al traer mi id sea dinamico
import { useParams } from "react-router-dom";
import ItemCount from '../components/ItemCount';


export const ItemDetailContainer = () => {

const {productId} = useParams()

const {productData} = useGetProductById(productId)

  return (
    
    <div className="card-content" key={productData.id}>
    <img className="imagen-style" src={productData.thumbnail} />
      <div className="card-title" >{productData.title}</div>
      <div className="card-text">
        {productData.description}
      </div>
      <div>Precio ${productData.price}</div>
      <ItemCount/>
      </div>
      );
  }