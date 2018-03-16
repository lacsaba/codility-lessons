function binaryGap(N) {
  let binary = N.toString(2);
  let longestGap = 0;
  let temp = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '0') {
      temp++;
    } else {
      if (temp > longestGap) {
        longestGap = temp;
      }
      temp = 0;
    }
  }
  return longestGap;
}
