/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
  const pairs = nums1.map((v, i) => [nums2[i], v]);
  pairs.sort((a, b) => b[0] - a[0]); 

  const heap = [];
  let sum = 0;
  let ans = 0;

  const push = (x) => {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      let p = (i - 1) >> 1;
      if (heap[p] <= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };

  const pop = () => {
    const min = heap[0];
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let i = 0;
      while (true) {
        let l = i * 2 + 1;
        let r = l + 1;
        let s = i;
        if (l < heap.length && heap[l] < heap[s]) s = l;
        if (r < heap.length && heap[r] < heap[s]) s = r;
        if (s === i) break;
        [heap[i], heap[s]] = [heap[s], heap[i]];
        i = s;
      }
    }
    return min;
  };

  for (const [minVal, val] of pairs) {
    push(val);
    sum += val;

    if (heap.length > k) {
      sum -= pop();
    }

    if (heap.length === k) {
      ans = Math.max(ans, sum * minVal);
    }
  }

  return ans;
};
