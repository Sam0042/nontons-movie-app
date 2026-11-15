import CardsContainer from "../components/CardsContainer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

function Popular({ datas, API_KEY, favourites, setFavourites }) {
    return (
        <div>
            <Navbar favourites={favourites} />
            <Hero datas={datas} apiKey={API_KEY} setFavourites={setFavourites} favourites={favourites} />
            <CardsContainer datas={datas} setFavourites={setFavourites} favourites={favourites} />
        </div>
    )
}

export default Popular