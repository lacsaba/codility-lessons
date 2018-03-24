function prefixSums(A) {
  const n = A.length;
  let P = Array(n + 1).fill(0);

  for (let k = 1; k < n; k++) {
    P[k] = P[k - 1] + A[k - 1];
  }
  return P;
}

function countTotal(P, x, y) {
  return P[y + 1] - P[x];
}

function mushrooms(A, k, m) {
  const n = A.length;
  let result = 0;
  let pref = prefixSums(A);
  let leftPos, rightPos;

  for (let i = 0; i < Math.min(m, k) + 1; i++) {
    leftPos = k - i;
    rightPos = Math.min(n - 1, Math.max(k, k + m - 2 * i));
    result = Math.max(result, countTotal(pref, leftPos, rightPos));
  }
  for (let i = 0; i < Math.min(m + 1, n - k); i++) {
    rightPos = k + i;
    leftPos = Math.max(0, Math.min(k, k - (m - 2 * i)));
    result = Math.max(result, countTotal(pref, leftPos, rightPos));
  }

  return result;
}

function countDiv(A, B, K) {
  if (A === B && A % K !== 0) return 0;
  if (A === B && A % K === 0) return 1;

  return parseInt(B/K) - parseInt(A > 0 ? (A -1)/K : -1);
}
