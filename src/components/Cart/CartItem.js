
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { removeItemFormCart } from './CartSlice';
import { useDispatch } from 'react-redux';

export default function CartItem({cartitem}) {

  const [data, setdata] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
   axios.get(`https://fakestoreapi.com/products/${cartitem.productId}`).then(res => {
    setdata(res.data);
   })
  }, [cartitem.productId])
  // console.log(data)
    return (
    
        <div className="ps-cart-item" key={data.id}><button onClick={ () => dispatch(removeItemFormCart({cartItemId : cartitem.id}))} style={{border:'none'}} className="ps-cart-item__close" href="#"></button>
            <div className="ps-cart-item__thumbnail"><Link to="/product-detail"></Link><img src={data.image}alt={data.title}/></div>
            <div className="ps-cart-item__content"><Link style={{textDecoration:'none' , maxWidth:'180px'}} className="ps-cart-item__title " to="/product-detail">{data.title}</Link>
              <p><span>Quantity:<i>{cartitem.quantity}</i></span><span>Total:<i>${data.price * cartitem.quantity}</i></span></p>
            </div>
          </div>
    )
}
