
import Button from 'react-bootstrap/Button';
import "./itemList.css"


const ItemListContainer = ({greeting, productsData}) => {
  
  return (
    <div className="title-container">
      <h1 className="title">{greeting}</h1>
      <span className="paragraph">SHOES & CLOTHES IMPORT</span>
      <div className="card-body">
        
        {
          productsData.map(products => {

            return (
              <div className="card-content" key={products.id}>
      <img className="imagen-style" src={products.thumbnail} />
        <div className="card-title" >{products.title}</div>
        <div className="card-text">
          {products.description}
          <div>{products.price}</div>
        </div>
        <Button className="buttom-card"variant="primary">Agregar Al Carrito</Button>
        </div>
  );
})}
      </div>
      </div>
  )
}

export default ItemListContainer