import Category from "./Category/Category"
import Card from "./Card/Card"
import articles from "../data/articles.json"


function Sections({filterName}){

  let categories = [];
  
  if(filterName === "Todos"){
    return(<>

      <section className="articles">

        {articles.map((article, index) => {

          if(index != 0 && index < 7){
            return (
              <Card
                key={article.id}
                {...article}
              />
            )
          }
          
        })}
      </section>

      <Category/>

      <section className="articles">

        {articles.map((article, index) => {

          if(index >= 7){
            return (
              <Card
                key={article.id}
                {...article}
              />
            )
          }
          
        })}
      </section>
    </>)
  }else{
    return(<>

      <section className="articles">
        
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
          return <Card key={category.id} {...category}/>
          
        } )
        }

      </section>


    </>)
  }
}

export default Sections;