import Child from "./Child.jsx";

const Parent = ({mother, father}) => {
 let children = ["Jack", "Dane", "joe", "smoe"]
    return (
        <>
            <h1> I am the Parent Component</h1>
            <p>Luke, I am your father {father}</p>
            <p>Luke, I am your mother {mother}</p>
            <Child myChildren = {children}
        </>
            )
            }

export default Parent;