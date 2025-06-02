import Footer from "./components/Footer"
import Hero from "./components/Hero"
// import Line from "./components/Line"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import ProductFilter from "./components/ProductFilter"

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <ProductFilter/>
      <div className="container--column">
        <Product/>
      </div>
      <Footer/>
    </>
  )
}

export default App
