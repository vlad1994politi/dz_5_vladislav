import { useEffect, useContext } from 'react'
import { Context } from '../App'

const AuthProvider = ({ children }) => {

  const { auth, setAuth } = useContext(Context)

  useEffect(() => {
    const token = localStorage.getItem('access_token')

    if (token) {
      setAuth(true)
      return
    }
    setAuth(false)
  }, [ auth ])
  
  return ( 
    <>
      {children}
    </>
   );
}
 
export default AuthProvider;