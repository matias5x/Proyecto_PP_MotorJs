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
        //ctx.beginPath();

        //ctx.font = "8px Verdana";
        //ctx.fillStyle = "yellow";
        //ctx.fillText(Timer.now, 10, 10);

        //ctx.stroke();
//prebas de inputs:
        ctx.beginPath();
        ctx.font = "7px Verdana";
        ctx.fillStyle = "yellow";
        ctx.fillText("Mouse X: " + Mouse.x, 10, 20);
        ctx.fillText("Mouse Y: " + Mouse.y, 10, 30);
        ctx.fillText("Mouse ScreenX: " + Mouse.screenX, 10, 40);
        ctx.fillText("Mouse ScreenY: " + Mouse.screenY, 10, 50);
        ctx.fillText("Mouse MovementX: " + Mouse.movementX, 10, 60);
        ctx.fillText("Mouse MovementY: " + Mouse.movementY, 10, 70);
        ctx.fillText("Mouse Button: " + Mouse.button, 10, 80);
        ctx.fillText("Mouse AltKey: " + Mouse.altKey, 10, 90);
        ctx.fillText("Mouse CtrlKey: " + Mouse.ctrlKey, 10, 100);
        ctx.fillText("Mouse ShiftKey: " + Mouse.shiftKey, 10, 110);
        ctx.fillText("Mouse OnDown: " + Mouse.onDown, 10, 120);
        ctx.fillText("Mouse OnUp: " + Mouse.onUp, 10, 130);
        ctx.fillText("keyboard.key" + Keyboard.key, 100, 20)
        ctx.fillText("keyboard.keyCode" + Keyboard.keyCode, 100, 30)
        ctx.fillText("array de keys" + Keyboard.arrayKeys, 100, 40)
        ctx.fillText("flecha der" + Keyboard.keys["arrowLeft"], 100, 50)
        ctx.fillText("flecha izq" + Keyboard.keys["arrowRight"], 100, 60)
        ctx.fillText("flecha arriba" + Keyboard.keys["arrowUp"], 100, 70)
        ctx.fillText("flecha abajo" + Keyboard.keys["arrowDown"], 100, 80)
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
Concurrent.Thread.create(InitTimer);
Keyboard.load();

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

