import React , {useState} from 'react';
import QuantityBtn from '../QuantityBtn';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Cart/CartSlice';
import { Link } from 'react-router-dom';


export default function Product({product}) {
    const [quantity, setquantity] = useState(1);
    const dispatch = useDispatch();
    return (
        <div className="card" style={{width:'25rem'}} key={product.id}>
          <div className="top-div"> <span><i className="fa fa-angle-left"></i></span><span><i className="fa fa-shopping-cart"></i><small></small></span> </div>
          <div className="image-section"> <Link to={`/products/${product.id}`}> <img src={product.image} alt={product.title} height="210px" width="160px"/></Link>
          </div>
          <div className="bottom-div">
              <h4>{product.title.substring(0,15)}...</h4>
               <QuantityBtn
               quantity={quantity}
               setquantity={setquantity}
               />
          </div>
          <div className="last-section">
              <div className="last"> <i className="fa fa-plus-square"></i>
               <button onClick={ () => {
                 dispatch(addItemToCart({product , quantity}));
                  }}>
                Add to cart
                </button> </div> <input type="hidden" value="200" id="product_input_price"/>
              <p>$<span id="price">{product.price}</span></p>
          </div>
      </div>
    )
}
