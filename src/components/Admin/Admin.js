import React from 'react';
import AddProduct from './AddProduct';
import ManageProduct from './ManageProduct';
import {Link} from "react-router-dom";

const Admin = () => {
    return (
        <div>
            <h3 class="p-3 mb-2 bg-info text-dark">This is Admin section</h3>
            <br></br>

            <Link to="AddProduct" class="btn btn-warning btn-lg my-2 my-sm-0" type="submit">Add Product</Link>
            <br></br>
            <br></br>
            <Link to="ManageProduct" class="btn btn-warning btn-lg my-2 my-sm-0" type="submit">Manage Product</Link>
            
            
        </div>
    );
};

export default Admin;