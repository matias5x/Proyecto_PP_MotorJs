class Point {
    constructor(x, y) {
        if(x===undefined) { this.x = 0; } else { this.x = x; };
        if(y===undefined) { this.y = 0; } else { this.y = y; };
    }
}

class Size {
    constructor(width, height) {
        if(width===undefined) { this.width = 0; } else { this.width = width; };
        if(height===undefined) { this.height = 0; } else { this.height = height; };
    }
};

class Rectangle {
    constructor(x, y, width, height) {
        if(x===undefined) { this.x = 0; } else { this.x = x; };
        if(y===undefined) { this.y = 0; } else { this.y = y; };
        if(width===undefined) { this.width = 0; } else { this.width = width; };
        if(height===undefined) { this.height = 0; } else { this.height = height; };
    }
};

const PivotType = {
    TopLeft: 0,
    TopCenter: 1,
    TopRight: 2,
    MiddleLeft: 3,
    MiddleCenter: 4,
    MiddleRight: 5,
    BottomLeft: 6,
    BottomCenter: 7,
    BottomRight: 8,
    Custom: 9,
};

class Pivot {
    constructor(piv, x, y) {
        if(piv===undefined) { 
            this.point = PivotType.MiddleCenter; 
        } else {
             this.point = piv;
        };
        
        this.piv = piv;
        this.x = 0;
        this.y = 0;

        if(piv === PivotType.Custom) {
            if(x===undefined) { this.x = 0; } else { this.x = x; }
            if(y===undefined) { this.y = 0; } else { this.y = y; }
        };
    }
}