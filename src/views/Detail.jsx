import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import style from "../components/Cards/Cards.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  useEffect(() => {console.log(character)},[character])
 
  

  return (
  <div className={style.container}>{
    character ? (<Card
      key={character.id}
      id={id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      origin={character.origin?.name}
      image={character.image}
      
      />) : (<h1>Cargando</h1>)
}</div> );
};

export default Detail;
