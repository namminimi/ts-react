import React from 'react';
import { useTodoDispatch, useTodoState } from '../context/TodoContext2';

const TodoLists2 = () => {
    const state = useTodoState()//useContext()
    const dispatch = useTodoDispatch()
    const onDelTodo = (id:number) => {
        dispatch({type: "DELTODO", id:id})
    }
    const onToggleTodo = (id: number) => {
        dispatch({type: "TOGGLETODO", id:id})
    }
    return (
        <div>
            <ul>
                {state.map(todo=><li key={todo.id} style={{background: todo.isDone ? "yellow" : undefined}}>
                    <span onClick={()=>{onToggleTodo(todo.id)}}>{todo.text}</span>
                    <button onClick={()=>{onDelTodo(todo.id)}}>삭제</button></li>)}
            </ul>
        </div>
    );
};

export default TodoLists2;