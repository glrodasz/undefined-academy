import './App.css';
import Header from './components/header.jsx'
import Articles from './components/articles.jsx';
import Card from './components/card.jsx';
import Footer from './components/footer.jsx';

function App() {
  const ARTICLES = Articles();

  return (
    <>
    <Header />

    <main className="main-blog">
      <div className="cards-container">
    {ARTICLES.map(article => (
      <Card key={article.id} title={article.title} image={article.image} content={article.content} date={article.date} />
    ))}
      </div>
    </main>

    <Footer />
    </>
  );
}

export default App;
