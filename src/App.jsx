import './styles/App.css'
import './styles/defaultClasses.css'

import NavBar from './components/navBar.jsx';
import HeroSection from './components/hero.jsx'
import AboutSection from './components/about.jsx'


function App() {

  return (
    <>
      <main>
        <NavBar/>
        <HeroSection/>
        <AboutSection/>
      </main>
    </>
  )
}

export default App
