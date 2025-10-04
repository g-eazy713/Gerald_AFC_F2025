import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import monsters from './Util/database.js'
function App() {
    // console.log(monsters)

    const monsterCards = monsters.map(()=>{
        return (
            <div id={"fakeCard"}>
                <h2>First Name:{monsters[0].firstName}</h2>
                <h3>Last Name: {monsters[0].lastName}</h3>
                <p>Age: {monsters[0].age} </p>
                <p>More Info: {monsters[0].moreInfo}</p>
            </div>
        )
})
  return (
    <>
     <h1>Fake Database App</h1>
    </>
  )
}

export default App
