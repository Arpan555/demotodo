import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { requestFetchMovies } from '../Thunk'
import { Link,useHistory } from 'react-router-dom'
import "./Style.css"
const Movies = () => {
    const[page,setPage]=useState(1)
    const history=useHistory()
    const dispatch = useDispatch()
    const movieData=useSelector(state=>state.reducer.movies)
    const total=useSelector(state=>state.reducer.totalMov)
    useEffect(() => {
        dispatch(requestFetchMovies(page))
    }, [dispatch,page])
    const handlePrevious= ()=>{
        setPage(page-1)
        
    }
    const handleNext= ()=>{
        setPage(page+1)
        
    }
    return (
        <div>
            <center>
            <input type="button" className="btn btn-primary" value="Back To Home" onClick={()=>history.push("/")}/>
            <h1>Movie</h1>
            {movieData &&movieData.length===0 ? <p>...loading</p> : movieData.map(data=>
                <>
                <div className="movie-box">
                <Link to={`/movies/${data._id}`}>
                <h3>Movie:{data.name}</h3>
                <h3>ID:{data._id}</h3>
                </Link>
                </div> 
                </>)}
                <input disabled={page<=1} type="button" value="Previous" className="btn btn-dark m-5" onClick={()=>handlePrevious()}/>
                <input disabled={page>=Math.ceil(total/5)} type="button" value="Next" className="btn btn-dark" onClick={()=>handleNext()}/>
                   

            </center>
        </div>
    )
}

export default Movies

