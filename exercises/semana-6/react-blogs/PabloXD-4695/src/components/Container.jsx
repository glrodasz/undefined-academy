import Card from "./Card";
import items from "../helpers/data";

const Container = () => {
  return (
    <article className="card-container">
      {items.map((el, key) => {
        return <Card key={key} card={el}></Card>;
      })}
    </article>
  );
};

export default Container;
