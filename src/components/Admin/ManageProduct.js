import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageSingleProduct from '../ManageProducts/ManageSingleProduct';

const ManageProduct = (props) => {
     
    
    const [products, setProducts] = useState([]);
        useEffect(() =>{
            fetch('https://sheltered-thicket-81559.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

        },[]) 


    return (
        <div>
          <div>
            <table class="table table-striped container">
  <thead>
    <tr>
      
      <th  scope="col">Product Name</th>
      <th scope="col">Product Price</th>
      <th scope="col">Product weight</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
</table>
        </div>
            <div>
            {
                products.map(product => <ManageSingleProduct product={product} />)
            }
        </div>
        </div>
    );
};

export default ManageProduct;