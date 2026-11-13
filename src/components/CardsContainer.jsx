import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function CardsContainer({ datas }) {

    return (
        <div className="p-4 bg-black h-full">



            <p className="text-orange-700  font-bold mb-4 text-lg md:text-xl w-[92%] md:w-[80%] mx-auto">Now Playing</p>
            <div className=" grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
                {datas.map((data) => {
                    return (
                        <MovieCard data={data} key={data.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default CardsContainer