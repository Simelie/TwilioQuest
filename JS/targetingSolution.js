class TargetingSolution {
    constructor(target) {
        this.x = target.x;
        this.y = target.y;
        this.z = target.z;
    }

    target() {
        return ("(" + `${this.x}` + ", " + `${this.y}` + ", " + `${this.z}` + ")");
    }
}



const sln = new TargetingSolution({
    x: 45,
    y: 12,
    z: -1
});

console.log(sln.target());