import React from 'react';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from "../../rtk/slices/cart-slice";


function Cart() {

    const cart = useSelector((state) => state.cart )
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0 ;
        cart.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total.toFixed(2);
    }

  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {cart?.map((product) => (
            <div className='item' key={product.id} >
                <img src={product.thumbnail} alt='' />
                <div className='details'>
                    <h1>{product.title}</h1>
                    <p>{product.description?.substring(0,50)}...</p>
                    <div className='price'>{product.quantity} x ${product.price}</div>
                </div>
                <DeleteOutlinedIcon className='delete' onClick={()=> dispatch(removeFromCart(product.id))}/>
            </div>
        ))}
        <div className='total'>
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset' onClick={() => dispatch(clearCart())}>Clear Cart</span>
    </div>
  )
}

export default Cart