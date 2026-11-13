import { faCirclePlay, faSearch, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import axios from 'axios'


function Hero({ datas, apiKey }) {
    // const API = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&language=id-ID`
    const [movies, setMovies] = useState('')
    const [open, setOpen] = useState(false)
    const API_KEY = apiKey

    useEffect(() => {
        getDetailMovies()
    }, [])

    async function getTrendingMovies() {
        const URL = `https://api.themoviedb.org/3//movie/now_playing?api_key=${API_KEY}`
        const response = await axios(URL)
        return response.data.results[0]
    }

    async function getDetailMovies() {
        const trendingMovies = await getTrendingMovies()
        const id = trendingMovies.id
        const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
        const response = await axios(URL)
        setMovies(response.data)
    }
    const genres = movies && movies.genres.map((genre) => genre.name).join(', ')

    return (
        // <div className='py-1 px-4 bg-cover h-50 md:h-90 xl:h-100 relative w-full' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w300${movies.backdrop_path})` }}>
        <div
            className="relative w-full h-[200px] md:h-[360px] xl:h-[400px] bg-cover bg-center z-10"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movies.backdrop_path})`
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>

            <div className="absolute text-gray-300 flex flex-col bottom-0 mb-2 p-2 rounded-lg text-sm justify-center ml-[5%] md:ml-[10%] md:top-1/2 md:-translate-y-1/2 md:bottom-auto md:mb-0 lg:ml-[20%]">
                <h1 className="font-bold md:text-4xl">{movies.title}</h1>
                <p className="text-xs md:text-xl italic md:mt-1 ">"{movies.tagline}"</p>
                <p className="hidden md:block text-xs md:text-md md:mt-1 w-md lg:text-lg lg:w-xl text-justify">{movies.overview}</p>
                <p className="text-xs md:text-xl md:mt-1 md:font-bold">{genres}</p>
                <small className=" text-yellow-500 text-[0.7rem] md:text-md md:mt-1 lg:text-lg"><FontAwesomeIcon icon={faStar} /><span className="md:font-bold"> {movies.vote_average}</span></small>
                <p className="text-xs md:text-md md:mt-1 lg:text-lg md:font-bold">{movies && movies.release_date.split('-')[0]}</p>

                <a href=""><button className="bg-orange-700 rounded-lg px-3 py-2 mt-1 font-bold flex items-center justify-center text-xs cursor-pointer w-full md:w-xs md:text-lg md:mt-5">
                    <FontAwesomeIcon icon={faCirclePlay} className="mr-1 text-xs md:text-lg font-regular" /> Watch Now</button></a>
            </div>
        </div>
    )
}

export default Hero