import classes from "../styles/AutoInput.module.css"

const AutoInput = ({list, setInputValue, closeList}) => {
    return (
        <div className={classes.autoInputContainer}>
        {
            list && list.map(elm => {
                return <div key={Math.random()} className={classes.listField} onClick={() => {setInputValue(elm); closeList()}}>{elm}</div>
            })
        }
        </div>
    )
}

export default AutoInput;