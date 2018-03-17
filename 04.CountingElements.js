function counting(A, m) {
  let n = A.length;
  let count = Array(m + 1).fill(0);

  for (let i = 0; i < n; i++) {
    count[A[i]] += 1;
  }
  return count;
}

// O(n * n)
// It differs from the solution in the pdf
function exercise_4_1_slow(A, B, m) {
  let sumA = A.reduce((accumulator, currentValue) => accumulator + currentValue);
  let sumB = B.reduce((accumulator, currentValue) => accumulator + currentValue);

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (sumA - A[i] + B[j] === sumB + A[i] - B[j]) {
        console.log(A[i], B[j]);
        return true;
      }
    }
  }
  return false;
}

// O(n + m)
function exercise_4_1_fast(A, B, m) {
  let n = A.length;
  let sumA = A.reduce((accumulator, currentValue) => accumulator + currentValue);
  let sumB = B.reduce((accumulator, currentValue) => accumulator + currentValue);
  let d = sumB - sumA;

  if (d % 2 === 1) {
    return false;
  }

  d /= 2;
  let count = counting(A, m);
  for (let i = 0; i < n; i++) {
    if (0 <= B[i] - d && B[i] - d <= m && count[B[i] - d] > 0) {
      console.log(B[i],d);
      return true;
    }
  }
  return false;
}
console.log(exercise_4_1_fast([0, 2, 3], [1, 2, 6], 6));
