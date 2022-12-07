import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from "@mui/icons-material/Search";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Cart from '../cart/Cart';
import { useSelector } from 'react-redux';

function Navbar() {

    const [open, setOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const cart = useSelector((state) => state.cart)

  return (
    <div className='navbar'>
        <div className='nav-menu'>
            <div className='start'>
                <Link className='link' to='/'>SHOOPING APP</Link>
            </div>
            <div className='menu' onClick={()=> setOpenMenu(!openMenu)}>
                <MenuOutlinedIcon />
            </div>
        </div>
        <div className={`wrapper ${openMenu? 'inactive' : 'active'}`}>
            <div className='left'>
                <div className='item'>
                    <img src='/img/en.png' alt='' />
                    <KeyboardArrowDownIcon />
                </div>
                <div className='item'>
                    <span>USD</span>
                    <KeyboardArrowDownIcon />
                </div>
                <div className='item'>
                    <Link className='link' to='/products/women'>Women</Link>
                </div>
                <div className='item'>
                    <Link className='link' to='/products/men'>Men</Link>
                </div>
                <div className='item'>
                    <Link className='link' to='/products/children'>Children</Link>
                </div>
            </div>
            <div className='center'>
                <Link className='link' to='/'>SHOOPING APP</Link>
            </div>
            <div className='right'>
                <div className='item'>
                    <Link className='link' to='/'>Homepage</Link>
                </div>
                <div className='item'>
                    <Link className='link' to='/'>About</Link>
                </div>
                <div className='item'>
                    <Link className='link' to='/'>Contact</Link>
                </div>
                <div className='item'>
                    <Link className='link' to='/'>Stores</Link>
                </div>
                <div className='icons'>
                    <SearchIcon />
                    <div className='cartIcon' onClick={()=> setOpen(!open)}>
                        <ShoppingCartOutlinedIcon />
                        <span>{cart.length}</span>
                    </div>
                </div>
            </div>
        </div>
        {open && <Cart />}
    </div>
  )
}

export default Navbar