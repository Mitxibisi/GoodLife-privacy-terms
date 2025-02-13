document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente.");
});

let clicks = 0;
let barra = document.getElementById("progressbar");

document.getElementById("boton2").addEventListener("click", function() {
    clicks++;
    document.getElementById("contador").textContent = "Clicks: " + clicks;
    if (barra.value < barra.max){
        barra.value += 1;
        let confirmacion = confirm("¿Quieres seguir el enlace proporcionado?")
        if (confirmacion){
        window.open("https://discord.com/oauth2/authorize?client_id=1252701395967021076", "_blank");
        }
    } else {alert("Maximo de clicks");}
});
