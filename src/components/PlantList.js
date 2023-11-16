import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plant }) {

  const newCards = plant.map((plant) => {
    return (<PlantCard key={plant.id} plant={plant} />)
  })

  return (
    <ul className="cards">
      {newCards}
    </ul>
  );
}

export default PlantList;
