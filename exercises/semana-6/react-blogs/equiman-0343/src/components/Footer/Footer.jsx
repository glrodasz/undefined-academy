import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <h1>
        <a id="social">Sígueme</a>
      </h1>
      <div className="social">
        <a href="https://github.com/equiman">
          <img
            src="https://img.shields.io/badge/-@equiman-gray?style=flat&labelColor=010101&logo=github&logoColor=white&link=https://github.com/equiman"
            alt="GitHub Badge"
          />
        </a>
        <a href="https://twitter.com/equimancho">
          <img
            src="https://img.shields.io/badge/-@equimancho-gray?style=flat&labelColor=1DA1F2&logo=twitter&logoColor=white&link=https://twitter.com/equimancho"
            alt="Twitter Badge"
          />
        </a>
        <a href="https://dev.to/equimancho">
          <img
            src="https://img.shields.io/badge/-@equimancho-gray?style=flat&labelColor=0A0A0A&logo=devdotto&logoColor=white&link=https://dev.to/equimancho"
            alt="Dev.to Badge"
          />
        </a>
        <a href="https://youtube.com/c//equimancho">
          <img
            src="https://img.shields.io/badge/-@equimancho-gray?style=flat&labelColor=FF0000&logo=youtube&logoColor=white&link=https://youtube.com/c//equimancho"
            alt="YouTube Badge"
          />
        </a>
        <a href="https://stackoverflow.com/users/812915">
          <img
            src="https://img.shields.io/badge/-@equiman-gray?style=flat&labelColor=FE7A16&logo=stackoverflow&logoColor=white&link=https://stackoverflow.com/story/equiman"
            alt="StackOverflow Badge"
          />
        </a>
        <a href="https://linkedin.com/in/equiman">
          <img
            src="https://img.shields.io/badge/-@equiman-gray?style=flat&labelColor=0077B5&logo=linkedin&logoColor=white&link=https://linkedin.com/in/equiman"
            alt="LinkedIn Badge"
          />
        </a>
      </div>

      <strong>Happy Coding 🖖</strong>
    </footer>
  )
}
export default Footer
