import { useEffect, useState } from 'react'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import './index.scss'

const Portfolio = () => {
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
              strArray={[
                'S',
                'k',
                'i',
                'l',
                'l',
                's',
                ' ',
                '/',
                ' ',
                'E',
                'x',
                'p',
                'e',
                'r',
                'i',
                'e',
                'n',
                'c',
                'e',
              ]}
              idx={15}
            />
          </h1>
          <p>
            My skills include Python, Java, Git, HTML, CSS, and JavaScript. I
            have utilized these languages to develop efficient and robust
            solutions for my projects.
          </p>
          <p>
            In <em>Web development</em>, I have experience in React.js, Material
            UI, and Next.js. These frameworks enable me to create visually
            appealing and interactive user interfaces while ensuring high
            performance and scalability.
          </p>
          <p>
            To enhance my styling abilities, I have also worked with SCSS/SASS,
            allowing me to write clean and modular CSS code.
          </p>
          <p>
            On the <em>Server-side</em>, I have experience with Express.js, a
            powerful web application framework for Node.js. This has allowed me
            to build reliable and scalable server-side applications.
          </p>
          <p>
            I am also well-versed in TypeScript, which helps me write more
            reliable and maintainable code by adding static typing to
            JavaScript.
          </p>
          <p>
            In terms of data storage, I am proficient in MongoDB, a flexible and
            efficient NoSQL database solution. Additionally, I have integrated
            various APIs into my applications, enabling seamless communication
            with external services and data sources.
          </p>
          <p>
            Overall, my skills in Python, Java, Git, HTML, CSS, JavaScript,
            React.js, Material UI, Next.js, SCSS/SASS, Express.js, TypeScript,
            MongoDB, and API integration make me a versatile and capable
            software developer. I am eager to tackle new challenges and continue
            expanding my knowledge in the ever-evolving field of technology.
          </p>
          <p align="LEFT"></p>
        </div>
      </div>
    </>
  )
}

export default Portfolio
