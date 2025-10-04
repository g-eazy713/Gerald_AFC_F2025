import axios from "axios";
import {useState,useEffect} from "react";

function RandomDogPage() {
    const[imageSrc, setImageSrc] = useState("")
    const BASE_URL = "https://dog.ceo/api"

    useEffect(()=>{},[])
    const handleClick = (event) => {
        event.preventDefault()
        let route = "breeds/image/random"
        let endpoint = `${BASE_URL}/${route}`
        axios.get(endpoint)
            .then(response => {
                //updating state!!
                setImageSrc(response.data.message)
                console.log(response.data.message)
            })
            .catch(error => console.log("Idiot", error))


    }
    return (
        <>
            <h1>Random Dog Image Generator</h1>
            <img src={imageSrc} alt="random dog image"/>
            <br/>
            <button onClick={handleClick}>Click me for Random Image</button>
        </>
    )
}


export default RandomDogPage
