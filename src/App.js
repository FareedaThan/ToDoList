import React, { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'

// initiate data in to do list
const initList = [
  {
    id: Math.floor(Math.random() * 1000),
    task: 'Going out',
  },
  {
    id: Math.floor(Math.random() * 1000),
    task: 'Pay bills',
  },
]

function App() {
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [tasks, setNewTask] = useState(initList)

  // add task to to do list
  const addTask = (e) => {
    e.preventDefault()

    setNewTask([
      ...tasks,
      {
        task: newTaskTitle,
      },
    ])

    setNewTaskTitle('')
  }

  // remove task from to do list
  const removeTask = (index) => {
    const newTodo = [...tasks]
    newTodo.splice(index, 1)
    setNewTask(newTodo)
  }

  return (
    <div className="App">
      <div className="w-full bg-red-800 py-5">
        <h1 className="text-2xl font-semibold text-zinc-50">My To Do List</h1>
        <form onSubmit={addTask}>
          <input
            className="w-1/2 mt-3 pl-3 py-1"
            placeholder="Title..."
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            required
          />
          <input className="w-1/12 ml-1 py-1 bg-slate-200" type="submit" value="Add" />
        </form>
      </div>

      {tasks.map((list, index) => {
        return <TodoList key={list.id} index={index} list={list} removeTask={removeTask} />
      })}
    </div>
  )
}

export default App
