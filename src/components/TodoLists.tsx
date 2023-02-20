import React from 'react';
import { dataType } from '../App';


interface todoProps {
    todos: dataType[]
}


const TodoLists = ({todos}: todoProps) => {
    return (
        <div>
           <ul>
                {todos.map(todo =><li key={todo.id}>{todo.text}</li>)}
            </ul> 
        </div>
    );
};

export default TodoLists;