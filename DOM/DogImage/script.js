// alert("Hello")

let btn= document.getElementsByTagName("button")
let image= document.getElementsByTagName("img")[0]
const BASE_URL="https://dog.ceo/api"

btn[0].addEventListener("click",()=>{
    console.log("in the click")
    let route= "breeds/image/random"
    let endpoint= `${BASE_URL}/${route}`
    //Http request
    fetch(endpoint) // 1
        .then((response)=>{
            if (response.ok){
                console.log("Response: ", response)
                let result = response.json()
                return result;
            }else{
                throw new Error("Colby Jack Cheese")
            }
        })
        .then((parsedData)=>{
            console.log("parsed Data ", parsedData)
            image.setAttribute("src", parsedData.message)
        })
        .catch((errors)=>{
            console.log(errors.message)
        })
})


// const doggy = () => {
//     console.log("hello")
// }
// //pass in actual function
// addEventListener("click", doggy)