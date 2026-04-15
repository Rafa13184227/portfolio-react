import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </BrowserRouter>
  )
}

export default App