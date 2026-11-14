import CardsContainer from "../components/CardsContainer"
import Navbar from "../components/Navbar"

function Favourites({ datas, favourites, setFavourites }) {
    return (
        <div>
            <Navbar favourites={favourites} />
            <div className="w-full h-vh text-center px-2  pt-10">
                {datas.length == 0 ?
                    <h1 className="text-white">You don't have any favourite movies yet, Choose a movie first.</h1>
                    :
                    <div>
                        {/* {console.log(datas)} */}
                        <h1 className="text-white">Your Favourite Movies</h1>
                        <CardsContainer datas={datas} favouritesPage={true} favourites={favourites} setFavourites={setFavourites} />
                    </div>}
            </div>
        </div>
    )
}

export default Favourites