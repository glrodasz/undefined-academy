import { Header, Footer, Banner, Layout, Blog, Article } from './components'

import { articles } from './data/articles'

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Layout>
          <Blog>
            <>
              {articles.map((article, idx) => (
                <Article {...article} key={`article-${idx + 1}`} />
              ))}
            </>
          </Blog>
        </Layout>
      </main>
      <Footer />
    </>
  )
}

export default App
