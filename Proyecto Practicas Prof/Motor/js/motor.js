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
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.font = "8px Arial";
        ctx.fillText(Timer.now, 10, 10);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.font = "8px Arial";
        ctx.fillText(myReloj.view, 10, 40);


        ctx.stroke();
        
    },
}
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let margen = 10;


function ajustarVentana() {
    let canvasTop = (margen/2);
    let canvasLeft = (margen/2);
    let ancho = window.innerWidth - margen;
    let alto = window.innerHeight - margen;
    canvas.style.top = canvasTop + "px";
    canvas.style.left = canvasLeft + "px";
    canvas.style.width = ancho + "px";
    canvas.style.height = alto + "px";
};

function borrarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

window.addEventListener("load", function(e) {
    ajustarVentana();
    bucle.iterar();
});
window.addEventListener("resize", function(e) {
    ajustarVentana();
});
Concurrent.Thread.create(InitTimer);

var myReloj = new Cronometro("crono1", tipoCrono.Forward);
myReloj.run();
