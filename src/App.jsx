
//componentes
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import ItemListContainer from './components/itemListContainer/itemListContainer';

//Estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  return (
  <div>
<NavBarComponent/>
<ItemListContainer greeting="Bienvenidos a Zapas Catamarca"/>
  </div>
  );
}

export default App;
