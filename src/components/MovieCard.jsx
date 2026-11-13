import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function MovieCard({ data }) {
    function handleClick(e) {
        e.preventDefault()
        console.log('konz')
    }
    return (
        <div className="p-1 ">
            <a href="#" onClick={(e) => { handleClick(e) }}>
                <div className="relative">
                    <img src={`https://image.tmdb.org/t/p/w500${data.poster_path} `} alt="" className="rounded-xl h-full w-full mask-b-from-20% mask-b-to-100%" />
                    <small className="absolute pb-3 pl-1 bottom-0 left-0 text-yellow-500 text-[0.7rem]"><FontAwesomeIcon icon={faStar} /><span className="font-bold"> {data.vote_average.toString().slice(0, 3)}</span></small>
                </div>
                <h3 className="text-white text-[0.7rem] truncate">{data.title} <span>({data.release_date.toString().slice(0, 4)})</span></h3>
            </a>
        </div>
    )
}

export default MovieCard