import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
        <div>
          
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-warning ">
  <div className="container">
    <Link className="navbar-brand text-white" to="/">Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ms-auto">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">Contact Us </Link>
          
        </li>
        
        
      </ul>
     
    </div>
  </div>
</nav>
        </div>
        </>
    )
}
export default Navbar;