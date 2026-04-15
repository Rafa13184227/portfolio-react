import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Hero />
      </main>
    </BrowserRouter>
  )
}

export default App