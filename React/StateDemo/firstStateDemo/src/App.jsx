import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = ()=> {
    // 1. set inital state
    // 2. useState() returns an array with two things
    // 3. inital value
    // 4. and a function that allows us to change the values

    const initialFormValues = {
        fname: "",
        lname: "",
        age: 0,
        isMarried: false
    }
    // const [...,set...] = useState(put name, value, etc.);
    const [days, setDays] = useState(300)
    const [firstName, setFirstName] = useState("Gerald", "Lewis", "Joe", )
    const [lastName, setLastName] = useState("Durrance", "Allen", "Amr",)
    const [person, setPerson] = useState(initialFormsValues)
    console.log(person)


  return (
    <>

    </>
  )
}

export default App
