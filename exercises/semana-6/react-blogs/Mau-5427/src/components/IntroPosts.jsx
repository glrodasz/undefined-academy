import React from "react";
import Card from "./Card";

export default function IntroPosts() {
  return (
    <section className="intro-posts">
      <Card 
        imageId={"-YHSwy6uqvk"} 
        title={"Nunc Volutpat Venenatis"}
        extract={"Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Ut faucibus fringilla semper. Aenean nunc ex,..."}
        date={"2023-01-11"}
      />
      <Card 
        title={"Nunc Volutpat Venenatis"}
        extract={"Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Ut faucibus fringilla semper. Aenean nunc ex,..."}
        date={"2023-03-02"}
        emphasis={true}
        emphasisBg={"ptXFlLXuFME"}
      />
      <div className="aside-cards">
        <Card 
          title={"Nunc Volutpat Venenatis"}
          extract={"Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et..."}
          date={"2020-11-26"}
        />
        <Card
          title={"Nunc Volutpat Venenatis"}
          extract={"Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et..."}
          date={"2021-03-07"}
        />
      </div>
    </section>
  );
}
