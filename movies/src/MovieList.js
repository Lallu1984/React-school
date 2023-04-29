function MovieList({filmid}) {
    return (
        filmid.map((film, id) => {
            return (
                <div>
                    {film.title}
                </div>
            )
        })
    )
}

export default MovieList