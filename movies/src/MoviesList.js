
const img_api = "https://image.tmdb.org/t/p/w500/"

function MovieList({movies, clickChange}) {
    return (
        movies.map((movie, index) => {
            return (
        
                <div className="onemovie"
                    key={movie.id}
                    onClick={() => clickChange(index)}
                >
                    <h6>{movie.title}</h6>
                    -------------------------------------------------
                    <br />
                    
                    <img src={img_api + movie.poster_path} alt={movie.title} />
                </div>
            )
            })
    )
        }
            
    

export default MovieList;