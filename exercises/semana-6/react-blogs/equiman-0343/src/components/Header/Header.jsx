import './Header.css'

const Header = (props) => {
  return (
    <header className="header">
      <div className="company">
        <a href="/">
          <img
            className="company-logo"
            src="https://res.cloudinary.com/dein-software/image/upload/v1681153583/dein-site/dein-logo-border_ybz1mf.png"
            height="50"
            alt="dein Software logo"
          />
        </a>
        <div className="company-name">
          dein <span>Software</span>
        </div>
      </div>

      {props.children}
    </header>
  )
}
export default Header
