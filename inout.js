var Menu = document.querySelector(".menu-in-small-screen"); console.log(Menu);
var Button1 = document.querySelector(".bar-icon"); console.log(Button1);
var Button2 = document.querySelector(".button-close"); console.log(Button2);

Button1.addEventListener("click", ()=>{
    Menu.classList.add("active");
}) 

Button2.addEventListener("click", () => {
    Menu.classList.remove("active");
})

document.addEventListener("click", (haha) => {
    if (!Menu.contains(haha.target) && !Button1.contains(haha.target)) {
        Menu.classList.remove("active");
    }
}) 


