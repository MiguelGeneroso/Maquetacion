function cambiar(){
    // myTagsName = document.getElementsByClassName("red");
    // myTagsName[0].classList.add("cambiar__red");
    // myTagsName[0].classList.remove("red");
    // this.mantenerColor();
    let magenta = document.getElementById("red");
    magenta.setAttribute("style","background-color: magenta");
    setTimeout(mantenerColor(),2000);
    
    
    
    
    
}
function mantenerColor () {
    let red = document.getElementById("red");
    red.setAttribute("style","background-color: red");
}
function hola (){
    console.log("hola");
}