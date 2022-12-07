import React from 'react'
import { Link } from 'react-router-dom';
import './card.css';

function Card({item}) {
  return (
    <Link className='link' to={`/product/${item.id}`}>
        <div className='card'>
            <div className='images'>
                {item.isNew && <span>New Season</span>}
                <img className='mainImg' src={item.thumbnail} alt='' />
                <img className='secImg' src={item.images[1]} alt='' />
            </div>
            <h2>{item.title}</h2>
            <div className='prices'>
                <h3>${item.price}</h3>
            </div>
        </div>
    </Link>
  )
}

export default Card