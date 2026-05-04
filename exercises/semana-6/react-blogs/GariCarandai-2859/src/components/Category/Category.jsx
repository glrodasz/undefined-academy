import filters from "../../data/filters.json"
import articles from "../../data/articles.json"
import Card from "../Card/Card"
import "./Category.scss"

function getRandom(max) {
  return Math.floor(Math.random() * (max - 1) + 1);
}

function Category(){
  let indexFilter = getRandom(filters.length);
  let filterName = filters[indexFilter].name;
  let categories = [];
  
  return(<>
    <aside className="category">
      <div className="container-col">
        <h2>Category: <span style={{color: "#fff"}}>{filterName}</span></h2>
        <div className="container-row">

          {
          articles.filter(article => {

            article.tags.filter(tag => {
              if(tag == filterName){
                return categories.push(article)
              }
            });              
            
          })
          }
            
          {
          categories.map( (category, index) => {
            if(index < 5){
              return <Card key={index} {...category} typeCard="category"/>
            }
          } )
          }
          
        </div>
      </div>
    </aside>
  </>)
}

export default Category;