import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Counter from './components/Counter';
import MyForm from './components/MyForm';
import CounterReducer from './components/CounterReducer';


function App() {
  const onClick = (name: string) =>{
    console.log(`${name}hi`)
  }
  const onFormSubmit = (form:{name: string, desc: string}) => {
    console.log(form)
  }
  return (
    <div className="App">
      <Hello name="green" message="안녕하세요" onClick={onClick}/>
 {/*      <Hello name="blue"/> */}
      <Counter/>
      <MyForm onFormSubmit={onFormSubmit}/>
      <CounterReducer/>
    </div>
  );
}

export default App;
