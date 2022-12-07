
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fechMenProducts } from '../../rtk/slices/menProducts-slice';
import { fechWomenProducts } from '../../rtk/slices/womenProducts-slice';
import Card from '../card/Card';
import './featProducts.css'

function FeatProducts({type}) {
    
    const menProducts = useSelector((state) => state.menProducts);
    const womenProducts = useSelector((state) => state.womenProducts);

    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(fechMenProducts());
        dispatch(fechWomenProducts());
    },[])

  return (
    <div className='featProducts'>
        <div className='top'>
            <h1>{type} Products</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas.
            </p>
        </div>
        <div className='bottom'>
            {
                (type === 'Women') ? 
                womenProducts.slice(1,5).map((item) => (
                    <Card item={item} key={item.id} />
                ))
                : menProducts.slice(0,4).map((item) => (
                    <Card item={item} key={item.id} />
                )) 
            }
        </div>
    </div>
  )
}

export default FeatProducts