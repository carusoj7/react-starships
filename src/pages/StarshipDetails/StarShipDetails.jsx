import { useState, useEffect, } from "react"
import { useParams } from "react-router-dom"
import { getStarshipById } from "../../../services/sw-api"
import './StarShipDetails.css'
import { Link } from "react-router-dom"

const StarshipDetails = () => {
  const [starship, setStarship] = useState({})
  const { starshipId } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getStarshipById(starshipId)
      setStarship(starshipData)
    }
    fetchDetails()
  }, [starshipId])

  if (!starship.name) return <h1>Loading details...</h1>
  
  return (
    <main className='starship-container'>
      <div className='starship-details'>
      <p>NAME: {starship.name}</p>
      <p>MODEL: {starship.model}</p>
      <Link to='/starships'>RETURN</Link>
      </div>
    </main>
  );
}

export default StarshipDetails