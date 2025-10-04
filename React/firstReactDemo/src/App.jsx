import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App () {
// before the return function, add business logic and methods
   const theStyles = {
        color: "green",
        fontSize: "200px"
    }


  return (
      //inside return will be all html code / elements
      // <> is called a fragment works like a div //fragments have no default styling
      <>
      <h1 style={theStyles}>My First App</h1>
      <h2 className="doggy"> My Second line!!</h2>
      </>
  )
}

export default App
