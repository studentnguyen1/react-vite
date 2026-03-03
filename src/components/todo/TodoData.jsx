const TodoData = (props) => {
    // console.log(">> Print props", props)
    const { age, todoList } = props
    return (
        <div className='todo-data'>
            <div> My age is {age}</div>
            <div> {JSON.stringify(todoList)} </div>
            <div> Watching youtube </div>

        </div>
    )
}
export default TodoData;