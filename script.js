const prompt = require("prompt-sync")();
let voto1,voto2,voto3 = 0;
function voto1(){
    voto1 += 1;
    document.getElementById("opcion1").textContent=voto1;
}
// document.getElementsById("voto1").addEventListener("click", function(){
//     voto1+=1;
//     document.getElementById('opcion1').textContent=voto1;
// })
// document.getElementsById("voto2").addEventListener("click", function(){
//     voto2+=1;
//     document.getElementById('opcion2').textContent=voto2;
// })
// document.getElementsById("voto3").addEventListener("click", function(){
//     voto1+=1;
//     document.getElementById('opcion3').textContent=voto3;
// })