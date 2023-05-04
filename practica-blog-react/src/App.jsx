import Card from "./components/Card";

const articles = [
  {
    unsplashId: "JSQkuSalhH4",
    unsplashAlt: "Imagen de un post",
    title: "La evolución de los Design Tokens",
    extract:
      "Han pasado muchos meses desde que escribí mi primer artículo en ,español sobre Design Tokens, y desde entonces no solo han evolucionado, sino que cada vez se adaptan y se vuelven una parte fundamental de un sistema de diseño. Hoy les quiero compartir los puntos clave de esta evolución.",
    author: "Guillermo Rodas",
    readTime: "7 min",
    date: "2023-05-04",
  },
  {
    unsplashId: "VPkkplpaLLI",
    unsplashAlt: "Imagen de un post",
    title: "Estático, dinámico, single-page, multiple-page y JAMstack",
    extract: "¿Qué es cada cosa? ¿Cuál es mejor? ¿Cuál es peor? ¿Cuál es cuál?",
    author: "Guillermo Rodas",
    readTime: "7 min",
    date: "2023-05-04",
  },
];

function App() {
  return (
    <>
      <div className="main-container">
        <header className="main-navbar">
          <img
            src="/images/logos/undefined-shell.svg"
            alt="Logo de Undefined Shell"
          />
          <nav>
            <ul className="nav-list">
              <li>
                <a
                  href="#"
                  className="text-button text-button-md font-bold is-active"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-button text-button-md font-bold">
                  Suscribirse
                </a>
              </li>
              <li>
                <button className="button button-primary">
                  Undefined Academy
                </button>
              </li>
              <li>
                <button className="button button-secondary">Discord</button>
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
            <nav className="tags-filter">
              <div className="filter-list-scroll-hider">
                <ul className="nav-list filter-list">
                  <li className="is-active-filter">
                    <a
                      className="filter paragraph paragraph-sm font-bold"
                      href="#"
                    >
                      Todos
                    </a>
                  </li>
                  <li>
                    <a
                      className="filter paragraph paragraph-sm font-bold"
                      href="#"
                    >
                      HTML
                    </a>
                  </li>
                  <li>
                    <a
                      className="filter paragraph paragraph-sm font-bold"
                      href="#"
                    >
                      CSS
                    </a>
                  </li>
                  <li>
                    <a
                      className="filter paragraph paragraph-sm font-bold"
                      href="#"
                    >
                      Javascript
                    </a>
                  </li>
                  <li>
                    <a
                      className="filter paragraph paragraph-sm font-bold"
                      href="#"
                    >
                      Web components
                    </a>
                  </li>
                  <li>
                    <a
                      className="filter paragraph paragraph-sm font-bold"
                      href="#"
                    >
                      Sistemas de diseño
                    </a>
                  </li>
                </ul>
              </div>
              <input className="input" type="search" placeholder="Buscar" />
            </nav>
            <div className="post-list">
              {articles.map((article, index) => (
                <Card key={index} {...article} />
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
