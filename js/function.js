let hideText_btn = document.getElementById("hideText_btn");
let  hideTex = document.getElementById("hideTex");

hideText_btn.addEventListener("click",toggleText);
function toggleText(){
    hideText.classList.toggle("show");
}