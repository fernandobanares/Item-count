import "./App.css";
// import Ejemplos from "./Components/Ejemplos/Ejemplos";
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./Components/ItemList/ItemListContainer";
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Ejemplos /> */}
       <ItemListContainer />
      {/* <ItemDetailContainer itemid={55555} /> */}
    </div>
  );
}

export default App;