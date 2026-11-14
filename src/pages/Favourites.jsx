import CardsContainer from "../components/CardsContainer"
import Navbar from "../components/Navbar"

function Favourites({ datas, favourites }) {
    return (
        <div>
            <Navbar favourites={favourites} />
            <div className="w-full h-vh text-center px-2  pt-10">
                {datas ?
                    <div>
                        {/* {console.log(datas)} */}
                        <h1 className="text-white">Your Favourite Movies</h1>
                        <CardsContainer datas={datas} favouritesPage={true} favourites={favourites} />
                    </div>
                    :
                    <h1 className="text-white">You don't have any favourite movies yet, Choose a movies first.</h1>}
            </div>
        </div>
    )
}

export default Favourites