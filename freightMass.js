function calculateMass(inputArray) {
  let mass = 0;
  mass = inputArray.reduce((sum, current) => sum + current.length, 0);
  return mass;
}
