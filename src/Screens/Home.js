import { useContext, useState } from "react"
import { StoreContext } from "../Providers/Store"

export default function Home() {

    const { movies, setMovies, numberMovie, setNumberMovie } = useContext(StoreContext)

    const [onUpdate, setOnUpdate]  = useState(false)

    const [titleUpdated, setTitleUpdated] = useState("")

    function deleteMovie(movies, itemId) {
        const index = movies.findIndex((element) => element.id === itemId)

        if (index > -1) {
            movies.splice(index, 1)
        }

        return movies

        
    }
    function updateMovie(movies, movie) {
        if(onUpdate) {
            setMovies(
                movies.map((element) => {
                    if (element.id === movie.id) {
                        return { ...element, title: titleUpdated}
                    }
                    return element
                })
            )
            setOnUpdate(false)
        } else {
            setOnUpdate(true)
        }
    }

    function keyPressed(event, movie) {
        if (event.key === "Enter") {
            updateMovie(movies, movie)
        }
    }

    return (
        <div>
            <h1 style={{ "fontWeight": "bold" }}>Movie list</h1>
            <div>
                {
                    movies.map((movie) => {
                        return (
                            <div className="flex py-10 flex-direction: row;">
                                <div className="bg-gray-800 py-5">
                                    {
                                        onUpdate ? (
                                            <input type="text" className="mx-3" value={titleUpdated} 
                                            onChange={(e) => setTitleUpdated(e.target.value)} 
                                            onKeyDown={(e) => keyPressed(e, movie) }/>
                                        ) : (
                                            <h2 className="text-white px-3">{movie.title}</h2>
                                        )
                                    }
                                    <h3 className="px-3 text-white ">{movie.category}</h3>
                                    <img src={movie.image} alt="movie" className="w-40 h-40"></img>
                                    <button className="px-3 py-5 text-red-700" onClick={() => {
                                        setMovies([...deleteMovie(movies, movie.id)])
                                        setNumberMovie(numberMovie - 1)
                                    }} >Delete</button>
                                    <button className="px-3 py-5 text-blue-700" onClick={() => {
                                        updateMovie(movies, movie)
                                    }} >Update</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}
