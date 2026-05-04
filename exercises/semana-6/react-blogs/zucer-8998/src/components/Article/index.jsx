import PropTypes from 'prop-types'
import { humanize } from '../../helpers/date'
import './Article.css'

const Article = ({ image, title, description, url, lastDateUpdate }) => (
  <a className="article-container" href={url}>
    <div className="article-image">
      <img src={image} alt="article image" />
    </div>
    <div className="article-body">
      <div>
        <h3 className="title-3">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="article-footer">
        <small className="article-date">
          <time dateTime={lastDateUpdate} id="lastUpdate">
            {humanize(lastDateUpdate)}
          </time>
        </small>
      </div>
    </div>
  </a>
)

Article.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  lastDateUpdate: PropTypes.string.isRequired,
}

export default Article
