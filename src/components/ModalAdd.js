import { useEffect } from 'react'
import classes from './components.module.css'

const ModalAdd = ({ closeWindow, children }) => {

  return (
    <>
      <div className={classes.modalWrapper} onClick={closeWindow}>
      </div>
      <div className={classes.modalWindow}>
        {children}
      </div>
    </>
  )
}

export default ModalAdd