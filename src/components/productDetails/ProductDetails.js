import { useParams } from "react-router-dom";
import { useEffect ,useState } from "react";
function ProductDetails(){
    const api_url='https://fakestoreapi.com/products'


    const parameter = useParams();
    const [product,setproduct]=useState({})
    

    useEffect(()=>{
        fetch(`${api_url}/${parameter.productId}`).then((res)=>res.json())
        .then((product)=>setproduct(product))
    },[])
    console.log(product)
    return(
      <>
      <div className="container">
             <div className="row my-5 justify-content-around"> 
               <div className="col-lg-4 col-sm-9">
                   <img src={product.image} className="w-100 image"/>

               </div>
               <div className="col-lg-6 align-self-center col-sm-9 mt-lg-0 mt-sm-5"> 
                   <h5 className="fs-4 my-3"> {product.title}</h5>
                   <p className="text-secondary my-3"> <span className="text-black fs-5"> Category :</span> {product.category}</p>
                   <p className="text-secondary my-3"> <span className="text-black fs-5">Description :</span> { product.description}</p>
                   <p className="text-secondary my-3"> <span className="text-black fs-5">Price :</span> { product.price} L.E</p>


               </div>
              </div>
      </div> 
      </>
    )
}
export default ProductDetails;