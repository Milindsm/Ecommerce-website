import React from "react";

const Footer=()=>{
    return(
        <div class="blockcode">
 

  <footer class="page-footer shadow">
    <div class="d-flex flex-column mx-auto py-5" style={{width: "80%"}}>
      <div class="d-flex flex-wrap justify-content-between">
        <div>
          <a href="/" class="d-flex align-items-center p-0 text-dark">
            <img alt="logo" src="../img/logo.png" width="30px" />
            <span class="ms-3 h5 font-weight-bold">Devwares</span>
          </a>
          <p class="my-3" style={{width: "250px"}}>
            We are creating High Quality Resources and tools to Aid developers during the
            developement of their projects
          </p>
          <span class="mt-4">
            <button class="btn btn-dark btn-flat p-2">
              <i class="fa fa-facebook"></i>
            </button>
            <button class="btn btn-dark btn-flat p-2">
              <i class="fa fa-twitter"></i>
            </button>
            <button class="btn btn-dark btn-flat p-2">
              <i class="fa fa-instagram"></i>
            </button>
          </span>
        </div>
        
        
        
      </div>
      <small class="text-center mt-5">&copy; Milind, 2023. All rights reserved.</small>
    </div>
  </footer>
</div>
    )
}

export default Footer;