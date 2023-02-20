import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoLists from './components/TodoLists';
import Todo from './components/Todo';


const initialState = [
  {
    id: 1,
    text: "이력서, 자소서 쓰기",
    isDone: false
  },
  {
    id: 2,
    text: "이력서, 자소서 쓰기",
    isDone: false
  },
  {
    id: 3,
    text: "이력서, 자소서 쓰기",
    isDone: false
  }
]
type Action = "ADDTODO"|  "DELTODO"| "TOGGLETODO"
interface actionType {
  type: Action;
  todo?: dataType;
  id? : number;
}
export interface dataType {
  id: number;
  text: string;
  isDone: boolean;
}
function reducer(state: dataType[], action: actionType): dataType[] {
  switch(action.type){
    case "ADDTODO":
      return [
        ...state,
        action.todo!  //!는 null과 undefiend가 오지 않는다는 의미 값이 무조건 온다
      ];
    case "DELTODO":
      return (state as Array<dataType>).filter(li=>li.id !== action.id);
    case "TOGGLETODO":
      return (state as Array<dataType>).map(li=> li.id === action.id ? { 
        //인터페이스를 만들어주고 state는 array<datatype>이라고 지정
        ...li, isDone: !li.isDone}: li)
    default:
      return state;      
  }
}

function App() {
  const [todos, dispatch] =  useReducer(reducer, initialState)
  console.log(todos)
  const onAdd = () => {
    dispatch({
      type: "ADDTODO"
    })
  }
  return (
    <div className="App">
      <Todo />
      <TodoLists todos={todos}/>
    </div>
  );
}

export default App;
