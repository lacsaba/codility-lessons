function tapeEquilibrium(A) {
  let headSum = A.shift();
  let tailSum = A.reduce((accumulator, currentValue) => accumulator + currentValue);
  let minDifference = Math.abs(headSum - tailSum);
  let temp = minDifference;

  if (A.length === 1) {
    return minDifference;
  }

  for (let i = 0; i < A.length - 1; i++) {
    headSum += A[i];
    tailSum -= A[i];
    temp = Math.abs(headSum - tailSum);
    if (temp < minDifference) {
      minDifference = temp;
    }
  }

  return minDifference;
}

function frogJmp(X, Y, D) {
  return X === Y ? 0 : Math.ceil((Y - X) / D);
}

function permMissingElem(A) {
  if (!A.length) return 1;
  if (A.length === 1) return A[0] === 1 ? 2 : 1;

  let sumShouldBe = (A.length + 1) * (A.length + 2) / 2;
  let sum = A.reduce((accumulator, currentValue) => accumulator + currentValue);

  return sumShouldBe - sum;
}
