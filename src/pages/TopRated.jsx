import CardsContainer from "../components/CardsContainer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

function TopRated({ datas, API_KEY, setFavourites, favourites }) {
    return (
        <div>
            <Navbar favourites={favourites} />
            <Hero datas={datas} apiKey={API_KEY} />
            <CardsContainer datas={datas} setFavourites={setFavourites} favourites={favourites} />
        </div>
    )
}

export default TopRated