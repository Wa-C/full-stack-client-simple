import React from 'react';

const ManageSingleProduct = (props) => {

    const {_id, name, price, weight,imageURL} = props.product;

    function deleteProduct(id){
      // console.log(event.target);
      fetch(`http://localhost:5055/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
      }
      })
      .then (res => res.json())
      .then(res => {
        console.log('deleted',res);
      })
    }

    return (
        <div>
            <table class="table table-striped container">
 
  <tbody>
    <tr class="text-center">
      
      <td scope="row">{name}</td>
      <td scope="row">${price}</td>
      <td scope="row">{weight}</td>
      <td>
          <button onClick={()=> deleteProduct(_id)} class="btn btn-danger">Delete</button>
      </td>
    </tr>
   
  </tbody>
</table>
        </div>
    );
};

export default ManageSingleProduct;