
import Button from 'react-bootstrap/Button';
import { useGetProductById } from "../hooks/useProducts";

//Uso useParams para que al traer mi id sea dinamico
import { useParams } from "react-router-dom";


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
      <div>{productData.price}</div>
      <Button className="buttom-card"variant="primary">Agregar Al Carrito</Button>
      </div>
      );
  }