const pwdValidation = document.querySelector("#pwd-validation");
var firstPwd = document.getElementById("pwd");
var secondPwd = document.getElementById("confirm-pwd");

const checkEquals = ()=> {
    return firstPwd.value === secondPwd.value ? match() : notMatch();
}

const notMatch = ()=> {
    firstPwd.style.cssText = "border-color: rgba(255, 0, 0, 0.8)";
    secondPwd.style.cssText = "border-color: rgba(255, 0, 0 , 0.8)";
    pwdValidation.style.visibility = "visible";
}

const match = ()=> {
    firstPwd.style.cssText = "border-color: #E5E7EB";
    secondPwd.style.cssText = "border-color: #E5E7EB";
    pwdValidation.style.visibility = "hidden";
}

checkEquals();