import "./itemListContainer.css"

function ItemListContainer({greeting}) {
  return (
    <div>
        <span className="textGreeting">{greeting}</span>
    </div>
  )
};

export default ItemListContainer;