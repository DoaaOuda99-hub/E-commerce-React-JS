import React from 'react'

const Pagination = ({ProductsPerPage , products , paginate}) =>{
    const PageNumbers=[]

    for (let i = 1; i <= Math.ceil(products / ProductsPerPage); i++) {
        PageNumbers.push(i);
        
    }
    return (
       <nav>
           <ul className='pagination'>
               {PageNumbers.map(number=>
                 <li key={number}>
                 <button onClick={() => paginate(number)}>
                     {number}
                 </button>
                 </li>
                )}

           </ul>
       </nav>
    )
}
export default  Pagination;