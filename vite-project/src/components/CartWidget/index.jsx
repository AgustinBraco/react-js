import "./cartWidget.css";

function CartWidget() {
  return (
    <div className="cardWidget">
        <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="logo-carrito" className="cartLogo"/>
        <span className="cartNumber">3</span>
    </div>
  )
};

export default CartWidget;