import img1 from '../images/img1.jpg'
import img2 from '../images/img2.png'
import img3 from '../images/img3.jpg'
import './Slider.css'

function Slider(){
    return(
        <>
   <div id="carouselExampleIndicators" className="carousel slide ">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className='bg-dark bg-opacity-50 h-100 w-100 position-absolute top-0'></div>
      <img src={img1} className="d-block w-100 height-300" alt="..."/>
    </div>
    <div className="carousel-item">
      <div className='bg-dark bg-opacity-50 h-100 w-100 position-absolute top-0'></div>
      <img src={img2} className="d-block w-100 height-300" alt="..."/>
    </div>
    <div className="carousel-item">
    <div className='bg-dark bg-opacity-50 h-100 w-100 position-absolute top-0'></div>
      <img src={img3} className="d-block w-100 height-300" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}
export default Slider;