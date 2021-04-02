import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../App";

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/orders")
            .then((res) => res.json())
            .then((data) => filterOrders(data));
    }, []);
    const filterOrders = (data) => {
        const filterData = data.filter(
            (order) => order.email == loggedInUser.email
        );
        setOrders(filterData);
    };
     console.log(orders);  
    return (
        <div className="container">
            <h3 style={{ textAlign: "center" }}>
                Total Orders:{orders.length}{" "}
            </h3>
            <h2>Orderd by: {loggedInUser.email}</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Wight</th>
                        <th>Price</th>
                    </tr>
                </thead>
            </Table>
            {orders.map((singleOrder) => {
                return (
                    <div>
                        <div className="container">
                            <Table striped bordered hover variant="dark">
                                <tbody>
                                    <tr>
                                        <td>{singleOrder.Product_Name}</td>
                                        <td>1</td>
                                        <td>{singleOrder.Product_Weight}</td>
                                        <td>${singleOrder.Product_Price}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Orders;

























// import React, { useContext, useEffect, useState } from 'react';
// import { UserContext } from '../../App';

// const Order = () => {
//     const [loggedInUser,setLoggedInUser] = useContext(UserContext)

//     // const { _id } = useParams()
//     // const [detail, setDetail] = useState([])
//     // console.log(detail);

//     // useEffect(() => {
//     //     const url = `http://localhost:8000/checkout/${_id}`
//     //     fetch(url)
//     //         .then(res => res.json())
//     //         .then(data => setDetail(data))
//     // }, [_id])


//     console.log('email',loggedInUser)
//     return (
//         <div>
//             <h1>this is order</h1>
//             <h2>Hello {loggedInUser.userName}</h2>
//         </div>
//     );
// };

// export default Order;