import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div className="container">
      <Header />
      <Container />
      <Footer />
    </div>
  );

  //In order to test the exercise of the class 4 you can enable de next code
  //return <ParentComponent />;
}

export default App;
