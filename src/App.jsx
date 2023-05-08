import {Route, Routes} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipDetails from './pages/StarshipDetails/StarShipDetails'

function App() {
  

  return (
    <>
    <NavBar />
    <Routes>
      <Route path= '/starships' element={<StarshipList />} 
      />
      <Route path='/starships/:starshipId' element={<StarshipDetails />}></Route>
    </Routes>
    </>
  )
}

export default App
