import Form from './components/Form'
import Display from './components/Display'
import './App.css';
import React, {useState} from 'react';

function App() {
  const[todoList,setTodoList] = useState([]);
  const[todo,setTodo] = useState({
    text:"",
    checkbox:false
})
  return (
    <div className="App">
      <Form todoList={todoList} setTodoList={setTodoList} todo={todo} setTodo={setTodo}/>
      <Display todoList={todoList} setTodoList={setTodoList} todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
