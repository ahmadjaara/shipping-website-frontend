import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css';
import { useUserIdProvider } from "../context/UseridState";
import { useState } from "react";

const Navbar = ({posts}) => {
  const [userid,setuserid]=useUserIdProvider()
  const[userloginname,setuser]=useUserIdProvider()
  
    return ( 
    
    <>
    <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4">Shipping Service</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><Link href="/"><a className="nav-link active" aria-current="page">Home</a></Link></li>
        <li className="nav-item"><Link href="/AddPackage"><a className="nav-link">Add package</a></Link></li>
        <li className="nav-item"><Link href="/ViewPackage"><a className="nav-link">View package</a></Link></li>
        {/* <li className="nav-item"><a className="nav-link">login</a></li> */}
        {!userid && <li className="nav-item"><Link href="/Login"><a className="nav-link">Login</a></Link></li>}
        {!userid && <li className="nav-item"><Link href="/Register"><a className="nav-link">sign up</a></Link></li>}
        {userid && <li className="nav-item"><a className="nav-link text-dark">welcome,{userloginname}</a></li>}
        {userid && <li className="nav-item"><Link href="/" ><a className="nav-link" onClick={(e)=>{setuserid(false)}}>logout</a></Link></li>}
      </ul>
    </header>
  </div>
    
    {/* <div>


        <nav >
            
            <Link href="/"><a>Registration</a></Link>
            <br/>
            <Link href="/Login"><a>login</a></Link>
            <br/>
            <Link href="/AddPackage"><a>Add Package</a></Link>
            <br/>
            <Link href="/ViewPackage"><a>view Package</a></Link>

        </nav>
    </div>  */}
    </>
    );
}

 
export default Navbar;