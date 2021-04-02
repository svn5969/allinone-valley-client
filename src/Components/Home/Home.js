import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import CircularProgress from '@material-ui/core/CircularProgress';

const Home = () => {
    const [products,setProducts] = useState([])
    
   

    useEffect(()=>{
           fetch('https://infinite-shelf-56932.herokuapp.com/products')
           .then(res=>res.json())
           .then(data=>setProducts(data))
    },[])
    return (
        <div className="row">
        <div className="d-flex">

        {
                products.length === 0 && <CircularProgress color="secondary" />
            }
        </div>
          
            {
                products.map(product =><Product  product={product} ></Product>)
            }
        </div>
    );
};

export default Home;