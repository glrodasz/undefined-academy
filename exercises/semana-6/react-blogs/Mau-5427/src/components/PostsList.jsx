import React from "react";
import Card from "./Card";

const posts = [
  {
    image: "W9OKrxBqiZA",
    title: "Nunc Volutpat Venenatis",
    extract: "Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Ut faucibus fringilla semper. Aenean nunc ex,...",
    date: "2023-01-07"
  },
  {
    image: "7tOV35hnkao",
    title: "Nunc Volutpat Venenatis",
    extract: "Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Ut faucibus fringilla semper. Aenean nunc ex,...",
    date: "2023-02-01"
  },
  {
    image: "98WPMlTl5xo",
    title: "Nunc Volutpat Venenatis",
    extract: "Nulla a odio sed magna congue condimentum. Pellentesque convallis enim nec libero vulputate, et rhoncus urna placerat. Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus augue, at mollis tellus ex non nisi. Ut faucibus fringilla semper. Aenean nunc ex,...",
    date: "2023-01-01"
  }
]

export default function PostsList() {
  return (
    <section className="posts-list">
      {posts.map(({image, title, extract, date}) => {
        return <Card 
          imageId={image}
          title={title}
          extract={extract}
          date={date}
        />
      })}
    </section>
  )
}