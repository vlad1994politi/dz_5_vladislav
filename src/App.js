import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import Input from "./components/ui/Input";
import TodoPage from "./page/TodoPage";
import AuthProvider from "./providers/AuthProvider";
import StyleProvider from "./providers/StyleProvider";



export const Context = createContext(null)

function App() {
  const [ search, setSearch ] = useState('')

  const [ authData, setAuthData ] = useState({
    login: '',
    password: '',
  })
  const [ auth, setAuth ] = useState(false)

  const handleOnChange = (e) => {
    setAuthData((prev) => {
      return {...prev, [ e.target.name ]: e.target.value}
    })
  }

  const SignIn = () => {
    setAuth(true)
    const token = authData.login + '' + authData.password
    localStorage.setItem('access_token', token)
  }

  return (
    <Context.Provider value={{ search, setSearch, setAuth, auth }}>
      <div className="App">
      <AuthProvider>
       <StyleProvider>
        {auth 
        ?
          <TodoPage/>
        :
          <form onSubmit={SignIn}>
            <Input name='login' handleOnChange={handleOnChange} value={authData.login}/>
            <Input name='password' handleOnChange={handleOnChange} value={authData.password}/>
            <button type='submit'>Sign in</button>
          </form>
        }
        </StyleProvider>
      </AuthProvider>
     </div>
    </Context.Provider>
  );
}

export default App;
