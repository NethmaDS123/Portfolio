import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import './index.scss'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    // Clear the timer when the component unmounts or when the effect re-runs
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
        </div>
      </div>
    </>
  )
}

export default Projects
