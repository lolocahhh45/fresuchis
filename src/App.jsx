import './styles/App.css'
import './styles/defaultClasses.css'

import NavBar from './components/navBar.jsx';
import HeroSection from './components/hero.jsx'
import AboutSection from './components/about.jsx'
import Services from './components/services.jsx'

function App() {

  return (
    <>
      <main>
        <NavBar/>
        <HeroSection/>
        <AboutSection/>
        <Services/>
      </main>
    </>
  )
}

export default App
