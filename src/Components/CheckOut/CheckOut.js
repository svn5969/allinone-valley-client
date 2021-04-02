import { useParams } from 'react-router';
import React, { useContext, useEffect, useState,useHistory } from 'react';
import { UserContext } from '../../App';
import {  Table } from 'react-bootstrap';



  

const CheckOut = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext)

    
     
    const { _id } = useParams()
    const [detail, setDetail] = useState([])
    console.log(detail);

    useEffect(() => {
        const url = `https://infinite-shelf-56932.herokuapp.com/checkout/${_id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [_id])
     const {Product_Name,Product_Price,Product_Weight} = detail;
    const handleCheckOut= () =>{
        const orderDetails = {
            Product_Name,Product_Price,Product_Weight,...loggedInUser,orderTime: new Date()
        }
        const url = `https://infinite-shelf-56932.herokuapp.com/addOrder`
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => console.log('server side response',res))
        
    }

    return (
        <div className="container">
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Product Name</th>
      <th>Quantity</th>
      <th>Weight</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>{detail.Product_Name}</td>
      <td>1</td>
      <td>{detail.Product_Weight}</td>
      <td>${detail.Product_Price}</td>
    </tr>
    <tr>
      <td></td>
      <td colSpan="3">Total</td>
      <td>${detail.Product_Price}</td>
    </tr>
  </tbody>
</Table>


      {/* <h2>Hello {loggedInUser.userName}</h2>
            <h1>{detail.Product_Name}</h1>
            <h3>{detail.Product_Price}</h3> */}
            <button className="btn btn-success" onClick={handleCheckOut}  >Check Out</button>
        </div>
    );
};

export default CheckOut;