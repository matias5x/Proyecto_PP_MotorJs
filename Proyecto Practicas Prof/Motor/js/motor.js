let bucle = {
    idEjecucion: null,
    ultimoRegistro: 0,
    aps: 0,
    fps: 0,
    iterar: function(registroTemporal) {
        bucle.idEjecucion = window.requestAnimationFrame(bucle.iterar);
        bucle.update(registroTemporal);
        bucle.play();
        if (registroTemporal - bucle.ultimoRegistro >= 1000) {
            console.log(bucle.fps);
            bucle.ultimoRegistro = registroTemporal;
            bucle.aps = 0;
            bucle.fps = 0;
        }
    },
    update: function() {
        bucle.aps++;
    },

    play: function() {
        bucle.fps++;
        borrarCanvas();
    },
}
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let margen = 10;
let canvasTop = (margen/2);
let canvasLeft = (margen/2);
let ancho = window.innerWidth - margen;
let alto = window.innerHeight - margen;

function ajustarVentana() {
    canvas.style.top = canvasTop + "px";
    canvas.style.left = canvasLeft + "px";
    canvas.style.width = ancho + "px";
    canvas.style.height = alto + "px";
}
function borrarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
window.addEventListener("load", function(e) {
    ajustarVentana();
    bucle.iterar();
});
window.addEventListener("resize", function(e) {
    ajustarVentana();
});