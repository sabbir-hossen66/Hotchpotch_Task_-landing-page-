import Customers from "./components/heroSection/customers/Customers"
import HeroSection from "./components/heroSection/HeroSection"
import ResultSection from "./components/resultSection/ResultSection"
import Footer from "./Shared/Footer"
import Navbar from "./Shared/Navbar"


function App() {


  return (
    <div className="bg-[#12141D] min-h-screen">

      <Navbar />

      <HeroSection />
      <Customers />
      <ResultSection />
      <Footer />
    </div>
  )
}

export default App
