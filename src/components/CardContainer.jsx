import React from "react";
import Card from "./Card";
function CardContainer({ cards, onCardClick }) {
  return (
    <section className="card-container">
      {cards.map((card) => {
        return (
          <Card
            likes={card.likes}
            name={card.name}
            key={card._id}
            link={card.link}
            onCardClick={() => onCardClick(card)}
            owner={card.owner}
          />
        );
      })}
    </section>
  );
}

export default CardContainer;
