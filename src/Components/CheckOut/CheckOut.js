import { useParams } from 'react-router';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';



  

const CheckOut = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
     
    const { _id } = useParams()
    const [detail, setDetail] = useState([])
    console.log(detail);

    useEffect(() => {
        const url = `http://localhost:8000/checkout/${_id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [_id])


    return (
        <div>
      <h2>Hello {loggedInUser.userName}</h2>
            <h1>{detail.Product_Name}</h1>
            <h3>{detail.Product_Price}</h3>
            <button className="btn btn-success" >Check Out</button>
        </div>
    );
};

export default CheckOut;