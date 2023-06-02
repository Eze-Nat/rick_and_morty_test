import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <div >
      <h1 className={style.title}>Cards</h1>
      <div className={style.container}>
      {characters.map((char) => {
        return (
          <Card
          
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={onClose}
          />
        );
      })}
      </div>
    </div>
  );
}
