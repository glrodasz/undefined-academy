import { useState } from 'react'
import { Filters } from './Filters/Filters'
import { Input } from './Input/Input'
import { Button } from './Button/Button'
import { Card } from './Card/Card'
import filter from '../assets/data/filters.json'
import posts from '../assets/data/posts.json'
import './Main.css'

export function Main() {

  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setActiveFilter('all'); // Restablecer el filtro activo al ingresar un término de búsqueda
  };

  return (
    <main>
      <div className="wrapper mb-2 px-1 px-md-2 px-lg-32px">
        <div className="content content-border">
          <article className="file">
            <div className="cards-container">
              <div className="filters-bar">
                <Filters
                  filterButtons={filter}
                  onFilterChange={handleFilterChange}
                />
                <div className="search-container">
                  <form action="/" method="GET">
                    <div className="input-group">
                      <Input
                        type="search"
                        id="search"
                        value={searchTerm}
                        role="searchbox"
                        placeholder="Buscar"
                        onChange={handleSearchChange}
                      />
                      <Button
                        type="submit"
                        id="submit-search"
                        role="button">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                          </svg>
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="posts">
                <Card
                  posts={posts}
                  activeFilter={activeFilter}
                  searchTerm={searchTerm}
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}