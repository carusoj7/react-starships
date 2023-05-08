import { useState, useEffect } from "react"

import { getStarship } from "../../../services/sw-api"

import './StarShipDetails.css'

const StarshipDetails = () => {
  

  
  //if (!starshipDetails.name) return <h1>Loading details...</h1>
  return (
    <main className='starship-details'>
      <h1>Starship Details</h1>
      <h2>Name</h2>
    </main>
    );
}

export default StarshipDetails;