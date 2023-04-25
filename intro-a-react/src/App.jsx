import { Component } from "react";
import { Card } from "./Card";

class App extends Component {
  render() {
    // const articles = [{}, {}, {}]

    return (
      <>
        <Card title="Oi Mundo">Como vai?</Card>
        <Card title="Hello">How are you</Card>
        <Card title="Hello">How are you</Card>
      </>
    );
  }
}

export default App;
