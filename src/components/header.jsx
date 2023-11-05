import React from "react";


import Logo from '../assets/logo.png'

function Header() {
    return (
        <div className="bg-green-700 h-20  ">
        
        <h1 className="flex text-center object-left">
        <img
          src={Logo}
          alt="Logo"
          width={350}
          height={400}
          className=" rounded-full object-left"
          
          />
          </h1>
          

        </div>

    
      
    )
  }
  
  export default Header;

  
    