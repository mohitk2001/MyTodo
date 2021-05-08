import React from 'react'
import TodoItem from "./Components/TodoItem"
import Header from "./Components/Header"

function App() {
  return (
    <>
    <Header title="My Todos"/>
    
    <h1 className="text-center">My Todos List</h1>
    <TodoItem/>
    </>
  )
}

export default App

