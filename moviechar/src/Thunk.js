import axios from "axios"
import { fetchCharacters, fetchMovies,fetchMovieDetails,fetchMovieQuote,fetchCharQuote,fetchCharacterDetails } from "./Redux/Actions/allActions"
const request=axios.create({
    baseURL:"https://the-one-api.dev/v2",
    headers:{
        "Content-type":"application/json",
        "Authorization":"Bearer po4cbd6v41tXxZTW4fP-"
    }
})
export const requestFetchMovies=(state)=>{
    return async(dispatch)=>{
        try {
            const movieData=await request.get(`/movie?page=${state}&limit=5`)
            dispatch(fetchMovies(movieData.data))
        } catch (error) {
            console.log(error)
        }
    }
}
export const requestFetchCharacters=(state)=>{
    return async(dispatch)=>{
        try {
            const characterData=await request.get(`/character?page=${state}&limit=5`)
            dispatch(fetchCharacters(characterData.data))
            
        } catch (error) {
            console.log(error)
        }
    }
}
export const requestMovieDetails=(id)=>{
    return async(dispatch)=>{
        
        try {
            const movieDetails=await request.get(`/movie/${id}`)
            dispatch(fetchMovieDetails(movieDetails.data))
        } catch (error) {
            console.log(error)
        }
    }
}
export const requestMovieQuotes=(id)=>{
    return async(dispatch)=>{
        try {
            const quoteData=await request.get(`/movie/${id}/quote`)
            dispatch(fetchMovieQuote(quoteData.data))
        } catch (error) {
            
        }
    }
}
export const requestCharacterDetails=(id)=>{
    return async(dispatch)=>{
        
        try {
            const characterDetails=await request.get(`/character/${id}`)
            dispatch(fetchCharacterDetails(characterDetails.data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const requestFetchCharactersQuote=(id)=>{
    return async(dispatch)=>{
        try {
            const quoteData=await request.get(`/character/${id}/quote`)
            dispatch(fetchCharQuote(quoteData.data))
        } catch (error) {
            console.log(id)
            
        }
    }
}