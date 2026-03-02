const TodoNew = (props) => {
    const { newFunction } = props;
    newFunction("nguyen")
    return (
        <div className="todo-new">
            <input type="text" />
            <button>Add</button>
        </div>
    )
}
export default TodoNew;