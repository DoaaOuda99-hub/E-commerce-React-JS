import React , {useState , useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import {useSelector } from 'react-redux';
import Filters from '../Filter/Filters';
import { getSelectedCategory } from './ProductSlice';
import Product from './Product';
import { useContext } from 'react';
import SkeletonProduct from '../Skeleton/SkeletonProduct';
import { ProductContext } from './ProductContext';
import axios from 'axios';

 function Products() {
  const [products,setproducts] =useState([]);
  const [loading , setloading] = useState(false);
  const selectedCategory = useSelector(getSelectedCategory);
  const {data , Url} = useContext(ProductContext);
  


     useEffect(() => {
       setloading(true);
      axios.get(`${Url}`).then((res) => {
        setproducts(res.data);
        setloading(false);
      })
      
     }, [])

  const ShowProducts = () => {
    return (
      <>
      {products.filter(product => {
        if(selectedCategory === 'all') return true;
        return selectedCategory === product.category
      })
      .map((product) => {
        return (
         <Product key={product.id} product={product}/>
        )
      })}
      </>
    )
  }
  return (
    <>
   
  <div className="container py-5">
    <div className='row justify-content-center'>
    <div className="ps-section--features-product ps-section masonry-root pb-30">
        <div className="ps-container">
      <div className="ps-section__header mb-10">
      <h3 className="ps-section__title" data-mask="Latest">- Latest Products</h3>
      <Filters/>
          </div>
          </div>
          </div>
      
        {loading ?[1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(loading => (
                    <div className="col-3 skeleton-card" key={loading}>
                        <SkeletonProduct/>
                    </div>
                )) : <ShowProducts/>}
    </div>
  </div>
      </>
    
  )
}
export default Products;