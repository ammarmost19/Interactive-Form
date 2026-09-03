const form = document.getElementById("form");
const inputs = document.querySelectorAll("input");
let passAllValid = false;
let nameValid = false;  
let emailValid = false;
let phoneValid = false;
let privacyValid = false;
let  errorMsg = document.querySelectorAll(".errormsg");



inputs.forEach((input)=>{
    input.addEventListener('input',()=>{
        if(input.id === "number"){
            input.value= input.value.replace(/[^0-9+ ]/g, '');
        }
        if(input.id === "password"){
            let passCondition = document.querySelectorAll(".pass-condition");
            let hasMinLength = input.value.trim().length >= 8;
            let hasUppercase = /[A-Z]/.test(input.value);
            let hasLowercase = /[a-z]/.test(input.value);
            let hasNumber = /[0-9]/.test(input.value);
            let hasSpecial = /[!@#$%^&*(),.?":{}|<>_\-+=/\\[\]]/.test(input.value);
            if(hasMinLength){
                passCondition[0].classList.add("pass-valid");
                passCondition[0].firstChild.src = "./assets/success-icon.svg";
            }else{
                passCondition[0].classList.remove("pass-valid");
                passCondition[0].firstChild.src = "./assets/wrong-icon.svg";
                 
            }
            if(hasUppercase){
                passCondition[1].classList.add("pass-valid");
                passCondition[1].firstChild.src = "./assets/success-icon.svg";
            }else{
                passCondition[1].classList.remove("pass-valid");
                passCondition[1].firstChild.src = "./assets/wrong-icon.svg";
                 
            }
            if(hasLowercase){
                passCondition[2].classList.add("pass-valid");
                passCondition[2].firstChild.src = "./assets/success-icon.svg";
            }else{
                passCondition[2].classList.remove("pass-valid");
                passCondition[2].firstChild.src = "./assets/wrong-icon.svg";
                 
            }
            if(hasNumber){
                passCondition[3].classList.add("pass-valid");
                passCondition[3].firstChild.src = "./assets/success-icon.svg";
            }else{
                passCondition[3].classList.remove("pass-valid");
                passCondition[3].firstChild.src = "./assets/wrong-icon.svg";
                 
            }
            if(hasSpecial){
                passCondition[4].classList.add("pass-valid");
                passCondition[4].firstChild.src = "./assets/success-icon.svg";
            }else{
                passCondition[4].classList.remove("pass-valid");
                passCondition[4].firstChild.src = "./assets/wrong-icon.svg";
                 
            }
            passAllValid =
                hasMinLength &&
                hasUppercase &&
                hasLowercase &&
                hasNumber &&
                hasSpecial;

            let passStatus = document.querySelectorAll(".pass-status");
            let passStatusData = document.querySelector(".pass-status-data");
            if(hasMinLength && hasUppercase && hasLowercase && hasNumber && !hasSpecial){
                passStatus[1].classList.add("medium");
                passStatusData.textContent= "Medium";
                passStatusData.classList.add("medium-data");
                passStatusData.classList.remove("strong-data");
                passStatusData.classList.remove("weak-data");
            }
            else if(hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSpecial){
                passStatus[1].classList.add("medium");
                passStatus[2].classList.add("strong");
                passStatusData.textContent= "Strong";
                passStatusData.classList.add("strong-data");
                passStatusData.classList.remove("medium-data");
                passStatusData.classList.remove("weak-data");


            }else{
                passStatus[0].classList.add("weak");
                passStatus[1].classList.remove("medium");
                passStatus[2].classList.remove("strong");
                passStatusData.textContent= "Weak";
                passStatusData.classList.add("weak-data");
                passStatusData.classList.remove("strong-data");
                passStatusData.classList.remove("medium-data");
            }
        }
        if(input.id === "privacy-policy"){
            if(input.checked){
                privacyValid = true;
            }else{
                privacyValid = false;
            }
            
        }
    })
    input.addEventListener('focus',(e)=>{   
        e.target.classList.add("input-focus-dcr");
        if(e.target.id === "password"){
            let passConditions = document.querySelector(".pass-condition-cnt");
            passConditions.classList.add("show-conditions");
        }
    })
    input.addEventListener('blur',(e)=>{  

        e.target.classList.remove("input-focus-dcr");
        if(e.target.id ==="full-name"){
            if(e.target.value.trim().length < 3 ){
                let error = document.querySelector(".name-err");
                if(e.target.value.trim()== ""){
                    error.textContent = "this field is required"
                }else{
                    error.textContent = "Name must be at least 3 characters "
                }
                e.target.classList.add("input-error-dcr");
                nameValid = false;
            }else{
                nameValid = true;
                errorMsg[0].textContent= "";
                e.target.classList.remove("input-error-dcr");
            }
        }

        if(e.target.id ==="email"){
            let error = document.querySelector(".email-err");
            if(e.target.value.trim()== ""){
                error.textContent = "this field is required"
                e.target.classList.add("input-error-dcr");
                emailValid = false;
            }
            else if(!e.target.value.includes(".") || !e.target.value.includes("@")){
                error.textContent = "email must be in this format 'name@company.com' "
                e.target.classList.add("input-error-dcr");
                emailValid = false;
            }
            else{
                emailValid = true;
                errorMsg[1].textContent= "";
                e.target.classList.remove("input-error-dcr");
            }
        }
        
        if(e.target.id ==="number"){
            let error = document.querySelector(".number-err");
            if(e.target.value.trim()== ""){
                error.textContent = "this field is required"
                e.target.classList.add("input-error-dcr");
                phoneValid = false;

            }
            else if(!e.target.value.includes("+")){
                error.textContent = "please add the country code '+1(255)'"
                e.target.classList.add("input-error-dcr");
                phoneValid = false;

            }
            else{
                phoneValid = true;
                errorMsg[2].textContent= "";
                e.target.classList.remove("input-error-dcr");
            }
        }

        if(e.target.id ==="password"){
            if(!passAllValid){
                e.target.classList.add("input-error-dcr");
            }else{
                e.target.classList.remove("input-error-dcr");
                errorMsg[3].textContent= "";
            }
        }
        
    })



})



const showpass = document.querySelector(".input-wrapper span");
const passInput = document.getElementById("password");
showpass.addEventListener("click",(e)=>{
    if (passInput.type === "password") {
        passInput.type = "text";
        showpass.firstChild.src = "./assets/show-pass-icon.svg"
    } else {
        passInput.type = "password";
        showpass.firstChild.src = "./assets/hide-pass-icon.svg"
    }
})

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let allValid = passAllValid && nameValid && emailValid && phoneValid && privacyValid;
    let submitErr = document.querySelector(".submit-error");
    let popupPage = document.querySelector(".popup-page");
    let popupOpacity = document.querySelector("main")
    let validations = [nameValid, emailValid, phoneValid, passAllValid, privacyValid];
    if(!allValid){
        for(let i = 0; i < validations.length; i++){
            if(!validations[i]){
                errorMsg[i].textContent ="this field is required";
            }else{
                errorMsg[i].textContent ="";
            }
        }
        submitErr.textContent="please fill all fields correctly!";
        popupPage.classList.add("remove-popup-page");
        popupOpacity.classList.remove("popup-opacity");
    }
    else{
        let popupButton = document.querySelector(".popup-button button");
        for(let i = 0; i < validations.length; i++){
            errorMsg[i].textContent ="";
        }
        submitErr.textContent="";
        popupPage.classList.remove("remove-popup-page");
        popupOpacity.classList.add("popup-opacity");
        popupButton.addEventListener("click" , ()=>{
            window.location.reload();
        })
    }

})