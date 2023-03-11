import Item from "../Item/index"

function ItemList({ products }) {
    return (
      <div>
        {products.map((product, index) => (<Item product={product} key={product.id}/>))}
      </div>
    );
};
  
export default ItemList;