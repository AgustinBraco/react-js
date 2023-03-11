import CartWidget from "../CartWidget";
import "./navbar.css";

function NavBar({changeLanguage, changeMode, changePokemon}) {
  return (
    <div className="navbar">
      <ul>
        <li>
          <button className="changeMode" onClick={changeMode}>Cambiar modo</button>
        </li>
        <li>
          <button className="chanceLanguage" onClick={changeLanguage}>Cambiar idioma</button>
        </li>
        <li>
          <button className="chanceLanguage" onClick={changePokemon}>Cambiar Pokemon</button>
        </li>
      </ul>
      <CartWidget />
    </div>
  )
};

export default NavBar;