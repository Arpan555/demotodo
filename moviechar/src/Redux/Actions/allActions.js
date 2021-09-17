import { FETCH_MOVIES,FETCH_CHARACTERS, FETCH_MOVIE_DETAILS,FETCH_MOVIE_QUOTE, FETCH_CHAR_QUOTE, FETCH_CHAR_DETAILS } from "./index";

export const fetchMovies=(data)=>{
    return{
        type:FETCH_MOVIES,
        payload:data
    }
}
export const fetchCharacters=(data)=>{
    return{
        type:FETCH_CHARACTERS,
        payload:data
    }
}
export const fetchMovieDetails=(data)=>{
    return{
        type:FETCH_MOVIE_DETAILS,
        payload:data
    }
}
export const fetchMovieQuote=(data)=>{
    return{
        type:FETCH_MOVIE_QUOTE,
        payload:data
    }
}
export const fetchCharacterDetails=(data)=>{
    return{
        type:FETCH_CHAR_DETAILS,
        payload:data
    }
}
export const fetchCharQuote=(data)=>{
    return{
        type:FETCH_CHAR_QUOTE,
        payload:data
    }
}