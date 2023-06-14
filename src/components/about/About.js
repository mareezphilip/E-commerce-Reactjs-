function About(){
    return(
          <> 
          <div className="container mt-5 ">
            <h2 className="text-center"> CONTACT US</h2>
            <p className="text-center text-warning fw-bolder fs-2"> _______</p>
            <p className="text-center"> lorem ipsum dolor sit amet , consectetur adipisicing </p>

          <form className="mt-5">
            <div className="row flex-wrap "> 
               <div className="col-lg-5 me-5 col-md-10 coll-sm-8">
                <input className="w-100 border-0 border-bottom p-3" placeholder="Name" type="text"/> 
                <input className="w-100 border-0 border-bottom p-3" placeholder="Email" type="email"/> 
                <input className="w-100 border-0 border-bottom p-3" placeholder="phone" type="text"/> 

               </div>
               <div className="col-lg-5 col-md-10 col-sm-8 mt-lg-0 mt-sm-4">
                <textarea  className="border-0 border-bottom p-3" rows="7" cols="65" placeholder="Message"/>
               </div>
            </div>
            <div className="text-center mt-5">
              
            <button className="p-2 px-5 btn btn-warning text-white" type="button"> Send </button>
            </div>
            </form>
          </div>
          </>

          
    )
}
export default About; 
