import "./itemListContainer.css"

function ItemListContainer({language, mode, pokemon}) {
  return (
    <div>
        <span className="textGreeting">{language}</span>
        <span className="textGreeting">{mode}</span>
        <span className="textGreeting">{pokemon?.name.toUpperCase()}</span>
    </div>
  )
};

export default ItemListContainer;