import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
//import CircularProgress from '@material-ui/core/CircularProgress';
import './Home.css'
import Loader from "react-loader-spinner";

const Home = () => {
    const [products, setProducts] = useState([])



    useEffect(() => {
        fetch('https://infinite-shelf-56932.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="row">
            {/* <div className="d-flex spin">

                {
                    products.length === 0 && <CircularProgress color="secondary" />
                }
            </div> */}

            {
                products.map(product => <Product product={product} ></Product>)
            }
            <Loader className="loader" type="BallTriangle" color="#00BFFF" height={150} width={150} timeout={250} />
        </div>
    );
};

export default Home;