import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBarComponent from '../components/NavBarComponent/NavBarComponent'
import { Home } from '../pages/Home'
import { ItemDetailContainer } from '../pages/ItemDetailContainer'
import { Category } from '../pages/category'



export const MainRouter = () => {
  return (
    <BrowserRouter>
    <NavBarComponent/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/category/:id' element={<Category/>}/>
        </Routes>
    </BrowserRouter>
  )
}