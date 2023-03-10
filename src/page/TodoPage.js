import React, { useCallback, useContext, useEffect, useMemo, useState } from "react"
import { Context } from "../App"
import AddEditTask from "../components/AddEditTask"
import { ClassComponent } from "../components/ClassComponent"
import ModalAdd from "../components/ModalAdd"
import Pagination from "../components/Pagination"
import TodoList from "../components/TodoList"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"

import classes from './todo.module.css'

const TodoPage = () => {

  // HOOKS
  const { setAuth } = useContext(Context)
  const [todoList, setTodoList] = useState([])
  const [dataForm, setDataForm] = useState({
    title: '',
    description: '',
  })
  const [isShow, setIsShow] = useState(false)
  const [ offset, setOffset ] = useState(0)
  const { search, setSearch } = useContext(Context)
  const [ type, setType ] = useState('asc') // asc || desc || letter

  // HANDLERS

  const handleOnChange = (e) => {
    setDataForm(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }
  const handleShow = () => {
    setIsShow(prev => !prev)
    setDataForm({
      title: '',
      description: '',
    })
  }

  const handleFilter = () => {
    const newState = todoList.filter((item) => item.completed === false)
    setTodoList(newState)
  }

  const submitData = () => {
    setTodoList(prev => {
      return [...prev, {...dataForm, date: Date.now(), completed: false}]
    })
    handleShow()
  }

  const submitEditData = () => {
    const newList = todoList.map((todo) => {
      if (todo.date === dataForm.date) {
        return {...dataForm, date: Date()}
      } else {
        return todo
      }
    })
    setTodoList(newList)
    handleShow()
  }

  const completedOnChange = (date) => {
    const newList = todoList.map((todo) => {
      if (todo.date === date) {
        return {...todo, completed: !todo.completed}
      } else {
        return todo
      }
    })
    setTodoList(newList)
  }

  const editTodo = (todo) => {
    setIsShow(true)
    setDataForm({
      title: todo.title, 
      description: todo.description,
      date: todo.date,
      completed: todo.completed
    })
  }

  const deleteTodo = (todo) => {
    const newList = todoList.filter((item) => {
      return item.date !== todo.date  
    })
    setTodoList(newList)
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'))
    if (data?.length !== 0) {
      setTodoList(data)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(todoList))
  }, [ todoList ])

  const logOut = () => {
    localStorage.removeItem('access_token')
    setAuth(false)
  }

  return (
    <div>
      <ClassComponent/>

      <Button handleDo={handleShow}>???????????????? ????????</Button>
      <Button handleDo={handleFilter}>???????????????? ??????????????????????</Button>
      <Button handleDo={logOut}>??????????</Button>

      <Button handleDo={() => setType('asc')}>???????????????????? ???? ??????????????????????</Button>
      <Button handleDo={() => setType('desc')}>???????????????????? ???? ????????????????</Button>
      <Button handleDo={() => setType('letter')}>???????????????????? ???? ????????????????</Button>

      <AddEditTask handleOnChange={handleOnChange} isShow={isShow} dataForm={dataForm} handleShow={handleShow} submitEditData={submitEditData} submitData={submitData}/>
      
      <Input propsClass={'inputSearch'} value={search} handleOnChange={(e) => setSearch(e.target.value)}/>
      {/* ?????????? ???????????? */}
      <TodoList type={type} todoList={todoList} offset={offset} editTodo={editTodo} deleteTodo={deleteTodo} completedOnChange={completedOnChange}/>
      {/* ?????????????????? */}
      <Pagination limit={2} offset={offset} length={todoList?.length} setOffset={setOffset}/>
    </div>
  )
}

export default TodoPage