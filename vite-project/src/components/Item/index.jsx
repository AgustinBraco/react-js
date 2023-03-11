function Item( {product} ) {
  return (
    <div>
      <span className="textGreeting">{product.name}</span>
      <img src={product.image}/>
    </div>
  );
};

export default Item;