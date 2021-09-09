import {
    ADD_TODO_DATA,
    ADD_MODAL_STATUS,
    SET_TODO_DATA,
    EDIT_MODAL_STATUS,
    EDIT_TODO_DATA,
    DELETE_TODO_DATA,
    ADD_COMPLETE_TODO_DATA,
    RESET_TODO,
     } from "./index";
const today=new Date()  
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
const time = today.getHours() + ':' + today.getMinutes();
export const addTodoData=(data)=>{
      console.log(data)
      localStorage.setItem("createdAtDate",date)
      localStorage.setItem("createdAtTime",time)
      localStorage.setItem("createdData",data)
      return{
          type:ADD_TODO_DATA,
          payload:data
      }
  }
export const setAddTodoModalStatus=(status)=>{
    return{
    type: ADD_MODAL_STATUS,
    payload: status,
    }
  };
  export const deleteTodoData=(data)=>{
    return{
      type:DELETE_TODO_DATA,
      payload:data
    }
  }
  export const addCompleteTodoData=(data)=>{
    localStorage.setItem("completedAtDate",date)
    localStorage.setItem("completedAtTime",time)
    localStorage.setItem("completedData",data)
    return{
      type:ADD_COMPLETE_TODO_DATA,
      payload:data
    }
  }
  export const setEditTodoModalStatus=(status)=>{
    return{
      type:EDIT_MODAL_STATUS,
      payload:status
    }
  }
  export const setTodoData=(data)=>{
   return{
     type:SET_TODO_DATA,
     payload:data
   }
}
export const editTodoData=(data)=>{
  localStorage.setItem("updatedAtDate",date)
  localStorage.setItem("updatedAtTime",time)
  localStorage.setItem("updatedData",data)
  
  return{
    type:EDIT_TODO_DATA,
    payload:data
  }
}
export const resetTodo=()=>{
  return{
    type:RESET_TODO
  }
}
