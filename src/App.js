import "./App.css";
// import Ejemplos from "./Components/Ejemplos/Ejemplos";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserForm from './Components/UserForm/UserForm.jsx'

import { CartProvider } from "./store/cartContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <CartProvider>
         <NavBar />
          <Routes>     
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/detalle/:id' element={<ItemDetailContainer title={"detalle de producto"}/>} />
            <Route path='/category/:idCategory' element={<ItemListContainer title={"detalle de producto"}/>} />
            <Route path='/contact' element ={<UserForm />} />
            <Route path="*" element={<h1>No encontrado</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;