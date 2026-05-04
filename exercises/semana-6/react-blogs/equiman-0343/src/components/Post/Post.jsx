import PropTypes from 'prop-types'
import './Post.css'
import { dateHumanize } from '../../helpers/dates'
import { Tags } from '../'

const Post = (props) => {
  return (
    <article className="post">
      <a href={props?.url}>
        <header>{props?.title}</header>
        <img src={props?.img?.url} alt={props?.img?.alt} />
        <p>{props?.short}</p>
        <footer>
          <span className="published">{dateHumanize(props?.published)}</span>
          <Tags list={props?.tags} />
        </footer>
      </a>
    </article>
  )
}

Post.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  short: PropTypes.string.isRequired,
  published: PropTypes.instanceOf(Date).isRequired,
  tags: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
}

export default Post
