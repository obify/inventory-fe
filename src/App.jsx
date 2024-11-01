import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ModifyCategory from './pages/ModifyCategory';
import Categories from './pages/Categories';
import Locations from './pages/Locations';
import ModifyLocation from './pages/ModifyLocation';
import Products from './pages/Products';
import ModifyProduct from './pages/ModifyProduct';
import Login from './pages/Login';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='locations' element={<Locations />} />
            <Route path='addLocation' element={<ModifyLocation />} />
            <Route path='categories' element={<Categories />} />
            <Route path='addCategory' element={<ModifyCategory />} />
            <Route path='products' element={<Products />} />
            <Route path='addProduct' element={<ModifyProduct />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
