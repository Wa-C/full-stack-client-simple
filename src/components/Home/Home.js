import { CircularProgress, LinearProgress } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageProduct from '../Admin/ManageProduct';
import Product from '../Product/Product';



const Home = () => {
        const [products, setProducts] = useState([]);
        useEffect(() =>{
            fetch('https://sheltered-thicket-81559.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

        },[]) 



    return (
        <div className="container">
            <form class="form-inline my-2 my-lg-0 d-flex justify-content-center">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-warning my-2 my-sm-0" type="submit">Search</button>
    </form>
    <br></br>
    <br></br>

        <div  className="row">
            {
                products.length === 0 && <div style={{"paddingLeft":"500px","paddingTop":"150px"}}>
                    <CircularProgress color="secondary" />
                </div>
            }
            {
                products.map(product => <Product product={product} />)
                
            }
        </div>
        
        
        </div>
    );
};

export default Home;