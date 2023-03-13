import Item from "../Item/index"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemList({ products }) {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="{products.image}" />
      <Card.Body>
        <Card.Title>{products.name}</Card.Title>
        <Card.Text>
          {products.description}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
      </Card>

      // <div>
      //   {products.map((product, index) => (<Item product={product} key={product.id}/>))}
      // </div>
    );
};
  
export default ItemList;