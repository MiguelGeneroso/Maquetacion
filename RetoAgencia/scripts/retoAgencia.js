let arr = [];
const getInfo = () => {
    let mail = document.getElementById("mail").value;
    let name = document.getElementById("name").value;
    let destino = document.getElementById("destino").value;
    let obj = {"Name" : name,
                "Mail" : mail,
                "Destino" : destino};
    
    arr.push(obj);
    console.log(mail);
    console.log(arr);
}
const botonFiltrar = () =>{
    let claseHTML = document.getElementsByClassName("form__div--2");
    let claseHTML2 = document.getElementsByTagName("section");

    for(let i = 0; i < arr.length; i++){
        if(arr[i].Destino.toLowerCase() == "galicia" || arr[i].Destino.toLowerCase() == "canarias" || arr[i].Destino.toLowerCase() == "mallorca"){

            console.log(arr[i]);
            claseHTML2[2].innerHTML += "<p>" +  arr[i].Name + "," + arr[i].Mail + "," + arr[i].Destino + "</p>";
        }
    }

}