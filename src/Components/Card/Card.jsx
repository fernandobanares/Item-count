import Button from "../Button/Button";
import "./card.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

function Card({ title, price, img, category,id,stock }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="imagen" />
      </div>
      <div className="card-detail">
        <h2>{title}</h2>
        <p>{category}</p>
        <h3>$ {price}</h3>
        <Link to={`/detalle/${id}`}>
        <Button 
        // onTouch={() => alert (`Clickeando el item:${title}`)} 
        text="Ver más"></Button>
        </Link>
        {/* <ItemCount initial={1} stock={stock} text="Agregar al carrito"/> */}
      </div>
    </div>
  );
}

export default Card;