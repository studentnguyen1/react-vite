import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import MyComponent from './components/learn/MyComponent'
import { SecondComponent, ThirdComponent } from './components/learn/SecondComponent'
import viteLogo from '/vite.svg'



const App = () => {
  const [count, setCount] = useState(0)


  // const myFunction = () => {
  //   console.log('Hello World')
  // }
  // myFunction()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello Word 20 22 </h1>
      <MyComponent />
      <SecondComponent />
      <ThirdComponent />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        React js
      </p>
    </>
  )
}

export default App
