let a = 15;
let valMin = 0,  valMax=10;

if (a >= valMin && a <= valMax){
    console.log("Dentro de rango");
}
else{
    console.log("fuera de rango");
}
 
const autos = ['BMW','Mercedes Benz', 'Volvo'];
console.log(autos);

for(let z = 0; z < autos.length; z++){
    console.log(z + ' : ' + autos[z]);
}

autos[1] = 'Mercedes Benz';
console.log(autos[1]);

autos.push('audi');
console.log(autos);