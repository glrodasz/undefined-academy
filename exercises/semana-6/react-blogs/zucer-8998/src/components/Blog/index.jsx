import PropTypes from 'prop-types'

import './Blog.css'

const Blog = ({ children }) => (
  <section className="blog-container">
    <h2 className="blog-title title-2">Knowledge Pills!</h2>
    <section className="blog-articles">{children}</section>
  </section>
)

Blog.propTypes = {
  children: PropTypes.node,
}

export default Blog
