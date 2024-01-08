import "./itemList.css"
import { Link } from 'react-router-dom';

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
      <Link to={`/item/${products.id}`}><img className="imagen-style" src={products.thumbnail} /></Link>
        <div className="card-title" >{products.title}</div>
        <div className="card-text">
          {products.description}
          <div>Precio ${products.price}</div>
        </div>
        </div>
  );
})}
      </div>
      </div>
  )
}

export default ItemListContainer