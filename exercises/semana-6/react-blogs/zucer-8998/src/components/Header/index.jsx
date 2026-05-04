import maracuya from '/src/assets/maracuya.webp'

import './Header.css'

const Header = () => (
  <header>
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo">
          <img src={maracuya} alt="logo" />
        </div>
        <aside className="tag-content">
          <div className="tag">
            <em>
              ⚡ Fun fact: I love
              <a
                href="https://en.wikipedia.org/wiki/Passiflora_edulis"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                Maracuyá
              </a>
              , also called passion fruit.
            </em>
          </div>
        </aside>
      </div>
    </nav>
  </header>
)

export default Header
