import { useState, useEffect } from "react"

import { getAllStarships } from "../../../services/sw-api"

import { Link } from 'react-router-dom'

import './StarshipList.css'



const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  const getIdFromUrl = (url) => {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
  };

  useEffect(() => {
    const fetchStarshipList = async() => {
      const response = await getAllStarships();
      const starshipData = response.results;
      setStarshipList(starshipData)
      console.log(starshipList);
    }
    fetchStarshipList()
  }, [])

  return (
    <main className='list'>
      {starshipList.length > 0 && starshipList.map(starship => (
    <Link 
      key={starship.url}
      to={`/starships/${getIdFromUrl(starship.url)}`}
      className="btn"
    >
      {starship.name}
    </Link>
))}
    </main>
  )
  
}

export default StarshipList