import React, { Dispatch, useContext, useReducer } from 'react';
import { createContext } from 'react';

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




//상태를 위한 타입
type State = {
    id: number,
    text: string,
    isDone: boolean
}
//액션을 위한 타입
type Action = {type: "ADDTODO"; todo: State}
| {type: "TOGGLETODO"; id: number}
| {type: "DELTODO"; id: number}

//디스패스 위한 타입
type TodoDispatch = Dispatch<Action>

//Context 생성
const TodoStateContext = createContext<State[] | null>(null); //괄호안 null은 초기값
const TodoDispatchContext = createContext<TodoDispatch | null>(null);

//reducer함수
function reducer(state : State[], action: Action): State[]{
    switch(action.type){
        case "ADDTODO":
          return [
            ...state,
            action.todo  //!는 null과 undefiend가 오지 않는다는 의미 값이 무조건 온다x
          ];
        case "DELTODO":
          return state.filter(li=>li.id !== action.id);
        case "TOGGLETODO":
          return state.map(li=> li.id === action.id ? { 
            //인터페이스를 만들어주고 state는 array<datatype>이라고 지정
            ...li, isDone: !li.isDone}: li)
        default:
          return state;      
      }
}
/* interface TodoContextProps {
    children: React.ReactNode
} */ //인터페이스 안만들고 객체로 바로 넣음(인터페이스로 만들어도됨)

const TodoContext2 = ({children}:{children:React.ReactNode}) => {  //children : 타입지정
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <TodoStateContext.Provider value={state}>  
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
};

export default TodoContext2;


//state와 dispatch를 리턴해주는 훅
export function useTodoState(){
    const state = useContext(TodoStateContext)
    if(!state) throw new Error("유효하지 않습니다")
    return state;
}

export function useTodoDispatch() {
    const dispatch = useContext(TodoDispatchContext)
    if(!dispatch) throw new Error("유효하지 않습니다")
    return dispatch
}