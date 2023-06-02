import characters, { Rick } from './data.js';
           
app.js, card, estaba esto
            
id={Rick.id}
name={Rick.name}
status={Rick.status}
species={Rick.species}
gender={Rick.gender}
origin={Rick.origin.name}
image={Rick.image}
onClose={() => window.alert('Emulamos que se cierra la card')}

<SearchBar onSearch={(characterID) => window.alert(characterID)} />


export default function SearchBar(props) {
   const { onSearch } = props;
   const onChange = (props) => {
      console.log(props.target.value)
   }

   return (
      <div>
         <input type='search' onChange={onChange}/>
         <button onClick={(param)=>onSearch(param.value)}>Agregar</button>
      </div>
   );
}

export const Rick = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

export default [
   {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   },
   {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'unknown',
         url: '',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
   },
   {
      id: 3,
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Female',
      origin: {
         name: 'Earth (Replacement Dimension)',
         url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
   },
   {
      id: 4,
      name: 'Beth Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Female',
      origin: {
         name: 'Earth (Replacement Dimension)',
         url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
   },
   {
      id: 5,
      name: 'Jerry Smith',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (Replacement Dimension)',
         url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
   },
];


