import ItemListContainer from "../components/itemListContainer/ItemListContainer"
import { useParams } from "react-router-dom";
import { useGetProductByCategory } from "../hooks/useProducts";


export const Category = () => {

const {id} = useParams();

const {productsData} = useGetProductByCategory(id)

  return (
<ItemListContainer productsData={productsData} />
  )
}