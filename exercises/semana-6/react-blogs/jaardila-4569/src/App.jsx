
import { useState } from 'react'
import './App.css'
import { ArticleList, ButtonList } from './components'
import data from './data/data'

function App() {

  const allCategories = ['All', ...new Set(data.map(article => article.category))];
  const [categories, setCategories] = useState(allCategories);
  const [articles, setArticles] = useState(data);

  const filterCategory = category => {
    if (category === 'All') {
      setArticles(data);
      return;
    }

    const filteredData = data.filter(article => article.category === category);
    setArticles(filteredData);
  }

  return (
    <>
      <header className="title">
        <h1>Jorge Ardila’s <span>Blog</span></h1>
        <img src="https://cdn-az.allevents.in/events3/banners/1269f67c43e2e18f396b1312ed86a8b2b59db0355944894d437ea09fc0f563a0-rimg-w400-h400-gmir.jpg?v=1608205696" alt="imagen-header" />
      </header>

      <ButtonList categories={categories} filterCategory={filterCategory}></ButtonList>

      <ArticleList articles={articles}></ArticleList>
    </>
  )
}

export default App
