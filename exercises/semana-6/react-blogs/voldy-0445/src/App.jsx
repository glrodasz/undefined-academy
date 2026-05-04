import Card from "./components/Card"
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'
import './index.css'

const articles = [{
  unsplashId: "7GX5aICb5i4",
  unsplashAlt: "Imagen de un post",
  title: "Article",
  extract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
},
{
  unsplashId: "s1puI2BWQzQ",
  unsplashAlt: "Imagen de un post",
  title: "Article",
  extract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
},
{
  unsplashId: "MEb2jandkbc",
  unsplashAlt: "Imagen de un post",
  title: "Article",
  extract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
},
{
  unsplashId: "2CJIkl-df2M",
  unsplashAlt: "Imagen de un post",
  title: "Article",
  extract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
}];


function App() {

  return (
    <>

    <Header/>

    <div className="wrapper-grid">
      {articles.map((article, index) => (
      <Card key={index} {...article} />
      ))}
      </div>

    <Footer/>

    </>
  )
}

export default App
