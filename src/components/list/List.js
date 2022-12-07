import React, { useEffect } from 'react'
import './list.css';
import Card from '../card/Card'
import { useDispatch, useSelector } from 'react-redux';
import { fechMenProducts } from '../../rtk/slices/menProducts-slice';
import { fechWomenProducts } from "../../rtk/slices/womenProducts-slice";
import { fechKidsProducts } from "../../rtk/slices/kidsProducts-slice";


function List({cat}) {

  const menProducts = useSelector((state) => state.menProducts);
  const womenProducts = useSelector((state) => state.womenProducts);
  const kidsProducts = useSelector((state) => state.kidsProducts);


  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(fechMenProducts());
    dispatch(fechWomenProducts());
    dispatch(fechKidsProducts())
  },[])

  const renderSwitch = (param) => {
    switch (param) {
      case 'men':
        return (
          menProducts?.map((item) => (
            <Card item={item} key={item.id}/>
          )))
      case 'women':
        return (
          womenProducts?.map((item) => (
            <Card item={item} key={item.id}/>
          )))
      case 'children':
        return (
          kidsProducts?.map((item) => (
            <Card item={item} key={item.id}/>
          )))
      default:
        return <h1>empty products</h1>
    }
  }

  return (
    <div className='list'>
      {renderSwitch(cat.cat)}
    </div>
  )
}

export default List


