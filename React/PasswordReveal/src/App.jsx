import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Goal: to build a password input
// with a button
// when clicked
// toggles between hidden and shown passwords
// messing with state


const App = () => {
    const [revealPassword, setRevealPassword] = useState(true)
    function handleClick() {
        // toggling between hidden and shown
        // true or false = set initial state of false then true
        // if statement (boolean case) if false make it true, else make it false.
        setRevealPassword(!revealPassword)
    }

    return (
    <>
     <h1>App in Password Reveal</h1>
        <input type= {revealPassword ? "password": "text"} placeholder="enter your password" name={"pw"} />
        <button onClick={handleClick}>Show/Hide</button>
    </>
  )
}


export default App
