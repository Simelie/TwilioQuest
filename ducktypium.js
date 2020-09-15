class Ducktypium {
    constructor(crystalColor) {
        this.errorColor(crystalColor);
        this.color = crystalColor;
        this.calibrationSequence = [];
    }

    refract(crystalColor) {
        this.errorColor(crystalColor);
        if (crystalColor == this.color)
            return `${this.color}`;

        if ((crystalColor == "blue" || this.color == "blue") && (crystalColor == "red" || this.color == "red"))
            return "purple";
        if ((crystalColor == "red" || this.color == "red") && (crystalColor == "yellow" || this.color == "yellow"))
            return "orange";
        if ((crystalColor == "blue" || this.color == "blue") && (crystalColor == "yellow" || this.color == "yellow"))
            return "green";

    }

    calibrate(inputArray) {
        let sortArray = inputArray.sort();
        this.calibrationSequence = sortArray.map((item => item * 3));
    }


    errorColor(crystalColor) {
        console.log("In function errorColor. Color is : " + crystalColor);
        if (crystalColor != "red" && crystalColor != "blue" && crystalColor != "yellow") {
            throw "Color must be red, yellow, or blue!";
        }
    }
}


const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]