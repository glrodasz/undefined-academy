import { changeTheme } from '../../assets/js/changeTheme';
import './Header.css'

export function Header() {

  const theme = 'light'
  theme === 'light' ? 'dark' : 'light'

  return (
    <header>
      <nav>
        <div className="header-wrapper px-1 px-md-2 px-lg-2 py-2">
          <div className="flex align-items-center jc-end">
            <button className="change-theme-button" id="change-theme-button" name="change-theme-button" type="button" aria-label={theme} onClick={changeTheme()}>
              <svg className="color-theme-icon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                <mask className="moon" id="moon-mask">
                  <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
                  <circle cx="24" cy="10" r="6" fill="black"></circle>
                </mask>
                <circle className="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor"></circle>
                <g className="sun-beams" stroke="currentColor">
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}