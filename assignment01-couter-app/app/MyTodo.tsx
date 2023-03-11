"use client";
import {useState} from "react";


export default function myTodo(){
    const [todo,SetTodo] = useState('');
    const [todoList, SetTodos] = useState([
    {todoText:"Name: Saud Ahmed",completed:true},
    {todoText:"Roll No: PIAIC188121",completed:true},
    {todoText:"Batch-37 BCC Online",completed:false}
]);
const onChangeHandler = (onClickTodo:any)=>{

    console.log(onClickTodo);

    const newTodos = todoList.map((todo)=>{
        console.log(todo);
        if(todo.todoText == onClickTodo.todoText){
            todo.completed = !todo.completed;      
      }
      return todo;
    });
    console.log(newTodos);
    SetTodos(newTodos);
};

    const addTodo = ()=>{
        const newTodo = {todoText: todo, completed:false};
        const newTodoList = [...todoList, newTodo];
        SetTodos(newTodoList);
        SetTodo("");
        
    };

    const deleteTodo = (onClickElem:any)=>{
       const newTodos =  todoList.filter((todos:any)=>{
            if( todos.todoText === onClickElem.todoText) return false;
            return true;
                
        });

        console.log("it's old todo List",todoList,"it's my new TodoList",newTodos);
        SetTodos(newTodos);
        
    };


    return (
        <>
        <h1 style={{color:"purple", fontFamily:"sans-serif", fontSize:"35px"}}>My Awesome Todo App</h1>
        <input style={{padding:"5px 0",fontSize:"15px"}} placeholder="add todo" value={todo} onChange={(e)=>{
            SetTodo(e.target.value);
        }} /><button style={{padding:"6px", backgroundColor:"yellow"}} onClick={addTodo}>Add</button>
        <ul>
            {
                todoList.map((item)=>{
                    return <li style={{color:item.completed===true? "green":"red",fontStyle:"italic",listStyle:"none",fontSize:"19px", margin:"10px 0"} } key={item.todoText}>
                        
                        <input type={"checkbox"} checked={item.completed} onChange={()=>{onChangeHandler(item)}}/>
                        {item.todoText}
                        <button style={{margin:"0 5px", backgroundColor:"orange", padding:"5px", borderRadius:"5px"}} onClick={()=>{deleteTodo(item)}}>Delete</button>
                    </li>
                })
            }
        </ul>
       
        </>
    )
}