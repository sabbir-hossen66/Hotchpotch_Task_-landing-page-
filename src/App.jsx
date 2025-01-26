import Customers from "./components/heroSection/customers/Customers"
import HeroSection from "./components/heroSection/HeroSection"
import Prizing from "./components/prizing/Prizing"
import ResultSection from "./components/resultSection/ResultSection"
import WriteResult from "./components/writeResult/WriteResult"
import Footer from "./Shared/Footer"
import Navbar from "./Shared/Navbar"


function App() {


  return (
    <div className="bg-[#12141D] min-h-screen">

      <Navbar />

      <HeroSection />
      <Customers />
      <ResultSection />
      <WriteResult />
      <Prizing />
      <Footer />
    </div>
  )
}

export default App
