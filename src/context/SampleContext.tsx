import React, { Children, Dispatch, useContext, useReducer } from 'react';
import { createContext } from 'react';

//필요한 타입 선언
type Color = "red" | "pink" | "yellow";
//상태를 위한 타입
type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
}
//액션을 위한 타입
type Action = {type: "SET_COUNT"; count: number}
| {type: "SET_TEXT"; text: string}
| {type: "SET_COLOR"; color: Color}
| {type: "SET_GOOD"}

//디스패치를 위한 타입(Dispatch를 리액트에서 불러올수 있음)
// 액션들의 타입을 Dispatch 제네릭으로 지정
type SampleDispatch = Dispatch<Action>;

//context 생성하기
const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

//리듀서  ----  매개변수 state와 action 타입 지정, 리턴하는 타입을 지정
function reducer(state: State, action:Action): State {
    switch(action.type) {
        case "SET_COUNT":
            return {
                ...state,
                count: action.count
            };
        case "SET_COLOR":
        return {
            ...state,
            color: action.color
        };
        case "SET_TEXT":
        return {
            ...state,
            text: action.text
        };
        case "SET_GOOD":
        return {
            ...state,
            isGood: !state.isGood
        };
        default:
            return state    
    }
}
const SampleContext = ({children}:{children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        color: "pink",
        text: "typescript",
        isGood: true
    })
    return (
        <SampleStateContext.Provider value={state}>
            <SampleDispatchContext.Provider value={dispatch}>
                       {children}         
            </SampleDispatchContext.Provider>
        </SampleStateContext.Provider>
    );
};

export default SampleContext;

//state 와 dispatch 를 사용하기 위한 커스텀 hooks
export function useSampleState(){
    const state =useContext(SampleStateContext)
    return state;
}
export function useSampleDispatch(){
    const dispatch = useContext(SampleDispatchContext)
    if(!dispatch) throw new Error("유효하지 않습니다") 
    // 유효하지 않을때 에러 발생
    return dispatch
}