import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import React, { useEffect, useState } from 'react'
import './product.css';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../rtk/slices/cart-slice";

function Product() {

  const {id} = useParams();
  
  const [product, setProduct] = useState([])

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

    useEffect(() => {
      const getProduct = async ()=> {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
      };
      getProduct();
      console.log(product);
    },[])

  return (
    <div className='product'>
      <div className='left'>
        <div className='mainImg'>
          <img src={product.thumbnail} alt='mimg'/>
        </div>
      </div>
      <div className='right'>
        <h1>{product.title}</h1>
        <span className="price">${product.price}</span>
        <p>
          {product.description}
        </p>
        <div className='quantity'>
          <button onClick={()=> setQuantity((prev) => (prev ===1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={()=> setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className='add' onClick={() => dispatch(addToCart(product))}>
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
            <span>Brand: {product.brand}</span>
            <span>Category: {product.category}</span>
            <span>Tag: Children, Women, Men</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product