import React, {useContext} from "react";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "./CartSlice";
import { ProductContext } from '../Products/ProductContext';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItemFormCart } from "./CartSlice";

const Cart = () => {
  const CartItems = useSelector(getCartItems);
  const {data} = useContext(ProductContext);
  const dispatch = useDispatch();
  const CartTotalPrice = useSelector(getTotalPrice);
  const getproducts = CartItems.map((cartitem) => {

    const product = data.find((x) => x.id === cartitem.productId);
    return (
      <tr key={product.id}>
        <td>
          <Link className="ps-product__preview text-link" to="product-detail.html">
            <img width='80px' height='80px' className="mr-15" src={product.image} alt={product.title} />
            {product.title.substring(0,20)}
          </Link>
        </td>
        <td>${product.price}</td>
        <td>
          <span style={{ marginLeft: "20px" }}>{cartitem.quantity}</span>
        </td>
        <td>${product.price * cartitem.quantity}</td>
        <td>
          <div className="ps-remove" onClick={() => dispatch(removeItemFormCart({cartItemId : cartitem.id}))}>
          </div>
           </td>
      </tr>
    );
  });

  return (
    <div>
      <main className="ps-main">
        <div className="ps-content pt-80 pb-80">
          <div className="ps-container">
            <div className="ps-cart-listing">
              <table className="table ps-cart__table">
                <thead>
                  <tr>
                    <th>All Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{getproducts}
                {CartItems.length===0 ?<h1 style={{padding:'40px 0 30px 0' , fontWeight:'700'}}>No Products</h1>:''}
                </tbody>
              </table>
              <div className="ps-cart__actions">
                <div className="ps-cart__promotion">
                  <div className="form-group">
                    <div className="ps-form--icon">
                      <i className="fa fa-angle-right"></i>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Promo Code"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <button className="ps-btn ps-btn--gray">
                      Continue Shopping
                    </button>
                  </div>
                </div>
                <div className="ps-cart__total">
                  <h3>
                    Total Price: <span> {CartTotalPrice}$</span>
                  </h3>
                  <Link className="ps-btn text-link" to="/checkout">
                    Process to checkout<i className="ps-icon-next"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ps-subscribe">
          <div className="ps-container">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 ">
                <h3>
                  <i className="fa fa-envelope"></i>Sign up to Newsletter
                </h3>
              </div>
              <div className="col-lg-5 col-md-7 col-sm-12 col-xs-12 ">
                <form
                  className="ps-subscribe__form"
                  action="do_action"
                  method="post"
                >
                  <input className="form-control" type="text" placeholder="" />
                  <button>Sign up now</button>
                </form>
              </div>
              <div className="col-lg-4 col-md-5 col-sm-12 col-xs-12 ">
                <p>
                  ...and receive <span>$20</span> coupon for first shopping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Cart;
