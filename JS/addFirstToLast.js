function addFirstToLast(inputArray) {
  let firstAndLast = "";
  if (inputArray.length > 0) {
    firstAndLast = inputArray[0] + inputArray[inputArray.length - 1];
  } else firstAndLast = "";
  return firstAndLast;
}
