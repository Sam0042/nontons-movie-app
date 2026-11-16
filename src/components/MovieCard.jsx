import { faHeart, faStar, faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

function MovieCard({ data, setFavourites, favourites, favouritesPage }) {

    const isFavourite = favourites.some(movie => movie.id === data.id)

    function handleClick(e) {
        e.preventDefault()
        {
            !favouritesPage ?
                setFavourites(prevData =>
                    prevData.some(movie => movie.id === data.id)
                        ? prevData.filter(movie => movie.id !== data.id)
                        : [...prevData, data]
                ) :
                setFavourites(prevData =>
                    prevData.some(movie => movie.id === data.id)
                        ? prevData.filter(movie => movie.id !== data.id)
                        : ''
                )
        }
    }


    return (
        <div className="p-1"  >
            <a href="#" >
                <div className="relative group">
                    <img src={`https://image.tmdb.org/t/p/w500${data.poster_path} `} alt="" className={`rounded-xl h-full w-full mask-b-from-20% mask-b-to-100% bg-black group-hover:grayscale duration-600 duration-400 ${!favouritesPage ? isFavourite ? 'grayscale' : '' : 'a'}`} />
                    <FontAwesomeIcon onClick={(e) => { handleClick(e) }} icon={favouritesPage ? faXmark : faHeart} className={`absolute duration-500 group-hover:!block ${!favouritesPage ? isFavourite ? '!block text-orange-700 ' : 'text-white block ' : !isFavourite ? '!block text-orange-700 ' : 'text-white !block lg:!hidden'} ${!favouritesPage ? 'right-0 top-0 mt-2 mr-2' : 'right-0 top-0 mt-2 mr-2 '} bg-black/90 hover:bg-gray-900 duration-500 rounded-lg p-1 md:p-2 text-xs lg:text-md hover:text-gray-500 `} />
                    <small className="absolute pb-3 pl-1 bottom-0 left-0 text-yellow-500 text-[0.7rem]"><FontAwesomeIcon icon={faStar} /><span className="font-bold"> {data.vote_average.toString().slice(0, 3)}</span></small>
                </div>
                <h3 className="text-white text-[0.7rem] truncate">{data.title} <span>({data.release_date.toString().slice(0, 4)})</span></h3>
            </a>
        </div>
    )
}

export default MovieCard