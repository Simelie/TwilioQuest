function scan(inputArray) {
  let i = 0;
  for (let j = 0; j < inputArray.length; j++)
    if (inputArray[j] == "contraband") i++;
  return i;
}

const twoDimensionalArray = [
    ['dogs', 'cats', 'zebras'],
    ['pizza', 'tacos', 'kale'],
    ['baseball', 'football', 'hockey']
  ];