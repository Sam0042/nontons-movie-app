import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function CardsContainer({ datas, setFavourites, favouritesPage, favourites }) {

    return (
        <div className="p-4 bg-black h-full">



            <p className="text-orange-700  font-bold mb-4 text-lg md:text-xl w-[92%] md:w-[80%] mx-auto">{
                location.pathname === '/' ? 'Now Playing' :
                    location.pathname === '/popular' ? 'Popular Movies' :
                        location.pathname === '/top-rated' ? 'Top Rated' :
                            location.pathname === '/up-coming' ? 'Up Coming' : ''
            }</p>
            <div className={`grid gap-2 ${favouritesPage ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'
                : 'grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8'}`}>
                {datas.map((data) => {
                    return (
                        <MovieCard data={data} key={data.id} setFavourites={setFavourites} favourites={favourites} />
                    )
                })}
            </div>
        </div>
    )
}

export default CardsContainer