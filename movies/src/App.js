import { loeAndmed } from './kontrollerid/Andmed';
import './App.css';
import { useState } from 'react';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';




function App() {

  const [filmid, setFilmid] = useState([
    { 
     id: 798544,
     title: "Summer Ghost",
     kirjeldus: 'An urban legend says that lighting fireworks at an abandoned airfield will beckon the "summer ghost," a spirit that can answer any question. Three teenagers, Tomoya, Aoi, and Ryo, each have their own reason to show up one day. When a ghost named Ayane appears, she reveals she is only visible to those "who are about to touch their death." Compelled by the ghost and her message, Tomoya begins regularly visiting the airfield to uncover the true purpose of her visits.',
     aasta: "2021-11-12",
     poster: "/mMXaAvvSw24hYNchhCtCM5z6fhB.jpg",
     andmed: null
   },
   { 
    id: 25311,
    title: "Summer",
    kirjeldus: "Shaun and Daz are vibrant kids, wasted by their experience of education. All they have is friendship and Shaun's first love Katy. From the moment Shaun steps into our world he is bound to lose. Labeled as a violent bully he destroys himself and Daz with him. Shaun has twelve years to reflect on an intense summer of love, sex and loyalty. But Daz's imminent death forces Shaun to confront his past.",
    aasta: "2008-12-05",
    poster: "/oKkodOkWfw6A3G7C0mIurJtr0qv.jpg",
    andmed: null
  },
  { 
    id: 49149,
    title: "Summer",
    kirjeldus: "Mates emerge from latency into their sexual identities. Will and Leung are pals, searching the woods of Hampstead Heath for botanical material Leung needs for a school class. Along the way, they engage in horseplay, and Will disclosed that his girlfriend recently fellated him. As they walk on, they keep coming back to the subject of oral sex. Is it curiosity and braggadocio, or are they flirting with each other? Leung crosses a line and declares himself: how will Will react?",
    aasta: "2006-02-12",
    poster: "/e7SY2YxNxZyrVYfjkHHh0XZ4kna.jpg",
    andmed: null
  },

   ])

   const asendaMovieInfo = (asukohaIndex, movieInfo) => {
    const uuedAndmed = filmid.map((film, index) => {
      if (index !== asukohaIndex) {
        return film
      }

   const info = {
    title: movieInfo.original_title,
    kirjeldus: movieInfo.overview,
    aasta: movieInfo.release_date,
    poster: movieInfo.poster_path,
   }

   return {...film, andmed: info}
  })

    setFilmid(uuedAndmed)
}


  return (
    <>
    <div className="container-fluid p-5 bg-dark text-white text-center">
      <h1>Movie app</h1>
    </div>
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-sm-5'>
          <MovieList 
          filmid={filmid}
          />
        </div>
        <div className='col-sm-7'>
          <MovieDetails film={filmid}/>
        </div>

      </div>

    </div>
    </>
  );
}

export default App;
