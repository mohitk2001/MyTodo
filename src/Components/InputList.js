import React, { useState } from 'react'

export let userTodo=React.createContext()

function InputList({todos,setTodo}) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    
    const submit=(e)=>{
        e.preventDefault()
        if(!title || !desc)
        {
            alert("Title and Desc cannot be empty")
        }
        else{
            let sno=1
            if(todos.length===0){
                sno=0
            }
            else{
                sno=todos[todos.length-1].sno + 1
               
            }  
                      
            const mytodoin={
            sno:sno,
            job:title,
            desc:desc
            }
            setTodo([...todos,mytodoin])//Adding todo by doing this 
            
                        
        }           
    }
    
    return (
        <>
        <form onSubmit={submit}>
            <div className="form-group p-3">
                <h2 >Add to Notes</h2>
                <label htmlFor="title">Todo Title:</label>
                <input type="text" className="form-control"
                id="title" name="title" value={title} 
                onChange={e=>setTitle(e.target.value)}/>
            </div>
            <div className="form-group p-3">
                <label htmlFor="desc"> Description:</label>
                <input type="text" className="form-control" 
                id="desc" name="desc" value={desc} 
                onChange={e=>setDesc(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-success ml-3">Submit</button>
        </form>
        
        </>
    )

}

export default InputList


