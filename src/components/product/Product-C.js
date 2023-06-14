import { Link } from "react-router-dom";
import './product.css'

function Product(props){
    return(
        <>
          <div className="card custcard border-0 shadow my-1" >
                <img src={props.product.image} className="card-img-top img" alt="..."/>
                <div className="card-body">
                 <h5 className="card-title fs-6 px-3">{props.product.title}</h5>
                
                   <p className="card-text des-div text-secondary">{props.product.description}</p>
                
                
                <Link to={`/product/${props.product.id}`} className="btn btn-warning text-white position-absolute bottom-0 start-0 mb-4 ms-4 ">Details</Link>
              </div>
             </div>
        </>
    )
    }
    export default Product;