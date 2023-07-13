import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/me2.jpeg'
import LogoSubtitle from '../../assets/images/2.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  faHome,
  faUser,
  faEnvelope,
  faCode,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className={'about-link'}
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className={'portfolio-link'}
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className={'projects-link'}
        to="/projects"
      >
        <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className={'contact-link'}
        to="/about"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/nethma-de-silva-b34727212/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.github.com/NethmaDS123"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
