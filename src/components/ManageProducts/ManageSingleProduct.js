import React from 'react';

const ManageSingleProduct = (props) => {

    const {_id, name, price, weight,imageURL} = props.product;
    return (
        <div>
            <table class="table table-striped container">
 
  <tbody>
    <tr class="text-center">
      
      <td scope="row">{name}</td>
      <td scope="row">${price}</td>
      <td scope="row">{weight}</td>
      <td>
          <button class="btn btn-danger">Delete</button>
      </td>
    </tr>
   
  </tbody>
</table>
        </div>
    );
};

export default ManageSingleProduct;