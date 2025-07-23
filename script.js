let voto1 = 0;
let voto2 = 0;
let voto3 = 0;
document.getElementById("voto1").addEventListener("click", function(){
    voto1+=1;
    document.getElementById('opcion1').textContent=voto1;
    alert("¡GRACIS POR TU VOTO!");
    if (voto1%5==0){
        console.log("Cantidad de votos seleccion 1: ",voto1);
    }
})
document.getElementById("voto2").addEventListener("click", function(){
    voto2+=1;
    document.getElementById('opcion2').textContent=voto2;
    alert("¡GRACIS POR TU VOTO!");
    if (voto2%5==0){
        console.log("Cantidad de votos seleccion 2: ",voto2);
    }
})
document.getElementById("voto3").addEventListener("click", function(){
    voto3+=1;
    document.getElementById('opcion3').textContent=voto3;
    alert("¡GRACIS POR TU VOTO!");
    if (voto3%5==0){
        console.log("Cantidad de votos seleccion 3: ",voto3);
    }
})
//-----------------------------------------
let cantidad1 = 0;
let precio1 = 50000;
let cantidad2 = 0;
let precio2 = 35000;
let cantidad3 = 0;
let precio3 = 40000;

document.getElementById('Precio_Prod1').textContent = precio1.toLocaleString('es-CO');
document.getElementById('Precio_Prod2').textContent = precio2.toLocaleString('es-CO');
document.getElementById('Precio_Prod3').textContent = precio3.toLocaleString('es-CO');

function calcularTotal() {
    const subtotal1 = cantidad1 * precio1;
    const subtotal2 = cantidad2 * precio2;
    const subtotal3 = cantidad3 * precio3;    
    const totalGeneral = subtotal1 + subtotal2 + subtotal3;    
    document.getElementById('total').textContent = totalGeneral.toLocaleString('es-CO');
}

function vaciar(){
    cantidad1 = 0;
    cantidad2 = 0;
    cantidad3 = 0;    
    document.getElementById('Cantidad_Prod1').textContent = cantidad1;
    document.getElementById('Cantidad_Prod2').textContent = cantidad2;
    document.getElementById('Cantidad_Prod3').textContent = cantidad3;    
    calcularTotal();
}

function agregar1(){
    cantidad1 += 1;
    document.getElementById('Cantidad_Prod1').textContent = cantidad1;
    calcularTotal();
}
function agregar2(){
    cantidad2 += 1;
    document.getElementById('Cantidad_Prod2').textContent = cantidad2;
    calcularTotal();
}
function agregar3(){
    cantidad3 += 1;
    document.getElementById('Cantidad_Prod3').textContent = cantidad3;
    calcularTotal();
}
function eliminar1(){
    if (cantidad1 > 0) {
        cantidad1 -= 1;
        document.getElementById('Cantidad_Prod1').textContent = cantidad1;
        calcularTotal();
    }
}
function eliminar2(){
    if (cantidad2 > 0) {
        cantidad2 -= 1;
        document.getElementById('Cantidad_Prod2').textContent = cantidad2;
        calcularTotal();
    }
}
function eliminar3(){
    if (cantidad3 > 0) {
        cantidad3 -= 1;
        document.getElementById('Cantidad_Prod3').textContent = cantidad3;
        calcularTotal();
    }
}
vaciar();