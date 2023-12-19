
//componentes
import NavBarComponent from './components/NavBarComponent/NavBarComponent'

//Estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { MainRouter } from './router/MainRouter';
MainRouter

const App = () => {

  return (
  <div>
<NavBarComponent/>
<MainRouter/>
  </div>
  );
}

export default App;