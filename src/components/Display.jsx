import React from 'react'

const Display = (props) => {
    const {todoList,setTodoList} = props;

    

    const changeHandler = (e,item,index) => {
        const changeTodoList = todoList.map((item,idx) => {
            if(idx === index){
                const newTodo = {...item, checkbox:!item.checkbox};
                return newTodo;
            }
            else{
                return item;
            }
        }
        )
        setTodoList(changeTodoList);
    }
    const deleteHandler = (e,i) => {
        const filteredTodoList = todoList.filter((item,idx) => {
            return idx !== i;
        })
        setTodoList(filteredTodoList)
         
    }



return (
    <div>   
        {
        
        todoList.map((item,index) => (
            <div key={index} style={{display:"flex", alignContent:"center",justifyContent:"space-around",margin:"10px"}}>
                <input className="form-check-input" type="checkbox" checked={item.checkbox}  onChange={(e) => changeHandler(e,item,index)}/>
                {(item.checkbox) ?
                <p style={{textDecoration:'line-through'}}>{item.text}</p>
                :(<p>{item.text}</p>)}
                <button className="btn btn-danger" type="submit"onClick={(e) => deleteHandler(e,index)}>Delete</button>
            </div>
        
            ))
        }

    </div>
  )
}

export default Display