import { useEffect, useState } from 'react'
import './App.css'
import CardsContainer from './components/CardsContainer'
import Hero from './components/Hero'
import MovieCard from './components/MovieCard'
import Navbar from './components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Route, Routes } from 'react-router-dom'
import Trending from './pages/Trending'
import Home from './pages/Home'

function App() {
  const [movies, setMovies] = useState([])
  const API_KEY = 'c2c838e45044d635b520ad8a1749d89d'
  const URL = `https://api.themoviedb.org/3//movie/now_playing?api_key=${API_KEY}`
  const genres =
    useEffect(() => { getMovies() }, [])

  async function getMovies() {
    try {
      const response = await fetch(URL)
      const datas = await response.json()
      setMovies(datas.results)
    }
    catch (error) {
      console.log(error)
    }
  }



  return (
    // <div>
    //   <Navbar />
    //   <Hero datas={movies} apiKey={API_KEY} />
    //   <CardsContainer datas={movies} />
    // </div>
    <main>
      <Routes>
        <Route path='/' element={<Home datas={movies} API_KEY={API_KEY} />} />
        <Route path='/trending' element={<Trending />} />
      </Routes>
    </main>
  )
}

export default App
