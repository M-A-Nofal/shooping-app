
import React from 'react';
import Categories from '../../components/categories/Categories';
import Contact from '../../components/contact/Contact';
import FeatProducts from '../../components/featuredProducts/FeatProducts';
import Slider from '../../components/slider/Slider';
import './home.css';

function Home() {

  return (
    <div className='home'>
      <Slider />
      <FeatProducts type='Women' />
      <Categories />
      <FeatProducts type='Men' />
      <Contact />
    </div>
  )
}

export default Home