import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    


    return (
        <div>
            <div class="card container">
  <div class="card-body">
  <p>Customer Name : {loggedInUser.name}</p>
  </div>
</div>
        </div>
    );
};

export default Checkout;