import ItemListContainer from '../components/itemListContainer/ItemListContainer';
import { useGetProducts } from '../hooks/useProducts';

export const Home = () => {

     //El mismo objeto que devuelve useProducts
const {productsData} = useGetProducts(30);

  return (
    <ItemListContainer greeting="Bienvenidos a Zapas Catamarca" productsData={productsData}/>
  )
}

