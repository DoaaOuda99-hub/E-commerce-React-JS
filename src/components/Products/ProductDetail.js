
import React, { useState, useEffect , useContext } from "react";
import { useParams } from "react-router";
import { addItemToCart } from "../Cart/CartSlice";
import { useDispatch } from 'react-redux';
import { ProductContext } from "./ProductContext";

function ProductDetail() {

  const params = useParams();
  const dispatch= useDispatch();
  const [quantity, setquantity] = useState(1);
  const {data} = useContext(ProductContext);

  const proDetail = data.filter((x) => x.id == params.id);
  const product = proDetail[0];
  
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="ps-product__info my-5 mb-5" key={product.id}>
          <div className="col-md-6 d-flex justify-content-center mx-auto">
            <img src={product.image} width="250" heigth="250" alt={product.title} />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1>{product.title}</h1>
            <p className="product_category fw-bold">{product.category}</p>
            <p className="">${product.price}</p>
            <hr />
            <p>{product.description}</p>
            <div className="last-section"  style={{width:'200px'}}>
              <div className="last"> <i className="fa fa-plus-square"></i>
               <button onClick={ () => {
                 dispatch(addItemToCart({product , quantity}));
                  }}>
                Add to cart
                </button> </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
