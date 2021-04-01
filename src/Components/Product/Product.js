import React from 'react';
import { useHistory } from 'react-router';
const Product = (props) => {
   const {Product_Name,Product_Price,Product_Weight,imageURL,_id} = props.product;
  // const handleBuyProduct= props.handleBuyProduct;
   console.log(props)

    
   const history = useHistory()
   const handleBuyProduct = id => {
     console.log(id);
     const url = `checkout/${id}`
     history.push(url)
   }

    return (
        <div className="col-md-3">
        <img style={{height: '300px'}} src={imageURL} alt=""/>
        <h3>{Product_Name}</h3>
         <h4>{Product_Weight}</h4>

        <div className="col-md-6 d-flex">
          <h3>${Product_Price}</h3>
          <button className="btn btn-primary btn-sm" onClick={()=>handleBuyProduct(_id)}>Buy Now</button>
        </div>
        
    </div>
    );
};

export default Product;