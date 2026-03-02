const TodoNew = (props) => {
    // const { newFunction } = props;
    // newFunction("nguyen")
    const hanldeButton = () => {
        alert("Click me")
    }
    const handleOnChange = (name) => {
        console.log("Input is: ", name)

    }
    return (
        <div className="todo-new">
            <input type="text" onChange={(event) => handleOnChange(event.target.value)} />
            <button style={{ cursor: "pointer" }} onClick={hanldeButton} >Add</button>
        </div>
    )
}
export default TodoNew;