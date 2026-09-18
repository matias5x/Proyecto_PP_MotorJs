
let Mouse = {
    x: 0,
    y: 0,
    screenX: 0,
    screenY: 0,
    movementX: 0,
    movementY: 0,
    onDown: false,
    onUp: false,

    button: -1,

    altKey: false,
    ctrlKey: false,
    shiftKey: false,

    oncontextmenu: false,
};

canvas.onmousedown = function(e) {
    
    Mouse.onUp = false;
    Mouse.onDown = true;
    
    Mouse.button = e.button;
    Mouse.altKey = e.altKey;
    Mouse.ctrlKey = e.ctrlKey;
    Mouse.shiftKey = e.shiftKey;
}

canvas.onmouseup = function(e) {

    Mouse.onDown = false;
    Mouse.onUp = true;
    
    Mouse.button = e.button;
    Mouse.altKey = e.altKey;
    Mouse.ctrlKey = e.ctrlKey;
    Mouse.shiftKey = e.shiftKey;

}

canvas.onmousemove = function(e) {
    
    Mouse.x = e.offsetX;
    Mouse.y = e.offsetY;
    Mouse.screenX = e.clientX;
    Mouse.screenY = e.clientY;
    Mouse.movementX = e.movementX;
    Mouse.movementY = e.movementY;

}

canvas.oncontextmenu = function() {
    return Mouse.oncontextmenu;
}