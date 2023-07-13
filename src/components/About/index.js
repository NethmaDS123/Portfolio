import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import './index.scss'

const About = () => {
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
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious full stack developer who is also curretly doing
            a bachelors in Computer Science looking for a role in an established
            IT company with the opportunity to work with the latest technologies
            on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my skills every single day.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
