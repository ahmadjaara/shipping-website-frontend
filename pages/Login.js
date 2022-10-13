import Link from "next/link";
import { useEffect, useState } from "react";
import { useUserIdProvider } from "../context/UseridState";
import { useUserIdvalue } from "../context/Useridvalue";


const Login = ({posts}) => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [userid,setuserid]=useUserIdProvider()
  const [isuser,setcheck]=useState(false)
  const [userloginname,setuser]=useUserIdProvider()
  const [useridvalue,setuseridvalue]=useUserIdvalue()
  
  // console.log(data)
  
  const submithandler=(e)=>{

    e.preventDefault()
    
    // setUsername("")
    // setPassword("")
    // setUsername("")
    // setPassword("")
    // setcheck(false)
    setUsername(document.querySelector('#username').value)
    setPassword(document.querySelector('#password').value)
    
    // console.log(document.querySelector('#password').value)
    // console.log(document.querySelector('#username').value)
    // let y=(posts.map((post)=>{
      //   if(post.username==username && post.password==password){
        //      setcheck(true)
        //      alert("welcom"+" "+username)
        //     }}
        //   ))
        posts.forEach(post => {
          if(post.username==username && post.password==password){
            setuserid(post.id)
            setuseridvalue(post.id)
            console.log(userid)
            console.log(post.username)
            setuser(post.username)
            alert("welcome"+" "+username)
            setcheck(true)
          }
        })
        if(!isuser && !username ){
          alert("wrong password or username")
          // setcheck(false)
        } 
             
      }
    
      
 
  return (

     <div className="container col-4">
        {/* {console.log(posts)} */}
          

      <form onSubmit={submithandler}>

      <h1 className="h3 mb-4 fw-normal">Please sign in</h1>
  
      <div className="mb-4 form-floating">
        <input type="text" className="form-control" id="username" placeholder="Username" />
        <label >Username</label>
      </div>
      <div className="mb-4 form-floating">
        <input type="password" className="form-control" id="password" placeholder="Password" />
        <label >Password</label>
      </div>
  
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      <p className="mb-4 fw-sm text-center">Dont have acoount? <Link  href="/Register"><a>register now</a></Link></p>
    </form>
    </div>
      
    );
}
 
export async function getStaticProps(){
  const res=await fetch("http://127.0.0.1:8000/api/customer/") 
  const posts=await res.json();

  return{
   props:{
       posts
   }
  }
}

export default Login;