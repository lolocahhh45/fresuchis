import './styles/App.css'
import './styles/defaultClasses.css'
import './styles/index.css'

import NavBar from './components/navBar.jsx';
import HeroSection from './components/hero.jsx'
import AboutSection from './components/about.jsx'
import Services from './components/services.jsx'
import Testimonials from './components/testimonials.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';

import ModalProvider from './components/props/modalContext';



function App() {

  return (
    <ModalProvider>
      <>
        <main>
          <NavBar/>
          <HeroSection/>
          <AboutSection/>
          <Services/>
          <Testimonials/>
          <Contact/>
        </main>
        <Footer/>
      </>
    </ModalProvider>
  )
}

export default App
