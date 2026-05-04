import { useEffect, useState } from "react";
import { Tag } from "../Tag/Tag";
import { humanizeDate } from "../../assets/js/humanizeDate";
import './Card.css'

export function Card({ posts, activeFilter, searchTerm }) {

  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    const filteredAndSearchedPosts = posts.filter((post) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return (
        post.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        post.description.toLowerCase().includes(lowerCaseSearchTerm) ||
        post.tags.some((tag) => tag.name.toLowerCase().includes(lowerCaseSearchTerm))
      );
    });
    setFilteredPosts(filteredAndSearchedPosts);
  }, [posts, searchTerm]);

  const filteredPostsByFilter = activeFilter === 'all'
    ? filteredPosts // Si el filtro activo es 'all', mostramos todas las entradas
    : filteredPosts?.filter((post) => post.tags.some((tag) => tag.dataTag === activeFilter));

  return (
    <>
    {filteredPostsByFilter?.map((post, index) => {
      const isFeaturedClass = index !== 0 && (index + 1) % 4 === 0 ? 'featured' : ''

      return (
        <article key={post.id} className={`post ${isFeaturedClass}`}>
          <div className="thumbnail">
            <a href="#">
                <img src={`/img/${post.img}`} alt={post.title} />
            </a>
          </div>
          <section>
            <div className="post-info">
              <div className="tags">
                {post.tags.map((tag) => (
                  <Tag
                    key={tag.dataTag}
                    dataTag={tag.dataTag}
                    name={tag.name}
                  />
                ))}
              </div>
              <a href="#" className="post-link">
                <h2 className="post-title">{post.title}</h2>
              </a>
              <p className="post-description">{post.description}</p>
            </div>
            <div className="post-footer">
              Por: <address className="author">{post.author}</address> | 
              <time dateTime={post.date}>{humanizeDate(post.date)}</time>
            </div>
          </section>
        </article>
      )
    })}
    </>
  )
}