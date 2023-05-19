import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";                                                                                                      
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Skills from './components/Skills'
import Works from './components/Works'
import Testimonials from './components/Testimonials'
import Question from './components/Question'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Navbar />
        <Hero />
      <div className='w-10/12 m-auto md:container'>
        <Overview />
        <Skills />
        <Works />
        <Testimonials />
        <Question />
        <Contact />
      </div>
        <Footer />
    </>
  )
}

export default App
