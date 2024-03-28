let userInfo = document.querySelector("#user_info")

let userData = document.querySelector("#user")

let link = document.querySelector("#link")

if (localStorage.getItem("username")) {
    link.remove();
    userInfo.style.display = "flex"
    userData.innerHTML = localStorage.getItem("username")
}
else {
    userInfo.style.display = "none"
}
let logOutBtn=document.querySelector("#logout")

logOutBtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location="login.html"
    },1500)
})