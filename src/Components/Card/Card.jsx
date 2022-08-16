import Button from "../Button/Button";
import "./card.css";
import { Link } from "react-router-dom";

function Card({ title, price, img, category,id }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="imagen" />
      </div>
      <div className="card-detail">
        <h2>{title}</h2>
        <p>{category}</p>
        <h3>$ {price}</h3>
        <Link to={`/detalle/${id}`}>Ver más</Link>
      </div>
    </div>
  );
}

export default Card;