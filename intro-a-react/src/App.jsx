import { Component } from "react";
import { Card } from "./Card";

class App extends Component {
  render() {
    const articles = [
      {
        title: "Oi Mundo",
        text: "Como vai?",
      },
      {
        title: "Hello",
        text: "How are you?",
      },
      {
        title: "Hello",
        text: "How are you",
      },
      {
        title: "Hej",
        text: "Värld",
      },
    ];

    return (
      <>
        {articles.map(({ title, text }) => (
          <Card title={title}>{text}</Card>
        ))}
      </>
    );
  }
}

export default App;
