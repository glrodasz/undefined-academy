import Menu from "./components/Menu/Menu"
import Footer from "./components/Footer/Footer"
import Inicio from "./pages/Inicio"
//import { useEffect, useState } from "react"

function App() {

  /* const [page, setPage] = useState("Inicio");

  useEffect(function(){}, [page]); */

  return (<>
    <Menu /* setPage={setPage} selectedPage={page} *//>
    
    <Inicio/>

    <Footer/>
  </>)
}

export default App
