import { createContext, useEffect, useState } from "react";

import { getMovies } from "../Movies"

export const StoreContext = createContext()



export function StoreProvider(props) {

    const [movies, setMovies] = useState([])
    const [numberMovie, setNumberMovie] = useState([])

    useEffect(() => {
        
        getMovies().then((res) => {
            setMovies(res)
            setNumberMovie(res.length)
        })
        
    }, [])

    return (
        <StoreContext.Provider value={{
            movies: movies,
            setMovies: setMovies,
            numberMovie: numberMovie,
            setNumberMovie: setNumberMovie
        }}>
            {props.children}
        </StoreContext.Provider>
    )

}