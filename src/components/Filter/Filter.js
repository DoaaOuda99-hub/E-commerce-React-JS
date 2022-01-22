import React from 'react';
import { Link } from 'react-router-dom';
import { filterCategory , getSelectedCategory } from '../Products/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';

function Filter({category}) {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return (
        <li><Link  data-filter={`.${category}`} onClick={() =>  dispatch(filterCategory(category))} className={selectedCategory === category ? 'active text-link' : 'text-link'}>
            {category}
            </Link> 
        </li>
    )
}
export default  Filter;