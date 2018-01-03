function menu_open(){
    document.getElementById("menu").style.transform = "scale(1)";
}
function menu_close(){
    document.getElementById("menu").style.transform = "scale(0)";
}
window.onscroll = function scroll(){
    var scroll = pageYOffset || document.getElementById.scrollTop;
    var btn = document.getElementById("scrollBtn");
    if(scroll > 100){
        btn.style.transform = "scale(1)";
    }else{
        btn.style.transform = "scale(0)";
    }
}
document.getElementById("scrollBtn").onclick = function scrollTop(){
    window.scrollBy(0,-70);
    if(pageYOffset > 0){
        requestAnimationFrame(scrollTop);
    }
}