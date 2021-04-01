import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import CheckOut from '../CheckOut/CheckOut';
import Product from '../Product/Product';

const Home = () => {
    const [products,setProducts] = useState([])
    
    // const [cart,setCart]= useState([])
    // const handleBuyProduct=(product)=>{
    //     const newCart = [...cart,product]
    //     setCart(newCart)
    //     // console.log('product added',product)
         
    //     handleBuyProduct={handleBuyProduct}
    //     cart={cart}

    // }

    useEffect(()=>{
           fetch('http://localhost:8000/products')
           .then(res=>res.json())
           .then(data=>setProducts(data))
    },[])
    return (
        <div className="row">
            {/* <h6> product Added: {cart.length}</h6> */}
            {/* <CheckOut cart={cart}></CheckOut> */}
            {
                products.map(product =><Product  product={product} ></Product>)
            }
        </div>
    );
};

export default Home;