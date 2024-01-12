// let menu = document.querySelector(".fa-bars")
// console.log(menu);
// menu.addEventListener("click", ()=> {
//     menu.replace("fa-bars","fa-xmark")
    
// })

let menu = document.querySelector(".fa-bars");
let canvasNav = document.querySelector(".canvas__nav");
console.log(menu);

let staatus = false
function canvasToggle() {
       
    staatus = !staatus 
    if (staatus) {
        canvasNav.style.right = "0";
        menu.classList.add("fa-xmark");
        menu.classList.remove("fa-bars");
    }else {
        menu.classList.add("fa-bars");
        menu.classList.remove("fa-xmark");
        canvasNav.style.right = "-100%";
    }
}

menu.addEventListener("click", () => {
    canvasToggle()
});

window.addEventListener("click", (e) => {
    console.log(e.target);
    // if (!e.target.classList.contains("canvas__nav") || !e.target.classList.contains("fa-solid")) {
    //     canvasToggle()
    // }|
})
