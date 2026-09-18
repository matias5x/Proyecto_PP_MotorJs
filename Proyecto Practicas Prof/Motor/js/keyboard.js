var Keyboard = {
    arrayKeys: new Array(),
    arrayKeyCodes: new Array(),
    keys: {
        shift:false,
        ctrl:false, 
        space:false, 
        arrowLeft:false, 
        arrowRight:false,
        arrowUp:false,
        arrowDown:false
    },
    key: "",
    keyCode: 0,

    load: function(){
        document.onkeydown = Keyboard.keyDown;
        document.onkeyup = Keyboard.keyUp;
    },

    keyDown: function (e) {
        Keyboard.key = e.key;
        Keyboard.keyCode = e.keyCode;
        if (Keyboard.arrayKeys.indexOf(e.key) === -1) {
            Keyboard.arrayKeys.push(e.key);
            Keyboard.arrayKeyCodes.push(e.keyCode);
        }
        switch(e.keyCode) {
            case 37: Keyboard.keys["arrowLeft"]=true; break;
            case 39: Keyboard.keys["arrowRight"]=true; break;
            case 38: Keyboard.keys["arrowUp"]=true; break; 
            case 40: Keyboard.keys["arrowDown"]=true; break; 
            case 17: Keyboard.keys["ctrl"]=true; break; 
            case 16: Keyboard.keys["shift"]=true; break; 
            case 32: Keyboard.keys["space"]=true; break;  
        };
    },

    keyUp: function (e) {
        Keyboard.key="";
        Keyboard.keyCode = -1;

        var i = Keyboard.arrayKeys.indexOf(e.key);
        if (i !== -1) {
            Keyboard.arrayKeys.splice(i, 1);
            Keyboard.arrayKeyCodes.splice(i, 1);
        }

        switch(e.keyCode){
            case 37: Keyboard.keys["arrowLeft"]=false; break;
            case 39: Keyboard.keys["arrowRight"]=false; break;
            case 38: Keyboard.keys["arrowUp"]=false; break; 
            case 40: Keyboard.keys["arrowDown"]=false; break; 
            case 17: Keyboard.keys["ctrl"]=false; break; 
            case 16: Keyboard.keys["shift"]=false; break; 
            case 32: Keyboard.keys["space"]=false; break;
        };  
    }

};