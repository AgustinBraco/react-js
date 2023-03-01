import CartWidget from "../CartWidget";
import "./navbar.css";

function NavBar() {

let dark = false
let english = false

const changeMode = () => {
  dark = !dark;
}

const chanceLanguage = () => {
  english = !english;
}

  return (
    <div className="navbar"
    // style={
    //   dark
    //   ? {backgroundColor: "blue"}
    //   : {backgroundColor: "lightyellow"}}
      >
      <ul>
        <li>
          <button className="changeMode" onClick={changeMode}>Cambiar modo</button>
        </li>
        <li>
          <button className="chanceLanguage" onClick={chanceLanguage}>Cambiar idioma</button>
        </li>
      </ul>
      <CartWidget />
    </div>
  )
};

export default NavBar;