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


function frogRiverOne(X, A) {
  let count = [];
  let leaves = 0;
  for (let i = 0; i < A.length; i++) {
    if (!count[A[i]]) {
      count[A[i]] = 1;
      leaves++;
      if (leaves === X) {
        return i;
      }
    }
  }

  return -1;
}

function missingInteger(A) {
  let count = Array(A.length + 1).fill(0);
  count[0] = 1;
  for (let i = 0; i < A.length; i++) {
    if (!count[A[i]]) {
      count[A[i]] = 1;
    }
  }

  return count.indexOf(0) > -1 ? count.indexOf(0) : A.length + 1;
}

function permCheck(A) {
  let count = Array(A.length + 1).fill(0);
  count[0] = 1;

  for (let i = 0; i < A.length; i++) {
    if (!count[A[i]]) {
      count[A[i]] = 1;
    }
  }
  return count.indexOf(0) > -1 ? 0 : 1;
}

function maxCounters(N, A) {
  if (A.length === 1) return A;

  let count = Array(N);
  const max = N + 1;
  let biggestCounter = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === max) {
      count.fill(biggestCounter);
    } else if (!count[A[i] - 1]) {
      count[A[i] - 1] = 1;
    } else {
      count[A[i] - 1] += 1;
    }
    if (biggestCounter < count[A[i] - 1]) {
      biggestCounter = count[A[i] - 1];
    }
  }

  return count;
}
