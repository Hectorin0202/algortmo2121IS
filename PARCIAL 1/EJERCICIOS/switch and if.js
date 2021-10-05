//--Ejercicio 1
var calificacion = "trabajo"
var n1=10
var n2=5
switch(calificacion){
    case "trabajo":
        if(10){
            console.log("excelente");
        }else{
        if(5)
            console.log("mal");
        }
    break;
    case "examen":
        if(10){
            console.log("aprobado")
        }else{
        if(5)
            console.log("reprobado")
        }
    break;
}
//--

//--Ejercicio 2 
var operacion = "suma";
var n1 = 10;
var n2 = 5;
switch(operacion){
    case "suma":
        if(n1 < n2){
            console.log("Operacion es suma y n1 es menor a n2");
        }else{
            console.log("Operacion es suma y n2 es menor a n1");
        }        
    break;
    case "resta":
        console.log("La operacion es resta");
    break;
    case "multiplicacion":
        console.log("La operacion es multiplicacion");
    break;
    case "division":
        console.log("La operacion es division");
    break;
    default:
        console.log("No se reconoce la operacion");
    break;
}
//--

//-- Ejercicio 3 
var marca = "Chevrolet"
var modelo=1997;
switch(marca){
    case "Chevrolet":{
        if(modelo="1997");
            console.log("Tu vehiculo es marca"+marca+"del modelo"+modelo);
            }  
        break;
    case "Ford":{
        if(modelo="2009");
            console.log("Tu vehiculo es marca"+marca+"del modelo"+modelo)
            }
        break;
    default:
        console.log(marca+"marca no reconocida y el modelo "+modelo+"no")
}
//--

//--Ejercicio 4
var calificacion= "proyecto"
var n1= 10
var n2= 5
switch(calificacion){
    case "proyecto":
        if(10){
            console.log("excelente");
    }else{
        if(5);
            console.log("mal")
    }
        break;
}
//--

//--Ejercicio 5
var gasolina= "magna"
var precio, n1= 18
var precio, n2= 16
switch (gasolina){
    case "magna":
        if(n1>n2){
        console.log("el precio uno es mas caro que el precio dos");
}else{
    if(n2<n1){
        console.log("es mas barato el precio uno que el precio dos")
    } break;
}
}
//--