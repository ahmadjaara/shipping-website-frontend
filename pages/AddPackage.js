import { useState } from "react";
import { useUserIdProvider } from "../context/UseridState";
import Link from "next/link";
import { useUserIdvalue } from "../context/Useridvalue";
import axios from "axios";
import Router from "next/router";

const AddPackage = () => {
    const [show, setShow] = useState("");
    const [userid,setuserid]=useUserIdProvider()
    const [useridvalue,setuseridvalue]=useUserIdvalue()
    // const handelclick=()=>{
    //     setShow("fedex")
    // }
    // const handelclick2=()=>{
    //     setShow("ups")
    // }

    const packagesubmithandler = async (e) => {
      e.preventDefault();  
      const formData = {
        serviceship:  document.querySelector('#service').value,
        width:  document.querySelector('#widht').value,
        height:  document.querySelector('#hieght').value,
        length:  document.querySelector('#lenght').value,
        weight:  document.querySelector('#wieght').value,
        custumer: useridvalue ,
      };
  
      await axios.post("http://127.0.0.1:8000/api/", formData)
        .then(res => {
          alert("succesfully added")
          Router.push('/ViewPackage')
        })
        .catch(e => {
          // console.log("login error", e)
          alert('oops something happen wrong???')
  
        })
    };

    if (!userid){
      return (
        <div class="col-lg-8 mx-auto">
        <h4 className="text-center">please login to add package</h4>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button className="btn btn-primary"><Link href="/Login"><a className="text-light">Login</a></Link></button>
          {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button> */}
        </div>
      </div> 
      
      
      )
    }

    return ( 
    <div className="container col-5">
    <form onSubmit={packagesubmithandler}>
    
      {/* <div className="btn-group btn-group-toggl" data-toggle="buttons"> */}
      {/* const service=["","fedexAir","fedexGroud","UPSExpress","UPS2DAY"] */}
      <div className="mb-1">
      <label className="h4 me-3">service shipment</label>
      <select id="service">
    <optgroup label="Fedex">
      <option value="1" >fedexAir</option>
      <option value="2">fedexGroud</option>
    </optgroup>
    <optgroup label="UPS">
      <option value="3">UPSExpress</option>
      <option value="4">UPS2DAY</option>
    </optgroup>
  </select>
      </div>
      {/* <button type="button" className="me-1 btn btn-primary btn-sl" 
      onClick={(e) => {
        e.preventDefault()
        setShow("fedex")}}>
        FedEx
      </button>
      
      <button type="button" className="btn btn-primary btn-sl  " 
      onClick={(e) => {
        e.preventDefault()
        setShow("ups")}}>
      Ups
      </button> */}
            
      {/* <div className="mb-4 form-floating">
      <input required type="text" className="form-control" id="carrierServiceID" placeholder="carrierServiceID" pattern="fedexAIR\b|fedexGroud\b" title="it should be fedexAIR or fedexGroud with its upper and lower caseses "/>
      <label for="carrierServiceID">carrierServiceID</label>
      </div> */}
      <div className="mb-4 form-floating">
      <input required type="text" className="form-control" id="widht" placeholder="widht" pattern="[0-9]{1,15}" title="Password should be digits (0 to 9) and no more than 15"/>
      <label for="widht">widht</label>
      </div>
      <div className="mb-4 form-floating">
      <input required type="text" className="form-control" id="hieght" placeholder="hieght" pattern="[0-9]{1,15}" title="Password should be digits (0 to 9) and no more than 15"/>
      <label for="hieght">hieght</label>
      </div>
      <div className="mb-4 form-floating">
      <input required type="text" className="form-control" id="lenght" placeholder="lenght" pattern="[0-9]{1,15}" title="Password should be digits (0 to 9) and no more than 15"/>
      <label for="lenght">lenght</label>
      </div>

      <div className="mb-4 form-floating">
      <input required type="text" className="form-control" id="wieght" placeholder="wieght" pattern="[0-9]{1,15}" title="Password should be digits (0 to 9) and no more than 15"/>
      <label for="wieght">wieght</label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
     
      
       {/* {show=="ups" &&        
      <>
      <br/>
      <div className="mb-3 form-floating">
      <input required type="text" className="form-control" id="shipmentServiceID" placeholder="shipmentServiceID" pattern="UPSExpress\b|UPS2DAY\b" title="it should be UPSExpress or UPS2DAY with its upper and lower caseses "/>
      <label for="shipmentServiceID">shipmentServiceID</label>
      </div>
      <div className="mb-4 form-floating">
      <input required type="text" className="form-control" id="widht" placeholder="widht" pattern="[0-9]{1,15}" title="Password should be digits (0 to 9) and no more than 15"/>
      <label for="widht">widht</label>
      </div>
      <div className="mb-4 form-floating">
      <input required type="text" className="form-control" id="hieght" placeholder="hieght" pattern="[0-9]{1,15}" title="Password should be digits (0 to 9) and no more than 15"/>
      <label for="hieght">hieght</label>
      </div>
      <div className="mb-4 form-floating">
      <input required type="text" className="form-control" id="lenght" placeholder="lenght" pattern="[0-9]{1,15}" title="Password should be digits (0 to 9) and no more than 15"/>
      <label for="lenght">lenght</label>
      </div>

      <div className="mb-4 form-floating">
      <input required type="text" className="form-control" id="wieght" placeholder="wieght"  pattern="[0-9]{1,15}" title="Password should be digits (0 to 9) and no more than 15"/>
      <label for="wieght">wieght</label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
      </>
      } */}
      
     
      {/* <input type="submit" value="Submit"/> */}
    </form>
    </div> 
    );
}
 
export default AddPackage;