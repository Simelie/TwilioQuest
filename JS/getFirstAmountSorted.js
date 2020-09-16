function getFirstAmountSorted(inputArray, inputNumber) {
  inputArray.sort();
  console.table(inputArray);
  return inputArray;
}

getFirstAmountSorted(["cat", "apple", "bat"], 2);
