const formButton = document.getElementById("button")
const username = document.querySelector("#name")
const email = document.querySelector("#email")
const age = document.querySelector("#age")
const address = document.querySelector("#address")

formButton.addEventListener("click",(e)=>{

    const userLength = cheackLength(username, 15, 2)
    const addressLength = cheackLength(address, 50, 10)
    const ageLength = cheackLength(age, 3, 1)
    const emailLength = emailValidation(email)

     if(userLength == true
     && addressLength == true
     && ageLength == true
     && emailLength  == true){
         alert("User added successfully")
     }
     else{
         e.preventDefault()
     }
})
function showError(input, messege){
    input.className = "error"
    const errMessage = input.nextElementSibling;
    errMessage.innerText = messege
    errMessage.className = "span"
    return false
}
function showSuccess(input){
    input.className = "success"
    const errMessage = input.nextElementSibling;
    errMessage.className = ""
    return true
}
function cheackLength(input, max, min){
    if(input.value.length > max){
        return showError(input, `${firstLatterUppercase(input.name)} can not be more than ${max}`)
    }
    else if(input.value.length < min){
        return showError(input, `${firstLatterUppercase(input.name)} can not be less than ${min}`)
    }
    else{
        return showSuccess(input)
    }
}
function emailValidation(input){
    if(!validateEmail(input.value)){
        return showError(input, "Email is not valid")
    }
    else{
        return showSuccess(input)
    }
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function firstLatterUppercase(input){
    return input.charAt(0).toUpperCase() + input.slice(1)
}
