//Permite el ruteo entre las paginas
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBarComponent from '../components/NavBarComponent/NavBarComponent'
import { Home } from '../pages/Home'
import { Category } from '../pages/Category'
import { ItemDetailContainer } from '../pages/ItemDetailContainer'


export const MainRouter = () => {
  return (
    <BrowserRouter>
    <NavBarComponent/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category/:id' element={<Category/>}/>
            <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
  )
}

//Traigo el NavBar para que sea un hijo del MainRouterq
