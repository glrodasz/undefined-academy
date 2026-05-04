import PropTypes from 'prop-types'

import './Layout.css'

const Layout = ({ children, className }) => (
  <div className={`layout ${className}`}>{children}</div>
)

Layout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Layout.defaultProps = {
  className: '',
}

export default Layout
