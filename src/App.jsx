import reactLogo from './assets/react.svg'
import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
const App = () => {
  const age = 25;
  const data = { address: "Ha Noi", age: 25 }
  const newFunction = (name) => {
    alert(`call me ${name}`)
  }



  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        newFunction={newFunction} />
      <TodoData
        age={age}
        data={data}


      />
      <div className="todo-image">
        <img src={reactLogo} className='logo' />
      </div>

    </div>
  )
}

export default App
