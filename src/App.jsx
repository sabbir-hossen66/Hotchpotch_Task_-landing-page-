import Customers from "./components/heroSection/customers/Customers"
import HeroSection from "./components/heroSection/HeroSection"
import Footer from "./Shared/Footer"
import Navbar from "./Shared/Navbar"


function App() {


  return (
    <div className="bg-[#12141D] min-h-screen">

      <Navbar />

      <HeroSection />
      <Customers />

      <Footer />
    </div>
  )
}

export default App
