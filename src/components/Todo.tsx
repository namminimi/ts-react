import React, { useState } from 'react';


const Todo = () => {
    const [todoState, setTodoState] = useState<string>("")

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e)
        setTodoState(e.target.value)
    }
    return (
        <div>
            <input name="name" value={todoState} onChange={onChange}/>
            <button>등록</button>
        </div>
    );
};

export default Todo;