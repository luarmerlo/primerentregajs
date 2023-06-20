/* ARRAYS OBJETOS  METODOS, SINTAXSIS AVANZADA Y DOM */
/*let nombre = prompt("Hola!,Por favor ingresa tu nombre");
let numero1 = parseInt(prompt("Ingrese el primer numero:"));
let operacion = prompt("Ingrese la operación que desea realizar(+,-,*,/,%):");




if(operacion==="+"||operacion==="-"||operacion==="*"||operacion==="/"||operacion==="%"){
let numero2 = parseInt(prompt("Ingrese el segundo numero"));
function sumar(numeroA,numeroB){
    resultado = numeroA+numeroB;
    contenedor.innerHTML+=`<h1>Hola ${nombre}, el resultado de la suma de ${numeroA} mas ${numeroB} es ${resultado}<h1>`;
    
}
function restar(numeroA,numeroB){
    resultado = numeroA-numeroB;
    contenedor.innerHTML+=`<h1>Hola ${nombre}, el resultado de la resta de ${numeroA} menos ${numeroB} es ${resultado}<h1>`;
}
function dividir(numeroA,numeroB){
    resultado = numeroA/numeroB;
    contenedor.innerHTML+=`<h1>Hola ${nombre}, el resultado de la división ${numeroA} entre ${numeroB} es ${resultado}<h1>`;
}
function multiplicar(numeroA,numeroB){
    resultado = numeroA*numeroB;
    contenedor.innerHTML+=`<h1>Hola ${nombre}, el resultado de la multiplicación de ${numeroA} por ${numeroB} es ${resultado}<h1>`;
}
function calcularPorcentaje(numeroA,numeroB) {
    resultado =  (numeroA/numeroB)*100;
    contenedor.innerHTML=`<h1>Hola ${nombre}, el porcentaje de ${numeroA} en relación a ${numeroB} es de ${resultado}%<h1>`;    
}
switch (operacion){
   
    case "+":
    sumar(numero1,numero2);
    break;
    case "-":
    restar(numero1,numero2);
    break;
    case "/":
    dividir(numero1,numero2);
    break;
    case "*":
    multiplicar(numero1,numero2);
    break;
    case "%":
    calcularPorcentaje(numero1,numero2);
    break;   
    
}
}else{
 
    alert("Operador inválido");
}

*/
/*
let clientes = [{
    Nombre:"Martin Rodríguez",
    Edad: 32,
    Teléfono: "092874561",    
    Mail: "martin.rogriguez@gmail.com"
},{
    Nombre:"Fernando Moreira",
    Edad: 23, 
    Teléfono: "099875421",    
    Mail: "fernandomoreira@gmail.com"
},{
    Nombre:"Maria Perez",
    Edad: 17,
    Teléfono: "091845612",    
    Mail: "mariaperez2034@gmail.com"        
} 
]
const mostrarClientes = (lista)=>{
    contenedor.innerHTML+=`<h1>Lista de clientes<h1>`;
  lista.forEach(function(cliente){
    contenedor.innerHTML+= ` <ul>Nombre: ${cliente.Nombre}</ul>
                             <ul>Edad: ${cliente.Edad} </ul>
                             <ul>Teléfono: ${cliente.Teléfono} </ul>
                             <ul>Mail:  ${cliente.Mail} </ul><hr>`;
  })    
}
const promedioEdadClientes = (lista) => {
    let edades= [];
    let sumaEdades=0;
    lista.forEach(function(cliente){
       edades.push(cliente.Edad);       
    })
    edades.forEach(function(edad){
        sumaEdades+=edad;
    })
    let promedioEdades= sumaEdades/edades.length;
    contenedor.innerHTML+=`<h1>Promedio de edad de clientes: ${promedioEdades}<h1>`;
}
mostrarClientes(clientes);
promedioEdadClientes(clientes); 

let stringClientes = JSON.stringify(clientes);
localStorage.setItem("clientes",stringClientes);

console.log(localStorage);
contenedor.innerHTML+="<h1>Local storage:<h1>";
contenedor.innerHTML+=localStorage.getItem("clientes");*/

//SWEETALERT
let boton = document.getElementById("eliminar");

boton.addEventListener("click", () => {
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
});

boton.addEventListener("click", () => {
    Swal.fire({
        title:"Error",
        Text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",

    });
});
/*
//STORAGE
console.log(localStorage);

localStorage.setItem("nombre", "santiago");
localStorage.setItem("numero", "26");
localStorage.setItem("valor", true);

let nombre = localStorage.getItem("nombre");
console.log(nombre);

let numero = localStorage.getItem("numero");
console.log(numero);

let valor = localStorage.getItem("valor");
console.log(valor);

//SESSIONSTORAGE
sessionStorage.setItem("nombre", "santiago"); 
sessionStorage.setItem("numero", "26");
sessionStorage.setItem("valor", "true");


for(let i = 0; i < localStorage.length; i ++){
    let clave = localStorage.key(i);

    console.log("clave", clave);
    console.log("valor", localStorage.getItem("clave"));
}
*/
/*JSON*/
/*
let arreglo = [1, 2, 3, 5];
let objeto = {
    nombre: "santiago",
    edad: 26,
};

localStorage.setItem("arreglo", JSON.stringify(arreglo));
localStorage.setItem("objeto",JSON.stringify(objeto));


let objeto = localStorage.getItem("objeto");
console.log(JSON.parse(objeto));

let arreglo = localStorage.getItem("arreglo");
console.log(JSON.parse(arreglo));*/







