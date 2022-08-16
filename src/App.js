import "./App.css";
// import Ejemplos from "./Components/Ejemplos/Ejemplos";
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./Components/ItemList/ItemListContainer";
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>     
      {/* <Ejemplos /> */}
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/detalle/:id' element={<ItemDetailContainer title={"detalle de producto"}/>} />
      <Route path='/category/:idCategory' element={<ItemListContainer title={"detalle de producto"}/>} />
      <Route path="*" element={<h1>No encontrado</h1>} />
      
      {/* <ItemDetailContainer itemid={55555} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;