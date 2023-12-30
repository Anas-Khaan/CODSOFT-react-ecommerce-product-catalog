import Header from "./components/header/Header.js";
import {useState} from "react";
import ProductCatalog from "./components/product-catalog/product-catalog";
import './App.css';

function App() {
  const [number, setNumber] = useState(0);

  function cart(a){
    setNumber(a);

  }
  return (
    <div className="App">
      <Header props = {number} />
      <ProductCatalog prop={cart} />
    </div>
  );
}

export default App;
