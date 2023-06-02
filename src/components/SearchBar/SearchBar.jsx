import style from "./SearchBar.module.css";
import {useState} from "react";

export default function SearchBar(props) {
   const { onSearch } = props;
   const [id, setId] = useState("")
   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div >
         <input type='search' className={style.input} onChange={handleChange} value={id} />
         <button onClick={() => {onSearch(id)}} className={style.btn}>Agregar</button>
      </div>
   );
}
