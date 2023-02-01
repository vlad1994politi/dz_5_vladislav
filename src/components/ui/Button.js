import React, { useEffect } from 'react'

import classes from './ui.module.css'

const Button = ({ isModal, handleDo, children}) => {

  return (
    <button
      onClick={handleDo} 
      className={isModal ? classes.modalButton : classes.button}
    >
      {children}
    </button>
  )
}

export default Button