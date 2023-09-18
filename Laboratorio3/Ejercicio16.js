let a = 15;
let valMin = 0,  valMax=10;

if (a >= valMin && a <= valMax){
    console.log("Dentro de rango");
}
else{
    console.log("fuera de rango");
}
let numero = 1;
let numeroTexto = 'Valor desconocido';

switch(numero){
    case 1:
        numeroTexto ='numero uno';
        break
    case 2:
        numeroTexto ='numero dos';
        break
    case 3:
        numeroTexto ='numero tres';
       break
    case 4:
        numeroTexto ='numero cuatro';
        break
    default:
        numeroTexto ='Caso no encontrado';    
}