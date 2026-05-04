//import Menu from "./components/Menu/Menu"
import Card from "../components/Card/Card"
import articles from "../data/articles.json"
import "../styles/main.scss"
import Filter from "../components/Filter/Filter"
import Sections from "../components/Sections"
import { useEffect, useState } from "react"

function Home() {

  const [filterName, setFilterName] = useState("Todos");

  useEffect(function(){}, [filterName]);

  return (<>
    <main>

      <header className="header">
        <Card key="1" {...articles[0]} />
      </header>

      <Filter setFilterName={setFilterName} selectedFilter={filterName}/>

      <Sections filterName={filterName}/>

    </main>
  </>)
}

export default Home