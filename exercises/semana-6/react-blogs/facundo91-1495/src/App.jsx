import Card from "./components/Card/Card";
import Link from "./components/Link/Link";
import Button from "./components/Button";
import TagsFilter from "./components/TagsFilter";

import articles from "./data/articles.json";
import filters from "./data/filters.json";

const isExtended = (index) => (index + 1) % 4 === 0;
const isReversed = (index) => (index + 1) % 8 === 0;

function App() {
  return (
    <>
      <div className="main-container">
        <header className="main-navbar">
          <img
            src="/images/logos/Castro Barros"
            alt="Logo de Castro Barros"
          />
          <nav>
            <ul className="nav-list">
              <li>
                <Link isActive={true}>Inicio</Link>
              </li>
              <li>
                <Link>Suscribirse</Link>
              </li>
              <li>
                <Button>Castro Barros</Button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section className="featured-posts">
            <article></article>
            <div className="button-container">
              <button>Atras</button>
              <button>Adelante</button>
            </div>
          </section>
          <section className="post-list-container">
            <TagsFilter filters={filters} />
            <div className="post-list">
              {articles.map((article, index) => (
                <Card
                  key={index}
                  {...article}
                  isExtended={isExtended(index)}
                  isReversed={isReversed(index)}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
      <footer></footer>
    </>
  );
}

export default App;
