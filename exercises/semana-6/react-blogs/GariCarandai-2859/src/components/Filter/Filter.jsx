import "./Filter.scss"
import filters from "../../data/filters.json"

function Filter({setFilterName, selectedFilter}){

  function selectFilter(e, categoryName){
    e.preventDefault()
    setFilterName(categoryName)
  }

  return(<>
    <nav className="filter">
      <div className="container-row">
        
        <ul>
          {filters.map( (category, index) =>{
            return <li key={"category_"+index}><a href="#" onClick={(e)=>selectFilter(e, category.name)} className={category.name === selectedFilter ? "selected" : ""}>{category.name}</a></li>
          })}

        </ul>

      </div>
    </nav>
  </>)
}

export default Filter;