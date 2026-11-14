import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

function MovieCard({ data, setFavourites, favourites }) {
    const [IsClicked, setIsClicked] = useState(false)

    const isFavourite = favourites.some(movie => movie.id === data.id)

    function handleClick(e) {
        e.preventDefault()
        setFavourites(prevData =>
            prevData.some(movie => movie.id === data.id)
                ? prevData.filter(movie => movie.id !== data.id)
                : [...prevData, data]
        )
    }


    return (
        <div className="p-1"  >
            <a href="#" onClick={(e) => { handleClick(e) }}>
                <div className="relative group">
                    <img src={`https://image.tmdb.org/t/p/w500${data.poster_path} `} alt="" className={`rounded-xl h-full w-full mask-b-from-20% mask-b-to-100% bg-black group-hover:grayscale duration-400 ${isFavourite ? 'grayscale' : ''}`} />
                    <FontAwesomeIcon icon={faHeart} className={`absolute  group-hover:!block ${isFavourite ? '!block text-red-600 ' : 'text-white !hidden'} right-0 top-0 mt-2 mr-2 bg-black/80 rounded-lg p-1 md:p-2 text-xs lg:text-md group-active:text-orange-700 `} />
                    <small className="absolute pb-3 pl-1 bottom-0 left-0 text-yellow-500 text-[0.7rem]"><FontAwesomeIcon icon={faStar} /><span className="font-bold"> {data.vote_average.toString().slice(0, 3)}</span></small>
                </div>
                <h3 className="text-white text-[0.7rem] truncate">{data.title} <span>({data.release_date.toString().slice(0, 4)})</span></h3>
            </a>
        </div>
    )
}

export default MovieCard