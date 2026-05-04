import { Component } from "react";
import './App.css'
import './index.css'
import Header from './componentes/Header';
import Main  from "./componentes/Main";
import Footer from "./componentes/Footer";


class App extends Component{
  render(){
    
    return (

      <>
    <Header />
    <Main />
    <Footer />
      </>   
    )   
  }
}

export default App;

