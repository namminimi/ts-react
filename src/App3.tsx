import React from 'react';
import TodoInput from './components/TodoInput';
import TodoLists2 from './components/TodoLists2';
import TodoContext2 from './context/TodoContext2';

const App3 = () => {
    return (
        <div>
            <TodoContext2>
                <TodoInput/>
                <TodoLists2/>
            </TodoContext2>
        </div>
    );
};

export default App3;