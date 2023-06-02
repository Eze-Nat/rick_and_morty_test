
import './App.css';
import { Routes, Route} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./views/About.jsx";
import Detail from "./views/Detail.jsx"
import Error404 from "./components/Error404/Error404.jsx"

function App() {


   const [characters, setCharacters] = useState([])

   const onSearch =(id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert(`¡Ya existe el personaje con el ${id}!`);
         }
      }).catch((err) => alert(err.response.data.error))
   }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => {
         return char.id !== Number(id)
      }))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error404/>} />
         </Routes>
         
         
         
      </div>
   );
}

export default App;
