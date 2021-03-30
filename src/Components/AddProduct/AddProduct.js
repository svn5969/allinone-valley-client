import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL,setImageURL] = useState(null)

  const onSubmit = data => {
   const productData = {
       Product_Name: data.Product_Name,
       Product_Weight:data.Product_Weight,
       Product_Price:data.Product_Price,
       imageURL:imageURL
   }
   const url = `http://localhost:8000/addProduct`

   console.log(productData);
   fetch(url,{
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(productData)
   })
   .then(res => console.log('server side response',res))
  }

  const handleImageUpload = product=>{
      console.log(product.target.files[0]);
      const imageData = new FormData();
      imageData.set('key','16f0e28c87c36bc0c96bcc64f8637360')
      imageData.append('image',product.target.files[0])
         
      axios.post('https://api.imgbb.com/1/upload',imageData)
      .then(function (response) {
       setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
   
      <input name="Product_Name" defaultValue="Name" ref={register} />
      <input name="Product_Weight" defaultValue="Weight" ref={register} />
      <input name="Product_Price" defaultValue="Price" ref={register} />
      
      
      <input name="exampleRequired" type="file" onChange={handleImageUpload} />
   
     
      
      <input type="submit" />
    </form> 
        </div>
    );
};

export default AddProduct;