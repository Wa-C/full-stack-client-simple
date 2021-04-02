import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <div>
            <div class="card container">
  <div class="card-body">
  <p>Customer Name : {loggedInUser.name}</p>
  <p>Products : </p>
  </div>
</div>
        </div>
        </div>
    );
};

export default Orders;