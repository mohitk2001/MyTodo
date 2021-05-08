import React, { useState,useEffect } from 'react'
import Todo from "./Todo"
import InputList  from "./InputList"

function TodoItem() {

    
    let items=[]
    
    const [list, setTodos] = useState(items)
    useEffect(() => {
        console.log(list)
      
        
    }, [list])
    const onDelete = (todo) => {
        console.log("clicked", todo)
        //Deleting todo by doing this
        setTodos(list.filter((e) => {
            console.log(e !== todo)

            return e !== todo

        }
        ))

    }
    const msg=<h3 className="text-center">{"No Todos to display"}</h3>
    return (
        <>
        <InputList todos={list} setTodo={setTodos} />
        {
            list.length=== 0 ? msg:
            list.map((todo) => {
                return <Todo todo={todo}  onDelete={onDelete} key={todo.sno}/>
            })
        }
        
        </>
    );
}


export default TodoItem
