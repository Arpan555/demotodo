import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { requestFetchCharacters } from '../Thunk'
import { useHistory ,Link} from 'react-router-dom'
const Characters = () => {
    const dispatch=useDispatch()
    const [page,setPage]=useState(1)
    const history=useHistory()
    const total=useSelector(state=>state.reducer.totalChar)
    const characterData=useSelector(state=>state.reducer.characters)
    useEffect(() => {
       dispatch(requestFetchCharacters(page))
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
            
                <h1>characters</h1>
                {characterData && characterData.length===0 ? <p>...loading</p> : characterData.map(data=>
                  <> <div className="movie-box">
                      <Link to={`/characters/${data._id}`}>
                      <h1>Name:{data.name}</h1>
                      </Link>
                      </div> 
                    </>)}
                    <input disabled={page<=1} type="button" value="Previous" className="btn btn-dark m-5" onClick={()=>handlePrevious()}/>

                    <input disabled={page>=Math.ceil(total/5)} type="button" value="Next" className="btn btn-dark" onClick={()=>handleNext()}/>
                   
            </center>
        </div>
    )
}

export default Characters
