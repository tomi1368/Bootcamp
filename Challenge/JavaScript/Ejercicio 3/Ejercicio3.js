var array = [];
var n = prompt("Ingrese cantidad de numeros al azar: ");
for(i = 0; i < n; i++){
    
    NumeroAleatorio=(Math.round(Math.random()*100));
    array[i]=NumeroAleatorio
}
console.log(array);