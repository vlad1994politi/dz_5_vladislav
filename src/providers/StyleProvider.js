
import classes from './provider.module.css'

const StyleProvider = ({ children }) => {

  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <div className={classes.flexWrapper}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default StyleProvider