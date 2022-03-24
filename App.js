import React from 'react';
import { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

// creating a static variable
const API_URL = 'http://www.omdbapi.com?apikey=4e896d0c';

const App = () => {

    const [movies, setMovies] = useState ([]);
    const [searchTerm, setSearchTerm] = useState ([]);
    
    const searchMovies = async (title) => {
     const response = await fetch(`${API_URL}&s=${title}`);
        // getting data from api
        const data = await response.json();
        setMovies(data.Search);
    }
useEffect(() => {
 searchMovies('After');

}, []);
    return (
     <div className = "app">
<h1>ChillFlix</h1>
<div className= "search">
<input
placeholder="Search for movies"
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
/>
<img 
    src={SearchIcon}
alt="search"
onClick={() => searchMovies(searchTerm)}
/>
</div>
{
movies?.length > 0
? (
<div className='container'>
{movies.map((movie) =>(<MovieCard movie={movie} />))}
</div>
) : (
<div className='empty'>
    <h2>No Movies Found</h2>
</div>
)}
</div>
);
}

export default App;
