import './App.css'
import About from './components/About'
import ConferenceBanner from './components/ConferenceBanner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Organiser from './components/Organiser'
import Partners from './components/Partners'
import Speakers from './components/Speakers'
import Speakers2 from './components/Speakers2'
import Speakers3 from './components/Speakers3'
import Updates from './components/Updates'
function App() {

  return (
    <>
    <Navbar />
    <ConferenceBanner />
    <About />
    <Updates />
    <Speakers />
    <Speakers2 />
    <Speakers3 />
    <Organiser />
    <Partners />
    <Footer />
    </>
  )
}

export default App
