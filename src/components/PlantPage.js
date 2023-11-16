import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then((plantsArr) => {
      setPlants(plantsArr)
    })
  }, [])

  const addNewPlant = (newPlant) => {
    const updatedPlants = [...plants, newPlant]
    setPlants(updatedPlants)
  }

  const handleSearch = (newSearch) => {
    setSearch(newSearch)
  }

  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })


  return (
    <main>
      <NewPlantForm onAdd={addNewPlant} />
      <Search search={search} onUpdateSearch={handleSearch} />
      <PlantList onFilteredPlants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
