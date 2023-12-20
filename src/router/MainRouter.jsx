import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBarComponent from '../components/NavBarComponent/NavBarComponent'
import { Home } from '../pages/home'
import { ItemDetailContainer } from '../pages/ItemDetailContainer'


export const MainRouter = () => {
  return (
    <BrowserRouter>
    <NavBarComponent/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
  )
}