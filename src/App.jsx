import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contacts from "./components/Contacts/Contacts"
import Footer from "./components/Footer/Footer"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Experience from "./components/Experience/Experience"

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App
