import logo from './logo.svg';
import Navbar from './components/navbar/Nav-bar';
import Slider from './components/Slider-C';
import Productlist from './components/productlist/Productlist';
import About from './components/about/About';
import ProductDetails from './components/productDetails/ProductDetails';
import { Route , Routes , Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
       <Navbar/>
       <Routes>
         <Route path="/" element={<>
          <Slider/>
          <Productlist/>
         </>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="product/:productId" element={<ProductDetails/>}/>
       </Routes>


       
      </div>
      
    
  );
}

export default App;
