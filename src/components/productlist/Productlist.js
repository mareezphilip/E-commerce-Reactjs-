import { useEffect , useState } from "react";



import Product from "../product/Product-C";
import './productlist.css'


function Productlist(){
   
  const api_url="https://fakestoreapi.com/products";
  const[products,setproducts]=useState([]);
  const[categories,setcategories]=useState([])
  
  const getproducts= ()=> {
     fetch(api_url).then((reponse)=>reponse.json())
    .then((data)=>setproducts(data))
  }
 
  const getSpecificCategory=(catName)=>{
    console.log(catName)
    fetch(`${api_url}/category/${catName}`).then((reponse)=>reponse.json())
    .then((data)=>setproducts(data))
  }
  const getcategory=()=>{
    fetch(`${api_url}/categories`).then((res)=>res.json())
    .then((cat)=>setcategories(cat));
  }
  useEffect(()=>{
    getproducts()
    getcategory()
  },[]);

  /*  const allproducts=products.map((p)=>{
        <div>
            <Product product={p}/>
        </div>
    }) */

   /* const allproducts=products.map((product)=>{
      return(
         <Product product={product} key={product.id}/>
      )
    }) */

    return(
       <>
         <h2 className="text-center p-5"> Our Products </h2>
         <div className="container">
          <div className="btnsdiv">
          <button  className="btn btn-warning custom text-white" onClick={()=>{
              getproducts()
            }}> All </button>
          {  
            categories.map((cat)=>{
              return(
                <button  key={cat} className="btn btn-warning custom text-white " onClick={()=>{
                  getSpecificCategory(cat);
                }}> {cat}</button>
              );
              
            })
          }

          </div>
        
         <div className="row flex-wrap list justify-content-center">
          
         { products.map((p)=>{
            return(
                <div className="col-lg-3 col-md-4 col-sm-9 ">
                  <Product product={p} key={p.id}/>
                 </div>
            );
         })}
           
          </div>    
             </div>    
         
       </>
    )
}
export default Productlist;