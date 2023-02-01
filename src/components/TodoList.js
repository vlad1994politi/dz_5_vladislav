import React, { useContext, useState } from 'react'
import TodoCard from "./TodoCard"

import classes from './components.module.css'
import { Context } from '../App'
import { useSearch, useSort } from './hooks'

const TodoList = ({ type, todoList, offset, editTodo, deleteTodo, completedOnChange }) => {
  const { search } = useContext(Context);

  const result = useSearch(todoList, search, 'title')

  const sortedArray = useSort(result, type, 'date', 'title')

  if ( sortedArray?.length === 0 && search ) {
    return (
      <p>По данному <strong>{search}</strong> запросу ничего не найдено</p>
    )
  }

  return (
    <div className={classes.flexList}>
      {sortedArray?.slice(offset, offset + 2).map((todo, i) => 
        <TodoCard key={todo.date} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} completedOnChange={completedOnChange}/>
      )}
    </div>
  )
}

export default TodoList