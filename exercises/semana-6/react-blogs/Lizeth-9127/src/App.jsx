import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { humanizeDate } from "./js/humanize.mjs";
import articles from "./js/articles.json";

const setCards = ({ title, description, date }) => <Card title={title} date={humanizeDate(date)}>{description}</Card>;

export const App = () => {
  return (
    <>
      <div className="grid-wrapper">
        <Header/>
        <div className="flex-wrapper">{articles.map(setCards)}</div>
        <Footer/>
      </div>
    </>
  );
};
