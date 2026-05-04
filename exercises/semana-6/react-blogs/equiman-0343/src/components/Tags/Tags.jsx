import classnames from 'classnames'
import './Tags.css'

const Tags = (props) => {
  return (
    <div className="tags">
      {props?.list?.map((tag, index) => (
        <span key={index} className={classnames('tag', `tag-${tag}`)}>
          {tag}
        </span>
      ))}
    </div>
  )
}
export default Tags
