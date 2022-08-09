import './App.css';
import NavBar from './Components/NavBar/NavBar';
// import Card from './components/Card/Card';
// import Button from './components/Button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ButtonChildren from './components/Button/ButtonChildren';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
// import Cartwidget from './components/CartWidget/Cartwidget';
import ItemCount from './Components/ItemCount/ItemCount';





function App() {
// let userColor = "green"
// const styles ={marginTop:"20px", color:"userColor"}
// let usuario = "Santiago"


// const dataProducts = [{
//   name: "Televisor 32",
//   price: 1000,
//   imgurl: "https://picsum.photos/280/260",
//   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quaerat maiores perspiciatis. Enim velit, dolores veritatis eum corporis sit, officiis provident deleniti repudiandae tempora atque, natus sapiente saepe laborum expedita."
// },
// {
//   name: "Monitor 22",
//   price: 800,
//   imgurl: "https://picsum.photos/280/260",
//   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quaerat maiores perspiciatis. Enim velit, dolores veritatis eum corporis sit, officiis provident deleniti repudiandae tempora atque, natus sapiente saepe laborum expedita."
// }]

// const carrito ={
//   nombre:"carrito",
//   img:"./images/carrito.png"
// }

  return (
    <div className="App">
      <NavBar/>
      
      <ItemListContainer greeting="Se vende todo"/>

      {/* <div className="header-banner">
        <img 
        className='header-img'
        src='./images/coderhouse.png'
        alt='Coderhouse'
         />
      </div>
      <h1 className='title'>Coderhouse React 34710</h1>
      <p style={styles}>{usuario}</p>
      <br /> */}
{/* 
      <Button text="Click me"/>
      <ButtonChildren type="alert">
        Click me whit childrens
        </ButtonChildren>
      <Card data={dataProducts[0]} />
      <Card data={dataProducts[1]} /> */}
      {/* <Card
      name="Televisor HD"
      price={2090}
      imgurl="https://picsum.photos/280/260"
      description="Lorem Ipsum"
      /> */}
      <ItemCount initial={1} stock={10}/>
    </div>
   
    
  );
}

export default App;
