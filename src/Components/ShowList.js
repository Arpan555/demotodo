import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import {Card} from "react-bootstrap";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";
import {setAddTodoModalStatus,setTodoData,setEditTodoModalStatus,deleteTodoData
  ,addCompleteTodoData} from "../Redux/Actions/allActions";
import "./Style.css"
export default function ShowList() {
  // const [stateSelect, setStateSelect] = useState([]);
  const addModalStatus=useSelector(state=>state.reducer.setAddModal);
  const editModalStatus=useSelector(state=>state.reducer.setEditModal);
  const data=useSelector(state=>state.reducer.todoData)
  const completeData=useSelector(state=>state.reducer.completeTodoData)
  const date=useSelector(state=>state.reducer.createdAtDate)
  const time=useSelector(state=>state.reducer.createdAtTime)
  const da=useSelector(state=>state.reducer.createdData)
  console.log(da,date,time)
  const dispatch=useDispatch();
  const addTodoModal=()=>{
    dispatch(setAddTodoModalStatus({status:true}));
  };
  const editTodoModal=(todo)=>{
    dispatch(setTodoData(todo));
    dispatch(setEditTodoModalStatus({status:true}));
  };
const deleteData=(todo)=>{
    dispatch(deleteTodoData(todo.id))
}
const addCompleteData=(todo)=>{
  dispatch(addCompleteTodoData(todo))
  dispatch(deleteTodoData(todo.id))
}
// const deleteDataByIds = () => {
//   let arrayids = [];
//   stateSelect.forEach(d => {
//     if (d.select) {
//       arrayids.push(d.id);
//     }
//   });

return (
    <div style={{ textAlign:"left"}}>
        {addModalStatus.status?<AddTodo/>:""}
        {editModalStatus.status?<EditTodo/>:""}
      <h1 style={{ textAlign:"center"}}>
        <Button variant="primary" onClick={() => addTodoModal()}>
          Add New Todo
        </Button>
      </h1>
      
      <div>
        <h2>Todo</h2>
        {data.map((todo)=>
          <Card style={{ width: '15rem' , height: "auto" , margin:"15px"}}>
            <Card.Body>
              <Card.Title onClick={()=> editTodoModal(todo) } >Title:-{todo.title}</Card.Title>
                <Card.Text>Desc:-{todo.desc}</Card.Text>
                {/* <input
                type="checkbox"
                onChange={((e) => {
                  let value = e.target.checked;
                  setStateSelect(
                    stateSelect.map(d => {
                      d.select = value;
                      return d;
                    })
                  );
                })}
              /> */}
                <br/>
            </Card.Body>
            <Button variant="primary-sm" onClick={()=> deleteData(todo)}>Delete</Button>
            <Button variant="primary-sm" className="mx-2" onClick={()=> addCompleteData(todo) }>Complete</Button>
          </Card>)}
      </div>
      
      {/* <Button variant="primary" onClick={()=>deleteDataByIds()}>Delete</Button> */}
      
      
      <div>
        <hr/>
        <h2>Completed </h2>
        {completeData.map((todo)=>
          <Card style={{ width: '15rem' , height: "auto" , margin:"15px"}}>
            <Card.Body>
              <Card.Title>Title:-{todo.title}</Card.Title>
                <Card.Text>Desc:-{todo.desc}</Card.Text>
              </Card.Body>
          </Card>)}
      </div>
    </div>
  );
  }
