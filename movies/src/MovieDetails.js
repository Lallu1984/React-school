function MovieDetails({film}) {
    if (film.andmed == null) {
        return <h3>Laen andmed ...</h3>
    }


    return (
        <>
        <h2>
            Filmi tiitel: {film.title}
        </h2>
        <p>Filmi kirjeldus: {film.andmed.kirjeldus}</p>
        <p>Valmimis kuupäev: {film.andmed.aasta}</p>
        {film.andmed.poster}
        
        </>
    )

    }
    export default MovieDetails
