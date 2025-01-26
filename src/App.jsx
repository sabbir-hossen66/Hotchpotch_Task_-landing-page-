import Bar from "./components/bar/Bar"
import Customers from "./components/heroSection/customers/Customers"
import HeroSection from "./components/heroSection/HeroSection"
import Prizing from "./components/prizing/Prizing"
import ResultSection from "./components/resultSection/ResultSection"
import Website from "./components/website/Website"
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
      <Website />
      <Prizing />
      <Bar />
      <Footer />
    </div>
  )
}

export default App
