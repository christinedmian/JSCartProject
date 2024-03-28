let username=document.querySelector("#username")
let password=document.querySelector("#password")
let loginrBtn=document.querySelector("#sign-in")

let getUsername=localStorage.getItem("username")

let getPassword=localStorage.getItem("password")

loginrBtn.addEventListener("click",function(e){
    e.preventDefault()
    if(username.value===""||password.value===""){
        alert("please fill all the data")
    }
    else{
        if(getUsername && getUsername.trim()=== username.value.trim() &&getPassword && getPassword.trim()===password.value){
            setTimeout( () => { 
                window.location="index.html"
            },1500)
        }
        else{
            alert("userName or Password wrong")
        }
    }
})
