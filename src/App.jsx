import {Route, Routes} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'

import StarshipList from './pages/StarshipList/StarshipList'

function App() {
  

  return (
    <>
    <NavBar />
    <Routes>
      <Route path= '/starships' element={<StarshipList />} 
      />
    </Routes>
    </>
  )
}

export default App
