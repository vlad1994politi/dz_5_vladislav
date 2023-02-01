

import { useContext, useState } from 'react'
import { Context } from '../App'
import classes from './components.module.css'

const TodoCard = ({ todo, editTodo, deleteTodo, completedOnChange }) => {

  const { setValue } = useContext(Context)

  return (
    <div className={classes.todoCard} style={ todo.completed ? { border: '1px solid green'} : { border: '1px solid black'} }>
      <div className={classes.flex} onClick={() => editTodo(todo)}>
        <h3>{todo.title}</h3>
        <h3>{todo.description}</h3>
      </div>
      <div className={classes.flex}>
        <h3 onClick={() => setValue(prev => prev + 1)}>{todo.date.length > 30 ? todo.date.slice(0, 30) + '...' : todo.date}</h3>
        <input name='checkbox' type={'checkbox'} checked={todo.completed} onChange={(e) => {
          completedOnChange(todo.date)
        }}/>
        <button onClick={() => deleteTodo(todo)}>Delete</button>
      </div>
    </div>
  )
}

export default TodoCard