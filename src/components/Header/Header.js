import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand" href="#"><b>KENAKATA</b></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link to="Home" class="nav-link" >Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Orders</a>
      </li>
      <li class="nav-item">
        <Link to="Admin" class="nav-link" >Admin</Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Deals</a>
      </li>
      <li class="nav-item">
        <a class="nav-link btn btn-warning" href="#">Login</a>
      </li>
    </ul>
    
  </div>
</nav>

        </div>
    );
};

export default Header;