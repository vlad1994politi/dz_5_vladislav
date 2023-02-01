
import classes from './ui.module.css'

const Input = ({ name, propsClass, value, handleOnChange }) => {

  return (
    <input 
      name={name}
      value={value} 
      onChange={handleOnChange} 
      placeholder="Search..."
      className={classes[ propsClass ]}
    />
  )
}

export default Input