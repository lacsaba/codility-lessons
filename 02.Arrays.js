function cyclicRotation(A, K) {
  if (!A.length) {
    return A;
  }
  for (let i = 1; i <= K; i++) {
    A.unshift(A.pop());
  }
  return A;
}

function oddOccurrencesInArray(A) {
  let map = {};

  for (let i = 0; i < A.length; i++) {
    if (!map.hasOwnProperty(A[i])) {
      map[A[i]] = 1;
    } else {
      map[A[i]] +=1;
    }
  }

  for (let key in map) {
    if (map[key] === 1) {
      return parseInt(key);
    }
  }

  return 0;
}
