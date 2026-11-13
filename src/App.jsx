import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Popular from './pages/Popular'

function App() {
  const [movies, setMovies] = useState([])
  const API_KEY = 'c2c838e45044d635b520ad8a1749d89d'
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
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
        <Route path='/popular' element={<Popular />} />
      </Routes>
    </main>
  )
}

export default App
