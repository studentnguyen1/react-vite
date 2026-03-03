import { useState } from "react";

const TodoNew = (props) => {
    // const { newFunction } = props;
    // newFunction("nguyen")
    const [valueInput, setValueInput] = useState("eric")

    const handleOnChange = (name) => {
        setValueInput(name);

    }
    const hanldeButton = () => {
        console.log("Check value input: ", valueInput);
    }
    return (
        <div className="todo-new">
            <input type="text" onChange={(event) => handleOnChange(event.target.value)} />
            <button style={{ cursor: "pointer" }} onClick={hanldeButton} >Add</button>
            <div>
                My name is {valueInput}
            </div>
        </div>

    )
}
export default TodoNew;