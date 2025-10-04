import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from "./Components/Child.jsx";
import Parent from "./Components/Parent.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1> I am the App Component!!!</h1>
        <Parent mother={"Fu"} father={"cu"} />
        <Child/>
    </>
  )
}

export default App
