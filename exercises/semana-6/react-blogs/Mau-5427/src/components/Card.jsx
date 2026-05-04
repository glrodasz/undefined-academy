import React from "react";
import humanize from "../scripts/humanize.js";

export default function Card({
  imageId,
  title,
  extract,
  date,
  readMoreLink = "#",
  emphasis = false,
  emphasisBg = null,
}) {
  return (
    <article className={`card ${emphasis ? "emphasis-card" : ""}`}>
      {emphasis ? (
        <img src={`https://source.unsplash.com/${emphasisBg}`} />
      ) : null}
      <div>
        <header>
          {imageId ? (
            <img
              className="card-img"
              src={`https://source.unsplash.com/${imageId}`}
              alt="portada de artículo"
            />
          ) : null}
          <h2 className="heading-sm font-bold">{title}</h2>
          <time className="date card-date" dateTime={date}>
            {humanize(date)}
          </time>
        </header>
        <p className="paragraph paragraph-xs">{extract}</p>
      </div>
      <a href={readMoreLink}>read more</a>
    </article>
  );
}
