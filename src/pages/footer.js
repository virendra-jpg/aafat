import React from "react";

import 'bootstrap';


import 'mdb-ui-kit';



const Footer = () => {
return (
	<div >

<footer className="text-center text-white" style={{backgroundColor: '#f1f1f1'}}>

  <div className="container pt-4">

    <section className="mb-4">
    
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.facebook.com/udghosh.iitk/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i style={{width: '30px'}} className="bi bi-facebook"></i></a>

     
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://twitter.com/udghoshiitk?lang=en"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="bi bi-twitter"></i></a>

      
     
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.instagram.com/udghosh_iitk/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="bi bi-instagram"></i></a>

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.linkedin.com/company/udghosh-iit-kanpur-fest/mycompany/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="bi bi-linkedin"></i></a>
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.youtube.com/user/udghosh11"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="bi bi-youtube"></i></a>
    </section>

  </div>
  <div className="text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2022 Copyright:  
    <a className="text-dark" href= "https://udghosh.org.in/" target='blank'>  UDGHOSH22</a>
  </div>
</footer>
    </div>
);
};
export default Footer;