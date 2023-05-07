import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "purple"}}>
      <div class="container-fluid">
        <a class="navbar-brand" style={{color: "white"}} href="#">
          Navbar
        </a>
        
          
       
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" style={{color: "white"}} aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{color: "white"}} href="#">
                Store
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{color: "white"}} href="#">
                About
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    
  );
};

export default Header;
