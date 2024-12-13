import React from "react";

const Cart = ({ cartItems, handleRemoveFromCart }) => {
 return (
<div className="cart-container fixed-top bg-light p-3">
<h4>Shopping Cart</h4>
 {cartItems.length === 0 ? (
<p>You are  cart is empty.</p>
 ) : (
<ul className="list-group"> {cartItems.map((item) => (
 <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
{item.product_name} - ${item.price.toFixed(2)}
 <button className="btn btn-danger btn-sm"onClick={() => handleRemoveFromCart(item)}>
                Remove
</button>
</li>))}
</ul>)}
</div>  );};
export default Cart;
