import { useState, createContext, useContext, useEffect } from "react";

const MovieContext = createContext()
export const useMovieContext = () => useContext(MovieContext)
export function MovieProvider({ children }) {
    const [favourites, setFavourites] = useState([])

    return (
        <MovieContext.Provider>
            {children}
        </MovieContext.Provider>
    )
}