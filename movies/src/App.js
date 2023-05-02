
import './App.css';
import { useEffect, useState } from 'react';
//import MovieList from './MovieList';
//import SearchBox from './SearchBox';
import MoviesList from './MoviesList';





function App() {

  const [movies, setMovies] = useState([])
  const [filter, setFilter] = useState('disco')
  

  const loadMovies = async (searchFilter) => {
    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=24c64ea903d3b9426c0b72f5af3d2813&language=en-US&query=${searchFilter}&page=1&include_adult=false`
    const result = await fetch(movieUrl)
    if (!result.ok) {
      console.log('Viga andmete lugemisel')
      setMovies([])
      return;
    }
    const loadedData = await result.json()
    console.log(loadedData)
    setMovies(loadedData.results)
  }
   /*const getMovieRequest = async (searchValue) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=24c64ea903d3b9426c0b72f5af3d2813&language=en-US&query=${searchValue}}&page=1&include_adult=false`
  
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
    setFilmid(responseJson.results)
      console.log(filmid)
  };
};

  useEffect(() => {
    getMovieRequest(searchValue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue] )*/

  return (
    <>
    <div className="container-fluid p-5 bg-dark text-white text-center">
      <h1>Movie app</h1>
    </div>
        <div className='filter-container'>
         <input
         value={filter}
         onChange={(event)=>setFilter(event.target.value)}
         />
        <button onClick={()=>loadMovies(filter)}>Otsi</button>
        </div>
          <div className='results'>
            <MoviesList 
            movies={movies}
            />
          </div>

        
    </>
  );
}

export default App;
