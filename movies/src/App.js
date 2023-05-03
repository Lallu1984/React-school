
import './App.css';
import { useState } from 'react';
import MoviesList from './MoviesList';
import MovieDescription from './MovieDescription';





function App() {

  const [movies, setMovies] = useState([])
  const [filter, setFilter] = useState('')
  const [openedMovies, setOpenedMovies] = useState('')


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
    setFilter('')
  }


  const clickChange = (index) => {
    const opened = movies[index];
    setOpenedMovies(opened);
  }

  return (
    <>
      <div className="container-header">
        <h1>Search movies app</h1>
      </div>
      <div className='filter-container'>
        <input
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          placeholder='Write movie name here'
        />
        <button onClick={() => loadMovies(filter)}>Search</button>
      </div>
      <div className='main-results'>
        <div className='results'>
          <h3>Movie list</h3>
          <MoviesList
            movies={movies}
            clickChange={clickChange}
          />
        </div>
        <div className='description-main'>
        <h3>Details</h3>
          <MovieDescription openedMovies={openedMovies} />
        </div>
      </div>
    </>
  );
}

export default App;
