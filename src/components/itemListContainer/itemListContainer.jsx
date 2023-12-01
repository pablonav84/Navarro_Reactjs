import "./itemList.css"

const ItemListContainer = ({greeting}) => {
  return (
    <div className="title-container">
      <h1 className="title">{greeting}</h1>
      <span className="paragraph">SHOES & CLOTHES IMPORT</span>
      </div>
  )
}

export default ItemListContainer