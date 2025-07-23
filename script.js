let voto1 = 0;
let voto2 = 0;
let voto3 = 0;
document.getElementById("voto1").addEventListener("click", function(){
    voto1+=1;
    document.getElementById('opcion1').textContent=voto1;
})
document.getElementById("voto2").addEventListener("click", function(){
    voto2+=1;
    document.getElementById('opcion2').textContent=voto2;
})
document.getElementById("voto3").addEventListener("click", function(){
    voto3+=1;
    document.getElementById('opcion3').textContent=voto3;
})