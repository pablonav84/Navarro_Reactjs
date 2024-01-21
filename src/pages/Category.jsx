import { useParams } from "react-router-dom"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import { useGetProductById} from "../hooks/useProducts";

export const Category = () => {

  const { id } = useParams();
  const { productsData } = useGetProductById(id)

  return (
    <ItemListContainer
      greeting="Bienvenidos a Zapas Catamarca"
      productsData={productsData}
    />
  );
};