
class Time {
    constructor() {
        this.time = Date.now();
        this.mDeltaTime = 0;
        this.updateTime();
    }
    updateTime(){
        this.mDeltaTime = (Date.now() - this.time) / 1000;
        this.time = Date.now();
        this.deltaTime();
        requestAnimationFrame(this.updateTime.bind(this));
        console.log("Current time: " + this.time);
    }
    deltaTime() {
        console.log("Delta time: " + this.mDeltaTime);
        return this.mDeltaTime;
    }

};
let tiempo = new Time();