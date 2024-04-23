/**@type {HTMLFormElement} */
let form = document.getElementById("register-form")

form.addEventListener("submit",function(e){
    e.preventDefault()
    //min 4 character
    let firstName=document.getElementById("FirstName")

    //min 4 character
    let lastName=document.getElementById("LastName")
    
    //ends with '@gmail.com'
    let email=document.getElementById("email")

    //min 6 character dan, contains at least 1 digit, 1 capital letter, 1lowercase letter
    let password=document.getElementById("password")

    //not empty
    let gender=document.getElementById("gender")
    
    //not empty
    let errorText=document.getElementById("error-txt")

    // Set error message to empty initially
    errorText.innerText = "";

    // Validate username
    if (firstName.value.length < 4) {
        errorText.innerText = "First name must be at least 4 characters long.";
        return;
    }else if(lastName.value.length < 4){
        errorText.innerText = "Last name must be at least 4 characters long.";
        return;
    }
    else if(!email.value.endsWith("@gmail.com")){
        errorText.innerText="email must be ended with @gmail.com"
        return;
    }
    else if(password.value.length<6){
        errorText.innerText="password must at least 6 character"
        return;
    }else if(!validatePassword(password.value)){
        errorText.innerText="password must at least 1 digit,1 capital letter,1 lowercase letter"
        return;
    }else if(gender.value==""||gender.value==undefined){
        errorText.innerText="gender gabole kosong"
        return;
    }
    alert("submit!")
})

function validatePassword(input){
    let containDigits=false
    let containCapital=false
    let containLowercase=false

    for(let i=0;i<input.length;i++){
        const c=input[i]
        if(c>='0' &&c<='9'){
            containDigits=true;
        }
        if(c>='A' && c<='Z'){
            containCapital=true;
        }if(c>='a' && c<='z'){
            containLowercase=true;
        }
    }
    return containDigits&&containCapital&&containLowercase
}
