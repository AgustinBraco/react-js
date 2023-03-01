import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
  <div>
    <NavBar />
    <ItemListContainer greeting={"Esto es un texto de ejemplo que voy a utilizar para cambiarle el idioma desde el botón del NavBar"} />
  </div>
  )
};

export default App;