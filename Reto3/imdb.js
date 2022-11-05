// let Movie = require("./movie");
// let Professional = require("./professional");

class Imdb{

    constructor()
    {
        this.peliculas = peliculas
    }

    // escribirEnFicheroJSON(nombreFichero){
        
    //     fs.writeFileSync(nombreFichero,JSON.stringify(this));
        
    // }

    // obtenerInstanciaIMDB(nombreFichero){
    //     let nuevaPelicula = new Imdb([]);
    //     const data = fs.readFileSync(nombreFichero,{encoding:'utf8'});
    //     nuevaPelicula = JSON.parse(data);
    //     return nuevaPelicula;
    // }

    


}
class Movie{

    constructor(title, releaseYear, nacionality, genre){
        
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.language = "";
        this.plataforma = "";
        this.isMCU = false;
        this.mainCharacterName = "";
        this.producer = "";
        this.distributor = "";
        this.director;
        this.writer;
        this.actors=[];
    }

    printAll(){

        console.log(this.title , this.releaseYear , this.actors , this.nacionality , this.director , this.writer , this.language , this.plataforma ,
                    this.isMCU , this.mainCharacterName , this.producer , this.distributor , this.genre);
        
    }

    
}
class Professional {
    //Definicion de Atributos:

    constructor (name, age, weight, height, isRetired, nationality, oscarsNumber, profession){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }

    printAll(){
        console.log("Nombre: ",this.name,"Edad: ",this.age,"peso: ", this.weight,"altura: ", this.height,"retirado?: ", this.isRetired,"nacionalidad: ", this.nationality,"oscars?: ", this.oscarsNumber,"Profesion: ", this.profession);
        
    }

}
let a1 = new Professional("a",1,1,1,true,"a",1,"actor");
let a2 = new Professional("b",2,2,2,true,"b",2,"actor");
let a3 = new Professional("c",3,3,3,true,"c",3,"actor");
let a4 = new Professional("d",4,4,4,true,"d",4,"actor");
let actors = [a1,a2,a3,a4];
function obtenerActor(){
    let nombre = $("#nombre").val();
    let edad = $("#edad").val();
    let peso = $("#peso").val();
    let altura = $("#altura").val();
    let retirado = ($("#retirado").val() === "true")
    let nacionalidad = $("#nacionalidad").val();
    let numeroOscar = $("#numeroOscar").val();
    let profesion = "actor";
    
    let newProfessional = new Professional(nombre,parseInt(edad),parseInt(peso),parseInt(altura),retirado,nacionalidad,parseInt(numeroOscar),profesion);
    
    actors.push(newProfessional);
    mostrarActores();
}

let d1 = new Professional("e",1,1,1,true,"e",1,"director");
let d2 = new Professional("f",2,2,2,true,"f",2,"director");
let d3 = new Professional("g",3,3,3,true,"g",3,"director");
let d4 = new Professional("h",4,4,4,true,"h",4,"director");
let directors = [d1,d2,d3,d4];
function obtenerDirector(){
    let nombre = $("#nombreD").val();
    let edad = $("#edadD").val();
    let peso = $("#pesoD").val();
    let altura = $("#alturaD").val();
    let retirado = ($("#retiradoD").val() === "true")
    let nacionalidad = $("#nacionalidadD").val();
    let numeroOscar = $("#numeroOscarD").val();
    let profesion = "director";
    
    let newProfessional = new Professional(nombre,parseInt(edad),parseInt(peso),parseInt(altura),retirado,nacionalidad,parseInt(numeroOscar),profesion);
    
    // newProfessional.printAll();
    directors.push(newProfessional);
    mostrarDirectores();
}

let g1 = new Professional("i",1,1,1,true,"i",1,"director");
let g2 = new Professional("j",2,2,2,true,"j",2,"director");
let g3 = new Professional("k",3,3,3,true,"k",3,"director");
let g4 = new Professional("l",4,4,4,true,"l",4,"director");
let guionistas = [g1,g2,g3,g4];
function obtenerGuionista(){
    let nombre = $("#nombreG").val();
    let edad = $("#edadG").val();
    let peso = $("#pesoG").val();
    let altura = $("#alturaG").val();
    let retirado = ($("#retiradoG").val() === "true")
    let nacionalidad = $("#nacionalidadG").val();
    let numeroOscar = $("#numeroOscarG").val();
    let profesion = "guionista";
    
    let newProfessional = new Professional(nombre,parseInt(edad),parseInt(peso),parseInt(altura),retirado,nacionalidad,parseInt(numeroOscar),profesion);
    
    // newProfessional.printAll();
    guionistas.push(newProfessional);
    mostrarGuionistas();
}

function mostrarActores(){
    $("#mostrarActoresP").empty();
    $("#mostrarActoresP").append('<option selected>Selecciona uno</option>')
    // console.log("Actores:" + actors[0].name);
    for(let i = 0; i < actors.length; i++){
        console.log(actors[i].nombre);
        $("#mostrarActoresP").append('<option class="text-dark">'+ actors[i].name + '</option>')
    }
}
function mostrarDirectores(){
    $("#mostrarDirectoresP").empty();
    $("#mostrarDirectoresP").append('<option selected>Selecciona uno</option>')
    // console.log("Directores:" + directors[0].name);
    for(let i = 0; i < directors.length; i++){
        console.log(directors[i].nombre);
        $("#mostrarDirectoresP").append('<option class="text-dark">'+ directors[i].name + '</option>')
    }
}
function mostrarGuionistas(){
    $("#mostrarGuionistasP").empty();
    $("#mostrarGuionistasP").append('<option selected>Selecciona uno</option>')
    // console.log("Directores:" + guionistas[0].name);
    for(let i = 0; i < guionistas.length; i++){
        console.log(guionistas[i].nombre);
        $("#mostrarGuionistasP").append('<option class="text-dark">'+ guionistas[i].name + '</option>')
    }
}

function crearPelicula(){
    let titulo = $("#titulo").val();
    let anio = $("#año").val();
    let nacionalidad = $("#nacionalidad").val();
    let genero = $("#genero").val();
    let idioma = $("#idioma").val();
    let plataforma = $("#plataforma").val();
    let personajePrincipal = $("#personajePrincipal").val();
    let productor = $("#productor").val();
    let distribuidora = $("#distribuidora").val();
    let mostrarDirectores = $("#mostrarDirectoresP").val();
    let mostrarGuionistas = $("#mostrarGuionistasP").val();
    let mostrarActores = $("#mostrarActoresP").val();
    // let mostrarDirectores = document.getElementById("mostrarDirectoresP").value;
    // let mostrarGuionistas = document.getElementById("mostrarGuionistasP").value;
    // let mostrarActores = document.getElementById("mostrarActoresP").value;
    let imagen = $("#formFile").val();
    console.log(mostrarActores);

    if (titulo == "" || anio == null || nacionalidad == null || genero == null || idioma == null || plataforma == null || personajePrincipal == null || productor == null || distribuidora == null || mostrarDirectores == null || mostrarGuionistas == null || mostrarActores == null || imagen == null ){

        window.alert("Faltan datos por introducir")
    }else{

        let str = '<div class="card" style="width: 18rem;"><img src="'+imagen+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+titulo+'</h5><p class="card-text">Año: '+parseInt(anio)+'<br>Nacionalidad: '+nacionalidad+'<br>Genero: '+genero+'<br>Idioma: '+idioma+'<br>Plataforma: '+plataforma+'<br>Personaje principal: '+personajePrincipal+'<br>Productor: '+productor+'<br>Distribuidora: '+distribuidora+'<br>Director: <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal"style="height: 30px;font-size:12px;margin-bottom:5px;">'+mostrarDirectores+'</button><br>Guionista: <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal2" style="height: 30px;font-size:12px;margin-bottom:5px;">'+mostrarGuionistas+'</button><br>Actores: <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal3" style="height: 30px;font-size:12px;margin-bottom:5px;">'+mostrarActores+'</button></p></div></div>'
    
        $("#contenerPeliculas").append(str)
    }

}

function mostrarPeliculas(){

}