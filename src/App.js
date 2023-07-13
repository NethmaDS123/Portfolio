import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
