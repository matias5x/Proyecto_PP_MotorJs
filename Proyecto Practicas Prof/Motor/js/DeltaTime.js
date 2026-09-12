class Time {
    constructor() {
        this.time = Date.now();
        this.mDeltaTime = 0;
        this.updateTime();
    }
    updateTime(){
        this.mDeltaTime = (Date.now() - this.time) / 1000;
        this.time = Date.now();
        requestAnimationFrame(this.updateTime.bind(this));
        console.log("Current time: " + this.time);
    }
    deltaTime() {
        return this.mDeltaTime;
    }

};

var Timer = {
    now:"",
    day: 0,
    month: 0,
    year: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    miliseconds: 0,
}


function InitTimer() {
    while (true) {
        Timer.now = new Date();
        Timer.day = Timer.now.getDate();
        Timer.month = Timer.now.getMonth();
        Timer.year = Timer.now.getFullYear();
        Timer.hours = Timer.now.getHours();
        Timer.minutes = Timer.now.getMinutes();
        Timer.seconds = Timer.now.getSeconds();
        Timer.miliseconds = Timer.now.getMilliseconds();
        Concurrent.Thread.sleep(0);
    }
};

const tipoCrono = {
    Forward: 0,
    Backward: 1,
}

class Cronometro {
    constructor(id, tipo, duracionSegundos) {
        this.id = id;
        this.tipoCrono = (tipo === undefined) ? tipoCrono.Forward : tipo;
        this.time = duracionSegundos || 0; // duracion en segundos, solo se usa en Backward
        this.precision = 30; // velocidad de actualizacion en milisegundos
        this.view = "00:00:00:00";
        this.startTime = null; // momento en que arranco el cronometro
        this.elcrono = null;   // id del setInterval, para poder detenerlo
    };

    // convierte una cantidad de milisegundos a texto "HH:MM:SS:CS"
    formatear(ms) {
        ms = Math.max(ms, 0);
        const horas = Math.floor(ms / 3600000);
        const minutos = Math.floor(ms / 60000) % 60;
        const segundos = Math.floor(ms / 1000) % 60;
        const centesimas = Math.floor(ms / 10) % 100;
        function pad(n) {
            return String(n).padStart(2, "0");
        }
        return `${pad(horas)}:${pad(minutos)}:${pad(segundos)}:${pad(centesimas)}`;
    };

    run() {
        this.startTime = Date.now();
        this.elcrono = setInterval(this.tick.bind(this), this.precision);
    };

    tick() {
        const transcurrido = Date.now() - this.startTime;

        if (this.tipoCrono === tipoCrono.Forward) {
            this.view = this.formatear(transcurrido);
            return;
        }

        // Backward
        const restante = this.time * 1000 - transcurrido;
        if (restante <= 0) {
            this.view = this.formatear(0);
            this.stop();
            return;
        }
        this.view = this.formatear(restante);
    };

    stop() {
        clearInterval(this.elcrono);
    };
}
