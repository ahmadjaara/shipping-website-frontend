import { useUserIdProvider } from "../context/UseridState";
import Link from "next/link";
import { useUserIdvalue } from "../context/Useridvalue";

const ViewPackage = ({posts}) => {
    const [userid,setuserid]=useUserIdProvider()
    const [useridvalue,setuseridvalue]=useUserIdvalue()
    if (!userid){
        return (
          <div class="col-lg-8 mx-auto">
          <h4 className="text-center">please login to View your package</h4>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button className="btn btn-primary"><Link href="/Login"><a className="text-light">Login</a></Link></button>
            {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button> */}
          </div>
        </div> 
        
        
        )
      }
      const service=["","fedexAir","fedexGroud","UPSExpress","UPS2DAY"]
    return ( 
        <div className="container">
            <h4>your package :</h4>
            <div className="row">
           {posts.map((post) => {
            console.log(post.custumer,userid,useridvalue)
               if(post.custumer==useridvalue){
                //    {console.log(post.custumer)}
                   return(
                    <>
                    
                        {post.serviceship==1 | post.serviceship==2 &&
                        <div className="card text-white bg-primary mb-4 me-2 col-md-4">
                            <h5 className="card-title">package with wieght {post.weight} kg</h5>
                            <ul>
                                <li>carrierServiceID: {service[post.serviceship]}</li>
                                <li>width: {post.width}  kg</li>
                                <li>length: {post.length}  cm</li>
                                <li>weight: {post.weight}  cm</li>
                                <li>height: {post.height}  cm</li>
                            </ul>
                        </div>}
                        
                        {post.serviceship==3 | post.serviceship==4 &&
                        <div className="card text-white bg-primary mb-4 me-2 col-md-4">
                            <h5 className="card-title">package with wieght {post.weight} lb</h5>
                            <ul>
                                <li>shipmentServiceID: {service[post.serviceship]}</li>
                                <li>width: {post.width} lb</li>
                                <li>length: {post.length} inch</li>
                                <li>weight: {post.weight} inch</li>
                                <li>height: {post.height} inch</li>
                            </ul>
                        </div>}
                    </>
                )}
                })} 
        </div>
        </div>
        
     );
}

export async function getStaticProps(){
   const res=await fetch("http://127.0.0.1:8000/api/") 
   const posts=await res.json();

   return{
    props:{
        posts
    }
   }
}
export default ViewPackage;