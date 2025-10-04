import Parent from './Component/Parent'
import parent from "./Parent.jsx";
//datatype is myChildren?
// Array of strings
let results = myChildren.map((e)=>{
    return <p> My Child is: {e}</p>


}
)
const Child = (myChildren) =>{
    return (
        <>
        <h1> I am the Child Component</h1>
        <p> These are my children</p>
            {myChildren.map((e)=> {
                return <p key={i}>My Child is: {e}</p>
            }
                )
            }
        </>

)
}

export default Child;