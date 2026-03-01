const TodoData = (props) => {
    // console.log(">> Print props", props)
    const { age, data } = props
    return (
        <div className='todo-data'>
            <div> My age is {age}</div>
            <div> Learning react </div>
            <div> Watching youtube </div>

        </div>
    )
}
export default TodoData;