import {Route,Routes} from "react-router-dom"
import './App.css';
import Home from "./Components/Home";
import Navbar from './Components/Navbar';
import Products from "./Components/Products";
import ProductsDeatails from "./Components/ProductsDeatails";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products_details/:id" element={<ProductsDeatails/>}/>
      </Routes>
    </div>
  );
}

export default App;
