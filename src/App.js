
import './App.css';
import Header from "./component/Header/header";
import Hero from "./component/Hero/hero";
import Slider from "./component/Slider/slider";
import Virtual from "./component/Virtual/virtual";
import Products from "./component/Products/products";
import Testomonials from "./component/Testimonials/testomonials";

function App() {
  return (
    <div className="App">
<Header/>
        <Hero/>
        <Slider/>
        <Virtual/>
        <Products/>
        <Testomonials/>
    </div>
  );
}

export default App;
