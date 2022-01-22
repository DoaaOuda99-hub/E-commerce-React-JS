import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartItems } from './CartSlice';
import CartItem from './CartItem';
import { getTotalPrice } from './CartSlice';

export default function CartBtn() {
  const cartItems = useSelector(getCartItems);
  const CartTotalPrice = useSelector(getTotalPrice);
    return (
        <>
        <div className="ps-cart"><a className="ps-cart__toggle" href="#"><span><i>{cartItems.length}</i></span><i className="ps-icon-shopping-cart"></i></a>
          <div className="ps-cart__listing">
            <div className="ps-cart__content">
              {cartItems.length === 0 ? <p style={{textAlign:'center'}}>No Products</p> : ''}
                {cartItems.map(cartitem => <CartItem cartitem={cartitem}/>)}
            </div>
            <div className="ps-cart__total">
              <p>Number of items:<span>{cartItems.length}</span></p>
              <p>Item Total:<span>${CartTotalPrice}</span></p>
            </div>
            <div className="ps-cart__footer"><Link style={{textDecoration:'none'}} className="ps-btn" to="/cart">Check out<i className="ps-icon-arrow-left"></i></Link></div>
          </div>
        </div>
        <div className="menu-toggle"><span></span></div>
      </>
    )
}
