function scan(inputArray) {
  let suspiciousArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] == "contraband") suspiciousArray.push(i);
  }
  return suspiciousArray;
}
