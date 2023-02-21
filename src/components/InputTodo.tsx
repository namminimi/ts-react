import React, { useRef, useState } from 'react';
import { dataType } from '../App';

interface InputProps {
    onAdd: (todo:dataType) => void
}

const InputTodo = ({onAdd}: InputProps) => {
    const [todoState, setTodoState] = useState("")

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e)
        setTodoState(e.target.value)
    }
    const todoid = useRef(4) //객체를 리턴해줌  {current : 4}
    const onClick = () =>{
        onAdd({
            id: todoid.current,
            text: todoState,
            isDone: false
        })
        setTodoState("")
        todoid.current++;
    }
    return (
        <div>
            <input name="name" value={todoState} onChange={onChange}/>
            <button onClick={onClick}>등록</button>
        </div>
    );
};

export default InputTodo;