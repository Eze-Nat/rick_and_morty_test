import style from "./Nav.module.css";
import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom";

const Nav = (props) => {
  const {onSearch} = props;
  return (
    <div className={style.searchBar}>
      <Link to="/home" ><button className={style.btn}>Home</button></Link>
      <Link to="/about" ><button className={style.btn}>About</button></Link>
      <SearchBar onSearch={onSearch}/>
    </div>
  )
}

export default Nav

