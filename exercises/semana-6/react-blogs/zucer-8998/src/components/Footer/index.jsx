import githubIcon from '/src/assets/icons/github.png'
import linkedinIcon from '/src/assets/icons/linkedin.png'

import './Footer.css'

const Footer = () => (
  <footer>
    <div className="footer-container">
      <p>
        &copy; <time dateTime="2023-04-12">2023</time> By Julián Andrés
        Sucerquia.
      </p>
      <nav className="footer-links">
        <a target="_blank" rel="noreferrer" href="https://github.com/zucerkia">
          <img className="footer-icon" src={githubIcon} alt="github icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/andresucerquia/"
        >
          <img className="footer-icon" src={linkedinIcon} alt="linkedIn icon" />
        </a>
      </nav>
    </div>
  </footer>
)

export default Footer
