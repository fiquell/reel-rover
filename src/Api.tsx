import axios from "axios"

const URL_API = 'https://api.jikan.moe/v4/top/anime'

export const getMovies = async () =>{
    const movies = await axios.get(URL_API)
    console.log({getMovies:movies})
}
export const searchMovie = async (q) =>{
    const search = await fetch(q)
    return
}

