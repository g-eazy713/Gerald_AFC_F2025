import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    // const [firstName, setFirstName]= useState("")
    // const [age, setAge] = useState("")
    const initialState = {
        fname: "",
        age: 0
    }
    const [formData, setFormData] = useState({initialState})
    const {fname,age} = formData


    function handleSubmit (){
        evt.preventDefault()
        const payload ={
            fname,
            age
        }
        console.log(payload)
        setFormData({initialState})
    }

    // function handleFirstNameChange (evt) {
    // console.log(evt.target.name + evt.target.value)
    //     setFirstName(evt.target.value)
    // }
    //
    // function handleAgeChange (evt) {
    //     console.log(evt.target.age + evt.target.value)
    //     setAge(evt.target.value)
    // }
    function handleChange (evt){
        setFormData(
            {...formData},
            [evt.target.name] = evt.target.value  //integrate current values into prev values
        )
    }

    return (
    <>
        <form onSubmit={handleSubmit} method={"GET"}>
            <label htmlFor={""}>First Name: </label>
                <input
                    type={"text"}
                    name ={"fname"}
                    value={fname}
                    onChange={handleChange}
                    maxLength={20}
                />
                <label htmlFor={""}>Age </label>
                <input
                    type={"number"}
                    name ={"Age"}
                    value={age}
                    minLength={21}
                    maxLength={99}
                    onChange={handleChange}
                />
            <br/>
            <button type={"submit"}>Submit Me</button>
        </form>
    </>
    );
}

export default App
