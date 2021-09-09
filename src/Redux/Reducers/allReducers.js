import {ADD_TODO_DATA,ADD_MODAL_STATUS,SET_TODO_DATA,
  EDIT_MODAL_STATUS,EDIT_TODO_DATA,DELETE_TODO_DATA,
  RESET_TODO, ADD_COMPLETE_TODO_DATA} from "../Actions/index";
const initialState = {
    todoData:[],
    completeTodoData:[],
    setTodo:{title:""},
    createdAtDate:localStorage.getItem("createdAtDate"),
    createdAtTime:localStorage.getItem("createdAtTime"),
    createdData:localStorage.getItem("createdData"),
    updatedAtDate:localStorage.getItem("updatedAtDate"),
    updatedAtTime:localStorage.getItem("updatedAtTime"),
    updatedData:localStorage.getItem("updatedData"),
    completedAtDate:localStorage.getItem("completedAtDate"),
    completedAtTime:localStorage.getItem("completedAtTime"),
    completedData:localStorage.getItem("completedData"),
    setAddModal:{status:false},
    setEditModal:{status:false},
    };
export default function reducer(state = initialState, action){
    console.log(action.payload)
    switch (action.type) {
        case ADD_TODO_DATA:
        return{
            ...state,
            todoData:[...state.todoData,action.payload]
        }
    case ADD_MODAL_STATUS:
        return {
            ...state,
            setAddModal:{...state.setAddModal,...action.payload},
        };
    
      case DELETE_TODO_DATA:
        return{
          ...state,
          todoData:[...state.todoData.filter((setTodo)=>setTodo.id!==action.payload)],
        }
        case ADD_COMPLETE_TODO_DATA:
          return{
            ...state,
            completeTodoData:[...state.completeTodoData,action.payload]
          }
        case EDIT_MODAL_STATUS:
          return{
              ...state,
              setEditModal:{...state.setEditModal,...action.payload}
            }
        case SET_TODO_DATA:
          return{
              ...state,
              setTodo:{...state.setTodo,...action.payload}
          }
        case RESET_TODO:
          return{
            ...state,
            setTodo:{}
          }
        case EDIT_TODO_DATA:
            return{
              ...state,
              todoData:state.todoData.map((todo)=>{
                if (todo.id === action.payload.id) return { ...todo, ...action.payload }
              return todo;
              })
              }
    default:
        return state;
    }
};
