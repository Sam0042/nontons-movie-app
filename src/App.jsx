import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Popular from './pages/Popular'
import axios from 'axios'
import TopRated from './pages/TopRated'
import Favourites from './pages/Favourites'

function App() {
  const [movies, setMovies] = useState([])
  const [popular, setPopular] = useState([])
  const [topRated, setTopRated] = useState([])
  const [favourites, setFavourites] = useState([])

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY
  const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
  useEffect(() => { getMovies(), getPopular(), getTopRated() }, [])


  async function getMovies() {
    try {
      const response = await fetch(nowPlaying)
      const datas = await response.json()
      setMovies(datas.results)
    }
    catch (error) {
      console.log(error)
    }

  }

  //fetch popular
  async function getPopular() {
    const URL = `https://api.themoviedb.org/3//movie/popular?api_key=${API_KEY}`
    const response = await axios(URL)
    // return response.data.results
    setPopular(response.data.results)
  }

  //fetch popular
  async function getTopRated() {
    const URL = `https://api.themoviedb.org/3//movie/top_rated?api_key=${API_KEY}`
    const response = await axios(URL)
    // return response.data.results
    setTopRated(response.data.results)
  }

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home datas={movies} API_KEY={API_KEY} setFavourites={setFavourites} favourites={favourites} />} />
        <Route path='/popular' element={<Popular datas={popular} API_KEY={API_KEY} favourites={favourites} setFavourites={setFavourites} />} />
        <Route path='/top-rated' element={<TopRated datas={topRated} API_KEY={API_KEY} favourites={favourites} setFavourites={setFavourites} />} />
        <Route path='/favourites' element={<Favourites datas={favourites} favourites={favourites} />} />
      </Routes>
    </main>
  )
}

export default App
