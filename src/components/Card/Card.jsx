import style from "./Card.module.css";
import {Link} from "react-router-dom"

export default function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose } = props;
  return (

    <div className={style.container}>
      <button onClick={()=>{onClose(id)}} className={style.btn}>X</button>
     
      <div className={style.cardContain}>
         <Link to={`/detail/${id}`}><h2 className={style.drawborder}>{name}</h2> </Link>
        <div className={style.details}>
          <h2>{status}</h2>
          <h2>{species}</h2>
          <h2>{gender}</h2>
          <h2>{origin}</h2>
        </div>
      </div>
     
      <img src={image} alt="" className={style.img} />
    </div>
  );
}
