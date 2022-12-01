import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"

import { StoreContext } from "../Providers/Store"

import { getMovies } from "../Movies"

export default function AddMovie() {

    const { movies, setMovies, numberMovie, setNumberMovie} = useContext(StoreContext)

    function movieCreated() {
        const title = document.querySelector("#title").value
        const category = document.querySelector("#category").value
        const image = document.querySelector("#image").value

        const newMovie = {
            id: movies.length + 1,
            title: title,
            category: category,
            image: image
        }

        setMovies([...movies, newMovie])
        alert("A new movie has been added")
    }

    return (
    
    <div>
        <h1 className="text-3xl font-extrabold flex justify-center py-10">Add a movie !</h1>
        <div className="flex flex-col justify-center">
            <input type="text" placeholder="Name" id="title" className="py-10 px-10 h-10 w-1/4 border border-solid border-black flex justify-center ml-80 rounded-sm"></input>
            <input type="text" placeholder="Category" id="category" className="py-10 px-10 h-10 w-1/4 border border-solid border-black mt-10 ml-80 rounded-sm"></input>
            <input type="text" placeholder="URL" id="image" className="py-10 px-10 h-10 w-1/4 border border-solid border-black mt-10 ml-80 rounded-sm"></input>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 ml-80" 
            onClick={() => {
                movieCreated()
                setNumberMovie(numberMovie + 1)
            }}>Add</button>
        </div>
    </div>)

}