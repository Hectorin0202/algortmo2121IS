
/*
    <   menor que
    >   mayor que
    =   asignar valor
    ==  Igual en comparación
    !=  Diferente
    <=  Menor o igual
    >=  Mayor o igual     
    && Y
    || O
    !  Negación    
*/

var x = 300; // Variable para comparar
var y = 20;
var s = 30;
if(x < y){
    console.log(x + " es menor a " + y);
}else{
    console.log(x +" es mayor a " + y);
}
var humano1 = "Emmanuel";
var humano2 = "Emmanuel";

if(humano1 == humano2){
    console.log("Son iguales");
}else{
    console.log("Son diferentes");
}

var pi = 3.1416;
var radio = 10;

if(pi != radio){
    console.log("Son diferentes");
}else{
    console.log("Son iguales");
}


var accion= "ir por las tortillas"

if (accion=="(Paso 1: Salir de la entrada de mi casa"){
     
}else {
    console.log ("Paso 1: usar cubrebocas al salir");
}

if(accion=="Caminar"){
    console.log("Paso 2: ir caminando a la tortilleria");
}else{
    console.log ("Paso 2: ir en bicicicleta");
}

if(accion=="Esperar"){
    console.log ("Paso 3: esperar en la fila para comprar");
}else{
    console.log ("Paso 4: tomar sana distancia");
}

if(accion=="Compra"){
    console.log ("Paso 4: comprar las tortillas");
}else{
    console.log ("Paso 4: preparar para llevarmelo");
}

if(accion=="Regreso"){
    console.log("Paso 5: regresar a casa");
}else{
    console.log("Paso 5: ir con cuidado");
}