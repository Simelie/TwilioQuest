function calculatePower(inputArray) {
    let result = 0;
    const multipleArray = inputArray.map((item => item * 2));
    multipleArray.forEach(element => {
        result += element;
    });
    return result;
}