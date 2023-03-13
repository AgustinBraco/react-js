import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

function Root() {
  const params = useParams();
  const isCategoryRoutes = Boolean(params.id);

  const [language, setLanguage] = useState("English");
  const [mode, setMode] = useState("Light");

  const changeLanguage = () => {
    setLanguage("Español");
  };

  const changeMode = () => {
    setMode("Dark");
  };

    // EJEMPLO POKEMON
    const [pokemon, setPokemon] = useState(null);
    const [pokemonName, setPokemonName] = useState("ditto");
  
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((data) => data.json())
      .then((poke) => setPokemon(poke));
    }, [pokemonName]);

    const changePokemon = () => {
      setPokemonName("pikachu");
    };
    // EJEMPLO POKEMON

  return (
  <div>
    <NavBar changeLanguage={changeLanguage} changeMode={changeMode} changePokemon={changePokemon}/>
    <ItemListContainer language={language} mode={mode} pokemon={pokemon} isCategoryRoutes={isCategoryRoutes} categoryId={params.id}/>
  </div>
  );
};

export default Root;