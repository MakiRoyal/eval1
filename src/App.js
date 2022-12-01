import './App.css';

import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';

import { StoreContext, StoreProvider } from "./Providers/Store"
import { useContext } from 'react';

import HomeScreen from './Screens/Home';
import AddMovieScreen from './Screens/AddMovie'


function App() {    

    return (
        <StoreProvider>
            <BrowserRouter>
                <Navigation />
                
                <Routes>
                    <Route path='/' element={<HomeScreen />}></Route>
                    <Route path='/addMovie' element={<AddMovieScreen />}></Route>
                </Routes>

            </BrowserRouter>
        </StoreProvider>
    )

}

function Navigation () {
    const { numberMovie } = useContext(StoreContext)

    return (<nav>
        <ul>
            <li> <Link to="/" className="text-blue underline"> Home </Link> </li>
            <li> <Link to="/addMovie" className="text-blue underline"> Add Movie </Link> </li>
            <li>Number of movie: {numberMovie}</li>
        </ul>
    </nav>)
}

export default App;
