import React from "react";
import "./Card.css";

function Card({title, info, linkText}) {
  return (
    <article className="card">
        <div className="card__heading">
            <h2 className="card__title">{title}</h2>
            <p className="card__info">{info}</p>
        </div>
        <a className="card__link">{linkText}</a>
    </article>
  );
}

export default Card;
