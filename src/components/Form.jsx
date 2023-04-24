import React from 'react'

const Form = (props) => {
    const {todoList,setTodoList} = props
    const {todo, setTodo} = props
    

    const changeHandler = (e) => {
        
        setTodo({
            ...todo,
            [e.target.name]:e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (todo.text.length === 0){
            return;
        }
        setTodoList([...todoList,todo]);
        setTodo({
            text:"",
            checkbox:false
        });
        console.log(todoList)
    }
return (
    <div>
        <form onSubmit={(e) => submitHandler(e)}>
            <label htmlFor="todo" className="form-label">Add Task to your To-Do List: </label>
            <input style={{margin:'10px'}} className='form-control' name="text" type="text" value={todo.text} onChange={(e) => changeHandler(e)}/>
            <button type="submit" className="btn btn-primary" >Add</button>
        </form>
    </div>
  )
}

export default Form