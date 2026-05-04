import useGetPost from '../../hooks/useGetPost'
import { Post } from '../'
import './Blog.css'

const Blog = () => {
  const postList = useGetPost()

  return (
    <section className="blog">
      {postList?.loading && <>Loading...</>}
      {!postList?.loading && postList?.data?.length > 0 && (
        <>
          <h1>
            <a id="blog">Blog</a>
          </h1>

          <div className="post-list">
            {postList.data.map((post) => (
              <Post key={post.uuid} {...post} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
export default Blog
