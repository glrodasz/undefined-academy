import daysUntilToday from "./js/daysUntilToday"
import sortedArticlesByDate from "./js/sortedArticlesByDate"

import { useState } from 'react'
import './App.css'
import {Component} from "react"
import articles from "./assets/data"
import {Card} from "./Card"


class App extends Component{
   
  render(){

    const handleChange = (event) =>{
      this.setState({SelectedValue: event.target.value})
      articles = sortedArticlesByDate(articles, event.target.value)
    }
    
  return (
    <>
      <div className="sortArticles">
          <label for="optionOrderArticles">Elige una opción para ordenar los artículos: </label>
          <select name="optionOrder" id="optionOrder" onChange={(event) => handleChange(event)}>
            <option value="Ascending" >Del artículo más antiguo al más nuevo</option>
            <option value="Descending">Del artículo más nuevo al más antiguo</option>
          </select>
      </div>
      <div className='cardGroup'>
        {articles.map(article =>
          <Card image={article.image} components ={[...article.tags]} title={article.title} date={daysUntilToday(article.date)} description={article.description} author={article.author} readingTime={article.readingTime}></Card>
          )}
        </div>
      </>
  )}}
export default App
