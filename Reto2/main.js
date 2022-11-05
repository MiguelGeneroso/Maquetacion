let lista = [];
function añadirCarrito(n,p){
    let nombre = $(n).text();
    let precio = $(p).text();
    let obj = {"nombre" : nombre,
                "precio" : precio}
    lista.push(obj);
    console.log(lista);
}
function mostrarCarrito(){
    let total = 0;
    for(let i = 0; i < lista.length; i++){
        $("#modaltext").append('<p id="nuevo">Prenda: ' + lista[i].nombre + ' ' + lista[i].precio + '€</p>');
        total += parseInt(lista[i].precio);
    }
    $("#modaltext").append('<p id="nuevo">Precio total: ' + total + '€</p>');
}