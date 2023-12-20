
import Button from 'react-bootstrap/Button';
import { useGetProductById } from "../hooks/useProducts";
import { useParams } from "react-router-dom";




export const ItemDetailContainer = () => {

const {id} = useParams()

const {productData} = useGetProductById(id)

  return (
    <div className="card-content" key={productData.id}>
    <img className="imagen-style" src={productData.thumbnail} />
      <div className="card-title" >{productData.title}</div>
      <div className="card-text">
        {productData.description}
        <div>{productData.price}</div>
      </div>
      <Button className="buttom-card"variant="primary">Agregar Al Carrito</Button>
      </div>
      );
}