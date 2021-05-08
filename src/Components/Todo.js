import React from 'react'

function Todo({todo,onDelete}) {
    return (
        <>
        <div className=" m-3">
            
           <h4 className="text-left" >{todo.job}</h4> 
           <h5 className="text-left">{todo.desc}</h5>
           <button className="btn btn-danger" onClick={()=>onDelete(todo)}>Delete</button>
           
        </div> 
        <hr></hr>         
        </>
    );
}

export default Todo
