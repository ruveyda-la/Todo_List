import React from 'react'

const Display = (props) => {
    const {todoList,setTodoList} = props;

    

    const changeHandler = (index) => {
        const changeTodoList = todoList.map((item,idx) => {
            if(idx === index){
                return {...item,checkbox:!item.checkbox}
            }
            else{
                return item
            }
        }
        )
        setTodoList(changeTodoList);
    }
    const deleteHandler = (i) => {
        const filteredTodoList = todoList.filter((item,idx) => {
            return idx!== i;
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
                <button className="btn btn-danger" type="submit"onSubmit={(e) => deleteHandler(index)}>Delete</button>
            </div>
        
            ))
        }

    </div>
  )
}

export default Display