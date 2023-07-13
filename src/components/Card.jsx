import React from "react";
import CardItem from "./CardItem";
const Card = () => {
  let cardlist = [
    {
      id: 1,
      name: "Product 1",
      description: "Description",
    },
    {
      id: 2,
      name: "Product 1",
      description: "Description",
    },
    {
      id: 3,
      name: "Product 1",
      description: "Description",
    },
    {
      id: 4,
      name: "Product 1",
      description: "Description",
    },
    {
      id: 5,
      name: "Product 1",
      description: "Description",
    },
    {
      id: 6,
      name: "Product 1",
      description: "Description",
    },
  ];
  return (
    <div>
      {cardlist.map((item, index) => {
        return <CardItem key={`${index}-${item?.id}`} item={item} />;
      })}
    </div>
  );
};

export default Card;
