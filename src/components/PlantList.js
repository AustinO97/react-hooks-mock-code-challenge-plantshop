import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ onFilteredPlants }) {

  const plantCards = onFilteredPlants.map((plantObj) => {
    return <PlantCard key={plantObj.id} plant={plantObj} />
  })

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
