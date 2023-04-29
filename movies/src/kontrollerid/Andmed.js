
async function loeAndmed() {
    const paringuUrl = `https://api.themoviedb.org/3/search/movie?api_key=24c64ea903d3b9426c0b72f5af3d2813&language=en-US&query=summer&page=1&include_adult=false`
    const response = await fetch(paringuUrl)
    const andmed = await response.json()
    console.log(andmed.search)
    return andmed.search
}

export {
    loeAndmed
}