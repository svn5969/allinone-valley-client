import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Order = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    console.log('email',loggedInUser)
    return (
        <div>
            <h1>this is order</h1>
            <h2>Hello {loggedInUser.userName}</h2>
        </div>
    );
};

export default Order;