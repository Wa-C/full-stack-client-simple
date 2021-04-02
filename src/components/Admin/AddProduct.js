import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";




const AddProduct = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = data => {
    const productData = {
      name: data.name,
      price: data.price,
      weight: data.weight,
      imageURL: imageURL
    };
    const url = `http://localhost:5055/addProduct`
    console.log(productData);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'

      },
      body: JSON.stringify(productData)
    })
      .then(res => console.log('server side res', res));
  };
  const handleImageUpload = event => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', 'ea2c24f67e7c365454467aab7d5547f5')
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };



  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} class="needs-validation">
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationCustom01"><b>Product Name</b></label>
            <input name="name" defaultValue="Product Name" ref={register} type="text" class="form-control" id="validationCustom01" placeholder="Enter Name" />

          </div>
          <div class="col-md-4 mb-3">
            <label for="validationCustom02"><b>Add Price</b></label>
            <input name="price" defaultValue="Price" ref={register} type="text" class="form-control" id="validationCustom02" placeholder="Enter Price" />

          </div>
          <div class="col-md-4 mb-3">
            <label for="validationCustom02"><b>Weight</b></label>
            <input name="weight" defaultValue="Weight" ref={register} type="text" class="form-control" id="validationCustom02" placeholder="Enter Weight" />

          </div>

        </div>
        <div class="col-md-4 mb-3">
          <label for="validationCustom02"><b>Add Photo</b></label>
          <input onChange={handleImageUpload} type="file" class="form-control d-flex justify-content-center" id="validationCustom02" placeholder="Enter Weight" />

        </div>
        {/* <div class="form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
  </div> */}

        <button class="btn btn-primary" type="submit">Submit form</button>
      </form>


    </div>
  );
};

export default AddProduct;