import '../../App.css'
import { Card } from "../Card/Card";
import { articles } from '../../Javascript/articles.js';

    export const Blog = () => {
    return (
      <>
        <div className="article">{articles.map(Card)}</div>
      </>
    );
  }