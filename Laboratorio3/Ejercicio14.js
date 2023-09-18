let a = 15;
let valMin = 0,  valMax=10;

if (a >= valMin && a <= valMax){
    console.log("Dentro de rango");
}
else{
    console.log("fuera de rango");
}

let ninUMERO ="17"
let edad = Number(miNumero);
console.log(edad);

if(isMan(edad)){
    console.log("No es un numero");
}
else{
    if(edad >= 18){
        console.log("puede votar");
    }
    else{
        console.log("Muy joven para botar");
    }
}
if (isNaN(edad)){
    console.log("No es un numero");
}
else{
    let resultado =(edad >18)? "Puede votar" : "Muy joven para votar"
    console.log(resultado);
}
