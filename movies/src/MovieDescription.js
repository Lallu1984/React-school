function MovieDescription({ openedMovies }) {
    if (openedMovies === "") {
        return null;
    }
    return (
        <div className="description">
            <div className="title">
                <h1> 
                    Title: {openedMovies.title} 
                </h1>
                <br /> 
                <br />
            </div>
            <div className="release-date">
                <h3>
                    Release date: {openedMovies.release_date} 
                </h3>
            </div>
            <div className="overview">
                <h4>
                    Overview: {openedMovies.overview}
                </h4>
            </div>
                <img src={`https://image.tmdb.org/t/p/w500/${openedMovies.poster_path}`} alt={openedMovies.title} />
        </div>
    )
}

export default MovieDescription